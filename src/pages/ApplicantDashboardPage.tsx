import { Link } from 'react-router-dom'
import { ApplicationTable } from '../components/dashboard/ApplicationTable'
import { Timeline } from '../components/dashboard/Timeline'
import { Card } from '../components/ui/Card'
import { MetricCard } from '../components/ui/MetricCard'
import { StatusBadge } from '../components/ui/StatusBadge'
import { application } from '../data/mockData'

export function ApplicantDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1a4d8f]">
          Applicant dashboard
        </p>
        <h1 className="mt-3 text-3xl font-medium text-gray-900">
          Track application
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Review current status, payment, appointment, and timeline details.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Application ID" value={application.applicationId} detail={application.service} />
        <MetricCard label="Appointment Date" value={application.appointmentDate} detail="Scheduled visit date" />
        <MetricCard label="Receipt Number" value={application.receiptNumber} detail={application.paymentStatus} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card
          title="Application record"
          description="Single mock application used across the prototype."
          actions={<StatusBadge status="Under Review" />}
        >
          <ApplicationTable />
          <Link
            to="/apply/residence-permit"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-[#1a4d8f] hover:bg-gray-50"
          >
            View application
          </Link>
        </Card>

        <Card title="Timeline">
          <Timeline />
        </Card>
      </div>
    </div>
  )
}
