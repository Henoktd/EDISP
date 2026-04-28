import {
  BriefcaseBusiness,
  CreditCard,
  FileText,
  Home,
  Plane,
  Search,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCategories } from '../data/mockData'

const serviceMeta: Record<
  (typeof serviceCategories)[number]['title'],
  { icon: LucideIcon; action: string }
> = {
  'Visa Services': { icon: FileText, action: 'View Services' },
  Residency: { icon: Home, action: 'Apply for Residence Permit' },
  'Work Permit': { icon: BriefcaseBusiness, action: 'Apply Now' },
  'Exit Clearance': { icon: Plane, action: 'Apply Now' },
  'Status Tracking': { icon: Search, action: 'Track Application' },
  Payments: { icon: CreditCard, action: 'View Payments' },
}

export function ServicesPage() {
  return (
    <div className="bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-[940px]">
        <h1 className="text-2xl font-semibold text-[#020817]">
          Immigration Services
        </h1>
        <p className="mt-2 text-sm text-[#334155]">
          Select a service to begin your digital application
        </p>

        <div className="mt-6 grid gap-3 rounded-lg border border-gray-200 bg-white p-4 md:grid-cols-[1fr_150px_150px]">
          <input
            aria-label="Search service"
            placeholder="Search service..."
            className="h-10 rounded-md border-0 bg-gray-100 px-4 text-sm outline-none"
          />
          <select
            aria-label="Category"
            className="h-10 rounded-md border border-gray-200 bg-white px-3 text-sm outline-none"
            defaultValue="all"
          >
            <option value="all">All Categories</option>
          </select>
          <select
            aria-label="Applicant type"
            className="h-10 rounded-md border border-gray-200 bg-white px-3 text-sm outline-none"
            defaultValue="all"
          >
            <option value="all">All Applicant Types</option>
          </select>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => {
            const meta = serviceMeta[service.title]
            const Icon = meta.icon
            const isResidency = service.title === 'Residency'

            return (
              <article
                key={service.title}
                className={`rounded-lg border bg-white p-6 ${
                  isResidency ? 'border-[#1f4f8f]' : 'border-gray-200'
                }`}
              >
                <Icon className="h-7 w-7 text-[#1f4f8f]" aria-hidden="true" />
                <h2 className="mt-5 text-sm font-semibold text-[#020817]">
                  {service.title}
                </h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#334155]">
                  {service.detail}
                </p>
                <Link
                  to={service.path}
                  className={`mt-4 inline-flex h-9 w-full items-center justify-center rounded-md border px-3 text-sm font-semibold ${
                    isResidency
                      ? 'border-[#1f4f8f] bg-[#1f4f8f] text-white hover:bg-[#153d73]'
                      : 'border-gray-200 bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {meta.action}
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
