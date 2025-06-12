import React, { createContext, useState } from "react";

  export const CartContext = createContext();

  export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const increaseCartCount = () => {
      setCartCount(prev => prev + 1);
    };

    return (
      <CartContext.Provider value={{ cartCount, increaseCartCount }}>
        {children}
      </CartContext.Provider>
    );
  };
