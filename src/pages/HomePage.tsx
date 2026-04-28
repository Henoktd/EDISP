import { Link } from 'react-router-dom'
import { serviceCategories } from '../data/mockData'

export function HomePage() {
  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="px-9 py-[100px]">
          <h1 className="max-w-6xl text-[44px] font-semibold leading-[1.2] text-[#020817]">
            Ethiopian Immigration Digital Service Platform
          </h1>
          <p className="mt-7 text-[28px] leading-10 text-[#334155]">
            Access immigration services through secure digital identity
            verification powered by Fayda.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              to="/auth/fayda"
              className="inline-flex h-[54px] items-center justify-center rounded-[10px] bg-[#1f4f8f] px-6 text-xl font-semibold text-white hover:bg-[#153d73]"
            >
              Login with Fayda
            </Link>
            <Link
              to="/auth/foreign"
              className="inline-flex h-[54px] items-center justify-center rounded-[10px] border border-gray-200 bg-white px-6 text-xl font-semibold text-black hover:bg-gray-50"
            >
              Foreign User Access
            </Link>
            <Link
              to="/applicant-dashboard"
              className="inline-flex h-[54px] items-center justify-center rounded-[10px] border border-gray-200 bg-white px-6 text-xl font-semibold text-black hover:bg-gray-50"
            >
              Track Application
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="px-9 py-[78px]">
        <h2 className="text-[30px] font-semibold text-[#020817]">
          Immigration Services
        </h2>
        <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="block rounded-[14px] border border-gray-200 bg-white px-9 py-10 hover:border-gray-300"
            >
              <h3 className="text-2xl font-semibold text-[#020817]">
                {service.title}
              </h3>
              <p className="mt-4 text-xl leading-7 text-[#334155]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
