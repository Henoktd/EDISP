import { Header } from "../components/Header";
import { ArrowDown, User, Shield, FileText, Database, CheckCircle2, BarChart3, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export function SystemArchitecture() {
  const navigate = useNavigate();

  const modules = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Applicant Portal",
      description: "Digital access point for citizens, residents, and foreign applicants.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Identity Layer",
      description: "Simulated Fayda verification for identity confirmation, biometric status, and eKYC.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Application Engine",
      description: "Structured forms, document checklist, appointments, payment simulation, and submission lifecycle.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Officer Dashboard",
      description: "Case review, verification checks, document validation, decision actions, correction requests, and escalation.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Admin Oversight",
      description: "Performance metrics, volume monitoring, revenue reporting, officer activity, and audit visibility.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Output Layer",
      description: "Application status, approval output, permit download simulation, and applicant notifications.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Audit Trail",
      description: "Decision logging, verification attempts, and administrative oversight.",
    },
  ];

  const boundaries = [
    "No real Fayda integration",
    "No backend processing",
    "No production applicant data",
    "No real payment processing",
    "No live document storage",
    "No legal immigration decision",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="System Architecture" userName="Admin User" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl text-gray-900 mb-2">System Architecture</h2>
          <p className="text-sm text-gray-600">
            Conceptual architecture for national immigration digital service platform integrated with Fayda identity verification
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-lg text-gray-900 mb-6 text-center">System Architecture Flow</h3>
          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
            <div className="w-full p-4 bg-[#1a4d8f] bg-opacity-5 border-2 border-[#1a4d8f] rounded text-center">
              <p className="text-sm text-gray-900">User Portal</p>
              <p className="text-xs text-gray-600 mt-1">Applicant, Officer, Admin Access Points</p>
            </div>
            <ArrowDown className="w-6 h-6 text-[#1a4d8f]" />
            <div className="w-full p-4 bg-green-50 border-2 border-green-600 rounded text-center">
              <p className="text-sm text-gray-900">Fayda Identity Verification Layer</p>
              <p className="text-xs text-gray-600 mt-1">National ID System Integration</p>
            </div>
            <ArrowDown className="w-6 h-6 text-[#1a4d8f]" />
            <div className="w-full p-4 bg-purple-50 border-2 border-purple-600 rounded text-center">
              <p className="text-sm text-gray-900">Application Processing Engine</p>
              <p className="text-xs text-gray-600 mt-1">Forms, Documents, Appointments, Payment</p>
            </div>
            <ArrowDown className="w-6 h-6 text-[#1a4d8f]" />
            <div className="w-full p-4 bg-orange-50 border-2 border-orange-600 rounded text-center">
              <p className="text-sm text-gray-900">Officer Review & Decision Layer</p>
              <p className="text-xs text-gray-600 mt-1">Case Verification, Approval, Rejection, Escalation</p>
            </div>
            <ArrowDown className="w-6 h-6 text-[#1a4d8f]" />
            <div className="w-full p-4 bg-green-50 border-2 border-green-600 rounded text-center">
              <p className="text-sm text-gray-900">Permit / Approval Output Layer</p>
              <p className="text-xs text-gray-600 mt-1">Status Updates, Notifications, Permit Generation</p>
            </div>
            <ArrowDown className="w-6 h-6 text-[#1a4d8f]" />
            <div className="w-full p-4 bg-gray-100 border-2 border-gray-400 rounded text-center">
              <p className="text-sm text-gray-900">Admin Reporting & Audit Layer</p>
              <p className="text-xs text-gray-600 mt-1">Performance Metrics, Decision Logs, System Oversight</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-gray-900 mb-6">Core System Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div
                key={module.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#1a4d8f]">{module.icon}</div>
                  <div>
                    <h4 className="text-base text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-base text-gray-900 mb-4">Prototype Boundaries</h3>
          <p className="text-xs text-gray-600 mb-4">The following components are simulated for demonstration purposes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {boundaries.map((boundary) => (
              <div key={boundary} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-gray-700">{boundary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h4 className="text-sm text-gray-900 mb-2">Prototype Disclaimer</h4>
          <p className="text-sm text-gray-700">
            This prototype is intended to demonstrate system structure, user journeys, institutional workflows, and the role of digital identity in immigration service delivery. No real immigration processing, Fayda integration, payment transactions, or legal decisions are performed.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={() => navigate("/admin")}
            className="bg-[#1a4d8f] hover:bg-[#153d73]"
          >
            Return to Admin Dashboard
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
