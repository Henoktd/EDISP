import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Header } from "../components/Header";
import { User, Briefcase, Shield, Loader2, CheckCircle2, XCircle } from "lucide-react";

type AuthStep = "role" | "fayda-login" | "verifying" | "verified" | "failed" | "foreign";

export function Auth() {
  const navigate = useNavigate();
  const [step, setStep] = useState<AuthStep>("role");
  const [faydaId, setFaydaId] = useState("");
  const [selectedRole, setSelectedRole] = useState<"applicant" | "officer" | "admin" | null>(null);

  const handleRoleSelect = (role: "applicant" | "officer" | "admin") => {
    setSelectedRole(role);
    if (role === "applicant") {
      setStep("fayda-login");
    } else {
      setStep("fayda-login");
    }
  };

  const handleFaydaLogin = () => {
    setStep("verifying");
    setTimeout(() => {
      setStep("verified");
    }, 2000);
  };

  const handleContinue = () => {
    if (selectedRole === "applicant") {
      navigate("/services");
    } else if (selectedRole === "officer") {
      navigate("/officer");
    } else if (selectedRole === "admin") {
      navigate("/admin");
    }
  };

  if (step === "role") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2">Access Ethiopian Immigration Services</h2>
            <p className="text-sm text-gray-600">Select your role to continue to the platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => handleRoleSelect("applicant")}
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#1a4d8f] hover:shadow-md transition-all text-left"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-[#1a4d8f]" />
              </div>
              <h3 className="text-base text-gray-900 mb-2">Applicant Access</h3>
              <p className="text-sm text-gray-600">
                Apply for immigration services and track your application status.
              </p>
            </button>
            <button
              onClick={() => handleRoleSelect("officer")}
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#1a4d8f] hover:shadow-md transition-all text-left"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-base text-gray-900 mb-2">Officer Access</h3>
              <p className="text-sm text-gray-600">
                Review submitted applications and process case decisions.
              </p>
            </button>
            <button
              onClick={() => handleRoleSelect("admin")}
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#1a4d8f] hover:shadow-md transition-all text-left"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-base text-gray-900 mb-2">Admin Access</h3>
              <p className="text-sm text-gray-600">
                Monitor service performance, reporting, and system oversight.
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "fayda-login") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl text-gray-900 mb-1">Fayda Identity Verification</h2>
              <p className="text-sm text-gray-600">National Digital ID System</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fayda-id">Fayda Identification Number</Label>
                <Input
                  id="fayda-id"
                  placeholder="1234 5678 9012"
                  value={faydaId}
                  onChange={(e) => setFaydaId(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter your 12-digit Fayda Identification Number
                </p>
              </div>
              <Button
                onClick={handleFaydaLogin}
                className="w-full bg-[#1a4d8f] hover:bg-[#153d73]"
              >
                Verify Identity with Fayda
              </Button>
              <button
                onClick={() => setStep("foreign")}
                className="w-full text-center text-sm text-[#1a4d8f] hover:underline"
              >
                Foreign user? Continue with passport
              </button>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-100">
              <p className="text-xs text-gray-700">
                Identity verification is simulated for demo purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "verifying") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-8 h-8 text-[#1a4d8f] animate-spin" />
            </div>
            <h2 className="text-xl text-gray-900 mb-2">Verifying Identity</h2>
            <p className="text-sm text-gray-700 mb-4">
              Connecting to Fayda National ID System
            </p>
            <div className="space-y-2 text-xs text-gray-600">
              <p>• Checking demographic record</p>
              <p>• Verifying biometric status</p>
              <p>• Calculating identity confidence score</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "verified") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl text-gray-900 mb-1">Identity Verified</h2>
              <p className="text-sm text-green-600">Fayda Verification Complete</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0">
                  <User className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <p className="text-base text-gray-900">Abebe Kebede</p>
                  <p className="text-sm text-gray-600">Fayda ID: 1234 5678 9012</p>
                  <p className="text-sm text-gray-600">DOB: 1992-04-18</p>
                  <p className="text-sm text-gray-600">Nationality: Ethiopian</p>
                  <div className="flex flex-wrap gap-2 mt-2">
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
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-2">Contact Information</p>
                <p className="text-sm text-gray-700">Phone: +251 911 234 567</p>
                <p className="text-sm text-gray-700">Email: abebe.kebede@example.com</p>
              </div>
              <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                Verified via Fayda National ID System
              </div>
            </div>
            <Button
              onClick={handleContinue}
              className="w-full mt-6 bg-[#1a4d8f] hover:bg-[#153d73]"
            >
              Continue to Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "failed") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl text-gray-900 mb-2">Verification Failed</h2>
            <p className="text-sm text-gray-600 mb-6">
              Unable to verify this Fayda ID. Please check the number and try again.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setStep("fayda-login")}
                className="flex-1 bg-[#1a4d8f] hover:bg-[#153d73]"
              >
                Try Again
              </Button>
              <Button variant="outline" className="flex-1">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "foreign") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-xl text-gray-900 mb-6">Foreign User Access</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="passport">Passport Number</Label>
                <Input id="passport" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" className="mt-1" />
                <p className="text-xs text-gray-500 mt-1">
                  Email verification is simulated for this prototype.
                </p>
              </div>
              <Button
                onClick={() => navigate("/services")}
                className="w-full bg-[#1a4d8f] hover:bg-[#153d73]"
              >
                Continue to Services
              </Button>
              <button
                onClick={() => setStep("fayda-login")}
                className="w-full text-center text-sm text-gray-600 hover:text-gray-900"
              >
                ← Back to Fayda login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
