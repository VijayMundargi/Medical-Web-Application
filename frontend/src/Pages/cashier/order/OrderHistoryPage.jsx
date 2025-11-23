import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { DownloadIcon, SearchIcon, PrinterIcon, FilterIcon } from "lucide-react"
import OrderDetails from "./OrderDetails"
import OrderTable from "./OrderTable"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    // mock data
    const mockData = [
      { id: "#1001", date: "2025-09-10 10:00 AM", customer: "John Doe", amount: "$120", payment: "Credit Card", status: "Completed" },
      { id: "#1002", date: "2025-09-11 11:30 AM", customer: "Jane Smith", amount: "$85", payment: "UPI", status: "Pending" },
      { id: "#1003", date: "2025-09-12 02:15 PM", customer: "Michael Brown", amount: "$200", payment: "Cash", status: "Completed" },
    ]
    setOrders(mockData)
    setFilteredOrders(mockData)
  }, [])

  useEffect(() => {
    let result = orders
    if (searchQuery) {
      result = result.filter(
        o =>
          o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.customer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    if (filter === "completed") result = result.filter(o => o.status === "Completed")
    if (filter === "pending") result = result.filter(o => o.status === "Pending")
    setFilteredOrders(result)
  }, [searchQuery, filter, orders])

  const handleViewOrder = (order) => {
    setSelectedOrder(order)
    setShowDialog(true)
  }

  // ✅ Handle Return
  const handleReturn = (order) => {
    const updatedOrders = orders.map(o =>
      o.id === order.id ? { ...o, status: "Returned" } : o
    )
    setOrders(updatedOrders)
    setFilteredOrders(updatedOrders)

    // Later: call backend API
    // fetch(`/api/orders/${order.id}/return`, { method: "POST" })
  }

  // ✅ Generate Invoice (used by both Print & Download)
  const generateInvoice = (order, type = "download") => {
    const doc = new jsPDF()

    // Company Header
    doc.setFontSize(18)
    doc.text("Medical Web Application", 105, 15, { align: "center" })

    // Invoice Title
    doc.setFontSize(14)
    doc.text(`Invoice - ${order.id}`, 14, 30)

    // Order Info Table
    autoTable(doc, {
      startY: 40,
      head: [["Field", "Value"]],
      body: [
        ["Order ID", order.id],
        ["Date/Time", order.date],
        ["Customer", order.customer],
        ["Amount", order.amount],
        ["Payment Mode", order.payment],
        ["Status", order.status],
      ],
      theme: "grid",
      headStyles: { fillColor: [22, 160, 133] },
    })

    if (type === "download") {
      doc.save(`Invoice-${order.id}.pdf`)
    } else {
      doc.autoPrint()
      window.open(doc.output("bloburl"), "_blank")
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Order History</h1>

        {/* Search */}
        <div className="flex items-center gap-2 w-full md:w-1/3">
          <SearchIcon className="h-5 w-5 text-gray-400"/>
          <Input
            placeholder="Search by Order ID or Customer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter */}
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px] flex items-center gap-1">
            <FilterIcon className="h-4 w-4 text-gray-500"/>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <OrderTable 
        orders={filteredOrders} 
        onView={handleViewOrder} 
        onPrint={(order) => generateInvoice(order, "print")} 
        onDownload={(order) => generateInvoice(order, "download")} 
        onReturn={handleReturn}
      />

      {/* Order Details Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Invoice - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          <div>
            <OrderDetails order={selectedOrder} />
          </div>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => generateInvoice(selectedOrder, "print")}>
              <PrinterIcon className="mr-1 h-4 w-4"/> Print
            </Button>
            <Button variant="outline" onClick={() => generateInvoice(selectedOrder, "download")}>
              <DownloadIcon className="mr-1 h-4 w-4"/> Download
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default OrderHistoryPage
