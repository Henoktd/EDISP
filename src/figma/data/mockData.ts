// Mock data for the Ethiopian Immigration Digital Service Platform

export const mockApplicant = {
  name: "Abebe Kebede",
  faydaId: "1234 5678 9012",
  dob: "1992-04-18",
  nationality: "Ethiopian",
  phone: "+251 911 234 567",
  email: "abebe.kebede@example.com",
  photoUrl: null,
  verified: true,
  biometricVerified: true,
  ekycPassed: true,
};

export const mockApplication = {
  id: "ETH-RES-10234",
  applicantName: "Abebe Kebede",
  faydaId: "1234 5678 9012",
  service: "Residence Permit",
  status: "Under Review",
  paymentStatus: "Paid",
  receiptNumber: "PAY-ETH-78291",
  amount: 3150,
  submittedDate: "April 27, 2026",
  appointmentDate: "May 3, 2026",
  appointmentTime: "10:30 AM",
  riskLevel: "Low",
  officer: "Senior Officer Mekonnen",
  permitType: "Temporary Residence Permit",
  duration: "1 Year",
  purpose: "Employment residence",
};

export const mockApplications = [
  {
    id: "ETH-RES-10234",
    applicantName: "Abebe Kebede",
    service: "Residence Permit",
    submittedDate: "Apr 27, 2026",
    faydaStatus: "Verified",
    paymentStatus: "Paid",
    status: "Under Review",
    riskLevel: "Low",
  },
  {
    id: "ETH-VIS-10235",
    applicantName: "Hana Tesfaye",
    service: "Visa Services",
    submittedDate: "Apr 27, 2026",
    faydaStatus: "Verified",
    paymentStatus: "Paid",
    status: "Submitted",
    riskLevel: "Low",
  },
  {
    id: "ETH-WRK-10236",
    applicantName: "Dawit Alemu",
    service: "Work Permit",
    submittedDate: "Apr 26, 2026",
    faydaStatus: "Verified",
    paymentStatus: "Paid",
    status: "Correction Required",
    riskLevel: "Medium",
  },
];

export const mockDocuments = [
  { name: "Passport Copy", required: true, uploaded: true },
  { name: "Residence Support Letter", required: true, uploaded: true },
  { name: "Passport Photo", required: true, uploaded: true },
  { name: "Payment Receipt", required: true, uploaded: true },
];

export const mockMetrics = {
  totalApplications: "12,480",
  applicationsToday: "286",
  underReview: "1,143",
  approvedThisMonth: "4,920",
  avgProcessingTime: "3.4 days",
  revenueCollected: "ETB 8.7M",
  faydaVerificationRate: "96.8%",
};

export const mockRecentActivity = [
  {
    id: "ETH-RES-10234",
    service: "Residence Permit",
    officer: "Senior Officer Mekonnen",
    status: "Approved",
    processingTime: "2 days",
    decisionDate: "Apr 28, 2026",
  },
  {
    id: "ETH-VIS-10235",
    service: "Visa Services",
    officer: "Officer Selam",
    status: "Under Review",
    processingTime: "1 day",
    decisionDate: "Pending",
  },
  {
    id: "ETH-WRK-10236",
    service: "Work Permit",
    officer: "Officer Dawit",
    status: "Correction Required",
    processingTime: "3 days",
    decisionDate: "Pending",
  },
];
