import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  FileText,
  Home,
  Briefcase,
  Plane,
  Search,
  CreditCard,
} from "lucide-react";

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Visa Services",
      description: "Apply for entry, tourist, business, or transit visa services.",
      action: "View Services",
      highlighted: false,
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residency",
      description: "Apply for temporary or long-term residence permits.",
      action: "Apply for Residence Permit",
      highlighted: true,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work Permit",
      description: "Submit authorization requests to work legally in Ethiopia.",
      action: "Apply Now",
      highlighted: false,
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Exit Clearance",
      description: "Request exit clearance and related travel permissions.",
      action: "Apply Now",
      highlighted: false,
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Status Tracking",
      description: "Track application progress and decision status.",
      action: "Track Application",
      highlighted: false,
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payments",
      description: "View service fees, receipts, and payment confirmations.",
      action: "View Payments",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Abebe Kebede" />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-2xl text-gray-900 mb-2">Immigration Services</h2>
          <p className="text-sm text-gray-600">
            Select a service to begin your digital application
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input placeholder="Search service..." className="w-full" />
            </div>
            <select className="px-4 py-2 border border-gray-200 rounded text-sm">
              <option>All Categories</option>
              <option>Visa</option>
              <option>Residency</option>
              <option>Work</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded text-sm">
              <option>All Applicant Types</option>
              <option>Ethiopian</option>
              <option>Foreign</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-white p-6 rounded-lg border-2 transition-all ${
                service.highlighted
                  ? "border-[#1a4d8f] shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-[#1a4d8f] mb-4">{service.icon}</div>
              <h3 className="text-base text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <Button
                onClick={() =>
                  service.title === "Residency"
                    ? navigate("/apply/residence/step1")
                    : null
                }
                variant={service.highlighted ? "default" : "outline"}
                className={
                  service.highlighted
                    ? "bg-[#1a4d8f] hover:bg-[#153d73] w-full"
                    : "w-full"
                }
              >
                {service.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
