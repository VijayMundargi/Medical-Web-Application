import React from 'react';

const CustomerCard = ({ customer, onClick }) => {
  return (
    <div className='p-4 cursor-pointer hover:bg-accent' onClick={onClick}>
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='font-semibold'>{customer.name}</h3>
          <h3>{customer.email}</h3>
          <h3>{customer.phone}</h3>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
