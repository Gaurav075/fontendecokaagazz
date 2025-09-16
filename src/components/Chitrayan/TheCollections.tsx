

// import { title } from "process";
// import { Card, CardContent, CardHeader } from "../ui/card";
// import { Badge } from "../ui/badge";
// import { ShoppingCart } from "lucide-react";

// const collections = [
//   {
//     id: 1,
//     title: "Madhubani Kit",
//     state: "Bihar",
//     descp: "Sacred motifs in vibrant geometry",
//     price: "₹899",
//     tag: "Popular",
//     image: "",
//   },
//   {
//     id: 2,
//     title: "Warli Art Kit",
//     state: "Maharashtra",
//     descp: "Tribal stories in simple lines",
//     price: "₹849",
//     tag: "New",
//     image: "",
//   },
//   {
//     id: 3,
//     title: "Gond Art Kit",
//     state: "Madhya Pradesh",
//     descp: "Mythic creatures come alive",
//     price: "₹949",
//     tag: "Premium",
//     image: "",
//   },
// ];

// const TheCollections = () => {
//   return (
//     <>
//       <div
//         id="collection-section"
//         className="bg-gradient-to-r from-orange-100/50 to-amber-100/50 text-center"
//       >
//         <h2 className="font-semibold text-center text-3xl py-12 sm:text-4xl md:text-4xl">
//           The Collection
//         </h2>

//         <div className="md:grid grid-cols-3 gap-8 mx-32 pb-16">
//           {collections.map((collection) => (
//             <Card
//               key={collection.id}
//               className="group bg-white border-orange-100 hover:shadow-xl transition-all duration-300"
//             >
//               <CardHeader className="p-0">
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <img
//                     src={collection.image}
//                     alt={collection.title}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
//                     {collection.tag}
//                   </Badge>
//                 </div>
//               </CardHeader>

//               <CardContent className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold">{collection.title}</h3>
//                   <span className="font-bold text-2xl text-orange-600">
//                     {collection.price}
//                   </span>
//                 </div>
//                 <p className="text-gray-500 text-sm text-left">
//                   {collection.state}
//                 </p>
//                 <p className="text-left text-gray-700 text-sm font-light mb-3">
//                   {collection.descp}
//                 </p>

//                 <button className="bg-orange-500 hover:bg-orange-600 text-white flex justify-center gap-2 p-2 w-full rounded-md ">
//                   <ShoppingCart className="w-6 h-6 mr-2"/> Add to Cart
//                 </button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TheCollections;

// const kit = [
//   {
//     title: "Madhubani Magic Kit",
//     description:
//       "Create vibrant Madhubani paintings with this all-inclusive kit.",
//     image: "/public/Chitrayan/Featured Kits/kit1.png",
//   },
//   {
//     title: "Kalamkari Canvas Kit",
//     description:
//       "Craft intricate Kalamkari designs on canvas with our premium kit.",
//     image: "/public/Chitrayan/Featured Kits/kit2.png",
//   },
//   {
//     title: "Warli Wonders Kit",
//     description: "Explore the rustic charm of Warli art with this unique kit.",
//     image: "/public/Chitrayan/Featured Kits/kit3.png",
//   },
// ];

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPercent: number;
  images: string[];
  rating?: number;
  stock?: number;
  category: string;
}

const TheCollections = () => {
  const [kits, setKits] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function capitalizeWords(str: string) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Function to calculate discounted price
  const calculatePrice = (originalPrice: number, discountPercent = 0) => {
    if (!originalPrice || originalPrice === 0) return "N/A";
    
    if (discountPercent > 0) {
      const discountedPrice = originalPrice - (originalPrice * discountPercent / 100);
      return Math.floor(discountedPrice);
    }
    
    return originalPrice;
  };

  useEffect(() => {
    async function fetchChitrayan() {
      try {
        setLoading(true);
        setError(""); // Clear previous errors
        
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/product/category/Chitrayan`);
        const data = await res.json();

        // With the new backend, it always returns success: true
        if (data.success) {
          setKits(data.products || []);
        } else {
          // Only set error for actual server errors
          setError(data.message || "Failed to load Chitrayan products.");
          setKits([]);
        }
      } catch (err) {
        console.error("Error fetching Chitrayan products:", err);
        setError("Failed to load Chitrayan products. Please try again.");
        setKits([]);
      } finally {
        setLoading(false);
      }
    }

    fetchChitrayan();
  }, []);

  if (loading) {
    return (
      <section className="py-12 relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl mb-10 text-center">
          Featured Kits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-xl overflow-hidden animate-pulse">
              <div className="w-full h-64 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl mb-10 text-center">
          Featured Kits
        </h2>
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (kits.length === 0) {
    return (
      <section className="py-12 relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl mb-10 text-center">
          Featured Kits
        </h2>
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Chitrayan Products Available
            </h3>
            <p className="text-gray-500 mb-6">
              We're currently updating our Chitrayan collection. Please check back soon!
            </p>
            <Link
              to="/products?category=All"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl text-center flex-1">
          Featured Kits
        </h2>
        {kits.length > 6 && (
          <Link
            to="/products?category=Chitrayan"
            className="hidden sm:block text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            View All →
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
        {kits.slice(0, 6).map((kit) => (
          <Link 
            key={kit._id} 
            to={`/products/${kit._id}`}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="relative overflow-hidden bg-gray-100">
                {kit.images?.[0] ? (
                  <img
                    src={kit.images[0]}
                    alt={kit.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder-image.jpg';
                      e.currentTarget.onerror = null;
                    }}
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400 text-sm">No Image</span>
                  </div>
                )}
                
                {/* Discount Badge */}
                {kit.discountPercent > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {kit.discountPercent}% OFF
                  </div>
                )}

                {/* Stock Badge */}
                {kit.stock !== undefined && kit.stock <= 5 && kit.stock > 0 && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Only {kit.stock} left
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 group-hover:text-orange-600 transition-colors line-clamp-2" title={kit.title}>
                  {capitalizeWords(kit.title)}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3" title={kit.description}>
                  {kit.description}
                </p>
                
                {/* Price Section */}
                {kit.originalPrice && (
                  <div className="flex items-center gap-2 mb-2">
                    {kit.discountPercent > 0 ? (
                      <>
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{calculatePrice(kit.originalPrice, kit.discountPercent)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{kit.originalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-gray-900">
                        ₹{kit.originalPrice}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 text-sm mb-3">
                  {"★".repeat(Math.floor(kit.rating || 4))}
                  <span className="text-gray-400 ml-1">
                    ({Math.floor(Math.random() * 500) + 100})
                  </span>
                </div>
                
                {/* Stock Status */}
                <div className="text-xs mb-3">
                  {!kit.stock || kit.stock === 0 ? (
                    <span className="text-red-500 font-medium">Out of Stock</span>
                  ) : kit.stock <= 5 ? (
                    <span className="text-orange-500 font-medium">Limited Stock</span>
                  ) : (
                    <span className="text-green-600 font-medium">In Stock</span>
                  )}
                </div>
                
                {/* Call to action */}
                <div className="mt-3 text-center">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !kit.stock || kit.stock === 0
                      ? "bg-gray-300 text-gray-500"
                      : "bg-orange-500 text-white group-hover:bg-orange-600"
                  }`}>
                    {!kit.stock || kit.stock === 0 ? "Out of Stock" : "View Details"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All Button */}
      {kits.length > 3 && (
        <div className="sm:hidden text-center mt-8">
          <Link
            to="/products?category=Chitrayan"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium"
          >
            View All Chitrayan Products
          </Link>
        </div>
      )}
    </section>
  );
};

export default TheCollections;