import type { ComponentProps } from 'react'
import { cn } from '../../../utils/cn'

function Label({ className, ...props }: ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm font-medium leading-none text-[#020817]',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
