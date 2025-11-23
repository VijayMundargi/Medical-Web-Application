import React, { forwardRef } from "react"

const Invoice = forwardRef(({ order }, ref) => {
  if (!order) return null

  return (
    <div ref={ref} className="p-6 text-gray-800 font-sans">
      {/* Company Header */}
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold text-blue-600">Medical Web Application</h1>
        <p className="text-sm text-gray-500">123 Health Street, Wellness City</p>
        <p className="text-sm text-gray-500">Phone: +91-9876543210 | Email: support@medicalapp.com</p>
      </div>

      {/* Invoice Title */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Invoice</h2>
        <p className="text-sm text-gray-500">Order ID: {order.id}</p>
        <p className="text-sm text-gray-500">Date: {order.date}</p>
      </div>

      {/* Customer + Order Info */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-500">Customer Name</p>
          <p className="font-medium">{order.customer}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Payment Mode</p>
          <p className="font-medium">{order.payment}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p
            className={`font-medium ${
              order.status === "Completed"
                ? "text-green-600"
                : order.status === "Pending"
                ? "text-yellow-600"
                : "text-gray-600"
            }`}
          >
            {order.status}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="font-medium">{order.amount}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        <p>Thank you for your order!</p>
        <p>Powered by Medical Web Application</p>
      </div>
    </div>
  )
})

export default Invoice
