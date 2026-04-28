export type ServiceStatus = 'active' | 'scheduled' | 'controlled'

export type ApplicationStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Approved'
  | 'Rejected'
  | 'Correction Required'
  | 'Escalated'
  | 'Fayda Verified'
  | 'Verification Failed'

export type ServiceCard = {
  title: string
  description: string
  path: string
  status: ServiceStatus
  processingTime: string
}

export type ApplicationRecord = {
  id: string
  applicant: string
  nationality: string
  service: string
  status: ApplicationStatus
  paymentStatus?: 'Paid' | 'Unpaid'
  officer?: string
  riskLevel?: string
  updatedAt: string
}

export type VerificationStep = {
  title: string
  description: string
  status: 'complete' | 'active' | 'pending'
}

export type PlatformMetric = {
  label: string
  value: string
  detail: string
}

export type ChartPoint = {
  name: string
  applications: number
  verified: number
}
