import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const COLORS = ["#7C3AED", "#22C55E", "#F97316", "#3B82F6"]

const ChartsSection = ({ charts }) => {
  const salesTrend = charts?.salesTrend || []
  const stockDistribution = charts?.stockDistribution || []
  const prescriptionStatus = charts?.prescriptionStatus || []

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sales Trend */}
      <Card className="col-span-2 shadow">
        <CardHeader>
          <CardTitle>Daily Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          {salesTrend.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesTrend}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#7C3AED" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500">No data available</p>
          )}
        </CardContent>
      </Card>

      {/* Stock Distribution */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Stock Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          {stockDistribution.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={stockDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                  dataKey="value"
                >
                  {stockDistribution.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500">No data available</p>
          )}
        </CardContent>
      </Card>

      {/* Prescription Status */}
      <Card className="col-span-3 shadow">
        <CardHeader>
          <CardTitle>Prescription Status</CardTitle>
        </CardHeader>
        <CardContent>
          {prescriptionStatus.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={prescriptionStatus}>
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500">No data available</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ChartsSection
