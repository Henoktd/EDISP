import type { SelectHTMLAttributes } from 'react'
import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

export type SelectOption = {
  label: string
  value: string
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  helperText?: string
  errorText?: string
  options: SelectOption[]
  placeholder?: string
}

export function Select({
  id,
  label,
  helperText,
  errorText,
  options,
  placeholder,
  className,
  ...props
}: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId
  const messageId = `${selectId}-message`
  const hasMessage = Boolean(errorText || helperText)

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <select
          id={selectId}
          aria-invalid={errorText ? true : undefined}
          aria-describedby={hasMessage ? messageId : undefined}
          className={cn(
            'h-9 w-full appearance-none rounded-md border bg-[#f3f3f5] px-3 py-1 pr-10 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-60',
            errorText ? 'border-gov-red-600' : 'border-gov-border',
            className,
          )}
          {...props}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        />
      </div>
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
