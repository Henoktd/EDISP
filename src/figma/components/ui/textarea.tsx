import type { ComponentProps } from 'react'
import { cn } from '../../../utils/cn'

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-16 w-full resize-none rounded-md border border-gray-200 bg-[#f3f3f5] px-3 py-2 text-base outline-none transition-[color,box-shadow] placeholder:text-gray-500 focus-visible:border-[#205493] focus-visible:ring-[3px] focus-visible:ring-[#205493]/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
