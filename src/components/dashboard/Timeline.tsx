import { CheckCircle2 } from 'lucide-react'
import { applicationTimeline } from '../../data/mockData'

export function Timeline() {
  return (
    <ol className="space-y-4">
      {applicationTimeline.map((item) => (
        <li key={item.title} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1a4d8f]" aria-hidden="true" />
          <div>
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="mt-1 text-xs font-medium uppercase text-gray-500">
              {item.date}
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
