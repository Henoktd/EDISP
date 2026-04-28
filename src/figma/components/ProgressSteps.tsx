import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  name: string;
  status: "complete" | "current" | "upcoming";
}

interface ProgressStepsProps {
  steps: Step[];
}

export function ProgressSteps({ steps }: ProgressStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-between">
        {steps.map((step, stepIdx) => (
          <li
            key={step.id}
            className={cn(
              stepIdx !== steps.length - 1 ? "flex-1" : "",
              "relative"
            )}
          >
            <div className="flex items-center">
              <div className="flex items-center">
                <span
                  className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-full",
                    step.status === "complete"
                      ? "bg-[#1a4d8f]"
                      : step.status === "current"
                      ? "border-2 border-[#1a4d8f] bg-white"
                      : "border-2 border-gray-300 bg-white"
                  )}
                >
                  {step.status === "complete" ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full",
                        step.status === "current"
                          ? "bg-[#1a4d8f]"
                          : "bg-transparent"
                      )}
                    />
                  )}
                </span>
                <span
                  className={cn(
                    "ml-2 text-sm",
                    step.status === "complete" || step.status === "current"
                      ? "text-gray-900"
                      : "text-gray-500"
                  )}
                >
                  {step.name}
                </span>
              </div>
              {stepIdx !== steps.length - 1 && (
                <div className="ml-4 flex-1 border-t-2 border-gray-200" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
