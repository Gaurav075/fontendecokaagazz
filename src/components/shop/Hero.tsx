import { Link } from "react-router-dom";
import { products } from "../../data/product";

const Hero = () => {
  return (
    <div className="font-serif text-[#2d2d2d] bg-[#F2EFE6]">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs text-center py-2 tracking-wider">
        FREE SHIPPING ON ORDERS ABOVE RS. 2500
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-3 gap-0 px-0 py-2">
        <img
          src="/diary3.jpg"
          alt="Left Image"
          className="w-full h-[300px] object-cover shadow-lg"
        />

        <div className="relative flex items-center justify-center">
          <img
            src="/A4.jpg"
            alt="Center Image"
            className="w-full h-[300px] object-cover shadow-lg"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-6 text-center">
            <p className="uppercase text-xs tracking-wide mb-2">Check out our</p>
            <h2 className="text-xl font-bold tracking-wider mb-2">Latest Collection</h2>
            <Link to="/products">
              <button className="bg-white text-black px-4 py-1 text-sm font-semibold mt-2 hover:bg-gray-200 transition-all">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <img
          src="/artisanal.png"
          alt="Right Image"
          className="w-full h-[300px] object-cover shadow-lg"
        />
      </section>

      {/* Certificate Info */}
      <div className="text-center text-sm text-gray-700 underline underline-offset-4 mb-10">
        Every Product comes with a Certificate of Sustainability <br />
        showcasing your efforts for a better future!
      </div>

      {/* Best Picks Section */}
      <section className="px-6 py-6">
        <h2 className="text-2xl font-medium">Our</h2>
        <h3 className="text-3xl font-bold mb-6">Best Picks For You</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-md p-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="rounded-md mb-4 h-60 w-full object-cover"
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
          ))}
        </div>
      </section>

      {/* View Collections Button */}
      <div className="text-center mt-10 mb-12">
        <Link to="/products">
          <button className="border border-gray-700 px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-all">
            VIEW COLLECTIONS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
