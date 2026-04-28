export const applicant = {
  name: 'Abebe Kebede',
  faydaId: '1234 5678 9012',
  dateOfBirth: '1992-04-18',
  nationality: 'Ethiopian',
  phone: '+251 911 234 567',
  email: 'abebe.kebede@example.com',
  verificationStatus: 'Fayda Verified',
  biometricStatus: 'Verified',
} as const

export const application = {
  applicationId: 'ETH-RES-10234',
  service: 'Residence Permit',
  status: 'Under Review',
  paymentStatus: 'Paid',
  receiptNumber: 'PAY-ETH-78291',
  submittedDate: '2026-04-27',
  appointmentDate: '2026-05-03',
  officer: 'Senior Officer Mekonnen',
  riskLevel: 'Low',
  documents: [
    { name: 'Passport Copy', status: 'Uploaded' },
    { name: 'Residence Support Letter', status: 'Uploaded' },
    { name: 'Photo', status: 'Uploaded' },
    { name: 'Payment Receipt', status: 'Uploaded' },
  ],
} as const

export const adminMetrics = {
  totalApplications: '12,480',
  applicationsToday: '286',
  underReview: '1,143',
  approvedThisMonth: '4,920',
  averageProcessingTime: '3.4 days',
  revenueCollected: 'ETB 8.7M',
  faydaVerificationSuccessRate: '96.8%',
} as const

export const serviceCategories = [
  'Visa Services',
  'Residency',
  'Work Permit',
  'Exit Clearance',
  'Status Tracking',
  'Payments',
] as const
