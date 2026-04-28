import { useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, UserRound } from 'lucide-react'
import type { ReactNode } from 'react'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant, application, applicationQueue } from '../data/mockData'
import type { StatusBadgeStatus } from '../components/ui/StatusBadge'

const decisionMap: Record<string, { status: StatusBadgeStatus; title: string; tone: string; output: string }> = {
  approved: {
    status: 'Approved',
    title: 'Application Approved',
    tone: 'border-green-200 bg-green-50 text-green-700',
    output: 'Residence Permit Approved',
  },
  rejected: {
    status: 'Rejected',
    title: 'Application Rejected',
    tone: 'border-red-200 bg-red-50 text-red-700',
    output: 'Residence Permit Rejected',
  },
  correction: {
    status: 'Correction Required',
    title: 'Correction Requested',
    tone: 'border-yellow-200 bg-yellow-50 text-yellow-700',
    output: 'Applicant correction requested',
  },
  escalated: {
    status: 'Escalated',
    title: 'Case Escalated',
    tone: 'border-gray-200 bg-gray-50 text-gray-700',
    output: 'Escalated to supervisor',
  },
}

function BadgeCell({ value }: { value: string }) {
  if (value === 'Verified') return <StatusBadge tone="green">Verified</StatusBadge>
  if (value === 'Medium') return <StatusBadge tone="gold">Medium</StatusBadge>
  return <StatusBadge status={value as StatusBadgeStatus} />
}

function InfoBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="mb-4 text-sm font-semibold text-[#020817]">{title}</h3>
      {children}
    </div>
  )
}

export function OfficerDashboardPage() {
  const { decision } = useParams()
  const navigate = useNavigate()
  const decisionState = decision ? decisionMap[decision] : undefined

  return (
    <div className="space-y-6 bg-gray-50 px-6 py-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#020817]">Application Queue</h1>
        <p className="mt-1 text-sm text-[#334155]">Officer Case Review System</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full min-w-[1100px] text-left text-sm">
          <thead className="border-b border-gray-200 bg-white text-xs font-semibold text-[#334155]">
            <tr>
              {['Application ID', 'Applicant Name', 'Service', 'Submitted', 'Fayda Status', 'Payment', 'Current Status', 'Risk'].map((heading) => (
                <th key={heading} className="px-4 py-3">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applicationQueue.map((item, index) => (
              <tr key={item.applicationId} className={index === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="px-4 py-4 font-semibold">{item.applicationId}</td>
                <td className="px-4 py-4">{item.applicantName}</td>
                <td className="px-4 py-4">{item.service}</td>
                <td className="px-4 py-4">{item.submitted}</td>
                <td className="px-4 py-4"><BadgeCell value={item.faydaStatus} /></td>
                <td className="px-4 py-4"><BadgeCell value={item.payment} /></td>
                <td className="px-4 py-4"><BadgeCell value={item.status} /></td>
                <td className="px-4 py-4"><BadgeCell value={item.risk} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card
        title="Case Details — ETH-RES-10234"
        description="Complete case review and verification details"
      >
        {decisionState ? (
          <div>
            <div className={`rounded-lg border px-6 py-12 text-center ${decisionState.tone}`}>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{decisionState.title}</h2>
              <p className="mt-2 text-sm">Decision recorded in system</p>
            </div>
            <div className="mx-auto mt-6 max-w-sm rounded-lg border border-gray-200 bg-white p-5 text-sm leading-8">
              <h3 className="mb-3 font-semibold">Decision Summary</h3>
              <div className="flex justify-between"><span>Application ID:</span><span>{application.applicationId}</span></div>
              <div className="flex justify-between"><span>Status:</span><StatusBadge status={decisionState.status} /></div>
              <div className="flex justify-between"><span>Decision Date:</span><span>April 28, 2026</span></div>
              <div className="flex justify-between"><span>Reviewing Officer:</span><span>{application.officer}</span></div>
              <div className="flex justify-between"><span>Output:</span><span>{decisionState.output}</span></div>
            </div>
            <div className="mt-5 flex justify-center gap-3">
              <button type="button" className="rounded-md bg-[#1f4f8f] px-4 py-2 text-sm font-semibold text-white">
                Notify Applicant
              </button>
              <button type="button" onClick={() => navigate('/officer-dashboard')} className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold">
                Return to Queue
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <InfoBox title="Applicant Identity">
              <div className="grid gap-5 md:grid-cols-[80px_1fr_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded bg-gray-200 text-gray-500">
                  <UserRound className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="space-y-2 text-sm">
                  <p>Name: {applicant.name}</p>
                  <p>DOB: {applicant.dateOfBirth}</p>
                  <p>Phone: {applicant.phone}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>Fayda ID: {applicant.faydaId}</p>
                  <p>Nationality: {applicant.nationality}</p>
                  <p>Email: {applicant.email}</p>
                </div>
              </div>
            </InfoBox>

            <InfoBox title="Verification Status">
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <p>Fayda Verification: <StatusBadge tone="green">Verified</StatusBadge></p>
                <p>Biometric Status: <StatusBadge tone="green">Verified</StatusBadge></p>
                <p>eKYC Status: <StatusBadge tone="green">eKYC Passed</StatusBadge></p>
                <p>Risk Level: <StatusBadge tone="neutral">Low</StatusBadge></p>
              </div>
            </InfoBox>

            <InfoBox title="Application Details">
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <p>Service: Residence Permit</p>
                <p>Permit Type: Temporary Residence Permit</p>
                <p>Duration: 1 Year</p>
                <p>Purpose: Employment residence</p>
                <p>Appointment: May 3, 2026 — 10:30 AM</p>
              </div>
            </InfoBox>

            <InfoBox title="Document Checklist">
              <div className="space-y-2 text-sm">
                {application.documents.map((document) => (
                  <p key={document.name} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                    {document.name}: <StatusBadge tone="green">Verified</StatusBadge>
                  </p>
                ))}
              </div>
            </InfoBox>

            <InfoBox title="Payment Information">
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <p>Status: <StatusBadge status="Paid" /></p>
                <p>Receipt: {application.receiptNumber}</p>
                <p>Amount: ETB 3,150</p>
              </div>
            </InfoBox>

            <InfoBox title="Timeline">
              <div className="space-y-2 text-sm">
                {['Identity verified', 'Application submitted', 'Documents uploaded', 'Payment confirmed', 'Officer review started'].map((item) => (
                  <p key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </InfoBox>

            <div className="grid gap-3 border-t border-gray-200 pt-5 md:grid-cols-4">
              <button onClick={() => navigate('/officer-dashboard/approved')} type="button" className="rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white">
                Approve Application
              </button>
              <button onClick={() => navigate('/officer-dashboard/rejected')} type="button" className="rounded-md bg-red-600 px-4 py-3 text-sm font-semibold text-white">
                Reject Application
              </button>
              <button onClick={() => navigate('/officer-dashboard/correction')} type="button" className="rounded-md bg-yellow-600 px-4 py-3 text-sm font-semibold text-white">
                Request Correction
              </button>
              <button onClick={() => navigate('/officer-dashboard/escalated')} type="button" className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold">
                Escalate to Supervisor
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
