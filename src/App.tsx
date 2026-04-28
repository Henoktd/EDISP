import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
          <Route path="/auth/fayda" element={<FaydaLoginPage />} />
          <Route path="/auth/verifying" element={<FaydaVerifyingPage />} />
          <Route path="/auth/verified" element={<VerifiedProfilePage />} />
          <Route path="/auth/failed" element={<VerificationFailedPage />} />
          <Route path="/auth/foreign" element={<ForeignLoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/apply/residence-permit"
            element={<ResidencePermitPage />}
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route
            path="/applicant-dashboard"
            element={<ApplicantDashboardPage />}
          />
          <Route path="/officer-dashboard" element={<OfficerDashboardPage />} />
          <Route
            path="/officer-dashboard/:decision"
            element={<OfficerDashboardPage />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/system-architecture" element={<ArchitecturePage />} />

          {/* Legacy aliases kept so older shared links still work during demo review. */}
          <Route path="/verified" element={<VerifiedProfilePage />} />
          <Route path="/applicant" element={<ApplicantDashboardPage />} />
          <Route path="/officer" element={<OfficerDashboardPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/fayda-login" element={<FaydaLoginPage />} />
          <Route path="/fayda-verifying" element={<FaydaVerifyingPage />} />
          <Route path="/verified-profile" element={<VerifiedProfilePage />} />
          <Route path="/foreign-login" element={<ForeignLoginPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
