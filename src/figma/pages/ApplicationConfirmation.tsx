import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { mockApplication } from "../data/mockData";
import { StatusBadge } from "../components/StatusBadge";

export function ApplicationConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Abebe Kebede" />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl text-gray-900 mb-2">
            Application Submitted Successfully
          </h2>
          <p className="text-sm text-gray-600">Your application has been received and is under review</p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Application ID:</span>
              <span className="text-sm text-gray-900">{mockApplication.id}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Applicant:</span>
              <span className="text-sm text-gray-900">{mockApplication.applicantName}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Service:</span>
              <span className="text-sm text-gray-900">{mockApplication.service}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Status:</span>
              <StatusBadge status="Submitted" />
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Payment Status:</span>
              <StatusBadge status="Paid" />
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Submitted Date:</span>
              <span className="text-sm text-gray-900">{mockApplication.submittedDate}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Appointment:</span>
              <span className="text-sm text-gray-900">
                {mockApplication.appointmentDate} — {mockApplication.appointmentTime}
              </span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-100">
            <p className="text-sm text-gray-700">
              Your residence permit application has been submitted for officer review. You will receive status updates as your application progresses through the review process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              onClick={() => navigate("/dashboard")}
              className="flex-1 bg-[#1a4d8f] hover:bg-[#153d73]"
            >
              Go to Applicant Dashboard
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="flex-1"
            >
              Track Application Status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
