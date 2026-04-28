import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, UserRound } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant, application } from '../data/mockData'

const timeline = [
  ['Identity Verified', true],
  ['Application Submitted', true],
  ['Payment Confirmed', true],
  ['Under Officer Review', true],
  ['Decision Pending', false],
] as const

export function ApplicantDashboardPage() {
  return (
    <div className="space-y-6 bg-gray-50 px-6 py-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#020817]">
          Welcome, {applicant.name}
        </h1>
        <p className="mt-1 text-sm text-[#334155]">Applicant Dashboard</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded bg-gray-200 text-gray-500">
              <UserRound className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-[#334155]">Identity Status</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <StatusBadge tone="green">Fayda Verified</StatusBadge>
                <StatusBadge tone="green">Biometric Verified</StatusBadge>
                <StatusBadge tone="green">eKYC Passed</StatusBadge>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <p className="text-sm text-[#334155]">Active Applications</p>
          <p className="mt-3 text-3xl font-medium text-[#020817]">1</p>
        </Card>
        <Card>
          <p className="text-sm text-[#334155]">Pending Actions</p>
          <p className="mt-3 text-3xl font-medium text-[#020817]">0</p>
          <p className="mt-1 text-xs text-[#334155]">No action required</p>
        </Card>
      </div>

      <Card title="My Applications">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#020817]">
                {application.applicationId}
              </p>
              <p className="mt-1 text-sm text-[#334155]">{application.service}</p>
              <p className="mt-5 text-sm">
                Payment Status: <StatusBadge status="Paid" />
              </p>
              <p className="mt-4 text-sm">Submitted: {application.submittedDate}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link className="rounded border border-gray-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50" to="/applicant-dashboard">
                  Track Status
                </Link>
                <Link className="rounded border border-gray-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50" to="/apply/residence/step6">
                  View Details
                </Link>
                <button className="rounded border border-gray-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50" type="button">
                  Download Receipt
                </button>
              </div>
            </div>
            <div className="grid gap-4 text-sm lg:min-w-[520px] lg:grid-cols-2">
              <p>
                Fayda Verification: <StatusBadge tone="green">Verified</StatusBadge>
              </p>
              <p className="lg:text-right">
                <StatusBadge status="Under Review" />
              </p>
              <p>Appointment: May 3, 2026</p>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Application Status Timeline">
        <ol className="space-y-4">
          {timeline.map(([label, done]) => (
            <li key={label} className="flex items-center gap-3 text-sm">
              {done ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
              ) : (
                <Circle className="h-4 w-4 text-gray-300" aria-hidden="true" />
              )}
              {label}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  )
}
