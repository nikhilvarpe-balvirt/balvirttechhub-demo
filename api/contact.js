import sgMail from '@sendgrid/mail'
import { renderInternalEmail, renderConfirmationEmail } from './emailTemplates.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message, course } = req.body ?? {}

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'Name and email are required.' })
  }

  // A general enquiry (no course selected) needs a message; an enrollment
  // submission (course selected) is meaningful on its own without one.
  if (!course?.trim() && !message?.trim()) {
    return res.status(400).json({ error: 'Message is required.' })
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return res.status(400).json({ error: 'Enter a valid email address.' })
  }

  if (phone?.trim()) {
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 7 || digits.length > 15) {
      return res.status(400).json({ error: 'Enter a valid phone number.' })
    }
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const fromEmail = process.env.SENDGRID_FROM_EMAIL
  const fromName = process.env.SENDGRID_FROM_NAME || 'Balvirt Tech Hub'
  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !fromEmail || !toEmail) {
    console.error('Missing SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, or CONTACT_TO_EMAIL environment variable')
    return res.status(500).json({ error: 'Contact form is not configured yet.' })
  }

  sgMail.setApiKey(apiKey)

  const from = { email: fromEmail, name: fromName }
  const internal = renderInternalEmail({ name, email, phone, course, message })
  const confirmation = renderConfirmationEmail({ name, course })

  try {
    await sgMail.send([
      {
        to: toEmail,
        from,
        replyTo: email,
        subject: internal.subject,
        text: internal.text,
        html: internal.html,
      },
      {
        to: email,
        from,
        replyTo: toEmail,
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      },
    ])
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('SendGrid error:', err?.response?.body || err.message)
    return res.status(502).json({ error: 'Failed to send message. Please try again later.' })
  }
}
