import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const SalesSummaryCard = ({ totalSales, orders, avgOrderValue }) => (
  <Card className="rounded-2xl shadow-md border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        📊 Sales Summary
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-3">
      <Row label="Total Sales" value={`₹${totalSales}`} color="blue" />
      <Row label="Orders" value={orders} color="indigo" />
      <Row label="Avg. Order Value" value={`₹${avgOrderValue}`} color="green" />
    </CardContent>
  </Card>
)

const Row = ({ label, value, color }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{label}</span>
    <span className={`px-3 py-1 rounded-full bg-${color}-100 text-${color}-700 font-semibold`}>
      {value}
    </span>
  </div>
)

export default SalesSummaryCard
