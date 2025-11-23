import React from 'react';
import { useCustomerContext } from "@/context/CustomerContext";
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';

const CustomerLookup = () => {
  const { customers } = useCustomerContext();
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery)
  );

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r">
        <CustomerSearch setSearchQuery={setSearchQuery} />
        <CustomerList customers={filtered} setSelectedCustomer={setSelectedCustomer} />
      </div>

      <div className="w-2/3 overflow-auto">
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default CustomerLookup;
