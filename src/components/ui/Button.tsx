import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-gov-blue-800 bg-gov-blue-800 text-white hover:bg-gov-blue-900 focus-visible:outline-gov-blue-700',
  secondary:
    'border-gov-blue-100 bg-gov-blue-50 text-gov-blue-800 hover:bg-gov-blue-100 focus-visible:outline-gov-blue-700',
  outline:
    'border-gov-border bg-white text-gov-ink hover:border-gov-blue-100 hover:bg-gov-blue-50 focus-visible:outline-gov-blue-700',
  danger:
    'border-gov-red-600 bg-gov-red-600 text-white hover:bg-[#a9342b] focus-visible:outline-gov-red-600',
  ghost:
    'border-transparent bg-transparent text-gov-blue-800 hover:bg-gov-blue-50 focus-visible:outline-gov-blue-700',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-3 py-2 text-xs',
  md: 'min-h-10 px-4 py-2.5 text-sm',
  lg: 'min-h-12 px-5 py-3 text-sm',
}

function buttonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...props}
    />
  )
}
