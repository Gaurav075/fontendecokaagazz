import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Premium Paper Notebooks",
      description: "Perfect for office supplies and educational activities",
      image: "/lovable-uploads/stationary.png",
    },
    {
      title: "Print Your Next Book with Kaagazz",
      description: "Paper with a cause. Excellent for Printers Don't Cause Harm.",
      image: "/lovable-uploads/notebook.jpg",
    },
    {
      title: "Are You An Art Connoisseur?",
      description: "Experience our craft. Blank paper for your masterpieces.",
      image: "/lovable-uploads/art.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')] bg-cover bg-no-repeat bg-center font-serif">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold tracking-wide uppercase text-gray-800 mb-16 animate-fadeIn">
          Our Products
        </h2>

        <div className="flex flex-col space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 1
                  ? "flex-col md:flex-row-reverse"
                  : "flex-col md:flex-row"
              } items-center gap-10 group transition-all duration-300 animate-fadeInUp`}
            >
              <div className="w-full md:w-1/2">
              <Link to="/shop">
              
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[550px] object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              </div>
              <div className="w-full md:w-1/2 px-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6 font-light">
                  {product.description}
                </p>
                <Link to="/shop">
                  <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition duration-300 shadow-md">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
