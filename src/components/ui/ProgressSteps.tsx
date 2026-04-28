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
  currentStep = 1,
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
      className={cn(
        'grid gap-2 rounded-lg border border-gray-200 bg-white p-3 md:grid-cols-6',
        className,
      )}
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
              'flex items-center gap-2 rounded-md border px-3 py-2 text-sm',
              isCurrent && 'border-blue-100 bg-blue-50 text-[#153d73]',
              isComplete && 'border-green-100 bg-green-50 text-green-700',
              !isCurrent && !isComplete && 'border-gray-200 bg-gray-50 text-gray-500',
            )}
          >
            <span
              className={cn(
                'flex h-6 w-6 shrink-0 items-center justify-center rounded border text-xs font-medium',
                isCurrent && 'border-[#1a4d8f] bg-[#1a4d8f] text-white',
                isComplete && 'border-green-700 bg-green-700 text-white',
                !isCurrent && !isComplete && 'border-gray-200 bg-white text-gray-500',
              )}
            >
              {isComplete ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
            </span>
            <span className="font-medium">{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}
