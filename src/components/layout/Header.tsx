import { Globe2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function headerIdentity(pathname: string) {
  if (pathname.startsWith('/officer') || pathname.startsWith('/officer-dashboard')) {
    return {
      title: 'Officer Case Review',
      subtitle: 'Digital Service Platform',
      user: 'Senior Officer Mekonnen',
      showNav: false,
    }
  }

  if (pathname.startsWith('/admin') || pathname.startsWith('/admin-dashboard')) {
    return {
      title: 'Administrative Oversight Dashboard',
      subtitle: 'Digital Service Platform',
      user: 'Admin User',
      showNav: false,
    }
  }

  if (pathname.startsWith('/dashboard') || pathname.startsWith('/applicant-dashboard')) {
    return {
      title: 'Ethiopian Immigration Services',
      subtitle: 'Digital Service Platform',
      user: 'Abebe Kebede',
      showNav: false,
    }
  }

  return {
    title: 'Ethiopian Immigration Services',
    subtitle: 'Digital Service Platform',
    user: '',
    showNav: !pathname.startsWith('/auth'),
  }
}

export function Header() {
  const { pathname } = useLocation()
  const identity = headerIdentity(pathname)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex min-h-[74px] items-center justify-between gap-5 px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#1f4f8f] text-sm font-semibold text-white">
            ET
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 text-[#020817] md:text-base">
              {identity.title}
            </p>
            <p className="text-xs leading-4 text-[#334155]">{identity.subtitle}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {identity.showNav ? (
            <>
              <Link to="/services" className="text-sm text-[#1e293b] hover:text-[#1f4f8f]">
                Services
              </Link>
              <Link to="/applicant-dashboard" className="text-sm text-[#1e293b] hover:text-[#1f4f8f]">
                Track Application
              </Link>
              <Link to="/system-architecture" className="text-sm text-[#1e293b] hover:text-[#1f4f8f]">
                Help
              </Link>
            </>
          ) : null}
          {identity.user ? <span className="text-sm text-[#020817]">{identity.user}</span> : null}
          <button
            type="button"
            className="flex h-9 items-center gap-2 rounded border border-gray-200 px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            <Globe2 className="h-4 w-4" aria-hidden="true" />
            English
          </button>
        </nav>
      </div>
    </header>
  )
}
