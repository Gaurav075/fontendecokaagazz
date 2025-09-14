import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestPicksSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

  useEffect(() => {
    const fetchTopPicks = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/product/top-picks`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch top picks');
        }
        
        const data = await res.json();
        setProducts((data.products || data).slice(0, 3));
        setError("");
      } catch (err) {
        console.error("Error fetching top picks:", err);
        setError("Failed to load best picks. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopPicks();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-6 font-serif">
        <h2 className="text-2xl font-medium">Our</h2>
        <h3 className="text-3xl font-bold mb-6">Best Picks For You</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4 animate-pulse">
              <div className="w-full h-60 bg-gray-300 rounded-md mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 mb-12">
          <div className="border border-gray-300 px-6 py-2 text-sm tracking-widest bg-gray-100 inline-block">
            LOADING...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-6 font-serif">
        <h2 className="text-2xl font-medium">Our</h2>
        <h3 className="text-3xl font-bold mb-6">Best Picks For You</h3>

        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="border border-red-500 px-6 py-2 text-sm tracking-widest hover:bg-red-500 hover:text-white transition-all"
          >
            TRY AGAIN
          </button>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="px-6 py-6 font-serif">
        <h2 className="text-2xl font-medium">Our</h2>
        <h3 className="text-3xl font-bold mb-6">Best Picks For You</h3>

        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No top picks available at the moment.</p>
        </div>

        <div className="text-center mt-10 mb-12">
          <Link to="/products">
            <button className="border border-gray-700 px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-all">
              VIEW COLLECTIONS
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-6 font-serif">
      <h2 className="text-2xl font-medium">Our</h2>
      <h3 className="text-3xl font-bold mb-6">Best Picks For You</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            to={`/products/${product._id}`} 
            key={product._id} 
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="w-full">
              <div className="relative overflow-hidden rounded-md mb-4">
                <img
                  src={product.images?.[0] || product.image || "/placeholder-image.jpg"}
                  alt={product.title}
                  className="aspect-[4/5] h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h4 className="font-semibold group-hover:text-green-600 transition-colors line-clamp-2">
                {capitalizeWords(product.title)}
              </h4>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {product.description}
              </p>

              <div className="text-yellow-500 text-sm mt-2">
                {"★".repeat(Math.floor(product.rating || 4))}{" "}
                <span className="text-gray-600">
                  ({Math.floor(Math.random() * 2000) + 1000})
                </span>
              </div>

              <div className="mt-2">
                <span className="font-bold">
                  ₹{Math.floor(product.originalPrice * (1 - product.discountPercent / 100))}
                </span>{" "}
                {product.discountPercent > 0 && (
                  <>
                    <span className="line-through text-gray-400 text-sm">
                      ₹{product.originalPrice}
                    </span>{" "}
                    <span className="text-red-500 text-sm">
                      -{product.discountPercent}%
                    </span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View Collections Button */}
      <div className="text-center mt-10 mb-12">
        <Link to="/products">
          <button className="border border-gray-700 px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-all">
            VIEW COLLECTIONS
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestPicksSection;