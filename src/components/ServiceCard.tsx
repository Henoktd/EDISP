import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from './ui/Card'

type ServiceCardProps = {
  title: string
  description: string
  detail: string
  path: string
  icon: LucideIcon
}

export function ServiceCard({
  title,
  description,
  detail,
  path,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col" bodyClassName="flex h-full flex-col p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded border border-blue-100 bg-blue-50 text-[#1a4d8f]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-[#020817]">{title}</h2>
      <p className="mt-3 text-base leading-7 text-[#334155]">{description}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{detail}</p>
      <Link
        to={path}
        className="mt-6 inline-flex h-11 items-center justify-between rounded-md border border-gray-200 bg-white px-4 text-sm font-semibold text-[#1a4d8f] hover:bg-gray-50"
      >
        Open service
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  )
}
