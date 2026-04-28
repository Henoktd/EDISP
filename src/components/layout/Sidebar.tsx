import { NavLink } from 'react-router-dom'
import {
  BarChart3,
  ClipboardList,
  FileText,
  Home,
  LayoutDashboard,
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

const navItems: NavItem[] = [
  { to: '/', label: 'Landing', icon: Home },
  { to: '/auth', label: 'Fayda login', icon: ShieldCheck },
  { to: '/verified', label: 'Verified profile', icon: UserCheck },
  { to: '/services', label: 'Service catalogue', icon: ClipboardList },
  { to: '/apply/residence-permit', label: 'Residence permit', icon: FileText },
  { to: '/applicant', label: 'Applicant dashboard', icon: LayoutDashboard },
  { to: '/officer', label: 'Officer review', icon: UserCheck },
  { to: '/admin', label: 'Admin oversight', icon: BarChart3 },
  { to: '/architecture', label: 'Architecture', icon: Network },
]

export function Sidebar() {
  return (
    <aside className="border-b border-gov-border bg-white lg:min-h-[calc(100vh-81px)] lg:border-b-0 lg:border-r">
      <nav className="px-4 py-5 md:px-6" aria-label="Platform navigation">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase text-gov-muted">
          Platform sections
        </p>
        <div className="space-y-1">
          {navItems.map((item) => {
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
                      ? 'bg-gov-blue-50 text-gov-blue-800'
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
      </nav>
    </aside>
  )
}
