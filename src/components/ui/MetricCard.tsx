import type { PlatformMetric } from '../../types/platform'
import { Card } from './Card'

type MetricCardProps = {
  metric?: PlatformMetric
  label?: string
  value?: string
  detail?: string
}

export function MetricCard({ metric, label, value, detail }: MetricCardProps) {
  const resolvedLabel = metric?.label ?? label
  const resolvedValue = metric?.value ?? value
  const resolvedDetail = metric?.detail ?? detail

  return (
    <Card>
      <p className="mb-1 text-sm text-gray-600">
        {resolvedLabel}
      </p>
      <p className="text-2xl font-normal text-gray-900">
        {resolvedValue}
      </p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{resolvedDetail}</p>
    </Card>
  )
}
