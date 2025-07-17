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

          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
