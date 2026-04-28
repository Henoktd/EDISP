import { Link } from 'react-router-dom'
import { Save } from 'lucide-react'
import { DocumentChecklist } from '../components/dashboard/DocumentChecklist'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { ProgressSteps } from '../components/ui/ProgressSteps'
import { Select } from '../components/ui/Select'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant, application } from '../data/mockData'

export function ResidencePermitPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1a4d8f]">
          Residence Permit
        </p>
        <h1 className="mt-3 text-3xl font-medium text-gray-900">
          Application flow
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Simulated form, document, appointment, payment, and submission steps.
        </p>
      </div>

      <ProgressSteps currentStep={5} />

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card
          title="Residence permit application"
          description="Fields are prefilled from mock Fayda identity data."
          actions={<StatusBadge status="Under Review" />}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Applicant name" value={applicant.name} readOnly />
            <Input label="Fayda ID" value={applicant.faydaId} readOnly />
            <Input label="DOB" value={applicant.dateOfBirth} readOnly />
            <Input label="Nationality" value={applicant.nationality} readOnly />
            <Input label="Phone" value={applicant.phone} readOnly />
            <Input label="Email" value={applicant.email} readOnly />
            <Input label="Application ID" value={application.applicationId} readOnly />
            <Select
              label="Service"
              value={application.service}
              disabled
              options={[{ label: application.service, value: application.service }]}
            />
            <Input label="Appointment date" value={application.appointmentDate} readOnly />
            <Input label="Receipt number" value={application.receiptNumber} readOnly />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/confirmation"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#1a4d8f] bg-[#1a4d8f] px-4 text-sm font-medium text-white hover:bg-[#153d73]"
            >
              <Save className="h-4 w-4" aria-hidden="true" />
              Submit simulated application
            </Link>
            <Link
              to="/services"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Return to services
            </Link>
          </div>
        </Card>

        <Card title="Document checklist" description="No real upload is performed.">
          <DocumentChecklist />
        </Card>
      </div>
    </div>
  )
}
