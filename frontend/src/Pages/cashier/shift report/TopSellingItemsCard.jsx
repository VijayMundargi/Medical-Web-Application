import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const TopSellingItemsCard = ({ items }) => {
  const maxUnits = Math.max(...items.map((item) => item.units))

  const getMedal = (index) => {
    if (index === 0) return "🥇"
    if (index === 1) return "🥈"
    if (index === 2) return "🥉"
    return "⭐"
  }

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          🛒 Top Selling Items
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center text-sm font-medium">
              <span>
                {getMedal(index)} {item.name}
              </span>
              <span className="text-gray-600">{item.units} units</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${(item.units / maxUnits) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopSellingItemsCard
