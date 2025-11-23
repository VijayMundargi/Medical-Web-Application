import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const CustomerDetails = ({ customer }) => {
  if (!customer) {
    return <div className="p-6 text-gray-500">Select a customer to see details</div>;
  }

  return (
    <div className='p-6'>

      <div className='flex justify-between items-center mb-6'>
        <div>
          <h2 className='text-xl font-semibold'>{customer.name}</h2>
          <p className='text-sm text-gray-500'>{customer.email}</p>
          <p className='text-sm text-gray-500'>{customer.phone}</p>
        </div>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 mb-6'>
        <Card>
          <CardHeader><CardTitle>Total Orders</CardTitle></CardHeader>
          <CardContent className="text-lg font-semibold">
            {customer.totalOrders}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Total Spent</CardTitle></CardHeader>
          <CardContent className="text-lg font-semibold text-green-600">
            ₹{customer.totalSpent}
          </CardContent>
        </Card>
      </div>

      {/* Purchase History */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          {customer.purchaseHistory?.length > 0 ? (
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Payment</th>
                </tr>
              </thead>
              <tbody>
                {customer.purchaseHistory.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-2">{order.date}</td>
                    <td className="p-2 text-green-600">₹{order.amount}</td>
                    <td className="p-2">{order.paymentMode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-sm">No purchase history available</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerDetails;
