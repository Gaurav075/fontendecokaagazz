import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ currentProductId }: { currentProductId: string }) => {
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/product/list`);
        const data = await res.json();

        if (!data?.products) return;

        const otherProducts = data.products.filter(
          (item: any) => item._id !== currentProductId
        );

        const shuffled = otherProducts.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        setRelated(selected);
      } catch (err) {
        console.error("Failed to load related products:", err);
      }
    };

    fetchRelated();
  }, [currentProductId]);

  return (
    <section className="mt-24 pt-14 w-full">
      <h2 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {related.map((product) => (
          <Link to={`/products/${product._id}`} key={product._id}>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group border border-gray-100">
              <div className="relative">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                  {Math.floor(product.discountPercent)}% OFF
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-black">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-green-700 font-bold text-base">₹{product.originalPrice*(1-product.discountPercent/100)}</p>
                  <span className="text-sm line-through text-gray-400">₹{product.originalPrice}</span>
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
  );
};

export default RelatedProducts;
