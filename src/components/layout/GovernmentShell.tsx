import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  BarChart3,
  ClipboardList,
  FileText,
  Globe2,
  Home,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  Network,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../utils/cn'

type NavItem = {
  to: string
  label: string
  icon: LucideIcon
}

type NavSection = {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'Identity access',
    items: [
      { to: '/', label: 'National overview', icon: Home },
      { to: '/fayda-login', label: 'Fayda login', icon: ShieldCheck },
      { to: '/foreign-login', label: 'Foreign applicant', icon: Globe2 },
    ],
  },
  {
    title: 'Public services',
    items: [
      { to: '/services', label: 'Service catalog', icon: ClipboardList },
      { to: '/apply/residence-permit', label: 'Residence permit', icon: FileText },
      { to: '/applicant-dashboard', label: 'Applicant dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Institutional workspaces',
    items: [
      { to: '/officer-dashboard', label: 'Officer dashboard', icon: UserCheck },
      { to: '/admin-dashboard', label: 'Admin dashboard', icon: BarChart3 },
      { to: '/architecture', label: 'Architecture', icon: Network },
    ],
  },
]

export function GovernmentShell() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gov-surface text-gov-ink">
      <header className="border-b border-gov-border bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded border border-gov-green-100 bg-gov-green-50 text-gov-green-700">
              <Landmark className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gov-muted">
                Federal Democratic Republic of Ethiopia
              </p>
              <p className="text-lg font-semibold text-gov-ink">
                Immigration Digital Service Platform
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-gov-muted">
            <span className="inline-flex items-center gap-2 rounded border border-gov-border bg-gov-surface px-3 py-2">
              <LockKeyhole className="h-4 w-4 text-gov-green-700" aria-hidden="true" />
              Prototype environment
            </span>
            <span className="rounded border border-gov-gold-100 bg-gov-gold-100 px-3 py-2 text-[#73520a]">
              Fayda verification simulated
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[300px_1fr]">
        <aside className="border-b border-gov-border bg-white lg:min-h-[calc(100vh-81px)] lg:border-b-0 lg:border-r">
          <nav className="space-y-6 px-4 py-5 md:px-6" aria-label="Platform navigation">
            {navSections.map((section) => (
              <div key={section.title}>
                <p className="mb-2 px-3 text-[11px] font-semibold uppercase text-gov-muted">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon

                    return (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-gov-green-50 text-gov-green-700'
                              : 'text-gov-muted hover:bg-gov-surface hover:text-gov-ink',
                          )
                        }
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{item.label}</span>
                      </NavLink>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 px-4 py-6 md:px-8 lg:px-10 lg:py-8">
          <div className="mb-5 flex items-center justify-between gap-3 text-xs uppercase text-gov-muted">
            <span>Route: {location.pathname}</span>
            <span>Mock data only</span>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
