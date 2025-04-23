import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/product";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setSelectedImageIndex(0);
    setFeedback("");
  }, [id]);

  if (!product) {
    return <div className="p-8 text-center text-2xl font-light">Product not found</div>;
  }

  const {
    title,
    description,
    images,
    discountedPrice,
    price,
    stockLeft,
    isBulkAvailable,
    bulkMinQty,
    certifiedSustainable,
    category,
  } = product;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      quantity: 1,
      image: product.images[0],
    });

    setFeedback("✅ Added to cart!");
    setTimeout(() => setFeedback(""), 2000);
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="w-full">
              <img
                src={images[selectedImageIndex]}
                alt={title}
                className="rounded-2xl w-full h-auto max-h-[500px] object-cover shadow-xl transition duration-300 ease-in-out hover:scale-[1.015]"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide p-1">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 rounded-md object-cover border-2 cursor-pointer transition-all duration-200 ${
                    index === selectedImageIndex ? "ring-2 ring-black" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-2">
              {title}
            </h1>
            <p className="text-sm text-neutral-500 italic">
              {certifiedSustainable ? "🌿 Certified Sustainable • " : ""}
              Category: {category}
            </p>
            <p className="text-base text-neutral-700 leading-7">{description}</p>

            {/* Price & Stock */}
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3">
                <p className="text-3xl font-extrabold text-green-700">₹{discountedPrice}</p>
                <span className="text-lg line-through text-gray-400">₹{price}</span>
                <span className="text-sm text-green-600 font-medium">
                  ({Math.round(((price - discountedPrice) / price) * 100)}% OFF)
                </span>
              </div>
              <p className={`text-sm font-medium ${stockLeft > 0 ? "text-gray-600" : "text-red-500"}`}>
                {stockLeft > 0 ? `Only ${stockLeft} left in stock` : "Out of stock"}
              </p>
              {isBulkAvailable && (
                <p className="text-sm text-blue-500 font-medium">
                  Bulk purchase available (Min. qty: {bulkMinQty})
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={stockLeft <= 0}
                  className={`${
                    stockLeft > 0
                      ? "bg-black text-white hover:opacity-90"
                      : "bg-gray-300 text-gray-700 cursor-not-allowed"
                  } px-8 py-3 rounded-full font-medium shadow-lg transition`}
                >
                  🛒 Add to Cart
                </button>
                <button className="bg-gray-100 text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition self-start">
                📦 Bulk Order
              </button>
              </div>
              {feedback && (
                <div className="text-green-600 text-sm font-medium mt-2">{feedback}</div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24 pt-14">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products
              .filter((p) => p.category === category && p.id !== id)
              .slice(0, 3)
              .map((related) => (
                <Link to={`/products/${related.id}`} key={related.id}>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group border border-gray-100">
                    <div className="relative">
                      <img
                        src={related.images?.[0] || related.image}
                        alt={related.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                        {Math.round(((related.price - related.discountedPrice) / related.price) * 100)}% OFF
                      </span>
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-black">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-green-700 font-bold text-base">₹{related.discountedPrice}</p>
                        <span className="text-sm line-through text-gray-400">₹{related.price}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
