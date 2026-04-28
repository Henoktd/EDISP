import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { PageFrame } from '../components/layout/PageFrame'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'

export function VerificationFailedPage() {
  return (
    <PageFrame
      eyebrow="Simulated verification result"
      title="Fayda verification could not be completed"
      description="This failure state is included for demonstration only. No live identity system has been contacted."
      actions={<StatusBadge status="Verification Failed" />}
    >
      <Card>
        <div className="flex h-14 w-14 items-center justify-center rounded border border-red-100 bg-red-50 text-red-600">
          <AlertTriangle className="h-7 w-7" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-gray-900">
          Identity match unavailable
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          The prototype can route users back to the Fayda login or to foreign
          applicant access for a controlled non-Fayda demonstration flow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/auth/fayda"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#1a4d8f] px-4 text-sm font-semibold text-white hover:bg-[#153d73]"
          >
            Retry Fayda Login
          </Link>
          <Link
            to="/auth/foreign"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Use Foreign Access
          </Link>
        </div>
      </Card>
    </PageFrame>
  )
}
