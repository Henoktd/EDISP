import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card } from '../components/ui/Card'
import { MetricCard } from '../components/ui/MetricCard'
import { StatusBadge } from '../components/ui/StatusBadge'
import { adminMetrics, processingActivity } from '../data/mockData'

const metrics = [
  ['Total Applications', adminMetrics.totalApplications, ''],
  ['Applications Today', adminMetrics.applicationsToday, ''],
  ['Under Review', adminMetrics.underReview, ''],
  ['Approved This Month', adminMetrics.approvedThisMonth, ''],
  ['Average Processing Time', adminMetrics.averageProcessingTime, ''],
  ['Revenue Collected', adminMetrics.revenueCollected, ''],
  ['Fayda Verification Rate', adminMetrics.faydaVerificationSuccessRate, ''],
]

const serviceVolume = [
  { name: 'Visa', value: 4200 },
  { name: 'Residency', value: 3100 },
  { name: 'Work Permit', value: 2800 },
  { name: 'Exit Clearance', value: 2350 },
]

const monthlyVolume = [
  { name: 'Jan', value: 980 },
  { name: 'Feb', value: 1120 },
  { name: 'Mar', value: 1050 },
  { name: 'Apr', value: 1200 },
]

const statusDistribution = [
  { name: 'Approved (4920)', value: 4920, color: '#10b981' },
  { name: 'Submitted (1143)', value: 1143, color: '#3b82f6' },
  { name: 'Under Review (2200)', value: 2200, color: '#8b5cf6' },
  { name: 'Correction Required (380)', value: 380, color: '#f59e0b' },
  { name: 'Rejected (420)', value: 420, color: '#ef4444' },
]

const processingTimes = [
  { name: 'Visa', days: 2.8 },
  { name: 'Residency', days: 3.4 },
  { name: 'Work Permit', days: 4.2 },
  { name: 'Exit Clearance', days: 1.9 },
]

export function AdminDashboardPage() {
  return (
    <div className="space-y-7 bg-gray-50 px-6 py-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#020817]">System Overview</h1>
        <p className="mt-1 text-sm text-[#334155]">
          Immigration Service Platform Performance Metrics
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.slice(0, 4).map(([label, value, detail]) => (
          <MetricCard key={label} label={label} value={value} detail={detail} />
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {metrics.slice(4).map(([label, value, detail]) => (
          <MetricCard key={label} label={label} value={value} detail={detail} />
        ))}
      </div>

      <section>
        <h2 className="text-lg font-semibold text-[#020817]">Service Analytics</h2>
        <p className="mt-1 text-sm text-[#334155]">
          Volume and performance metrics by service type
        </p>

        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <Card title="Applications by Service Type">
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceVolume}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1f4f8f" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Monthly Application Volume">
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyVolume}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line dataKey="value" stroke="#1f4f8f" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Status Distribution">
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statusDistribution} dataKey="value" nameKey="name" outerRadius={78} label>
                    {statusDistribution.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Average Processing Time by Service">
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={processingTimes} layout="vertical">
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                  <XAxis type="number" tick={{ fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="days" fill="#059669" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </section>

      <Card title="Recent Processing Activity">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-gray-200 text-xs font-semibold text-[#334155]">
              <tr>
                {['Application ID', 'Service', 'Officer', 'Status', 'Processing Time', 'Decision Date'].map((heading) => (
                  <th key={heading} className="px-3 py-3">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {processingActivity.map((item) => (
                <tr key={item.applicationId}>
                  <td className="px-3 py-4 font-semibold">{item.applicationId}</td>
                  <td className="px-3 py-4">{item.service}</td>
                  <td className="px-3 py-4">{item.officer}</td>
                  <td className="px-3 py-4"><StatusBadge status={item.status as Parameters<typeof StatusBadge>[0]['status']} /></td>
                  <td className="px-3 py-4">{item.processingTime}</td>
                  <td className="px-3 py-4">{item.decisionDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <section>
        <h2 className="text-lg font-semibold text-[#020817]">Audit & System Activity</h2>
        <p className="mt-1 text-sm text-[#334155]">
          Real-time system monitoring and audit metrics
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-4">
          <MetricCard label="Total Audit Events Today" value="1,247" detail="" />
          <MetricCard label="Failed Verification Attempts" value="12" detail="" />
          <MetricCard label="Escalated Cases" value="28" detail="" />
          <MetricCard label="Officer Decisions Logged" value="342" detail="" />
        </div>
      </section>
    </div>
  )
}
