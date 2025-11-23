import React from 'react';

const CustomerList = ({ customers, setSelectedCustomer }) => {
  return (
    <div className='flex-1 overflow-auto'>
      <div className='divide-y'>
        {customers.length === 0 ? (
          <p className="p-4 text-gray-500 text-sm">No customers found...</p>
        ) : (
          customers.map((customer) => (
            <div
              key={customer.id}
              onClick={() => setSelectedCustomer(customer)}
              className='p-4 hover:bg-gray-100 cursor-pointer flex justify-between items-center'
            >
              <div>
                <h2 className='font-semibold text-lg'>{customer.name}</h2>
                <p className='text-sm text-gray-500'>{customer.email}</p>
                <p className='text-sm text-gray-500'>{customer.phone}</p>
              </div>

              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerList;
