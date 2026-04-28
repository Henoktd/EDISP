import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { AdminDashboardPage } from './pages/AdminDashboardPage'
import { ApplicantDashboardPage } from './pages/ApplicantDashboardPage'
import { ArchitecturePage } from './pages/ArchitecturePage'
import { AuthPage } from './pages/AuthPage'
import { ConfirmationPage } from './pages/ConfirmationPage'
import { FaydaLoginPage } from './pages/FaydaLoginPage'
import { FaydaVerifyingPage } from './pages/FaydaVerifyingPage'
import { ForeignLoginPage } from './pages/ForeignLoginPage'
import { HomePage } from './pages/HomePage'
import { OfficerDashboardPage } from './pages/OfficerDashboardPage'
import { ResidencePermitPage } from './pages/ResidencePermitPage'
import { ServicesPage } from './pages/ServicesPage'
import { VerificationFailedPage } from './pages/VerificationFailedPage'
import { VerifiedProfilePage } from './pages/VerifiedProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/apply/residence/:stepId"
            element={<ResidencePermitPage />}
          />
          <Route
            path="/apply/residence/confirmation"
            element={<ConfirmationPage />}
          />
          <Route path="/dashboard" element={<ApplicantDashboardPage />} />
          <Route path="/officer" element={<OfficerDashboardPage />} />
          <Route path="/officer/:decision" element={<OfficerDashboardPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />

          {/* Additional prototype states and legacy aliases kept for shared demo links. */}
          <Route path="/auth/fayda" element={<FaydaLoginPage />} />
          <Route path="/auth/verifying" element={<FaydaVerifyingPage />} />
          <Route path="/auth/verified" element={<VerifiedProfilePage />} />
          <Route path="/auth/failed" element={<VerificationFailedPage />} />
          <Route path="/auth/foreign" element={<ForeignLoginPage />} />
          <Route path="/apply/residence-permit" element={<Navigate to="/apply/residence/step1" replace />} />
          <Route path="/confirmation" element={<Navigate to="/apply/residence/confirmation" replace />} />
          <Route path="/verified" element={<VerifiedProfilePage />} />
          <Route path="/applicant" element={<Navigate to="/dashboard" replace />} />
          <Route path="/applicant-dashboard" element={<Navigate to="/dashboard" replace />} />
          <Route path="/officer-dashboard" element={<Navigate to="/officer" replace />} />
          <Route path="/officer-dashboard/:decision" element={<OfficerDashboardPage />} />
          <Route path="/admin-dashboard" element={<Navigate to="/admin" replace />} />
          <Route path="/system-architecture" element={<Navigate to="/architecture" replace />} />
          <Route path="/fayda-login" element={<FaydaLoginPage />} />
          <Route path="/fayda-verifying" element={<FaydaVerifyingPage />} />
          <Route path="/verified-profile" element={<VerifiedProfilePage />} />
          <Route path="/foreign-login" element={<ForeignLoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
