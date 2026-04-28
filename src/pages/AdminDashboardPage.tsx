import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ApplicationTable } from '../components/dashboard/ApplicationTable'
import { Card } from '../components/ui/Card'
import { MetricCard } from '../components/ui/MetricCard'
import { adminMetrics } from '../data/mockData'

const chartData = [
  { name: 'Mon', applications: 240, approved: 188 },
  { name: 'Tue', applications: 256, approved: 204 },
  { name: 'Wed', applications: 271, approved: 221 },
  { name: 'Thu', applications: 286, approved: 232 },
  { name: 'Fri', applications: 263, approved: 217 },
]

const metrics = [
  ['Total applications', adminMetrics.totalApplications, 'All service categories'],
  ['Applications today', adminMetrics.applicationsToday, 'New submissions'],
  ['Under review', adminMetrics.underReview, 'Officer queue'],
  ['Approved this month', adminMetrics.approvedThisMonth, 'Completed cases'],
  ['Avg. processing time', adminMetrics.averageProcessingTime, 'Current operational average'],
  ['Revenue collected', adminMetrics.revenueCollected, 'Mock paid receipts'],
  ['Fayda success rate', adminMetrics.faydaVerificationSuccessRate, 'Simulated verification success'],
]

export function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
      <div className="border-b border-gray-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#1a4d8f]">
          Admin oversight
        </p>
        <h1 className="mt-3 text-3xl font-medium text-gray-900">
          National service performance
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Mock operational metrics for decision-maker demonstration.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value, detail]) => (
          <MetricCard key={label} label={label} value={value} detail={detail} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_420px]">
        <Card title="Application volume" description="Mock weekly service activity.">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#d8dfdc" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: '#64716d', fontSize: 12 }} tickLine={false} />
                <YAxis tick={{ fill: '#64716d', fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="applications" fill="#123955" radius={[3, 3, 0, 0]} />
                <Bar dataKey="approved" fill="#1f6f58" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Current application">
          <ApplicationTable />
        </Card>
      </div>
    </div>
  )
}
