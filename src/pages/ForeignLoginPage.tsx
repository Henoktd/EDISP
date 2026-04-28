import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'

export function ForeignLoginPage() {
  return (
    <div className="min-h-[calc(100vh-75px)] bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-[540px] rounded-lg border border-gray-200 bg-white px-11 py-12 shadow-sm">
        <h1 className="text-[28px] font-semibold leading-tight text-[#020817]">
          Foreign User Access
        </h1>

        <div className="mt-8 space-y-6">
          <Input
            label="Passport Number"
            className="h-12 border-0 bg-[#f3f3f5]"
          />
          <Input
            label="Email Address"
            className="h-12 border-0 bg-[#f3f3f5]"
            helperText="Email verification is simulated for this prototype."
          />
        </div>

        <Link
          to="/services"
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#205493] px-4 text-lg font-semibold text-white hover:bg-[#1a477f]"
        >
          Continue to Services
        </Link>

        <Link
          to="/auth/fayda"
          className="mt-7 block text-center text-lg font-medium text-[#334155] hover:text-[#1f4f8f]"
        >
          ← Back to Fayda login
        </Link>
      </div>
    </div>
  )
}
