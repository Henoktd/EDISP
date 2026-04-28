import { Languages } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-[134px] items-center justify-between px-9">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[4px] bg-[#1f4f8f] text-2xl font-medium text-white">
            ET
          </div>
          <div>
            <p className="text-2xl font-semibold leading-8 text-[#020817]">
              Ethiopian Immigration Services
            </p>
            <p className="text-base leading-6 text-[#334155]">
              Digital Service Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link to="/services" className="text-xl text-[#1e293b] hover:text-gray-900">
            Services
          </Link>
          <Link to="/applicant" className="text-xl text-[#1e293b] hover:text-gray-900">
            Track Application
          </Link>
          <Link to="/architecture" className="text-xl text-[#1e293b] hover:text-gray-900">
            Help
          </Link>
          <button
            type="button"
            className="flex h-[50px] items-center gap-3 rounded-md border border-gray-200 px-5 text-xl font-semibold text-gray-900 hover:bg-gray-50"
          >
            <Languages className="h-6 w-6" aria-hidden="true" />
            English
          </button>
        </nav>
      </div>
    </header>
  )
}
