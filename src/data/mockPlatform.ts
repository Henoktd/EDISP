import type {
  ApplicationRecord,
  ChartPoint,
  PlatformMetric,
  ServiceCard,
  VerificationStep,
} from '../types/platform'
import { adminMetrics, applicant, application, serviceCategories } from './mockData'

export const platformMetrics: PlatformMetric[] = [
  {
    label: 'Total applications',
    value: adminMetrics.totalApplications,
    detail: 'All digital immigration service records',
  },
  {
    label: 'Applications today',
    value: adminMetrics.applicationsToday,
    detail: 'New submissions on 2026-04-27',
  },
  {
    label: 'Under review',
    value: adminMetrics.underReview,
    detail: 'Cases awaiting officer decision',
  },
  {
    label: 'Approved this month',
    value: adminMetrics.approvedThisMonth,
    detail: `Average processing time: ${adminMetrics.averageProcessingTime}`,
  },
]

export const adminSummaryMetrics: PlatformMetric[] = [
  ...platformMetrics,
  {
    label: 'Revenue collected',
    value: adminMetrics.revenueCollected,
    detail: 'Paid application and service fees',
  },
  {
    label: 'Fayda verification success rate',
    value: adminMetrics.faydaVerificationSuccessRate,
    detail: 'Successful simulated identity matches',
  },
]

export const serviceCards: ServiceCard[] = serviceCategories.map((category) => ({
  title: category.title,
  description: category.detail,
  path: category.path,
  status: category.title === 'Residency' ? 'active' : 'scheduled',
  processingTime:
    category.title === 'Residency'
      ? `${adminMetrics.averageProcessingTime} average`
      : 'Service workflow preview',
}))

export const faydaProfile = {
  faydaId: applicant.faydaId,
  fullName: applicant.name,
  dateOfBirth: applicant.dateOfBirth,
  nationality: applicant.nationality,
  verificationLevel: applicant.verificationStatus,
  biometricStatus: applicant.biometricStatus,
  phone: applicant.phone,
  email: applicant.email,
}

export const verificationSteps: VerificationStep[] = [
  {
    title: 'Fayda number received',
    description: `The prototype accepted Fayda ID ${applicant.faydaId}.`,
    status: 'complete',
  },
  {
    title: 'Biographic match',
    description: `${applicant.name}, date of birth, and phone fields are matched in mock data.`,
    status: 'complete',
  },
  {
    title: 'Biometric status confirmed',
    description: `Biometric status is marked ${applicant.biometricStatus}.`,
    status: 'complete',
  },
  {
    title: 'Immigration profile prepared',
    description: `${application.service} application ${application.applicationId} is ready for review.`,
    status: 'active',
  },
]

export const applicationQueue: ApplicationRecord[] = [
  {
    id: application.applicationId,
    applicant: applicant.name,
    nationality: applicant.nationality,
    service: application.service,
    status: application.status,
    paymentStatus: application.paymentStatus,
    officer: application.officer,
    riskLevel: application.riskLevel,
    updatedAt: application.submittedDate,
  },
]

export const adminVolume: ChartPoint[] = [
  { name: 'Mon', applications: 240, verified: 232 },
  { name: 'Tue', applications: 256, verified: 248 },
  { name: 'Wed', applications: 271, verified: 262 },
  { name: 'Thu', applications: 286, verified: 277 },
  { name: 'Fri', applications: 263, verified: 255 },
]

export const architectureModules = [
  'Public applicant portal',
  'Simulated Fayda verification layer',
  `${application.service} workflow`,
  `${application.officer} case review workspace`,
  'Administrative analytics dashboard',
  'Audit and policy control model',
]
