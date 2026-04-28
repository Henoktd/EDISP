import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Globe2, ShieldCheck } from 'lucide-react'
import { Input } from '../components/ui/Input'
import { applicant } from '../data/mockData'

export function AuthPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isForeignMode = searchParams.get('mode') === 'foreign'

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-50 text-[#1a4d8f]">
            {isForeignMode ? (
              <Globe2 className="h-5 w-5" aria-hidden="true" />
            ) : (
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            )}
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-900">
              {isForeignMode ? 'Foreign User Access' : 'Login with Fayda'}
            </h1>
            <p className="text-sm text-gray-600">
              {isForeignMode ? 'Passport-based access' : 'National ID verification'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {isForeignMode ? (
            <>
              <Input
                label="Passport number"
                placeholder="P-00000000"
                value="P-70218455"
                readOnly
              />
              <Input
                label="Email"
                placeholder="name@example.com"
                value={applicant.email}
                helperText="Email verification simulated"
                readOnly
              />
            </>
          ) : (
            <Input
              label="Fayda Identification Number"
              placeholder="1234 5678 9012"
              value={applicant.faydaId}
              helperText="Enter your 12-digit Fayda Identification Number."
              readOnly
            />
          )}

          <button
            type="button"
            onClick={() => navigate(isForeignMode ? '/services' : '/verified')}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#1a4d8f] px-4 text-sm font-medium text-white hover:bg-[#153d73]"
          >
            Continue
          </button>

          <Link
            to={isForeignMode ? '/auth' : '/auth?mode=foreign'}
            className="block w-full text-center text-sm text-[#1a4d8f] hover:underline"
          >
            {isForeignMode
              ? 'Login with Fayda instead'
              : 'Foreign user? Continue with passport'}
          </Link>
        </div>

        <div className="mt-6 rounded border border-blue-100 bg-blue-50 p-4">
          <p className="text-xs leading-5 text-gray-700">
            Identity verification is simulated for demo purposes.
          </p>
        </div>
      </div>
    </div>
  )
}
