import { Database, LockKeyhole, Network, ShieldCheck } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'

const modules = [
  'Public service portal',
  'Fayda verification simulation',
  'Residence permit workflow',
  'Applicant dashboard',
  'Officer case review',
  'Admin oversight analytics',
]

export function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1a4d8f]">
          System architecture
        </p>
        <h1 className="mt-3 text-3xl font-medium text-gray-900">
          Front-end prototype model
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          This page explains the simulated national digital service structure.
          No backend, Fayda API, payment system, or document storage is connected.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card title="Prototype modules">
          <div className="grid gap-3 md:grid-cols-2">
            {modules.map((moduleName, index) => (
              <div key={moduleName} className="rounded-md border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Module {index + 1}
                </p>
                <p className="mt-2 font-medium text-gray-900">{moduleName}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <Network className="h-6 w-6 text-gov-blue-800" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">Browser only</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              All interactions use local React state and static mock data.
            </p>
          </Card>
          <Card>
            <ShieldCheck className="h-6 w-6 text-gov-blue-800" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">Fayda simulation</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Identity verification is represented as a demo workflow only.
            </p>
          </Card>
          <Card>
            <Database className="h-6 w-6 text-gov-blue-800" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">No persistence</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              No application data is stored beyond the current browser session.
            </p>
          </Card>
          <Card>
            <LockKeyhole className="h-6 w-6 text-gov-blue-800" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">Integration boundary</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusBadge tone="neutral">No backend</StatusBadge>
              <StatusBadge tone="neutral">No real payment</StatusBadge>
              <StatusBadge tone="neutral">No real upload</StatusBadge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
