import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSteps } from "../components/ProgressSteps";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { mockApplicant, mockDocuments } from "../data/mockData";

export function ApplicationStep6() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  const steps = [
    { id: 1, name: "Identity", status: "complete" as const },
    { id: 2, name: "Form", status: "complete" as const },
    { id: 3, name: "Documents", status: "complete" as const },
    { id: 4, name: "Appointment", status: "complete" as const },
    { id: 5, name: "Payment", status: "complete" as const },
    { id: 6, name: "Submit", status: "current" as const },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Abebe Kebede" />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <ProgressSteps steps={steps} />
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-xl text-gray-900 mb-6">Review and Submit Application</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-base text-gray-900 mb-4">Identity Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="text-gray-900">{mockApplicant.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fayda ID:</span>
                  <span className="text-gray-900">{mockApplicant.faydaId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Verification Status:</span>
                  <span className="text-green-600">Verified</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-base text-gray-900 mb-4">Application Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="text-gray-900">Residence Permit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Permit Type:</span>
                  <span className="text-gray-900">Temporary Residence Permit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="text-gray-900">1 Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Purpose:</span>
                  <span className="text-gray-900">Employment residence</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-base text-gray-900 mb-4">Uploaded Documents</h3>
              <div className="space-y-2">
                {mockDocuments.map((doc) => (
                  <div key={doc.name} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{doc.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-base text-gray-900 mb-4">Appointment</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-900">May 3, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="text-gray-900">10:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">Immigration Service Center — Addis Ababa</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-base text-gray-900 mb-4">Payment</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-gray-900">ETB 3,150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Status:</span>
                  <span className="text-green-600">Paid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Receipt Number:</span>
                  <span className="text-gray-900">PAY-ETH-78291</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded">
              <Checkbox
                id="confirm"
                checked={confirmed}
                onCheckedChange={(checked) => setConfirmed(checked === true)}
              />
              <label
                htmlFor="confirm"
                className="text-sm text-gray-700 cursor-pointer"
              >
                I confirm that the information provided is accurate.
              </label>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/apply/residence/step5")}
            >
              Back
            </Button>
            <Button
              className="bg-[#1a4d8f] hover:bg-[#153d73]"
              disabled={!confirmed}
              onClick={() => navigate("/apply/residence/confirmation")}
            >
              Submit Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
