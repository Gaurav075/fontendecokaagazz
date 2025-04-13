
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Premium Paper Notebooks",
      description: "Perfect for office supplies and educational activities",
      image: "/lovable-uploads/145082a8-b00f-4d3d-ac81-08983ab4981c.png",
    },
    {
      title: "Print Your Next Book with Kaagazz",
      description: "Paper with a cause. Excellent for Printers Don't Cause Harm.",
      image: "/lovable-uploads/282d8935-53d1-438d-a40c-e467006eee2a.png",
    },
    {
      title: "Are You An Art Connoisseur?",
      description: "Experience our craft. Blank paper for your masterpieces.",
      image: "/lovable-uploads/f48f3689-f8b8-4f2c-b728-ff32cf2f6977.png",
    }
  ];

  return (
    <section className="py-16 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">OUR PRODUCTS</h2>
        
        <div className="flex flex-col space-y-12">
          {products.map((product, index) => (
            <div key={index} className={`flex ${index % 2 === 1 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} items-center gap-8`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm mb-4">{product.description}</p>
                <Link to="/shop">
                  <button className="px-6 py-2 bg-black text-white rounded-full text-sm">Shop Now</button>
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