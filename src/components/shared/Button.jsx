import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-accent text-white shadow-lg shadow-accent-900/25 hover:shadow-xl hover:shadow-accent-900/30 hover:brightness-110',
  outline: 'border-2 border-white/40 text-white hover:bg-white hover:text-brand-900',
  ghost: 'border-2 border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white',
}

const MotionLink = motion.create(Link)
const MotionAnchor = motion.create('a')
const MotionButton = motion.create('button')

const motionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.15 },
}

export default function Button({ to, href, onClick, type = 'button', variant = 'primary', children, className = '' }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 ${variants[variant]} ${className}`

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionAnchor href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps}>
        {children}
      </MotionAnchor>
    )
  }

  return (
    <MotionButton type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </MotionButton>
  )
}
