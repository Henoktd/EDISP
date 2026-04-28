import { cn } from '../../utils/cn'

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'primary'
  | 'danger'

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'md'

const baseClasses =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:border-[#205493] focus-visible:ring-[3px] focus-visible:ring-[#205493]/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const variantClasses: Record<ButtonVariant, string> = {
  default: 'border border-[#205493] bg-[#205493] text-white hover:bg-[#1a477f]',
  primary: 'border border-[#205493] bg-[#205493] text-white hover:bg-[#1a477f]',
  destructive: 'border border-red-600 bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20',
  danger: 'border border-red-600 bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20',
  outline:
    'border border-gray-200 bg-white text-[#020817] hover:bg-gray-50 hover:text-[#020817]',
  secondary:
    'border border-gray-200 bg-gray-100 text-[#020817] hover:bg-gray-200',
  ghost: 'border border-transparent bg-transparent text-[#020817] hover:bg-gray-100',
  link: 'border border-transparent bg-transparent text-[#205493] underline-offset-4 hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  md: 'h-9 px-4 py-2 has-[>svg]:px-3',
  sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
  lg: 'h-10 px-6 has-[>svg]:px-4',
  icon: 'size-9 rounded-md',
}

export function buttonVariants({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}
