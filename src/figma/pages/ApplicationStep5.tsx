import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSteps } from "../components/ProgressSteps";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function ApplicationStep5() {
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: "Identity", status: "complete" as const },
    { id: 2, name: "Form", status: "complete" as const },
    { id: 3, name: "Documents", status: "complete" as const },
    { id: 4, name: "Appointment", status: "complete" as const },
    { id: 5, name: "Payment", status: "current" as const },
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
          <h2 className="text-xl text-gray-900 mb-6">Payment Summary</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">
                    Residence Permit Processing Fee
                  </span>
                  <span className="text-sm text-gray-900">ETB 3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Service Charge</span>
                  <span className="text-sm text-gray-900">ETB 150</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-base text-gray-900">Total Amount</span>
                    <span className="text-base text-gray-900">ETB 3,150</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900">Payment Status: Paid</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Receipt Number: PAY-ETH-78291
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded border border-blue-100">
              <p className="text-xs text-gray-700">
                Payment confirmation is simulated for prototype purposes.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/apply/residence/step4")}
            >
              Back
            </Button>
            <Button
              className="bg-[#1a4d8f] hover:bg-[#153d73]"
              onClick={() => navigate("/apply/residence/step6")}
            >
              Continue to Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
