import { useEffect, useState } from "react"
import Header from "../components/Layouts/Header.jsx"
import StatsCards from "@/components/dashboard/StatsCards"
import ChartsSection from "@/components/dashboard/ChartsSection"
import ReportsSection from "@/components/dashboard/ReportsSection"

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [reportType, setReportType] = useState("daily") // daily, weekly, monthly, custom
  const [customDate, setCustomDate] = useState({ start: "", end: "" })

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReportData(reportType, customDate)
      setData(response)
    }

    fetchData()
  }, [reportType, customDate])

  if (!data) return <p className="p-6">Loading dashboard...</p>

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />

      {/* Report Filter */}
      <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white shadow rounded-md">
        <div className="flex gap-2">
          {["daily", "weekly", "monthly", "custom"].map((type) => (
            <button
              key={type}
              onClick={() => setReportType(type)}
              className={`px-4 py-2 rounded ${
                reportType === type ? "bg-teal-600 text-white" : "bg-gray-100"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {reportType === "custom" && (
          <div className="flex gap-2 items-center">
            <input
              type="date"
              value={customDate.start}
              onChange={(e) =>
                setCustomDate((prev) => ({ ...prev, start: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
            <span>to</span>
            <input
              type="date"
              value={customDate.end}
              onChange={(e) =>
                setCustomDate((prev) => ({ ...prev, end: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
        )}
      </div>

      {/* Dashboard Content */}
      <main className="p-6 space-y-6 overflow-y-auto">
        <StatsCards stats={data.stats} />
        <ChartsSection charts={data.charts} />
        <ReportsSection reports={data.reports} />
      </main>
    </div>
  )
}

export default Dashboard


const categories = ["Painkillers", "Antibiotics", "Vitamins", "Supplements"]
const medicines = ["Paracetamol", "Amoxicillin", "Vitamin C", "Insulin", "Metformin"]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

async function getReportData(type, customDate) {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 300))

  // Generate dynamic stats
  const stats = [
    { label: "Total Medicines Sold", value: getRandomInt(100, 500) },
    { label: "Out of Stock", value: getRandomInt(5, 50) },
    { label: "Total Sales ($)", value: getRandomInt(1000, 10000) },
    { label: "Active Prescriptions", value: getRandomInt(20, 150) },
  ]

  // Generate dynamic charts
  const salesTrend = Array.from({ length: type === "daily" ? 6 : 7 }, (_, i) => ({
    date: type === "daily" ? `${8 + i} AM` : `Day ${i + 1}`,
    sales: getRandomInt(50, 300),
  }))

  const stockDistribution = categories.map((cat) => ({
    category: cat,
    value: getRandomInt(20, 100),
  }))

  const prescriptionStatus = [
    { status: "Pending", value: getRandomInt(10, 50) },
    { status: "Completed", value: getRandomInt(50, 150) },
  ]

  // Generate dynamic reports
  const topSellingMedicines = medicines.map((med) => ({
    name: med,
    sold: getRandomInt(50, 150),
  }))

  const lowStockMedicines = medicines.map((med) => ({
    name: med,
    stock: getRandomInt(1, 10),
  }))

  return {
    stats,
    charts: { salesTrend, stockDistribution, prescriptionStatus },
    reports: { topSellingMedicines, lowStockMedicines },
  }
}
