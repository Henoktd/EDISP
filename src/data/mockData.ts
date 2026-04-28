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
  submittedDate: 'April 27, 2026',
  appointmentDate: 'May 3, 2026',
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
  {
    title: 'Visa Services',
    description: 'Entry, tourist, business, transit',
    detail: 'Apply for visitor, business, transit, and extension services.',
    path: '/services',
  },
  {
    title: 'Residency',
    description: 'Temporary and long-term permits',
    detail: 'Apply for a residence permit using verified identity data.',
    path: '/apply/residence/step1',
  },
  {
    title: 'Work Permit',
    description: 'Legal work authorization',
    detail: 'Coordinate employment authorization with immigration status.',
    path: '/services',
  },
  {
    title: 'Exit Clearance',
    description: 'Travel permissions',
    detail: 'Submit regulated departure and clearance requests.',
    path: '/services',
  },
  {
    title: 'Status Tracking',
    description: 'Track application progress',
    detail: 'View case status, appointment dates, and officer decisions.',
    path: '/applicant-dashboard',
  },
  {
    title: 'Payments',
    description: 'Fees and receipts',
    detail: 'Review simulated payment status and receipt information.',
    path: '/applicant-dashboard',
  },
] as const

export const applicationTimeline = [
  {
    title: 'Identity verified',
    date: 'April 27, 2026',
    description: 'Fayda identity and biometric status confirmed for demo flow.',
  },
  {
    title: 'Application submitted',
    date: 'April 27, 2026',
    description: 'Residence permit request received by the immigration portal.',
  },
  {
    title: 'Officer review',
    date: 'April 28, 2026',
    description: 'Application assigned to Senior Officer Mekonnen.',
  },
  {
    title: 'Appointment scheduled',
    date: 'May 3, 2026',
    description: 'Applicant visit date reserved for residence permit review.',
  },
] as const

export const adminChartData = [
  { name: 'Mon', applications: 240, approved: 188 },
  { name: 'Tue', applications: 256, approved: 204 },
  { name: 'Wed', applications: 271, approved: 221 },
  { name: 'Thu', applications: 286, approved: 232 },
  { name: 'Fri', applications: 263, approved: 217 },
] as const

export const applicationQueue = [
  {
    applicationId: 'ETH-RES-10234',
    applicantName: applicant.name,
    service: 'Residence Permit',
    submitted: 'Apr 27, 2026',
    faydaStatus: 'Verified',
    payment: 'Paid',
    status: 'Under Review',
    risk: 'Low',
  },
  {
    applicationId: 'ETH-VIS-10235',
    applicantName: 'Hana Tesfaye',
    service: 'Visa Services',
    submitted: 'Apr 27, 2026',
    faydaStatus: 'Verified',
    payment: 'Paid',
    status: 'Submitted',
    risk: 'Low',
  },
  {
    applicationId: 'ETH-WRK-10236',
    applicantName: 'Dawit Alemu',
    service: 'Work Permit',
    submitted: 'Apr 26, 2026',
    faydaStatus: 'Verified',
    payment: 'Paid',
    status: 'Correction Required',
    risk: 'Medium',
  },
] as const

export const processingActivity = [
  {
    applicationId: 'ETH-RES-10234',
    service: 'Residence Permit',
    officer: application.officer,
    status: 'Approved',
    processingTime: '2 days',
    decisionDate: 'Apr 28, 2026',
  },
  {
    applicationId: 'ETH-VIS-10235',
    service: 'Visa Services',
    officer: 'Officer Selam',
    status: 'Under Review',
    processingTime: '1 day',
    decisionDate: 'Pending',
  },
  {
    applicationId: 'ETH-WRK-10236',
    service: 'Work Permit',
    officer: 'Officer Dawit',
    status: 'Correction Required',
    processingTime: '3 days',
    decisionDate: 'Pending',
  },
] as const
