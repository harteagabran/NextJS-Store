"use client";
import items from "../data/items.json";
import ItemCard from "../components/ItemCard";

export default function Home() {
  return (
    <div className="p-6 bg-white">
      <header className="flex items-center justify-between py-4 px-6 bg-white shadow-sm rounded-xl mb-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 font-bold text-lg text-black">
            MimiMart
          </div>
          <nav className="hidden md:flex items-center space-x-4 text-gray-700 text-sm">
            <button>Lobby</button>
            <button>Categories</button>
          </nav>
        </div>
        <div className="flex-1 mx-6 hidden md:block">
          <input
            type="text"
            placeholder="🔍 Search products..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="text-xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
            Sign In
          </button>
        </div>
      </header>
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-green-500">
          Products ({items.length})
        </h2>
        <p className="text-gray-500">
          Explore all products from around the world
        </p>
      </section>
      <div className="flex items-center mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-1">
          <span>Filters</span>
          <span className="text-lg font-bold leading-none">+</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
