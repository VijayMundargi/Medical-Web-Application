import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        // Dynamic color logic
        let bgColor = "bg-gray-100"
        let textColor = "text-gray-800"

        if (stat.label === "Out of Stock") {
          bgColor = stat.value > 0 ? "bg-red-100" : "bg-green-100"
          textColor = stat.value > 0 ? "text-red-700" : "text-green-700"
        }

        if (stat.label === "Total Sales ($)") {
          bgColor = "bg-blue-100"
          textColor = "text-blue-700"
        }

        if (stat.label === "Total Medicines Sold") {
          bgColor = "bg-teal-100"
          textColor = "text-teal-700"
        }

        if (stat.label === "Active Prescriptions") {
          bgColor = "bg-purple-100"
          textColor = "text-purple-700"
        }

        return (
          <Card
            key={index}
            className={`shadow rounded-xl border ${bgColor}`}
          >
            <CardHeader>
              <CardTitle className={`text-md font-semibold ${textColor}`}>
                {stat.label}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className={`text-3xl font-bold ${textColor}`}>
                {stat.value}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default StatsCards
