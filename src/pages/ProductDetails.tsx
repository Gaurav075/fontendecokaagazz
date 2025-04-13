import { useParams } from "react-router-dom";
import { products } from "../data/product";
import Header from "../components/Header";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

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

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="space-y-4">
            <img
              src={images[0]}
              alt={title}
              className="rounded-xl w-full h-[500px] object-cover shadow-lg transition duration-300 ease-in-out hover:scale-105"
            />
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-20 h-20 rounded-md object-cover border cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight leading-snug text-neutral-900">{title} [A4]</h1>
            <p className="text-sm text-neutral-500 italic">
              {certifiedSustainable ? "🌿 Certified Sustainable • " : ""}
              Category: {category}
            </p>
            <p className="text-base text-neutral-700 leading-7">{description}</p>

            {/* Price + Stock */}
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold text-green-700">₹{discountedPrice}</p>
                <span className="text-base line-through text-gray-400">₹{price}</span>
                <span className="text-sm text-green-600">
                  ({Math.round(((price - discountedPrice) / price) * 100)}% OFF)
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {stockLeft > 0 ? `Only ${stockLeft} left in stock` : "Out of stock"}
              </p>
              {isBulkAvailable && (
                <p className="text-sm text-blue-500">
                  Bulk purchase available (Min. qty: {bulkMinQty})
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-7 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition">
                🛒 Add to Cart
              </button>
              <button className="border border-black px-7 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
                🔥 Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6 border-b pb-2">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.category === category && p.id !== id)
              .slice(0, 3)
              .map((related) => (
                <div
                  key={related.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer group"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-neutral-700">{related.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">₹{related.discountedPrice}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
