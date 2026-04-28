import { Link } from 'react-router-dom'
import { CheckCircle2, UserRound } from 'lucide-react'
import { StatusBadge } from '../components/ui/StatusBadge'
import { applicant } from '../data/mockData'

export function VerifiedPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="mb-6 text-center">
          <CheckCircle2 className="mx-auto mb-2 h-12 w-12 text-green-600" aria-hidden="true" />
          <h1 className="text-xl font-medium text-gray-900">Identity Verified</h1>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded bg-gray-200 text-gray-400">
              <UserRound className="h-10 w-10" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-base font-medium text-gray-900">{applicant.name}</p>
              <p className="text-sm text-gray-600">Fayda ID: {applicant.faydaId}</p>
              <p className="text-sm text-gray-600">DOB: {applicant.dateOfBirth}</p>
              <p className="text-sm text-gray-600">Nationality: {applicant.nationality}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <StatusBadge status="Fayda Verified" />
                <StatusBadge tone="green">Biometric Verified</StatusBadge>
                <StatusBadge tone="green">eKYC Passed</StatusBadge>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="mb-2 text-sm text-gray-600">Contact Information</p>
            <p className="text-sm text-gray-700">Phone: {applicant.phone}</p>
            <p className="text-sm text-gray-700">Email: {applicant.email}</p>
          </div>

          <div className="border-t border-gray-100 pt-2 text-xs text-gray-500">
            Verified via Fayda National ID System
          </div>
        </div>

        <Link
          to="/services"
          className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#1a4d8f] px-4 text-sm font-medium text-white hover:bg-[#153d73]"
        >
          Continue to Services
        </Link>
      </div>
    </div>
  )
}
