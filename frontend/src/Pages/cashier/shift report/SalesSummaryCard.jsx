import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const SalesSummaryCard = ({ totalSales, orders, avgOrderValue }) => (
  <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        📊 Sales Summary
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Total Sales</span>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-semibold">
          ${totalSales}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Orders</span>
        <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold">
          {orders}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Avg. Order Value</span>
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-semibold">
          ${avgOrderValue}
        </span>
      </div>
    </CardContent>
  </Card>
)

export default SalesSummaryCard
