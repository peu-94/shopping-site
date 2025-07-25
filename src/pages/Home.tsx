import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const saleBanners = [
  {
    title: "🔥 Mega Summer Sale!",
    subtitle: "Up to 70% off on selected items.",
    bg: "from-pink-500 to-red-500",
  },
  {
    title: "🛍️ Festive Deals!",
    subtitle: "Buy 1 Get 1 Free on Fashion!",
    bg: "from-yellow-400 to-orange-500",
  },
  {
    title: "🎉 Clearance Sale!",
    subtitle: "Last chance to grab your favorites.",
    bg: "from-green-400 to-blue-500",
  },
];

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bannerIndex, setBannerIndex] = useState(0);

  // Rotate sale banner every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % saleBanners.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Fetch product list
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      {/* Banner */}
      <div
        key={bannerIndex}
        className={`bg-gradient-to-r ${saleBanners[bannerIndex].bg} text-white rounded-lg p-6 text-center mb-10 shadow-md transition-all duration-700 ease-in-out`}
      >
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          {saleBanners[bannerIndex].title}
        </h2>
        <p className="text-base md:text-xl">
          {saleBanners[bannerIndex].subtitle}
        </p>
        <button className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition">
          Shop Now
        </button>
      </div>

      {/* Product Grid */}
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>

      {loading ? (
        <div className="text-center py-20 text-lg">Loading products...</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
