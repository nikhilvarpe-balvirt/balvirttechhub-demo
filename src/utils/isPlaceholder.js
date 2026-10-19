// Business content that hasn't been filled in yet is written as "[bracketed text]"
// across src/data/. Use this to skip those fields when building structured data,
// so we never emit literal placeholder text into machine-readable schema.
export function isPlaceholder(value) {
  return typeof value === 'string' && value.trim().startsWith('[')
}
