import { FileText, ShieldCheck, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCategories } from '../data/mockData'

const trustItems = [
  {
    title: 'Secure Identity Verification',
    description: 'Simulated Fayda-based verification for applicant identity confirmation.',
    icon: ShieldCheck,
  },
  {
    title: 'End-to-End Application Processing',
    description: 'Submit, track, review, and manage immigration applications digitally.',
    icon: FileText,
  },
  {
    title: 'Officer and Admin Oversight',
    description: 'Operational dashboards for case processing, approvals, reporting, and audit.',
    icon: UsersRound,
  },
]

export function HomePage() {
  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[880px] px-6 py-20">
          <h1 className="text-[32px] font-semibold leading-tight text-[#020817] md:text-[34px]">
            Ethiopian Immigration Digital Service Platform
          </h1>
          <p className="mt-5 text-base leading-7 text-[#334155]">
            Secure immigration services powered by Fayda National Digital
            Identity verification.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/auth"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#1f4f8f] px-6 text-sm font-semibold text-white hover:bg-[#153d73]"
            >
              Login with Fayda
            </Link>
            <Link
              to="/auth/foreign"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
            >
              Foreign User Access
            </Link>
            <Link
              to="/applicant-dashboard"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
            >
              Track Application
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-gray-200 px-6 py-12">
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-xl font-semibold text-[#020817]">
            Immigration Services
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="block rounded-lg border border-gray-200 bg-white px-6 py-6 hover:border-gray-300"
              >
                <h3 className="text-sm font-semibold text-[#020817]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#334155]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white px-6 py-14">
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-2xl font-semibold text-[#020817]">
            Trusted Digital Identity for Immigration Services
          </h2>
          <p className="mt-3 text-sm text-[#334155]">
            National immigration platform integrated with Fayda identity verification
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title}>
                  <Icon className="h-5 w-5 text-[#1f4f8f]" aria-hidden="true" />
                  <h3 className="mt-5 text-sm font-semibold text-[#020817]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#334155]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs leading-6 text-[#334155]">
        <p>Ethiopian Immigration Services Digital Platform</p>
        <p>
          Prototype simulation only. No real immigration, Fayda, payment, or
          document processing is performed.
        </p>
      </footer>
    </div>
  )
}
