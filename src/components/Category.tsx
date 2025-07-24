import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    title: "Clothing",
    items: [
      "Men's Casual Wear",
      "Women's Casual Wear",
      "Men's Ethnic Wear",
      "Women's Ethnic Wear",
      "Winter Collection",
      "Kids Wear",
    ],
  },
  {
    title: "Accessories",
    items: [
      "Earrings",
      "Bangles",
      "Necklace",
      "Men & Women engagement Rings",
      "Daily Wear Accessories ",
    ],
  },
  {
    title: "Bagpack",
    items: ["Bagpack"],
  },
  {
    title: "Electronics Items",
    items: ["TV", "Fridge", "Washing Machine", "AC", "Fan"],
  },
];

function Category() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 font-semibold">
        <span>Collection</span>
        <ChevronDown size={16} />
      </div>
      {open && (
        <div className="absolute top-full left-0 bg-white shadow-xl rounded-sm border z-50 p-6 flex gap-8 w-screen max-w-[1600px]">
          {categories.map(({ title, items }) => (
            <div key={title} className="min-w-[180px]">
              <h3 className="font-bold text-sm mb-2">{title}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {items.map((item) => (
                  <li key={item} className="hover:text-blue-500 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
