import { Check } from 'lucide-react'
import { cn } from '../../utils/cn'

export type ProgressStepStatus = 'complete' | 'current' | 'pending'

export type ProgressStep = {
  label: string
  status?: ProgressStepStatus
}

type ProgressStepsProps = {
  steps?: ProgressStep[]
  currentStep?: number
  className?: string
}

const defaultSteps = [
  'Identity',
  'Form',
  'Documents',
  'Appointment',
  'Payment',
  'Submit',
]

export function ProgressSteps({
  steps,
  currentStep = 0,
  className,
}: ProgressStepsProps) {
  const resolvedSteps =
    steps ??
    defaultSteps.map((label, index) => ({
      label,
      status:
        index < currentStep
          ? 'complete'
          : index === currentStep
            ? 'current'
            : 'pending',
    }))

  return (
    <ol
      className={cn('flex flex-wrap items-center gap-y-3', className)}
      aria-label="Application progress"
    >
      {resolvedSteps.map((step, index) => {
        const status = step.status ?? 'pending'
        const isComplete = status === 'complete'
        const isCurrent = status === 'current'

        return (
          <li
            key={step.label}
            className={cn(
              'flex items-center text-sm text-[#334155]',
              index < resolvedSteps.length - 1 &&
                'after:mx-4 after:block after:h-px after:w-12 after:bg-gray-300 md:after:w-20',
            )}
          >
            <span
              className={cn(
                'mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold',
                (isCurrent || isComplete) && 'border-[#1a4d8f] bg-[#1a4d8f] text-white',
                !isCurrent && !isComplete && 'border-gray-300 bg-white text-gray-500',
              )}
            >
              {isComplete ? <Check className="h-4 w-4" aria-hidden="true" /> : isCurrent ? '•' : ''}
            </span>
            <span>{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}
