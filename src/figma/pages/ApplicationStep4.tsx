import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSteps } from "../components/ProgressSteps";
import { Button } from "../components/ui/button";

export function ApplicationStep4() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("2026-05-03");
  const [selectedTime, setSelectedTime] = useState("10:30");

  const steps = [
    { id: 1, name: "Identity", status: "complete" as const },
    { id: 2, name: "Form", status: "complete" as const },
    { id: 3, name: "Documents", status: "complete" as const },
    { id: 4, name: "Appointment", status: "current" as const },
    { id: 5, name: "Payment", status: "upcoming" as const },
    { id: 6, name: "Submit", status: "upcoming" as const },
  ];

  const dates = [
    { value: "2026-05-03", label: "May 3, 2026" },
    { value: "2026-05-04", label: "May 4, 2026" },
    { value: "2026-05-05", label: "May 5, 2026" },
  ];

  const times = [
    { value: "09:00", label: "09:00 AM" },
    { value: "10:30", label: "10:30 AM" },
    { value: "14:00", label: "02:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName="Abebe Kebede" />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <ProgressSteps steps={steps} />
        </div>
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-xl text-gray-900 mb-6">Select Appointment</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-900">
                Immigration Service Center — Addis Ababa
              </p>
            </div>
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Select Date
              </label>
              <div className="grid grid-cols-3 gap-3">
                {dates.map((date) => (
                  <button
                    key={date.value}
                    onClick={() => setSelectedDate(date.value)}
                    className={`p-3 rounded border text-sm ${
                      selectedDate === date.value
                        ? "border-[#1a4d8f] bg-blue-50 text-[#1a4d8f]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {date.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Select Time
              </label>
              <div className="grid grid-cols-3 gap-3">
                {times.map((time) => (
                  <button
                    key={time.value}
                    onClick={() => setSelectedTime(time.value)}
                    className={`p-3 rounded border text-sm ${
                      selectedTime === time.value
                        ? "border-[#1a4d8f] bg-blue-50 text-[#1a4d8f]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-900">Selected Appointment</p>
              <p className="text-sm text-gray-700 mt-1">
                {dates.find((d) => d.value === selectedDate)?.label} —{" "}
                {times.find((t) => t.value === selectedTime)?.label}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/apply/residence/step3")}
            >
              Back
            </Button>
            <Button
              className="bg-[#1a4d8f] hover:bg-[#153d73]"
              onClick={() => navigate("/apply/residence/step5")}
            >
              Confirm Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
