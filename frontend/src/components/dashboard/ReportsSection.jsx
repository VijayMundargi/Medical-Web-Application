import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ReportsSection = ({ reports }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Top Selling Medicines */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Top Selling Medicines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {reports.topSellingMedicines.map((med, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{med.name}</span>
                <span className="font-semibold">{med.sold}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Low Stock Medicines */}
      <Card className="shadow col-span-2">
        <CardHeader>
          <CardTitle>Low Stock Medicines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {reports.lowStockMedicines.map((med, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{med.name}</span>
                <span className="font-semibold text-red-600">{med.stock}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default ReportsSection
