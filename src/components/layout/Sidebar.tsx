import { NavLink, useLocation } from 'react-router-dom'
import {
  BarChart3,
  ClipboardList,
  FileText,
  HelpCircle,
  Home,
  Network,
  Shield,
  TrendingUp,
  UserRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../utils/cn'

type NavItem = {
  to: string
  label: string
  icon: LucideIcon
}

function navForPath(pathname: string): NavItem[] {
  if (pathname.startsWith('/officer') || pathname.startsWith('/officer-dashboard')) {
    return [
      { to: '/officer-dashboard', label: 'Case Queue', icon: FileText },
      { to: '/officer-dashboard', label: 'Assigned Applications', icon: ClipboardList },
      { to: '/officer-dashboard', label: 'Verifications', icon: Shield },
      { to: '/officer-dashboard', label: 'Decisions', icon: FileText },
      { to: '/officer-dashboard/escalated', label: 'Escalations', icon: HelpCircle },
      { to: '/officer-dashboard', label: 'Reports', icon: BarChart3 },
    ]
  }

  if (pathname.startsWith('/admin') || pathname.startsWith('/admin-dashboard')) {
    return [
      { to: '/admin-dashboard', label: 'Overview', icon: BarChart3 },
      { to: '/admin-dashboard', label: 'Applications', icon: ClipboardList },
      { to: '/admin-dashboard', label: 'Officers', icon: UserRound },
      { to: '/admin-dashboard', label: 'Service Performance', icon: TrendingUp },
      { to: '/admin-dashboard', label: 'Revenue', icon: TrendingUp },
      { to: '/admin-dashboard', label: 'Audit Logs', icon: Shield },
      { to: '/admin-dashboard', label: 'Reports', icon: FileText },
      { to: '/system-architecture', label: 'System Architecture', icon: Network },
    ]
  }

  return [
    { to: '/applicant-dashboard', label: 'Dashboard', icon: Home },
    { to: '/applicant-dashboard', label: 'My Applications', icon: FileText },
    { to: '/services', label: 'Services', icon: ClipboardList },
    { to: '/applicant-dashboard', label: 'Documents', icon: FileText },
    { to: '/applicant-dashboard', label: 'Payments', icon: BarChart3 },
    { to: '/system-architecture', label: 'Help & Support', icon: HelpCircle },
  ]
}

export function Sidebar() {
  const { pathname } = useLocation()
  const navItems = navForPath(pathname)

  return (
    <aside className="border-b border-gov-border bg-white lg:min-h-[calc(100vh-75px)] lg:w-48 lg:border-b-0 lg:border-r">
      <nav className="px-3 py-4" aria-label="Platform navigation">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={`${item.label}-${item.to}`}
                to={item.to}
                end={item.to === '/applicant-dashboard' || item.to === '/admin-dashboard'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-gray-100 text-[#020817]'
                      : 'text-[#334155] hover:bg-gray-50 hover:text-[#020817]',
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
