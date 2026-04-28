import { Link } from 'react-router-dom'
import { BadgeCheck, FileText } from 'lucide-react'
import { PageFrame } from '../components/layout/PageFrame'
import { Panel } from '../components/ui/Panel'
import { StatusBadge } from '../components/ui/StatusBadge'
import { faydaProfile } from '../data/mockPlatform'

const profileRows = [
  ['Fayda ID', faydaProfile.faydaId],
  ['Full name', faydaProfile.fullName],
  ['Date of birth', faydaProfile.dateOfBirth],
  ['Nationality', faydaProfile.nationality],
  ['Phone', faydaProfile.phone],
  ['Email', faydaProfile.email],
  ['Verification level', faydaProfile.verificationLevel],
  ['Biometric status', faydaProfile.biometricStatus],
]

export function VerifiedProfilePage() {
  return (
    <PageFrame
      eyebrow="Verified identity workspace"
      title="Verified applicant profile"
      description="A mock immigration profile assembled after simulated Fayda verification. This profile is used to prefill public services in the prototype."
      actions={<StatusBadge status="Fayda Verified" />}
    >
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Panel>
          <div className="mb-5 flex h-28 w-28 items-center justify-center rounded border border-gray-200 bg-gray-50 text-3xl font-semibold text-[#1a4d8f]">
            AK
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded border border-gov-blue-100 bg-gov-blue-50 text-gov-blue-800">
              <BadgeCheck className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gov-ink">
                {faydaProfile.fullName}
              </p>
              <p className="text-sm text-gov-muted">{faydaProfile.faydaId}</p>
            </div>
          </div>
          <Link
            to="/services"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-gov-blue-800 px-4 py-3 text-sm font-semibold text-white hover:bg-gov-blue-900"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Open eligible services
          </Link>
        </Panel>

        <Panel>
          <h2 className="text-xl font-semibold text-gov-ink">
            Identity data envelope
          </h2>
          <dl className="mt-5 grid gap-3 md:grid-cols-2">
            {profileRows.map(([label, value]) => (
              <div
                key={label}
                className="rounded border border-gov-border bg-gov-surface p-4"
              >
                <dt className="text-xs font-semibold uppercase text-gov-muted">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-gov-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>
    </PageFrame>
  )
}
