import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
} from 'react'
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from '../../../components/ui/buttonVariants'
import { cn } from '../../../utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const resolvedClassName = buttonVariants({ variant, size, className })

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

export { Button }
