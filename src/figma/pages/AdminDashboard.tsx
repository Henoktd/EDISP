import { Header } from "../components/Header";
import { MetricCard } from "../components/MetricCard";
import { StatusBadge } from "../components/StatusBadge";
import { mockMetrics, mockRecentActivity } from "../data/mockData";
import {
  FileText,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import type { StatusType } from "../components/StatusBadge";

export function AdminDashboard() {
  const navigate = useNavigate();

  const serviceData = [
    { name: "Visa", value: 4200 },
    { name: "Residency", value: 3100 },
    { name: "Work Permit", value: 2800 },
    { name: "Exit Clearance", value: 2380 },
  ];

  const monthlyData = [
    { month: "Jan", applications: 980 },
    { month: "Feb", applications: 1120 },
    { month: "Mar", applications: 1050 },
    { month: "Apr", applications: 1200 },
  ];

  const statusData = [
    { name: "Submitted", value: 1143, color: "#3b82f6" },
    { name: "Under Review", value: 2200, color: "#8b5cf6" },
    { name: "Approved", value: 4920, color: "#10b981" },
    { name: "Rejected", value: 420, color: "#ef4444" },
    { name: "Correction Required", value: 380, color: "#f59e0b" },
  ];

  const processingTimeData = [
    { service: "Visa", days: 2.8 },
    { service: "Residency", days: 3.4 },
    { service: "Work Permit", days: 4.2 },
    { service: "Exit Clearance", days: 1.9 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Administrative Oversight Dashboard" userName="Admin User" />
      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)]">
          <nav className="p-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded bg-gray-100 text-gray-900">
              <BarChart3 className="w-4 h-4" />
              Overview
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              Applications
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <Users className="w-4 h-4" />
              Officers
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <TrendingUp className="w-4 h-4" />
              Service Performance
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <TrendingUp className="w-4 h-4" />
              Revenue
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <Shield className="w-4 h-4" />
              Audit Logs
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700">
              <FileText className="w-4 h-4" />
              Reports
            </button>
            <button
              onClick={() => navigate("/architecture")}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-50 text-gray-700"
            >
              <Activity className="w-4 h-4" />
              System Architecture
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-2xl text-gray-900 mb-1">System Overview</h2>
            <p className="text-sm text-gray-600">Immigration Service Platform Performance Metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Applications"
              value={mockMetrics.totalApplications}
              icon={<FileText className="w-5 h-5" />}
            />
            <MetricCard
              title="Applications Today"
              value={mockMetrics.applicationsToday}
              icon={<Activity className="w-5 h-5" />}
            />
            <MetricCard
              title="Under Review"
              value={mockMetrics.underReview}
              icon={<FileText className="w-5 h-5" />}
            />
            <MetricCard
              title="Approved This Month"
              value={mockMetrics.approvedThisMonth}
              icon={<TrendingUp className="w-5 h-5" />}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Average Processing Time"
              value={mockMetrics.avgProcessingTime}
            />
            <MetricCard
              title="Revenue Collected"
              value={mockMetrics.revenueCollected}
            />
            <MetricCard
              title="Fayda Verification Rate"
              value={mockMetrics.faydaVerificationRate}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-gray-900 mb-1">Service Analytics</h3>
            <p className="text-sm text-gray-600">Volume and performance metrics by service type</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-base text-gray-900 mb-4">Applications by Service Type</h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={serviceData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ fontSize: 12 }} />
                  <Bar dataKey="value" fill="#1a4d8f" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-base text-gray-900 mb-4">Monthly Application Volume</h3>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="applications" stroke="#1a4d8f" strokeWidth={2.5} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-base text-gray-900 mb-4">Status Distribution</h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name} (${entry.value})`}
                    outerRadius={75}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-base text-gray-900 mb-4">Average Processing Time by Service</h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={processingTimeData} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7280' }} label={{ value: 'Days', position: 'insideBottom', offset: -5, fontSize: 11 }} />
                  <YAxis type="category" dataKey="service" tick={{ fontSize: 11, fill: '#6b7280' }} width={100} />
                  <Tooltip contentStyle={{ fontSize: 12 }} />
                  <Bar dataKey="days" fill="#059669" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-base text-gray-900">Recent Processing Activity</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Application ID</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Service</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Officer</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Status</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Processing Time</th>
                    <th className="px-4 py-3 text-left text-xs text-gray-600 whitespace-nowrap">Decision Date</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRecentActivity.map((activity) => (
                    <tr key={activity.id} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm text-gray-900 font-mono whitespace-nowrap">{activity.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{activity.service}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{activity.officer}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={activity.status as StatusType} />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{activity.processingTime}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{activity.decisionDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-gray-900 mb-1">Audit & System Activity</h3>
            <p className="text-sm text-gray-600">Real-time system monitoring and audit metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Total Audit Events Today</p>
              <p className="text-3xl text-gray-900">1,247</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Failed Verification Attempts</p>
              <p className="text-3xl text-gray-900">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Escalated Cases</p>
              <p className="text-3xl text-gray-900">28</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Officer Decisions Logged</p>
              <p className="text-3xl text-gray-900">342</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
