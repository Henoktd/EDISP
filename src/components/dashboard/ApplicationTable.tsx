import { application, applicant } from '../../data/mockData'
import { StatusBadge } from '../ui/StatusBadge'

type ApplicationTableProps = {
  status?: string
}

export function ApplicationTable({ status = application.status }: ApplicationTableProps) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-200">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-gray-50 text-xs font-medium uppercase text-gray-500">
          <tr>
            <th className="px-4 py-3">Application ID</th>
            <th className="px-4 py-3">Applicant</th>
            <th className="px-4 py-3">Service</th>
            <th className="px-4 py-3">Payment</th>
            <th className="px-4 py-3">Risk</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="px-4 py-4 font-semibold text-gov-blue-900">
              {application.applicationId}
            </td>
            <td className="px-4 py-4 text-gray-600">{applicant.name}</td>
            <td className="px-4 py-4 text-gray-600">{application.service}</td>
            <td className="px-4 py-4">
              <StatusBadge status={application.paymentStatus} />
            </td>
            <td className="px-4 py-4 text-gray-600">{application.riskLevel}</td>
            <td className="px-4 py-4">
              <StatusBadge status={status as Parameters<typeof StatusBadge>[0]['status']} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
