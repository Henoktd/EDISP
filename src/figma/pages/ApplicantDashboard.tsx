import { Header } from "../components/Header";
import { StatusBadge } from "../components/StatusBadge";
import { Button } from "../components/ui/button";
import { mockApplication, mockApplicant } from "../data/mockData";
import { Home, FileText, CreditCard, HelpCircle, User, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { StatusType } from "../components/StatusBadge";

export function ApplicantDashboard() {
  const navigate = useNavigate();

  const timelineSteps = [
    { label: "Identity Verified", completed: true },
    { label: "Application Submitted", completed: true },
    { label: "Payment Confirmed", completed: true },
    { label: "Under Officer Review", completed: true },
    { label: "Decision Pending", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Abebe Kebede" />
      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)]">
          <nav className="p-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded bg-gray-100 text-gray-900">
              <Home className="w-4 h-4" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              My Applications
            </button>
            <button
              onClick={() => navigate("/services")}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700"
            >
              <FileText className="w-4 h-4" />
              Services
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              Documents
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <CreditCard className="w-4 h-4" />
              Payments
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <HelpCircle className="w-4 h-4" />
              Help & Support
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-2xl text-gray-900 mb-1">
              Welcome, {mockApplicant.name}
            </h2>
            <p className="text-sm text-gray-600">Applicant Dashboard</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Identity Status</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <StatusBadge status="Fayda Verified" />
                    <StatusBadge status="Biometric Verified" />
                    <StatusBadge status="eKYC Passed" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Active Applications</p>
              <p className="text-3xl text-gray-900">1</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Pending Actions</p>
              <p className="text-3xl text-gray-900">0</p>
              <p className="text-xs text-gray-500 mt-1">No action required</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-base text-gray-900">My Applications</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-900 mb-1">
                        {mockApplication.id}
                      </p>
                      <p className="text-sm text-gray-600">
                        {mockApplication.service}
                      </p>
                    </div>
                    <StatusBadge status={mockApplication.status as StatusType} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-gray-600">Payment Status: </span>
                      <StatusBadge status="Paid" className="ml-1" />
                    </div>
                    <div>
                      <span className="text-gray-600">Fayda Verification: </span>
                      <StatusBadge status="Verified" className="ml-1" />
                    </div>
                    <div>
                      <span className="text-gray-600">Submitted: </span>
                      <span className="text-gray-900">{mockApplication.submittedDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Appointment: </span>
                      <span className="text-gray-900">{mockApplication.appointmentDate}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Track Status
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Download Receipt
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 mt-6">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-base text-gray-900">Application Status Timeline</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {step.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <p
                      className={`text-sm ${
                        step.completed ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
