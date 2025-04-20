import { products } from "../../data/product";
import { Link } from "react-router-dom";

const BestPicksSection = () => {
  return (
    <section className="px-6 py-6 font-serif">
      <h2 className="text-2xl font-medium">Our</h2>
      <h3 className="text-3xl font-bold mb-6">Best Picks For You</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="bg-white shadow-md rounded-md p-4">
            <div className="w-full">
              <img
                src={product.images[0]}
                alt={product.title}
                className="rounded-md aspect-[4/5] mb-4 h-60 w-full object-cover"
              />
              <h4 className="font-semibold">{product.title}</h4>
              <p className="text-xs text-gray-600">{product.description}</p>

              <div className="text-yellow-500 text-sm mt-2">
                {"★".repeat(Math.floor(product.rating))}{" "}
                <span className="text-gray-600">
                  ({Math.floor(Math.random() * 2000) + 1000})
                </span>
              </div>

              <div className="mt-2">
                <span className="font-bold">₹{product.discountedPrice}</span>{" "}
                <span className="line-through text-gray-400 text-sm">₹{product.price}</span>{" "}
                <span className="text-red-500 text-sm">
                  -{Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                </span>
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
