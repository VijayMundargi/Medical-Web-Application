import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const RefundProcessCard = ({ totalRefunds, pending, approved }) => (
  <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        ↩️ Refund Process
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Total Refunds</span>
        <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700 font-semibold">
          ${totalRefunds}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Requests Pending</span>
        <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 font-semibold">
          {pending}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Approved</span>
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-semibold">
          {approved}
        </span>
      </div>
    </CardContent>
  </Card>
)

export default RefundProcessCard
