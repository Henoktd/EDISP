import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSteps } from "../components/ProgressSteps";
import { Button } from "../components/ui/button";
import { User } from "lucide-react";
import { mockApplicant } from "../data/mockData";

export function ApplicationStep1() {
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: "Identity", status: "current" as const },
    { id: 2, name: "Form", status: "upcoming" as const },
    { id: 3, name: "Documents", status: "upcoming" as const },
    { id: 4, name: "Appointment", status: "upcoming" as const },
    { id: 5, name: "Payment", status: "upcoming" as const },
    { id: 6, name: "Submit", status: "upcoming" as const },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Abebe Kebede" />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <ProgressSteps steps={steps} />
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-xl text-gray-900 mb-6">Confirm Your Identity</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0">
                <User className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <p className="text-base text-gray-900">{mockApplicant.name}</p>
                <p className="text-sm text-gray-600">Fayda ID: {mockApplicant.faydaId}</p>
                <p className="text-sm text-gray-600">DOB: {mockApplicant.dob}</p>
                <p className="text-sm text-gray-600">Nationality: {mockApplicant.nationality}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-50 text-green-700 border border-green-200">
                    Fayda Verified
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-50 text-green-700 border border-green-200">
                    Biometric Verified
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-50 text-green-700 border border-green-200">
                    eKYC Passed
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-700">Contact Information</p>
              <p className="text-sm text-gray-600 mt-1">Phone: {mockApplicant.phone}</p>
              <p className="text-sm text-gray-600">Email: {mockApplicant.email}</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-100">
            <p className="text-sm text-gray-700">
              Your identity has been verified through the simulated Fayda National
              ID layer.
            </p>
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={() => navigate("/services")}>
              Back
            </Button>
            <Button
              className="bg-[#1a4d8f] hover:bg-[#153d73]"
              onClick={() => navigate("/apply/residence/step2")}
            >
              Confirm and Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
