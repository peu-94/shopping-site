import React from "react";
import { Search, CircleUserRound, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <div className="flex flex-row justify-center text-center w-full px-10 py-10 shadow-xl">
      <div className="flex-1">
        <h1 className="text-xl font-bold">
          UrbanBazarrr - A New trend of shopping
        </h1>
      </div>
      <div className="flex-1 flex justify-center gap-3">
        <h2>Home</h2>
        <h2>Collections</h2>
        <h2>About Us</h2>
        <h2>Contact</h2>
      </div>
      <div className="flex-1 flex justify-end gap-4">
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
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Header;
