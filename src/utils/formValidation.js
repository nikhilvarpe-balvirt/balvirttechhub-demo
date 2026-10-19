const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateName(name) {
  if (!name.trim()) return 'Please enter your name.'
  if (name.trim().length < 2) return 'Name looks too short.'
  return undefined
}

export function validateEmail(email) {
  if (!email.trim()) return 'Please enter your email.'
  if (!EMAIL_PATTERN.test(email.trim())) return 'Enter a valid email address.'
  return undefined
}

export function validatePhone(phone, { required = false } = {}) {
  if (!phone.trim()) return required ? 'Please enter your phone number.' : undefined
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) return 'Enter a valid phone number.'
  return undefined
}

export function validateMessage(message, { required = true, minLength = 10 } = {}) {
  if (!message.trim()) return required ? 'Please add a short message.' : undefined
  if (message.trim().length < minLength) return `Message should be at least ${minLength} characters.`
  return undefined
}

export function filterPhoneInput(value) {
  // Allow digits and common formatting characters only — no letters can ever land in a phone field.
  return value.replace(/[^\d+\-()\s]/g, '')
}
