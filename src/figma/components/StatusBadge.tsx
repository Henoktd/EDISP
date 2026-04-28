import { cn } from "@/lib/utils";

export type StatusType =
  | "Draft"
  | "Submitted"
  | "Under Review"
  | "Approved"
  | "Rejected"
  | "Correction Required"
  | "Escalated"
  | "Paid"
  | "Unpaid"
  | "Fayda Verified"
  | "Verification Failed"
  | "Biometric Verified"
  | "eKYC Passed"
  | "Verified"
  | "Low"
  | "Medium"
  | "High";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "Approved":
      case "Paid":
      case "Fayda Verified":
      case "Biometric Verified":
      case "eKYC Passed":
      case "Verified":
        return "bg-green-50 text-green-700 border-green-200";
      case "Under Review":
      case "Submitted":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Correction Required":
      case "Medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Rejected":
      case "Verification Failed":
      case "High":
        return "bg-red-50 text-red-700 border-red-200";
      case "Escalated":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Draft":
      case "Unpaid":
      case "Low":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs border",
        getStatusStyles(),
        className
      )}
    >
      {status}
    </span>
  );
}
