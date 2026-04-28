import { BriefcaseBusiness, Shield, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type AccessOption = {
  title: string
  description: string
  path: string
  icon: LucideIcon
  tone: string
}

const accessOptions: AccessOption[] = [
  {
    title: 'Applicant Access',
    description: 'Apply for immigration services and track your application status.',
    path: '/auth/fayda',
    icon: UserRound,
    tone: 'bg-blue-50 text-[#1f4f8f]',
  },
  {
    title: 'Officer Access',
    description: 'Review submitted applications and process case decisions.',
    path: '/officer-dashboard',
    icon: BriefcaseBusiness,
    tone: 'bg-purple-50 text-purple-700',
  },
  {
    title: 'Admin Access',
    description: 'Monitor service performance, reporting, and system oversight.',
    path: '/admin-dashboard',
    icon: Shield,
    tone: 'bg-gray-100 text-gray-700',
  },
]

export function AuthPage() {
  return (
    <div className="min-h-[calc(100vh-113px)] bg-gray-50 px-6 py-[72px] md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <h1 className="text-[32px] font-semibold leading-tight text-[#020817]">
            Access Ethiopian Immigration Services
          </h1>
          <p className="mt-4 text-xl leading-7 text-[#334155]">
            Select your role to continue to the platform
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {accessOptions.map((option) => {
            const Icon = option.icon

            return (
              <Link
                key={option.title}
                to={option.path}
                className="block min-h-[274px] rounded-[12px] border border-gray-200 bg-white px-11 py-11 shadow-[0_0_0_1px_rgba(15,23,42,0.02)] transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-[10px] ${option.tone}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h2 className="mt-8 text-2xl font-semibold text-[#020817]">
                  {option.title}
                </h2>
                <p className="mt-4 max-w-[310px] text-xl font-medium leading-7 text-[#334155]">
                  {option.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
