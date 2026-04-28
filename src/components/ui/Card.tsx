import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type CardProps = {
  children: ReactNode
  title?: string
  description?: string
  actions?: ReactNode
  className?: string
  bodyClassName?: string
}

export function Card({
  children,
  title,
  description,
  actions,
  className,
  bodyClassName,
}: CardProps) {
  const hasHeader = Boolean(title || description || actions)

  return (
    <section
      className={cn(
        'rounded-lg border border-gov-border bg-white',
        className,
      )}
    >
      {hasHeader ? (
        <div className="flex flex-col gap-3 border-b border-gov-border px-6 py-4 md:flex-row md:items-start md:justify-between">
          <div>
            {title ? (
              <h2 className="text-base font-medium text-gray-900">{title}</h2>
            ) : null}
            {description ? (
              <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      ) : null}
      <div className={cn('p-6', bodyClassName)}>{children}</div>
    </section>
  )
}
