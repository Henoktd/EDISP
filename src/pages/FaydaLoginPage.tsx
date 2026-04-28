import { Link } from 'react-router-dom'
import { Fingerprint, LockKeyhole, Smartphone } from 'lucide-react'
import { PageFrame } from '../components/layout/PageFrame'
import { Input } from '../components/ui/Input'
import { Panel } from '../components/ui/Panel'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant } from '../data/mockData'

export function FaydaLoginPage() {
  return (
    <PageFrame
      eyebrow="Simulated national ID verification"
      title="Fayda login"
      description="A mock entry point for demonstrating how a verified Ethiopian identity could unlock immigration services. No real Fayda service is contacted."
      actions={<StatusBadge tone="gold">simulation only</StatusBadge>}
    >
      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded border border-gov-green-100 bg-gov-green-50 text-gov-green-700">
              <Fingerprint className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gov-ink">
                Fayda identity check
              </h2>
              <p className="text-sm text-gov-muted">Prototype credential screen</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Input
              label="Fayda ID"
              placeholder="1234 5678 9012"
              defaultValue={applicant.faydaId}
              helperText="Enter the 12-digit Fayda number format shown on the national ID."
            />
            <Input
              label="Phone confirmation"
              readOnly
              value={applicant.phone}
              helperText="Mock phone verification only"
            />
          </div>

          <Link
            to="/auth/verifying"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-gov-blue-800 px-4 py-3 text-sm font-semibold text-white hover:bg-gov-blue-900"
          >
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            Verify mock identity
          </Link>
        </Panel>

        <Panel>
          <h2 className="text-xl font-semibold text-gov-ink">
            Identity assurance model
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              'Biographic attributes are prefilled from mock Fayda data.',
              'Phone confirmation is simulated for the clickable prototype.',
              'Eligibility is calculated locally from mock service rules.',
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded border border-gov-border bg-gov-surface p-3"
              >
                <Smartphone className="mt-0.5 h-4 w-4 text-gov-blue-800" aria-hidden="true" />
                <p className="text-sm leading-6 text-gov-muted">{item}</p>
              </div>
            ))}
          </div>
          <Link
            to="/auth/foreign"
            className="mt-5 inline-flex text-sm font-semibold text-gov-blue-800 hover:text-gov-blue-900"
          >
            Continue without Fayda as a foreign applicant
          </Link>
        </Panel>
      </div>
    </PageFrame>
  )
}
