import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Premium Paper Notebooks",
      description: "Perfect for office supplies and educational activities.",
      image: "/lovable-uploads/stationary.png",
    },
    {
      title: "Print Your Next Book with Kaagazz",
      description: "Paper with a cause. Excellent for printers that don't harm.",
      image: "/lovable-uploads/notebook.jpg",
    },
    {
      title: "Are You An Art Connoisseur?",
      description: "Experience our craft. Blank paper for your masterpieces.",
      image: "/lovable-uploads/art.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[url('/bg1.png')] bg-cover bg-no-repeat bg-center font-serif">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#5C4033] mb-16">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="group perspective h-[400px]">
  <div className="flip-card">
    {/* Front Side */}
    <div className="flip-front shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 bg-[#5C4033]/70 w-full p-4 text-white text-center font-semibold text-lg">
        {product.title}
      </div>
    </div>

    {/* Back Side */}
    <div className="flip-back shadow-md bg-white p-6 flex flex-col justify-center items-center text-center">
      <h3 className="text-xl font-bold text-[#5C4033] mb-3">{product.title}</h3>
      <p className="text-sm text-[#3A3A3A] mb-4">{product.description}</p>
      <Link to="/shop">
        <button className="text-[#5C4033] hover:text-[#3d2a20] text-sm font-medium">
          Shop Now →
        </button>
      </Link>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
