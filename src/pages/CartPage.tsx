import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    console.log("Cart on load:", cartData); 

    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-blue-600 font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
