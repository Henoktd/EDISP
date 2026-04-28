import { application } from '../../data/mockData'
import { StatusBadge } from '../ui/StatusBadge'

export function DocumentChecklist() {
  return (
    <div className="space-y-3">
      {application.documents.map((document) => (
        <div
          key={document.name}
          className="flex items-center justify-between gap-3 rounded-md border border-gray-200 bg-gray-50 p-3"
        >
          <span className="text-sm font-medium text-gray-900">{document.name}</span>
          <StatusBadge tone="green">{document.status}</StatusBadge>
        </div>
      ))}
      <div className="flex items-center justify-between gap-3 rounded-md border border-gray-200 bg-gray-50 p-3">
        <span className="text-sm font-medium text-gray-900">
          Receipt {application.receiptNumber}
        </span>
        <StatusBadge status={application.paymentStatus} />
      </div>
    </div>
  )
}
