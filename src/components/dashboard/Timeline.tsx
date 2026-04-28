import { CheckCircle2 } from 'lucide-react'

const timelineItems = [
  {
    title: 'Identity verified',
    detail: 'Fayda identity and biometric status confirmed through mock data.',
  },
  {
    title: 'Application submitted',
    detail: 'Residence Permit application received on 2026-04-27.',
  },
  {
    title: 'Officer review assigned',
    detail: 'Senior Officer Mekonnen is assigned for case review.',
  },
  {
    title: 'Appointment scheduled',
    detail: 'Applicant appointment scheduled for 2026-05-03.',
  },
]

export function Timeline() {
  return (
    <ol className="space-y-4">
      {timelineItems.map((item) => (
        <li key={item.title} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1a4d8f]" aria-hidden="true" />
          <div>
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
