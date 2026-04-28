import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from './figma/pages/AdminDashboard'
import { ApplicantDashboard } from './figma/pages/ApplicantDashboard'
import { ApplicationConfirmation } from './figma/pages/ApplicationConfirmation'
import { ApplicationStep1 } from './figma/pages/ApplicationStep1'
import { ApplicationStep2 } from './figma/pages/ApplicationStep2'
import { ApplicationStep3 } from './figma/pages/ApplicationStep3'
import { ApplicationStep4 } from './figma/pages/ApplicationStep4'
import { ApplicationStep5 } from './figma/pages/ApplicationStep5'
import { ApplicationStep6 } from './figma/pages/ApplicationStep6'
import { Auth } from './figma/pages/Auth'
import { Landing } from './figma/pages/Landing'
import { OfficerDashboard } from './figma/pages/OfficerDashboard'
import { Services } from './figma/pages/Services'
import { SystemArchitecture } from './figma/pages/SystemArchitecture'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/services" element={<Services />} />
        <Route path="/apply/residence/step1" element={<ApplicationStep1 />} />
        <Route path="/apply/residence/step2" element={<ApplicationStep2 />} />
        <Route path="/apply/residence/step3" element={<ApplicationStep3 />} />
        <Route path="/apply/residence/step4" element={<ApplicationStep4 />} />
        <Route path="/apply/residence/step5" element={<ApplicationStep5 />} />
        <Route path="/apply/residence/step6" element={<ApplicationStep6 />} />
        <Route
          path="/apply/residence/confirmation"
          element={<ApplicationConfirmation />}
        />
        <Route path="/dashboard" element={<ApplicantDashboard />} />
        <Route path="/officer" element={<OfficerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/architecture" element={<SystemArchitecture />} />

        {/* Compatibility redirects for links shared before the Figma export was added. */}
        <Route path="/auth/fayda" element={<Navigate to="/auth" replace />} />
        <Route path="/auth/foreign" element={<Navigate to="/auth" replace />} />
        <Route
          path="/apply/residence-permit"
          element={<Navigate to="/apply/residence/step1" replace />}
        />
        <Route
          path="/confirmation"
          element={<Navigate to="/apply/residence/confirmation" replace />}
        />
        <Route path="/applicant-dashboard" element={<Navigate to="/dashboard" replace />} />
        <Route path="/officer-dashboard" element={<Navigate to="/officer" replace />} />
        <Route path="/admin-dashboard" element={<Navigate to="/admin" replace />} />
        <Route
          path="/system-architecture"
          element={<Navigate to="/architecture" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
