import { useNavigate } from "react-router-dom";
import { Globe, ShieldCheck, FileText, Users } from "lucide-react";
import { Button } from "../components/ui/button";

export function Landing() {
  const navigate = useNavigate();

  const services = [
    { title: "Visa Services", description: "Entry, tourist, business, transit" },
    { title: "Residency", description: "Temporary and long-term permits" },
    { title: "Work Permit", description: "Legal work authorization" },
    { title: "Exit Clearance", description: "Travel permissions" },
    { title: "Status Tracking", description: "Track application progress" },
    { title: "Payments", description: "Fees and receipts" },
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Identity Verification",
      description:
        "Simulated Fayda-based verification for applicant identity confirmation.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "End-to-End Application Processing",
      description:
        "Submit, track, review, and manage immigration applications digitally.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Officer and Admin Oversight",
      description:
        "Operational dashboards for case processing, approvals, reporting, and audit.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1a4d8f] rounded flex items-center justify-center text-white">
              ET
            </div>
            <div>
              <h1 className="text-base text-gray-900">
                Ethiopian Immigration Services
              </h1>
              <p className="text-xs text-gray-600">Digital Service Platform</p>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#track" className="text-sm text-gray-700 hover:text-gray-900">
              Track Application
            </a>
            <a href="#help" className="text-sm text-gray-700 hover:text-gray-900">
              Help
            </a>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-gray-200 hover:bg-gray-50 text-sm">
              <Globe className="w-4 h-4" />
              English
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl text-gray-900 mb-4">
              Ethiopian Immigration Digital Service Platform
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Secure immigration services powered by Fayda National Digital Identity verification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => navigate("/auth")}
                size="lg"
                className="bg-[#1a4d8f] hover:bg-[#153d73]"
              >
                Login with Fayda
              </Button>
              <Button
                onClick={() => navigate("/auth")}
                variant="outline"
                size="lg"
              >
                Foreign User Access
              </Button>
              <Button variant="outline" size="lg">
                Track Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl text-gray-900 mb-6">Immigration Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer"
              >
                <h4 className="text-base text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl text-gray-900 mb-2">
            Trusted Digital Identity for Immigration Services
          </h3>
          <p className="text-sm text-gray-600 mb-8">
            National immigration platform integrated with Fayda identity verification
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <div className="text-[#1a4d8f] mb-3">{feature.icon}</div>
                <h4 className="text-base text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500 mb-2">
              Ethiopian Immigration Services Digital Platform
            </p>
            <p className="text-sm text-gray-600">
              Prototype simulation only. No real immigration, Fayda, payment, or document processing is performed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
