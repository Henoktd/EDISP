import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, UserRound } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { ProgressSteps } from '../components/ui/ProgressSteps'
import { Select } from '../components/ui/Select'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant, application } from '../data/mockData'

const steps = ['Identity', 'Form', 'Documents', 'Appointment', 'Payment', 'Submit']

function stepFromParam(param?: string) {
  if (!param) return 0
  const parsed = Number(param.replace('step', ''))
  return Number.isFinite(parsed) ? Math.min(Math.max(parsed - 1, 0), 5) : 0
}

function stepPath(index: number) {
  return `/apply/residence/step${index + 1}`
}

function ButtonLink({
  to,
  children,
  primary = false,
}: {
  to: string
  children: string
  primary?: boolean
}) {
  return (
    <Link
      to={to}
      className={`inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-semibold ${
        primary
          ? 'border-[#1f4f8f] bg-[#1f4f8f] text-white hover:bg-[#153d73]'
          : 'border-gray-200 bg-white text-black hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  )
}

function DetailRow({ label, value, green = false }: { label: string; value: string; green?: boolean }) {
  return (
    <div className="flex justify-between gap-8 text-sm">
      <span className="text-[#334155]">{label}</span>
      <span className={green ? 'font-medium text-green-600' : 'text-[#020817]'}>
        {value}
      </span>
    </div>
  )
}

export function ResidencePermitPage() {
  const { stepId } = useParams()
  const navigate = useNavigate()
  const [confirmed, setConfirmed] = useState(true)
  const currentStep = stepFromParam(stepId)
  const progressSteps = useMemo(
    () =>
      steps.map((label, index) => ({
        label,
        status:
          index < currentStep
            ? ('complete' as const)
            : index === currentStep
              ? ('current' as const)
              : ('pending' as const),
      })),
    [currentStep],
  )

  return (
    <div className="bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-[760px]">
        <ProgressSteps steps={progressSteps} className="mb-6" />

        {currentStep === 0 ? (
          <Card title="Confirm Your Identity">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex gap-5">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded bg-gray-200 text-gray-500">
                  <UserRound className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-[#020817]">{applicant.name}</p>
                  <p>Fayda ID: {applicant.faydaId}</p>
                  <p>DOB: {applicant.dateOfBirth}</p>
                  <p>Nationality: {applicant.nationality}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <StatusBadge tone="green">Fayda Verified</StatusBadge>
                    <StatusBadge tone="green">Biometric Verified</StatusBadge>
                    <StatusBadge tone="green">eKYC Passed</StatusBadge>
                  </div>
                </div>
              </div>
              <div className="mt-5 border-t border-gray-200 pt-4 text-sm leading-6">
                <p className="font-medium">Contact Information</p>
                <p>Phone: {applicant.phone}</p>
                <p>Email: {applicant.email}</p>
              </div>
            </div>
            <div className="mt-5 rounded border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-[#153d73]">
              Your identity has been verified through the simulated Fayda National ID layer.
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink to="/services">Back</ButtonLink>
              <ButtonLink to={stepPath(1)} primary>
                Confirm and Continue
              </ButtonLink>
            </div>
          </Card>
        ) : null}

        {currentStep === 1 ? (
          <Card title="Residence Permit Application">
            <div className="space-y-5">
              <Select
                label="Permit Type *"
                value="Temporary Residence Permit"
                options={[{ label: 'Temporary Residence Permit', value: 'Temporary Residence Permit' }]}
              />
              <Input label="Current Address *" defaultValue="" />
              <Input label="Employer / Sponsor *" defaultValue="" />
              <Input label="Purpose of Residence *" placeholder="e.g., Employment" />
              <Select
                label="Duration Requested *"
                value="6 Months"
                options={[
                  { label: '6 Months', value: '6 Months' },
                  { label: '1 Year', value: '1 Year' },
                ]}
              />
              <Input label="Contact Phone *" defaultValue={applicant.phone} />
              <Input label="Email Address *" defaultValue={applicant.email} />
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink to={stepPath(0)}>Back</ButtonLink>
              <ButtonLink to={stepPath(1)}>Save Draft</ButtonLink>
              <ButtonLink to={stepPath(2)} primary>
                Continue
              </ButtonLink>
            </div>
          </Card>
        ) : null}

        {currentStep === 2 ? (
          <Card title="Upload Required Documents">
            <div className="space-y-4">
              {application.documents.map((document) => (
                <div key={document.name} className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm font-medium text-[#020817]">
                    {document.name.replace('Photo', 'Passport Photo')}{' '}
                    <span className="text-xs text-red-600">Required</span>
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Uploaded
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink to={stepPath(1)}>Back</ButtonLink>
              <ButtonLink to={stepPath(3)} primary>
                Continue
              </ButtonLink>
            </div>
          </Card>
        ) : null}

        {currentStep === 3 ? (
          <Card title="Select Appointment">
            <div className="space-y-5">
              <div className="rounded-md border border-gray-200 px-4 py-3 text-sm">
                Immigration Service Center — Addis Ababa
              </div>
              <p className="text-sm font-medium">Select Date</p>
              <div className="grid gap-3 md:grid-cols-3">
                {['May 3, 2026', 'May 4, 2026', 'May 5, 2026'].map((date) => (
                  <button
                    key={date}
                    type="button"
                    className={`h-10 rounded-md border text-sm font-semibold ${
                      date === 'May 3, 2026'
                        ? 'border-[#1f4f8f] bg-blue-50 text-[#1f4f8f]'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <p className="text-sm font-medium">Select Time</p>
              <div className="grid gap-3 md:grid-cols-3">
                {['09:00 AM', '10:30 AM', '02:00 PM'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`h-10 rounded-md border text-sm font-semibold ${
                      time === '10:30 AM'
                        ? 'border-[#1f4f8f] bg-blue-50 text-[#1f4f8f]'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-4 text-sm leading-6 text-[#153d73]">
                <p className="font-medium">Selected Appointment</p>
                <p>May 3, 2026 — 10:30 AM</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink to={stepPath(2)}>Back</ButtonLink>
              <ButtonLink to={stepPath(4)} primary>
                Confirm Appointment
              </ButtonLink>
            </div>
          </Card>
        ) : null}

        {currentStep === 4 ? (
          <Card title="Payment Summary">
            <div className="rounded-lg border border-gray-200 p-6 text-sm leading-8">
              <DetailRow label="Residence Permit Processing Fee" value="ETB 3,000" />
              <DetailRow label="Service Charge" value="ETB 150" />
              <div className="mt-3 border-t border-gray-200 pt-3">
                <DetailRow label="Total Amount" value="ETB 3,150" />
              </div>
            </div>
            <div className="mt-5 rounded-lg border border-green-100 bg-green-50 px-5 py-4 text-sm leading-6 text-green-700">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Payment Status: Paid
              </p>
              <p className="ml-6">Receipt Number: {application.receiptNumber}</p>
            </div>
            <div className="mt-5 rounded border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-[#153d73]">
              Payment confirmation is simulated for prototype purposes.
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink to={stepPath(3)}>Back</ButtonLink>
              <ButtonLink to={stepPath(5)} primary>
                Continue to Review
              </ButtonLink>
            </div>
          </Card>
        ) : null}

        {currentStep === 5 ? (
          <Card title="Review and Submit Application">
            <div className="space-y-5">
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="mb-4 text-sm font-semibold">Identity Details</h2>
                <div className="space-y-2">
                  <DetailRow label="Name:" value={applicant.name} />
                  <DetailRow label="Fayda ID:" value={applicant.faydaId} />
                  <DetailRow label="Verification Status:" value="Verified" green />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="mb-4 text-sm font-semibold">Application Details</h2>
                <div className="space-y-2">
                  <DetailRow label="Service:" value="Residence Permit" />
                  <DetailRow label="Permit Type:" value="Temporary Residence Permit" />
                  <DetailRow label="Duration:" value="1 Year" />
                  <DetailRow label="Purpose:" value="Employment residence" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="mb-4 text-sm font-semibold">Uploaded Documents</h2>
                <div className="space-y-2 text-sm">
                  {application.documents.map((document) => (
                    <p key={document.name} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                      {document.name.replace('Photo', 'Passport Photo')}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="mb-4 text-sm font-semibold">Appointment</h2>
                <div className="space-y-2">
                  <DetailRow label="Date:" value="May 3, 2026" />
                  <DetailRow label="Time:" value="10:30 AM" />
                  <DetailRow label="Location:" value="Immigration Service Center — Addis Ababa" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="mb-4 text-sm font-semibold">Payment</h2>
                <div className="space-y-2">
                  <DetailRow label="Total Amount:" value="ETB 3,150" />
                  <DetailRow label="Payment Status:" value="Paid" green />
                  <DetailRow label="Receipt Number:" value={application.receiptNumber} />
                </div>
              </div>
              <label className="flex items-center gap-3 rounded bg-gray-50 p-4 text-sm">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(event) => setConfirmed(event.target.checked)}
                />
                I confirm that the information provided is accurate.
              </label>
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink to={stepPath(4)}>Back</ButtonLink>
              <button
                type="button"
                disabled={!confirmed}
                onClick={() => navigate('/apply/residence/confirmation')}
                className="inline-flex h-9 items-center justify-center rounded-md border border-[#1f4f8f] bg-[#1f4f8f] px-4 text-sm font-semibold text-white hover:bg-[#153d73] disabled:opacity-50"
              >
                Submit Application
              </button>
            </div>
          </Card>
        ) : null}
      </div>
    </div>
  )
}
