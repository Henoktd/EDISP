interface MetricCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: string;
}

export function MetricCard({ title, value, icon, trend }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
      <div className="flex items-start justify-between h-full">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-3xl text-gray-900 mb-1">{value}</p>
          {trend && <p className="text-xs text-gray-500">{trend}</p>}
        </div>
        {icon && <div className="text-gray-400 flex-shrink-0 ml-2">{icon}</div>}
      </div>
    </div>
  );
}
