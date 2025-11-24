import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const RecentOrdersCard = ({ orders }) => (
  <Card className="rounded-2xl shadow-md border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        🧾 Recent Orders
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-3">
      {orders.map((order) => (
        <div key={order.id} className="flex justify-between border-b pb-2">
          <span className="text-gray-700">Order #{order.id}</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-semibold">
            ₹{order.amount}
          </span>
        </div>
      ))}
    </CardContent>
  </Card>
)

export default RecentOrdersCard
