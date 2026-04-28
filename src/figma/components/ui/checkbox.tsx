import { CheckIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../../utils/cn'

type CheckboxProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Checkbox({
  className,
  checked = false,
  onCheckedChange,
  ...props
}: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      data-slot="checkbox"
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        'flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-gray-300 bg-[#f3f3f5] text-white outline-none transition-shadow focus-visible:border-[#205493] focus-visible:ring-[3px] focus-visible:ring-[#205493]/20 data-[state=checked]:border-[#205493] data-[state=checked]:bg-[#205493]',
        className,
      )}
      {...props}
    >
      {checked ? <CheckIcon className="size-3.5" aria-hidden="true" /> : null}
    </button>
  )
}

export { Checkbox }
