import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import ShiftInfoCard from "./ShiftInfoCard"
import SalesSummaryCard from "./SalesSummaryCard"
import PaymentSummaryCard from "./PaymentSummaryCard"
import TopSellingItemsCard from "./TopSellingItemsCard"
import RecentOrdersCard from "./RecentOrdersCard"
import RefundProcessCard from "./RefundProcessCard"

const CashierShiftReportPage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Later replace with backend API call
    const fetchData = async () => {
      const response = {
        shiftInfo: { employee: "John Doe", shift: "Morning (9 AM – 5 PM)", status: "Active" },
        salesSummary: { totalSales: 12450, orders: 120, avgOrderValue: 103.75 },
        paymentSummary: { cash: 4200, card: 6500, upi: 1750 },
        topItems: [
          { name: "Item A", units: 300 },
          { name: "Item B", units: 250 },
          { name: "Item C", units: 200 },
        ],
        recentOrders: [
          { id: 1023, amount: 150 },
          { id: 1024, amount: 85 },
          { id: 1025, amount: 220 },
        ],
        refundProcess: { totalRefunds: 500, pending: 2, approved: 5 },
      }
      setData(response)
    }

    fetchData()
  }, [])

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading shift report...</p>
      </div>
    )
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Page Title */}
      <Card className="mb-8 shadow-md border border-gray-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">💼 Cashier Shift Report</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Overview of today’s cashier performance, sales, and transactions.
          </p>
        </CardContent>
      </Card>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ShiftInfoCard {...data.shiftInfo} />
        <SalesSummaryCard {...data.salesSummary} />
        <PaymentSummaryCard {...data.paymentSummary} />
        <TopSellingItemsCard items={data.topItems} />
        <RecentOrdersCard orders={data.recentOrders} />
        <RefundProcessCard {...data.refundProcess} />
      </div>
    </div>
  )
}

export default CashierShiftReportPage
