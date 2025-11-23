import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const RecentOrdersCard = ({ orders }) => (
  <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        🛒 Recent Orders
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      {orders.map((order, idx) => (
        <div
          key={order.id}
          className={`flex justify-between items-center pb-2 ${
            idx !== orders.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <span className="text-gray-600 font-medium"># {order.id}</span>
          <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold">
            ${order.amount}
          </span>
        </div>
      ))}
    </CardContent>
  </Card>
)

export default RecentOrdersCard
