import { motion } from 'framer-motion'

export default function FormSuccessState({ title = 'Request Received!', message = "Thanks for reaching out — our team will contact you shortly." }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center px-4 py-10 text-center"
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: [0.6, 1.7], opacity: [0.5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-accent-400/40"
        />
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
          className="icon-chip-gradient relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg shadow-accent-500/30"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
            <motion.path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            />
          </svg>
        </motion.span>
      </div>
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-6 font-heading text-xl font-bold text-brand-950"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-2 max-w-xs text-sm text-slate-600"
      >
        {message}
      </motion.p>
    </motion.div>
  )
}
