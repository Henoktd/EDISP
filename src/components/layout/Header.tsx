import { Globe2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()
  const showNav = !pathname.startsWith('/auth')

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex min-h-[112px] items-center justify-between gap-6 px-5 py-5 md:px-9">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[4px] bg-[#1f4f8f] text-2xl font-medium text-white">
            ET
          </div>
          <div>
            <p className="text-xl font-semibold leading-7 text-[#020817] md:text-2xl">
              Ethiopian Immigration Services
            </p>
            <p className="text-base leading-6 text-[#334155]">
              Digital Service Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {showNav ? (
            <>
              <Link to="/services" className="text-xl text-[#1e293b] hover:text-[#1f4f8f]">
                Services
              </Link>
              <Link to="/applicant-dashboard" className="text-xl text-[#1e293b] hover:text-[#1f4f8f]">
                Track Application
              </Link>
              <Link to="/system-architecture" className="text-xl text-[#1e293b] hover:text-[#1f4f8f]">
                Help
              </Link>
            </>
          ) : null}
          <button
            type="button"
            className="flex h-[50px] items-center gap-3 rounded-md border border-gray-200 px-5 text-xl font-semibold text-gray-900 hover:bg-gray-50"
          >
            <Globe2 className="h-6 w-6" aria-hidden="true" />
            English
          </button>
        </nav>
      </div>
    </header>
  )
}
