import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import { cn } from '../../utils/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
  errorText?: string
}

export function Input({
  id,
  label,
  helperText,
  errorText,
  className,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`
  const hasMessage = Boolean(errorText || helperText)

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        aria-invalid={errorText ? true : undefined}
        aria-describedby={hasMessage ? messageId : undefined}
        className={cn(
          'h-9 w-full rounded-md border bg-[#f3f3f5] px-3 py-1 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-60 read-only:bg-[#f3f3f5]',
          errorText ? 'border-gov-red-600' : 'border-gov-border',
          className,
        )}
        {...props}
      />
      {hasMessage ? (
        <p
          id={messageId}
          className={cn(
            'text-xs leading-5',
            errorText ? 'text-gov-red-600' : 'text-gray-500',
          )}
        >
          {errorText ?? helperText}
        </p>
      ) : null}
    </div>
  )
}
