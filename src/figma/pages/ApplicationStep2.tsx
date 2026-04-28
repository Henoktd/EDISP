import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSteps } from "../components/ProgressSteps";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function ApplicationStep2() {
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: "Identity", status: "complete" as const },
    { id: 2, name: "Form", status: "current" as const },
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
          <h2 className="text-xl text-gray-900 mb-6">
            Residence Permit Application
          </h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="permit-type">
                Permit Type <span className="text-red-600">*</span>
              </Label>
              <select
                id="permit-type"
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded text-sm"
              >
                <option>Temporary Residence Permit</option>
                <option>Long-Term Residence Permit</option>
                <option>Renewal</option>
              </select>
            </div>
            <div>
              <Label htmlFor="address">
                Current Address <span className="text-red-600">*</span>
              </Label>
              <Textarea id="address" className="mt-1" rows={3} />
            </div>
            <div>
              <Label htmlFor="employer">
                Employer / Sponsor <span className="text-red-600">*</span>
              </Label>
              <Input id="employer" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="purpose">
                Purpose of Residence <span className="text-red-600">*</span>
              </Label>
              <Input id="purpose" placeholder="e.g., Employment" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="duration">
                Duration Requested <span className="text-red-600">*</span>
              </Label>
              <select
                id="duration"
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded text-sm"
              >
                <option>6 Months</option>
                <option>1 Year</option>
                <option>2 Years</option>
              </select>
            </div>
            <div>
              <Label htmlFor="phone">
                Contact Phone <span className="text-red-600">*</span>
              </Label>
              <Input id="phone" defaultValue="+251 911 234 567" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="abebe.kebede@example.com"
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/apply/residence/step1")}
            >
              Back
            </Button>
            <Button variant="outline">Save Draft</Button>
            <Button
              className="bg-[#1a4d8f] hover:bg-[#153d73]"
              onClick={() => navigate("/apply/residence/step3")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
