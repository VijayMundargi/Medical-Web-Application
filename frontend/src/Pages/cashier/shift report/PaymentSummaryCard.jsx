import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const PaymentSummaryCard = ({ cash, card, upi }) => (
  <Card className="rounded-2xl shadow-md border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        💳 Payment Summary
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-3">
      <Row label="Cash" value={`₹${cash}`} color="green" />
      <Row label="Card" value={`₹${card}`} color="blue" />
      <Row label="UPI" value={`₹${upi}`} color="purple" />
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

export default PaymentSummaryCard
