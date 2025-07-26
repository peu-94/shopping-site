import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // 🔄 Sync minicart
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    console.log("Cart on load:", cartData);

    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between border p-4 rounded shadow"
            >
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-blue-600 font-bold mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <button className="text-sm text-gray-500">
                      Save for later
                    </button>
                    <button
                      className="text-sm text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
