import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { adminVolume } from '../../data/mockPlatform'

export function VolumeChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={adminVolume} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="#d8dfdc" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#64716d', fontSize: 12 }} tickLine={false} />
          <YAxis tick={{ fill: '#64716d', fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(31, 111, 88, 0.08)' }}
            contentStyle={{
              border: '1px solid #d8dfdc',
              borderRadius: 4,
              color: '#17211e',
              fontSize: 12,
            }}
          />
          <Bar dataKey="applications" fill="#1f6f58" radius={[3, 3, 0, 0]} />
          <Bar dataKey="verified" fill="#d8a31a" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
