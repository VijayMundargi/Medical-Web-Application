import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const ShiftInfoCard = ({ name, email, role, shift, status }) => {
  return (
    <Card className="rounded-2xl shadow-md border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          👨‍💼 Staff Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Info label="Name" value={name} />
        <Info label="Email" value={email} />
        <Info label="Role" value={role} />
        <Info label="Shift" value={shift} />
        <StatusBadge status={status} />
      </CardContent>
    </Card>
  )
}

const Info = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{label}</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
)

const StatusBadge = ({ status }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">Status</span>
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  </div>
)

export default ShiftInfoCard
