import { Sparkles } from 'lucide-react'

export default function Badge({ children, icon: Icon = Sparkles, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700 ${className}`}
    >
      <Icon size={14} />
      {children}
    </span>
  )
}
