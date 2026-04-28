import { Link } from 'react-router-dom'
import { Globe2, MailCheck, Shield } from 'lucide-react'
import { PageFrame } from '../components/layout/PageFrame'
import { Input } from '../components/ui/Input'
import { Panel } from '../components/ui/Panel'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant } from '../data/mockData'

export function ForeignLoginPage() {
  return (
    <PageFrame
      eyebrow="Foreign applicant access"
      title="Passport-based service entry"
      description="A controlled placeholder flow for applicants who do not use Fayda. All credentials and identity checks are simulated in the browser."
      actions={<StatusBadge tone="neutral">non-Fayda route</StatusBadge>}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded border border-gov-border bg-gov-surface text-gov-blue-800">
              <Globe2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gov-ink">
                Foreign applicant sign in
              </h2>
              <p className="text-sm text-gov-muted">Mock passport profile</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input
              label="Passport number"
              defaultValue="P-ET-4892301"
              helperText="Mock passport credential for foreign applicant access."
            />
            <Input
              label="Email address"
              defaultValue={applicant.email}
              helperText="Email verification is simulated."
            />
          </div>

          <Link
            to="/services"
            className="mt-6 inline-flex rounded bg-gov-blue-800 px-4 py-3 text-sm font-semibold text-white hover:bg-gov-blue-900"
          >
            Continue to services
          </Link>
        </Panel>

        <Panel>
          <Shield className="h-6 w-6 text-gov-blue-800" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-semibold text-gov-ink">
            Account controls
          </h2>
          <p className="mt-2 text-sm leading-6 text-gov-muted">
            Demonstrates email confirmation, passport reference capture, and
            officer review routing without external API calls.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gov-blue-800">
            <MailCheck className="h-4 w-4" aria-hidden="true" />
            Mock email verified
          </div>
        </Panel>
      </div>
    </PageFrame>
  )
}
