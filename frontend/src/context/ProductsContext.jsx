import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Add a new product
  const addProduct = (product) => {
    setProducts(prev => [...prev, { id: Date.now(), ...product }]);
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
