import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import RelatedProducts from "../components/shop/RelatedProducts";

const ProductDetails = () => {
  const [product, setProduct] = useState<any>();
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [feedback, setFeedback] = useState("");


   function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

  useEffect(() => {
    setSelectedImageIndex(0);
    setFeedback("");

    const fetchProductWithId = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`);
        const data = await response.json();
        if (data.success && data.product) {
          const prod = data.product;

          // compute discounted price
          const discountedPrice = Math.floor(prod.originalPrice * (1 - prod.discountPercent / 100));

          setProduct({
            id: prod._id,
            title:capitalizeWords(prod.title),
            description: prod.description,
            images: prod.images,
            price: prod.originalPrice,
            discountedPrice,
            stockLeft: prod.stock,
            isBulkAvailable: prod.tags.includes("bulk"),
            bulkMinQty: 10, // hardcoded or adjust if provided in future
            certifiedSustainable: prod.tags.includes("eco-friendly"),
            category: prod.category,
          });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductWithId();
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
      title: capitalizeWords(product.title),
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

          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-2">
              {capitalizeWords(title)}
            </h1>
            <p className="text-sm text-neutral-500 italic">
              {certifiedSustainable ? "🌿 Certified Sustainable • " : ""}
              Category: {category}
            </p>
            <p className="text-base text-neutral-700 leading-7">{description}</p>

            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3">
                <p className="text-3xl font-extrabold text-green-700">₹{discountedPrice}</p>
                <span className="text-lg line-through text-gray-400">₹{price}</span>
                <span className="text-sm text-green-600 font-medium">
                  ({Math.floor(((price - discountedPrice) / price) * 100)}% OFF)
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
                <Link
                to={`/products/${id}/bulk`}
                >
                                <button className="bg-gray-100 text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition self-start">
                  📦 Bulk Order
                </button>
                </Link>

              </div>
              {feedback && (
                <div className="text-green-600 text-sm font-medium mt-2">{feedback}</div>
              )}
            </div>
          </div>
        </div>
        <div className="py-7 px-4 w-full">
            <RelatedProducts currentProductId={product._id} />
        </div>
      </main>
    </>
  );
};

export default ProductDetails;