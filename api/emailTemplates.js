// Plain-JS HTML email templates — inline styles only, since email clients
// (especially Outlook) don't support external stylesheets or modern CSS.

const BRAND = {
  gradient: 'linear-gradient(135deg,#8257F0,#22D3EE)',
  ink: '#17152a',
  muted: '#71717f',
  border: '#ece9f4',
  bg: '#f6f5fa',
  link: '#6d3edb',
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function wrapper(innerHtml) {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:${BRAND.bg}; padding: 24px 12px;">
    <div style="max-width: 560px; margin: 0 auto;">
      ${innerHtml}
      <p style="text-align:center; color:#a8a8c0; font-size:12px; margin-top:20px;">
        Balvirt Tech Hub &middot; Career-Focused Tech Training
      </p>
    </div>
  </div>`
}

function row(label, value) {
  return `
    <tr style="border-top:1px solid ${BRAND.border};">
      <td style="padding:10px 0; color:${BRAND.muted}; font-size:13px; width:110px; vertical-align:top;">${label}</td>
      <td style="padding:10px 0; color:${BRAND.ink}; font-size:14px; font-weight:600;">${value}</td>
    </tr>`
}

export function renderInternalEmail({ name, email, phone, course, message }) {
  const isEnrollment = Boolean(course?.trim())
  const subject = isEnrollment
    ? `New enrollment enquiry — ${course} — Balvirt Tech Hub`
    : `New enquiry from ${name} — Balvirt Tech Hub`

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone || 'N/A')
  const safeCourse = escapeHtml(course || '')
  const safeMessage = escapeHtml(message || '(none provided)').replace(/\n/g, '<br/>')

  const rows = [
    row('Name', safeName),
    row('Email', `<a href="mailto:${safeEmail}" style="color:${BRAND.link}; text-decoration:none;">${safeEmail}</a>`),
    row('Phone', safePhone),
  ]
  if (isEnrollment) rows.push(row('Course', safeCourse))

  const html = wrapper(`
    <div style="background:${BRAND.gradient}; border-radius:14px 14px 0 0; padding:24px 28px;">
      <p style="margin:0; color:#fff; font-size:12px; letter-spacing:1px; text-transform:uppercase; opacity:0.85;">Balvirt Tech Hub</p>
      <h1 style="margin:6px 0 0; color:#fff; font-size:20px;">${isEnrollment ? 'New Enrollment Enquiry' : 'New Contact Enquiry'}</h1>
    </div>
    <div style="background:#ffffff; border-radius:0 0 14px 14px; padding:24px 28px; border:1px solid ${BRAND.border}; border-top:none;">
      <table style="width:100%; border-collapse:collapse;">${rows.join('')}</table>
      <div style="margin-top:18px; padding-top:18px; border-top:1px solid ${BRAND.border};">
        <p style="margin:0 0 6px; color:${BRAND.muted}; font-size:13px;">Message</p>
        <p style="margin:0; color:${BRAND.ink}; font-size:14px; line-height:1.6;">${safeMessage}</p>
      </div>
    </div>
  `)

  const textLines = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || 'N/A'}`]
  if (isEnrollment) textLines.push(`Course of Interest: ${course}`)
  textLines.push('', 'Message:', message || '(none provided)')

  return { subject, html, text: textLines.join('\n') }
}

export function renderConfirmationEmail({ name, course }) {
  const isEnrollment = Boolean(course?.trim())
  const subject = 'We’ve received your request — Balvirt Tech Hub'
  const safeName = escapeHtml(name)
  const safeCourse = escapeHtml(course || '')

  const bodyText = isEnrollment
    ? `Your enrollment request for <strong>${safeCourse}</strong> has been received successfully.`
    : 'Your enquiry has been received successfully.'

  const html = wrapper(`
    <div style="background:${BRAND.gradient}; border-radius:14px 14px 0 0; padding:32px 28px; text-align:center;">
      <h1 style="margin:0; color:#fff; font-size:22px;">Thanks, ${safeName}! 🎉</h1>
    </div>
    <div style="background:#ffffff; border-radius:0 0 14px 14px; padding:28px; border:1px solid ${BRAND.border}; border-top:none; text-align:center;">
      <p style="margin:0 0 14px; color:${BRAND.ink}; font-size:15px; line-height:1.6;">${bodyText}</p>
      <p style="margin:0; color:${BRAND.muted}; font-size:14px; line-height:1.6;">
        Our team will get in touch with you shortly. If it's urgent, feel free to reach out on WhatsApp in the meantime.
      </p>
    </div>
  `)

  const text = `Thanks, ${name}!\n\n${isEnrollment ? `Your enrollment request for ${course} has been received successfully.` : 'Your enquiry has been received successfully.'}\n\nOur team will get in touch with you shortly.`

  return { subject, html, text }
}
