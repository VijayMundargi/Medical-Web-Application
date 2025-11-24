import { useEffect, useState } from "react"
import Header from "../components/Layouts/Header.jsx"
import StatsCards from "@/components/dashboard/StatsCards"
import ChartsSection from "@/components/dashboard/ChartsSection"
import ReportsSection from "@/components/dashboard/ReportsSection"

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [reportType, setReportType] = useState("daily")
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
                reportType === type
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700"
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

/* ===========================================================
      🔽🔽🔽 DYNAMIC DATA GENERATION (Paste Below) 🔽🔽🔽
   =========================================================== */

const categories = ["Painkillers", "Antibiotics", "Vitamins", "Supplements"]
const medicines = ["Paracetamol", "Amoxicillin", "Vitamin C", "Insulin", "Metformin"]
const expiryDates = ["2025-01-10", "2025-02-15", "2025-03-05", "2024-12-29", "2025-01-25"]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function isExpiringSoon(date) {
  const today = new Date()
  const exp = new Date(date)
  const diff = (exp - today) / (1000 * 60 * 60 * 24)
  return diff <= 30 // Expiring within 30 days
}

async function getReportData(type, customDate) {
  await new Promise((res) => setTimeout(res, 300)) // Fake API delay

  // Stats
  const stats = [
    { label: "Total Medicines Sold", value: getRandomInt(100, 500) },
    { label: "Out of Stock", value: getRandomInt(5, 50) },
    { label: "Total Sales ($)", value: getRandomInt(1000, 10000) },
    { label: "Active Prescriptions", value: getRandomInt(20, 150) },
  ]

  // Sales Trend Chart
  const salesTrend = Array.from({ length: 7 }, (_, i) => ({
    date: type === "daily" ? `${8 + i} AM` : `Day ${i + 1}`,
    sales: getRandomInt(50, 300),
  }))

  // Stock Pie Chart
  const stockDistribution = categories.map((cat) => ({
    category: cat,
    value: getRandomInt(20, 100),
  }))

  // Prescription Status Chart
  const prescriptionStatus = [
    { status: "Pending", value: getRandomInt(10, 50) },
    { status: "Completed", value: getRandomInt(50, 150) },
  ]

  // Medicines (Stock, Expiry, Sold)
  const topSellingMedicines = medicines.map((med, index) => {
    const stock = getRandomInt(1, 80)
    const expiry = expiryDates[index]

    return {
      name: med,
      sold: getRandomInt(50, 150),

      // stock status
      stock,
      stockStatus: stock < 10 ? "low" : "good",

      // expiry
      expiry,
      isExpiring: isExpiringSoon(expiry),
    }
  })

  return {
    stats,
    charts: {
      salesTrend,
      stockDistribution,
      prescriptionStatus,
    },
    reports: {
      topSellingMedicines,
      lowStockMedicines: topSellingMedicines.filter((m) => m.stock < 10),
      expiringMedicines: topSellingMedicines.filter((m) => m.isExpiring),
    },
  }
}
