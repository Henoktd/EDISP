import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { application } from '../data/mockData'

export function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <Card>
        <div className="flex h-14 w-14 items-center justify-center rounded border border-gov-green-100 bg-gov-green-50 text-gov-green-700">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h1 className="mt-5 text-3xl font-medium text-gray-900">
          Application submitted
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Your simulated residence permit application has been submitted for
          officer review.
        </p>
        <dl className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <dt className="text-xs font-medium uppercase text-gray-500">
              Application ID
            </dt>
            <dd className="mt-2 font-medium text-gray-900">
              {application.applicationId}
            </dd>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <dt className="text-xs font-medium uppercase text-gray-500">
              Status
            </dt>
            <dd className="mt-2">
              <StatusBadge status="Under Review" />
            </dd>
          </div>
        </dl>
        <Link
          to="/applicant-dashboard"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#1a4d8f] px-4 text-sm font-medium text-white hover:bg-[#153d73]"
        >
          Open Applicant Dashboard
        </Link>
      </Card>
    </div>
  )
}
