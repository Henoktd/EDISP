import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CreditCard,
  FileCheck2,
  Globe2,
  SearchCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { serviceCategories } from '../data/mockData'

const serviceMeta: Record<
  (typeof serviceCategories)[number],
  { icon: LucideIcon; description: string; path: string }
> = {
  'Visa Services': {
    icon: Globe2,
    description: 'Apply for entry visas, extensions, and related visitor services.',
    path: '/services',
  },
  Residency: {
    icon: BadgeCheck,
    description: 'Apply for and track residence permit requests.',
    path: '/apply/residence-permit',
  },
  'Work Permit': {
    icon: BriefcaseBusiness,
    description: 'Coordinate immigration status with employment authorization.',
    path: '/services',
  },
  'Exit Clearance': {
    icon: FileCheck2,
    description: 'Prepare clearance requests for regulated departures.',
    path: '/services',
  },
  'Status Tracking': {
    icon: SearchCheck,
    description: 'Track submitted applications and appointment schedules.',
    path: '/applicant',
  },
  Payments: {
    icon: CreditCard,
    description: 'Review payment obligations and receipt confirmations.',
    path: '/applicant',
  },
}

export function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-6 py-8">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1a4d8f]">
          Service catalogue
        </p>
        <h1 className="mt-3 text-3xl font-medium text-gray-900">
          Official immigration services
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Select a digital service category. Only Residency opens the full
          residence permit application flow in this prototype.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviceCategories.map((category) => {
          const meta = serviceMeta[category]
          const Icon = meta.icon

          return (
            <Card key={category} className="flex flex-col" bodyClassName="flex h-full flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded border border-blue-100 bg-blue-50 text-[#1a4d8f]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-medium text-gray-900">{category}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                {meta.description}
              </p>
              <Link
                to={meta.path}
                className="mt-5 inline-flex h-10 items-center justify-between rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-[#1a4d8f] hover:bg-gray-50"
              >
                Open service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
