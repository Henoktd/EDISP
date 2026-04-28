import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant, application } from '../data/mockData'

function Row({ label, value }: { label: string; value: string | ReactNode }) {
  return (
    <div className="flex justify-between gap-8 text-sm">
      <span className="text-[#334155]">{label}</span>
      <span className="text-right font-medium text-[#020817]">{value}</span>
    </div>
  )
}

export function ConfirmationPage() {
  return (
    <div className="min-h-[calc(100vh-75px)] bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-[560px] text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold text-[#020817]">
          Application Submitted Successfully
        </h1>
        <p className="mt-2 text-sm text-[#334155]">
          Your application has been received and is under review
        </p>
      </div>

      <Card className="mx-auto mt-8 max-w-[560px]">
        <div className="space-y-4">
          <Row label="Application ID:" value={application.applicationId} />
          <Row label="Applicant:" value={applicant.name} />
          <Row label="Service:" value={application.service} />
          <Row label="Status:" value={<StatusBadge status="Submitted" />} />
          <Row label="Payment Status:" value={<StatusBadge status="Paid" />} />
          <Row label="Submitted Date:" value={application.submittedDate} />
          <Row label="Appointment:" value="May 3, 2026 — 10:30 AM" />
        </div>
        <div className="mt-6 rounded border border-blue-100 bg-blue-50 px-4 py-4 text-left text-sm leading-6 text-[#153d73]">
          Your residence permit application has been submitted for officer review.
          You will receive status updates as your application progresses through
          the review process.
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Link
            to="/applicant-dashboard"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#1f4f8f] px-4 text-sm font-semibold text-white hover:bg-[#153d73]"
          >
            Go to Applicant Dashboard
          </Link>
          <Link
            to="/applicant-dashboard"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-semibold text-black hover:bg-gray-50"
          >
            Track Application Status
          </Link>
        </div>
      </Card>
    </div>
  )
}
