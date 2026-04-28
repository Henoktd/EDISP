import type { ComponentProps } from 'react'
import { cn } from '../../../utils/cn'

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-9 w-full min-w-0 rounded-md border border-gray-200 bg-[#f3f3f5] px-3 py-1 text-base outline-none transition-[color,box-shadow] placeholder:text-gray-500 focus-visible:border-[#205493] focus-visible:ring-[3px] focus-visible:ring-[#205493]/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
