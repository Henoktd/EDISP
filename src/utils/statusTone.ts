import type {
  ApplicationStatus,
  ServiceStatus,
  VerificationStep,
} from '../types/platform'

export function serviceTone(status: ServiceStatus) {
  if (status === 'active') return 'blue'
  if (status === 'scheduled') return 'gold'
  return 'neutral'
}

export function applicationTone(status: ApplicationStatus) {
  if (status === 'Approved' || status === 'Fayda Verified') return 'green'
  if (status === 'Rejected' || status === 'Verification Failed' || status === 'Escalated') {
    return 'red'
  }
  if (status === 'Submitted') return 'blue'
  return 'gold'
}

export function verificationTone(status: VerificationStep['status']) {
  if (status === 'complete') return 'green'
  if (status === 'active') return 'gold'
  return 'neutral'
}
