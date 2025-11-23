import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { EyeIcon, PrinterIcon, DownloadIcon, RotateCcwIcon } from "lucide-react"

const OrderTable = ({ orders, onView, onPrint, onDownload, onReturn }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date/Time</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Mode</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.payment}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : order.status === "Returned"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell className="flex justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => onView(order)}>
                  <EyeIcon className="h-4 w-4 mr-1" /> View
                </Button>
                <Button size="sm" variant="outline" onClick={() => onPrint(order)}>
                  <PrinterIcon className="h-4 w-4 mr-1" /> Print
                </Button>
                <Button size="sm" variant="outline" onClick={() => onDownload(order)}>
                  <DownloadIcon className="h-4 w-4 mr-1" /> Save
                </Button>
                {order.status !== "Returned" && (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onReturn(order)} // 👈 opens reason dialog
                  >
                    <RotateCcwIcon className="h-4 w-4 mr-1" /> Return
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OrderTable
