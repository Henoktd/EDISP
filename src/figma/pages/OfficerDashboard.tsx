import { useState } from "react";
import { Header } from "../components/Header";
import { StatusBadge } from "../components/StatusBadge";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { mockApplications, mockApplication, mockApplicant, mockDocuments } from "../data/mockData";
import { FileText, AlertCircle, CheckCircle2, User } from "lucide-react";
import type { StatusType } from "../components/StatusBadge";

type DecisionState = "review" | "approved" | "rejected" | "correction" | "escalated";

export function OfficerDashboard() {
  const [selectedApp, setSelectedApp] = useState(mockApplications[0].id);
  const [decision, setDecision] = useState<DecisionState>("review");
  const [note, setNote] = useState("");

  const timelineSteps = [
    "Identity verified",
    "Application submitted",
    "Documents uploaded",
    "Payment confirmed",
    "Officer review started",
  ];

  const handleDecision = (newDecision: DecisionState) => {
    setDecision(newDecision);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Officer Case Review" userName="Senior Officer Mekonnen" />
      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)]">
          <nav className="p-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded bg-gray-100 text-gray-900">
              <FileText className="w-4 h-4" />
              Case Queue
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              Assigned Applications
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <CheckCircle2 className="w-4 h-4" />
              Verifications
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              Decisions
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <AlertCircle className="w-4 h-4" />
              Escalations
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              Reports
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-2xl text-gray-900 mb-1">Application Queue</h2>
            <p className="text-sm text-gray-600">Officer Case Review System</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1200px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Application ID</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Applicant Name</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Service</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Submitted</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Fayda Status</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Payment</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Current Status</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {mockApplications.map((app) => (
                    <tr
                      key={app.id}
                      onClick={() => setSelectedApp(app.id)}
                      className={`border-b border-gray-100 cursor-pointer transition-colors ${
                        selectedApp === app.id ? "bg-blue-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono whitespace-nowrap">{app.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{app.applicantName}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{app.service}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{app.submittedDate}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={app.faydaStatus as StatusType} />
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={app.paymentStatus as StatusType} />
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={app.status as StatusType} />
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={app.riskLevel as StatusType} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-base text-gray-900">Case Details — {selectedApp}</h3>
              <p className="text-xs text-gray-600 mt-1">Complete case review and verification details</p>
            </div>
            <div className="p-6">
              {decision === "review" ? (
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm text-gray-900 mb-3">Applicant Identity</h4>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Name: </span>
                          <span className="text-gray-900">{mockApplicant.name}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Fayda ID: </span>
                          <span className="text-gray-900">{mockApplicant.faydaId}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">DOB: </span>
                          <span className="text-gray-900">{mockApplicant.dob}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Nationality: </span>
                          <span className="text-gray-900">{mockApplicant.nationality}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Phone: </span>
                          <span className="text-gray-900">{mockApplicant.phone}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Email: </span>
                          <span className="text-gray-900">{mockApplicant.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm text-gray-900 mb-3">Verification Status</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600">Fayda Verification: </span>
                        <StatusBadge status="Verified" />
                      </div>
                      <div>
                        <span className="text-gray-600">Biometric Status: </span>
                        <StatusBadge status="Verified" />
                      </div>
                      <div>
                        <span className="text-gray-600">eKYC Status: </span>
                        <StatusBadge status="eKYC Passed" />
                      </div>
                      <div>
                        <span className="text-gray-600">Risk Level: </span>
                        <StatusBadge status={mockApplication.riskLevel as StatusType} />
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm text-gray-900 mb-3">Application Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Service: </span>
                        <span className="text-gray-900">{mockApplication.service}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Permit Type: </span>
                        <span className="text-gray-900">{mockApplication.permitType}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration: </span>
                        <span className="text-gray-900">{mockApplication.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Purpose: </span>
                        <span className="text-gray-900">{mockApplication.purpose}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Appointment: </span>
                        <span className="text-gray-900">
                          {mockApplication.appointmentDate} — {mockApplication.appointmentTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm text-gray-900 mb-3">Document Checklist</h4>
                    <div className="space-y-2">
                      {mockDocuments.map((doc) => (
                        <div key={doc.name} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{doc.name}: </span>
                          <StatusBadge status="Verified" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm text-gray-900 mb-3">Payment Information</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Status: </span>
                        <StatusBadge status="Paid" />
                      </div>
                      <div>
                        <span className="text-gray-600">Receipt: </span>
                        <span className="text-gray-900">{mockApplication.receiptNumber}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Amount: </span>
                        <span className="text-gray-900">ETB {mockApplication.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm text-gray-900 mb-3">Timeline</h4>
                    <div className="space-y-2">
                      {timelineSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 bg-gray-50 -mx-6 -mb-6 px-6 pb-6 mt-6 rounded-b-lg">
                    <h4 className="text-sm text-gray-900 mb-4">Officer Decision</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      <Button
                        onClick={() => handleDecision("approved")}
                        className="bg-[#059669] hover:bg-[#047857] text-white border-0"
                      >
                        Approve Application
                      </Button>
                      <Button
                        onClick={() => handleDecision("rejected")}
                        className="bg-[#dc2626] hover:bg-[#b91c1c] text-white border-0"
                      >
                        Reject Application
                      </Button>
                      <Button
                        onClick={() => handleDecision("correction")}
                        className="bg-[#d97706] hover:bg-[#b45309] text-white border-0"
                      >
                        Request Correction
                      </Button>
                      <Button
                        onClick={() => handleDecision("escalated")}
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-100"
                      >
                        Escalate to Supervisor
                      </Button>
                    </div>
                  </div>
                </div>
              ) : decision === "approved" ? (
                <div className="space-y-6">
                  <div className="text-center py-8 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-1">Application Approved</h3>
                    <p className="text-sm text-green-700">Decision recorded in system</p>
                  </div>
                  <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-sm text-gray-900 mb-4">Decision Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application ID:</span>
                        <span className="text-gray-900 font-mono">{selectedApp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <StatusBadge status="Approved" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Decision Date:</span>
                        <span className="text-gray-900">April 28, 2026</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reviewing Officer:</span>
                        <span className="text-gray-900">Senior Officer Mekonnen</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Output:</span>
                        <span className="text-gray-900">Residence Permit Approved</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <Button className="bg-[#1a4d8f] hover:bg-[#153d73]">
                      Notify Applicant
                    </Button>
                    <Button variant="outline" onClick={() => handleDecision("review")}>
                      Return to Queue
                    </Button>
                  </div>
                </div>
              ) : decision === "rejected" ? (
                <div className="space-y-6">
                  <div className="text-center py-8 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-1">Reject Application</h3>
                    <p className="text-sm text-red-700">Provide rejection reason for official record</p>
                  </div>
                  <div className="max-w-md mx-auto">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <label className="text-sm text-gray-900 mb-2 block">
                        Rejection Reason <span className="text-red-600">*</span>
                      </label>
                      <Textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter detailed reason for application rejection..."
                        rows={5}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        This reason will be included in the official decision record.
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => handleDecision("review")}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c]">
                        Confirm Rejection
                      </Button>
                    </div>
                  </div>
                </div>
              ) : decision === "correction" ? (
                <div className="space-y-6">
                  <div className="text-center py-8 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <AlertCircle className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-1">Request Correction</h3>
                    <p className="text-sm text-amber-700">Specify required corrections to applicant</p>
                  </div>
                  <div className="max-w-md mx-auto">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <label className="text-sm text-gray-900 mb-2 block">
                        Correction Required <span className="text-red-600">*</span>
                      </label>
                      <Textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Example: Please resubmit residence support letter with official stamp and authorized signature."
                        rows={5}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Be specific about what needs to be corrected or resubmitted.
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => handleDecision("review")}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1 bg-[#d97706] hover:bg-[#b45309]">
                        Send Correction Request
                      </Button>
                    </div>
                  </div>
                </div>
              ) : decision === "escalated" ? (
                <div className="space-y-6">
                  <div className="text-center py-8 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <AlertCircle className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-1">Escalate to Supervisor</h3>
                    <p className="text-sm text-orange-700">Case requires senior review or additional verification</p>
                  </div>
                  <div className="max-w-md mx-auto">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                      <div className="flex justify-between text-sm mb-4">
                        <span className="text-gray-600">Escalation Target:</span>
                        <span className="text-gray-900">Supervisor Review Queue</span>
                      </div>
                      <label className="text-sm text-gray-900 mb-2 block">
                        Escalation Reason <span className="text-red-600">*</span>
                      </label>
                      <Textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Example: Additional verification required for employment documentation."
                        rows={5}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Provide clear reason for supervisor escalation.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => handleDecision("review")}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="flex-1 bg-[#ea580c] hover:bg-[#c2410c]"
                      >
                        Escalate Case
                      </Button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
