import type { ReactNode } from 'react'
import { Card } from './Card'

type PanelProps = {
  children: ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return <Card className={className}>{children}</Card>
}
