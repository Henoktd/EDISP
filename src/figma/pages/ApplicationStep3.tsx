import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSteps } from "../components/ProgressSteps";
import { Button } from "../components/ui/button";
import { Upload, CheckCircle2 } from "lucide-react";
import { mockDocuments } from "../data/mockData";

export function ApplicationStep3() {
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: "Identity", status: "complete" as const },
    { id: 2, name: "Form", status: "complete" as const },
    { id: 3, name: "Documents", status: "current" as const },
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
          <h2 className="text-xl text-gray-900 mb-6">Upload Required Documents</h2>
          <div className="space-y-4">
            {mockDocuments.map((doc) => (
              <div
                key={doc.name}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-900">{doc.name}</p>
                      {doc.required && (
                        <span className="text-xs text-red-600">Required</span>
                      )}
                    </div>
                    {doc.uploaded ? (
                      <div className="flex items-center gap-2 mt-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">Uploaded</span>
                      </div>
                    ) : (
                      <div className="mt-3 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer">
                        <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG, PNG (max 5MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/apply/residence/step2")}
            >
              Back
            </Button>
            <Button
              className="bg-[#1a4d8f] hover:bg-[#153d73]"
              onClick={() => navigate("/apply/residence/step4")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
