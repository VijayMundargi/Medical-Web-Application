import React, { useEffect, useState } from "react"
import axios from "axios"

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
    const fetchReport = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/shift/report/1")
        setData(res.data)
      } catch (error) {
        console.error("Error loading report:", error)
      }
    }

    fetchReport()
  }, [])

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading shift report...</p>
      </div>
    )
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card className="mb-8 rounded-2xl shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            💼 Cashier Shift Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Overview of cashier performance & sales.</p>
        </CardContent>
      </Card>

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
