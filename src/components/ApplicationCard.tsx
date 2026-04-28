import { Link } from 'react-router-dom'
import { application } from '../data/mockData'
import { Card } from './ui/Card'
import { StatusBadge } from './ui/StatusBadge'

type ApplicationCardProps = {
  status?: Parameters<typeof StatusBadge>[0]['status']
}

export function ApplicationCard({ status = 'Under Review' }: ApplicationCardProps) {
  return (
    <Card
      title={application.applicationId}
      description={application.service}
      actions={<StatusBadge status={status} />}
    >
      <dl className="grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="text-gray-500">Payment Status</dt>
          <dd className="mt-1 font-medium text-gray-900">{application.paymentStatus}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Receipt Number</dt>
          <dd className="mt-1 font-medium text-gray-900">{application.receiptNumber}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Submitted Date</dt>
          <dd className="mt-1 font-medium text-gray-900">{application.submittedDate}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Appointment Date</dt>
          <dd className="mt-1 font-medium text-gray-900">{application.appointmentDate}</dd>
        </div>
      </dl>
      <Link
        to="/apply/residence-permit"
        className="mt-6 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-semibold text-[#1a4d8f] hover:bg-gray-50"
      >
        View application
      </Link>
    </Card>
  )
}
