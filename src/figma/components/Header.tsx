import { Globe } from "lucide-react";

interface HeaderProps {
  title?: string;
  showLanguage?: boolean;
  userName?: string;
}

export function Header({
  title,
  showLanguage = true,
  userName,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#1a4d8f] rounded flex items-center justify-center text-white">
            ET
          </div>
          <div>
            <h1 className="text-sm text-gray-900">
              {title || "Ethiopian Immigration Services"}
            </h1>
            <p className="text-xs text-gray-600">
              Digital Service Platform
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {userName && (
            <span className="text-sm text-gray-700">
              {userName}
            </span>
          )}
          {showLanguage && (
            <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-gray-200 hover:bg-gray-50 text-sm">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}