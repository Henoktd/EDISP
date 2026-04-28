import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { Input } from '../components/ui/Input'
import { applicant } from '../data/mockData'

export function FaydaLoginPage() {
  return (
    <div className="min-h-[calc(100vh-75px)] bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-[360px] rounded-lg border border-gray-200 bg-white px-7 py-8 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
          <Shield className="h-7 w-7" aria-hidden="true" />
        </div>

        <div className="mt-5 text-center">
          <h1 className="text-xl font-semibold text-[#020817]">
            Fayda Identity Verification
          </h1>
          <p className="mt-2 text-sm text-[#334155]">National Digital ID System</p>
        </div>

        <div className="mt-6">
          <Input
            label="Fayda Identification Number"
            defaultValue={applicant.faydaId.replaceAll(' ', '')}
            helperText="Enter your 12-digit Fayda Identification Number"
            className="h-9 border-0 bg-[#f3f3f5]"
          />
        </div>

        <Link
          to="/auth/verifying"
          className="mt-4 inline-flex h-[50px] w-full items-center justify-center rounded-[10px] bg-[#205493] px-4 text-lg font-semibold text-white hover:bg-[#1a477f]"
        >
          Verify Identity with Fayda
        </Link>

        <Link
          to="/auth/foreign"
          className="mt-5 block text-center text-sm font-medium text-[#1f4f8f] hover:underline"
        >
          Foreign user? Continue with passport
        </Link>

        <div className="mt-6 rounded border border-blue-100 bg-blue-50 px-4 py-4 text-sm text-[#153d73]">
          Identity verification is simulated for demo purposes.
        </div>
      </div>
    </div>
  )
}
