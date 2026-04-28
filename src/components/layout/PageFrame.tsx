import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type PageFrameProps = {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  children: ReactNode
}

export function PageFrame({
  eyebrow,
  title,
  description,
  actions,
  children,
}: PageFrameProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-4 border-b border-gov-border pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase text-gov-blue-800">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-gov-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gov-muted md:text-base">
            {description}
          </p>
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
      {children}
    </motion.section>
  )
}
