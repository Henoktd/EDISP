import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function AppShell() {
  const { pathname } = useLocation()
  const withSidebar =
    pathname.startsWith('/applicant-dashboard') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/officer-dashboard') ||
    pathname.startsWith('/officer') ||
    pathname.startsWith('/admin-dashboard') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/system-architecture')

  return (
    <div className="min-h-screen bg-gov-surface text-gov-ink">
      <Header />
      {withSidebar ? (
        <div className="lg:flex">
          <Sidebar />
          <main className="min-w-0 flex-1">
            <Outlet />
          </main>
        </div>
      ) : (
        <main className="min-w-0">
          <Outlet />
        </main>
      )}
    </div>
  )
}
