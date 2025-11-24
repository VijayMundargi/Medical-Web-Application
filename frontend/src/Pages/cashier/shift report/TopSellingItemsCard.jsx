import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const TopSellingItemsCard = ({ items }) => {
  const maxUnits = Math.max(...items.map((i) => i.units))

  return (
    <Card className="rounded-2xl shadow-md border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          🛒 Top Selling Items
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm font-medium">
              <span>{item.name}</span>
              <span className="text-gray-600">{item.units} units</span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${(item.units / maxUnits) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopSellingItemsCard
