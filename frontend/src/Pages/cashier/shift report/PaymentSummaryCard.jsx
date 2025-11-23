import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const PaymentSummaryCard = ({ cash, card, upi }) => (
  <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        💳 Payment Summary
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Cash</span>
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-semibold">
          ${cash}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Card</span>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-semibold">
          ${card}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">UPI</span>
        <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 font-semibold">
          ${upi}
        </span>
      </div>
    </CardContent>
  </Card>
)

export default PaymentSummaryCard
