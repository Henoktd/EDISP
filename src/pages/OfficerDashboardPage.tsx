import { useState } from 'react'
import { AlertTriangle, CheckCircle2, FileWarning, ShieldAlert } from 'lucide-react'
import { ApplicationTable } from '../components/dashboard/ApplicationTable'
import { DocumentChecklist } from '../components/dashboard/DocumentChecklist'
import { Timeline } from '../components/dashboard/Timeline'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant, application } from '../data/mockData'
import type { StatusBadgeStatus } from '../components/ui/StatusBadge'

const officerActions: Array<{
  label: string
  status: StatusBadgeStatus
  icon: typeof CheckCircle2
  className: string
}> = [
  {
    label: 'Approve',
    status: 'Approved',
    icon: CheckCircle2,
    className: 'border-gov-green-700 bg-gov-green-700 text-white hover:bg-gov-green-900',
  },
  {
    label: 'Reject',
    status: 'Rejected',
    icon: AlertTriangle,
    className: 'border-gov-red-600 bg-gov-red-600 text-white hover:bg-[#a9342b]',
  },
  {
    label: 'Request Correction',
    status: 'Correction Required',
    icon: FileWarning,
    className: 'border-gov-gold-100 bg-gov-gold-100 text-[#73520a] hover:bg-[#ffe8a4]',
  },
  {
    label: 'Escalate',
    status: 'Escalated',
    icon: ShieldAlert,
    className: 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
  },
]

export function OfficerDashboardPage() {
  const [status, setStatus] = useState<StatusBadgeStatus>('Under Review')

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1a4d8f]">
          Officer case review
        </p>
        <h1 className="mt-3 text-3xl font-medium text-gray-900">
          {application.applicationId}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Assigned to {application.officer}. Officer actions update local React
          state only.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card
          title="Case summary"
          description={`${applicant.name} - ${application.service}`}
          actions={<StatusBadge status={status} />}
        >
          <ApplicationTable status={status} />

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {officerActions.map((action) => {
              const Icon = action.icon

              return (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => setStatus(action.status)}
                  className={`inline-flex h-10 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors ${action.className}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {action.label}
                </button>
              )
            })}
          </div>
        </Card>

        <div className="space-y-4">
          <Card title="Documents">
            <DocumentChecklist />
          </Card>
          <Card title="Review timeline">
            <Timeline />
          </Card>
        </div>
      </div>
    </div>
  )
}
