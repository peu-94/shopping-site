import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (item: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const addToCart = (item: Product) => {
    const updated = [...cartItems, item];
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
