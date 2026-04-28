import {
  BadgeCheck,
  BriefcaseBusiness,
  CreditCard,
  FileCheck2,
  Globe2,
  SearchCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ServiceCard } from '../components/ServiceCard'
import { serviceCategories } from '../data/mockData'

const serviceIcons: Record<(typeof serviceCategories)[number]['title'], LucideIcon> = {
  'Visa Services': Globe2,
  Residency: BadgeCheck,
  'Work Permit': BriefcaseBusiness,
  'Exit Clearance': FileCheck2,
  'Status Tracking': SearchCheck,
  Payments: CreditCard,
}

export function ServicesPage() {
  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-white px-6 py-12 md:px-9">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#1a4d8f]">
          Service catalogue
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#020817]">
          Official immigration services
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#334155]">
          Select a digital service category. Residency opens the full residence
          permit flow in this front-end prototype.
        </p>
      </section>

      <section className="px-6 py-10 md:px-9">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              icon={serviceIcons[service.title]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
