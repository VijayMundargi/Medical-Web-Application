import React from "react";

const CustomerSearch = ({ setSearchQuery }) => {
  return (
    <div className="p-4 border-b">
      <input
        type="text"
        placeholder="Search customers..."
        className="w-full border p-2 rounded"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default CustomerSearch;
