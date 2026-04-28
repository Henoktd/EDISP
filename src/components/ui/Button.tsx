import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
} from 'react'
import { cn } from '../../utils/cn'
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from './buttonVariants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  fullWidth?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  fullWidth = false,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const resolvedClassName = buttonVariants({
    variant,
    size,
    className: cn(fullWidth && 'w-full', className),
  })

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>

    return cloneElement(child, {
      className: cn(resolvedClassName, child.props.className),
    })
  }

  return (
    <button
      type={type}
      data-slot="button"
      className={resolvedClassName}
      {...props}
    >
      {children}
    </button>
  )
}
