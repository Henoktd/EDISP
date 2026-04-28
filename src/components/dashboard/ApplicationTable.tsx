import { application, applicant } from '../../data/mockData'
import { StatusBadge } from '../ui/StatusBadge'
import { DataTable } from './DataTable'

type ApplicationTableProps = {
  status?: string
}

export function ApplicationTable({ status = application.status }: ApplicationTableProps) {
  const rows = [
    {
      id: application.applicationId,
      applicant: applicant.name,
      service: application.service,
      payment: application.paymentStatus,
      risk: application.riskLevel,
      status,
    },
  ]

  return (
    <DataTable
      data={rows}
      rowKey={(row) => row.id}
      columns={[
        {
          key: 'id',
          header: 'Application ID',
          render: (row) => (
            <span className="font-semibold text-gov-blue-900">{row.id}</span>
          ),
        },
        { key: 'applicant', header: 'Applicant', render: (row) => row.applicant },
        { key: 'service', header: 'Service', render: (row) => row.service },
        {
          key: 'payment',
          header: 'Payment',
          render: (row) => (
            <StatusBadge
              status={row.payment as Parameters<typeof StatusBadge>[0]['status']}
            />
          ),
        },
        { key: 'risk', header: 'Risk', render: (row) => row.risk },
        {
          key: 'status',
          header: 'Status',
          render: (row) => (
            <StatusBadge
              status={row.status as Parameters<typeof StatusBadge>[0]['status']}
            />
          ),
        },
      ]}
    />
  )
}
