"use client";

import Header from "../components/Header";
import { products } from "../data/product"; // Adjust the path if needed
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <>
        <Header/>
    <section className="bg-[#f2efe6] px-6 py-16 font-serif text-[#2d2d2d]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Our Full Collection</h2>
        <p className="text-sm md:text-base text-gray-700 tracking-wide">
          Browse through our wide range of eco-friendly products crafted with sustainability in mind.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <div className="w-full h-48 bg-[#e2e2e2] flex justify-center items-center">
    <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
  </div>
  <div className="p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
    </div>
    <div className="text-yellow-500 text-sm mt-2">
      {"★".repeat(Math.floor(product.rating))}{" "}
      <span className="text-gray-600">({Math.floor(Math.random() * 2000) + 1000})</span>
    </div>
    <div className="mt-2">
      <span className="font-bold">₹{product.discountedPrice}</span>{" "}
      <span className="line-through text-gray-400 text-sm">₹{product.price}</span>{" "}
      <span className="text-red-500 text-sm">
        -{Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
      </span>
    </div>
    <button className="mt-6 self-start bg-black text-white px-4 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition-all">
      Shop Now
    </button>
  </div>
</Link>

        ))}
      </div>

    </section>
    <Footer/>
    </>
  );
};

export default AllProducts;
