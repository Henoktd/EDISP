import { cn } from '../../utils/cn'

export type StatusBadgeStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Approved'
  | 'Rejected'
  | 'Correction Required'
  | 'Escalated'
  | 'Paid'
  | 'Unpaid'
  | 'Fayda Verified'
  | 'Verification Failed'

type StatusBadgeTone = 'blue' | 'green' | 'gold' | 'red' | 'neutral'

type StatusBadgeProps = {
  children?: string
  status?: StatusBadgeStatus
  tone?: StatusBadgeTone
  className?: string
}

const toneClasses: Record<StatusBadgeTone, string> = {
  blue: 'border-gov-blue-100 bg-gov-blue-50 text-gov-blue-800',
  green: 'border-gov-green-100 bg-gov-green-50 text-gov-green-700',
  gold: 'border-gov-gold-100 bg-gov-gold-100 text-[#73520a]',
  red: 'border-gov-red-50 bg-gov-red-50 text-gov-red-600',
  neutral: 'border-gov-border bg-white text-gov-muted',
}

const statusTone: Record<StatusBadgeStatus, StatusBadgeTone> = {
  Draft: 'neutral',
  Submitted: 'blue',
  'Under Review': 'gold',
  Approved: 'green',
  Rejected: 'red',
  'Correction Required': 'gold',
  Escalated: 'red',
  Paid: 'green',
  Unpaid: 'gold',
  'Fayda Verified': 'green',
  'Verification Failed': 'red',
}

export function StatusBadge({
  children,
  status,
  tone = 'neutral',
  className,
}: StatusBadgeProps) {
  const label = status ?? children
  const badgeTone = status ? statusTone[status] : tone

  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-normal',
        toneClasses[badgeTone],
        className,
      )}
    >
      {label}
    </span>
  )
}
