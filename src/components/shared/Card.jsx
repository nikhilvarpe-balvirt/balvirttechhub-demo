import { motion } from 'framer-motion'

export default function Card({ icon: Icon, title, children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`card-elevated h-full p-6 ${className}`}
    >
      {Icon && (
        <div className="icon-chip-gradient mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md shadow-accent-500/25">
          <Icon size={24} />
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-brand-950 mb-2">{title}</h3>}
      <div className="text-slate-600">{children}</div>
    </motion.div>
  )
}
