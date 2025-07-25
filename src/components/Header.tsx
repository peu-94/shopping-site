import React from "react";
import { Search, CircleUserRound, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import { useCart } from "../context/CartContext"; // ✅ import context

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useCart(); // ✅ get cart from context

  return (
    <div className="flex flex-row justify-center text-center w-full px-10 py-10 shadow-xl">
      <div className="flex-1">
        <h1 className="text-xl font-bold">
          UrbanBazarrr - A New trend of shopping
        </h1>
      </div>

      <div className="flex-1 flex justify-center gap-5">
        <div
          className="cursor-pointer hover font-semibold"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <Category />
        <div
          className="cursor-pointer hover font-semibold"
          onClick={() => navigate("/AboutUs")}
        >
          About Us
        </div>
      </div>

      <div className="flex-1 flex justify-end gap-4 items-center">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-500" />
          </div>
        </div>

        <button className="block md:hidden">
          <Search />
        </button>

        <CircleUserRound />

        {/* ✅ Cart Icon with Badge */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
