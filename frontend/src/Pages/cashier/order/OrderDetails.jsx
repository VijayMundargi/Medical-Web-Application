import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const OrderDetails = ({ order }) => {
  if (!order) return <p className="text-gray-500">No order selected</p>

  return (
    <Card className="shadow-lg border border-gray-200">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-lg font-semibold">
          Order Details - <span className="text-gray-600">{order.id}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Date / Time</p>
            <p className="font-medium">{order.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Customer</p>
            <p className="font-medium">{order.customer}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Amount</p>
            <p className="font-medium">{order.amount}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment Mode</p>
            <p className="font-medium">{order.payment}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-500">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                order.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : order.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {order.status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderDetails
