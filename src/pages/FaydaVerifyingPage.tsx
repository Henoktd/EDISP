import { Link } from 'react-router-dom'
import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { PageFrame } from '../components/layout/PageFrame'
import { Panel } from '../components/ui/Panel'
import { StatusBadge } from '../components/ui/StatusBadge'
import { verificationSteps } from '../data/mockPlatform'
import { verificationTone } from '../utils/statusTone'

export function FaydaVerifyingPage() {
  return (
    <PageFrame
      eyebrow="Verification in progress"
      title="Preparing verified profile"
      description="The prototype shows the sequence of checks a production platform could perform. This screen uses static mock verification results."
      actions={<StatusBadge tone="gold">mock verification</StatusBadge>}
    >
      <Panel>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded border border-gov-gold-100 bg-gov-gold-100 text-[#73520a]">
            <LoaderCircle className="h-6 w-6 animate-spin" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gov-ink">
              Fayda assurance sequence
            </h2>
            <p className="mt-2 text-sm leading-6 text-gov-muted">
              The flow intentionally avoids real identity systems and demonstrates
              only the proposed user experience.
            </p>
          </div>
        </div>

        <div className="mt-6 divide-y divide-gov-border">
          {verificationSteps.map((step) => (
            <div
              key={step.title}
              className="grid gap-3 py-4 first:pt-0 last:pb-0 md:grid-cols-[32px_1fr_auto]"
            >
              <CheckCircle2 className="h-5 w-5 text-gov-green-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gov-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-gov-muted">
                  {step.description}
                </p>
              </div>
              <StatusBadge tone={verificationTone(step.status)}>
                {step.status}
              </StatusBadge>
            </div>
          ))}
        </div>

        <Link
          to="/verified-profile"
          className="mt-6 inline-flex items-center justify-center rounded bg-gov-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-gov-green-900"
        >
          Continue to verified profile
        </Link>
      </Panel>
    </PageFrame>
  )
}
