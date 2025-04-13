
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RevolutionCTA = () => {
  return (
    <section
  className="py-20 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&q=80')",
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Join the Kaagazz Revolution
    </h2>
    <p className="text-white text-lg mb-8">
      Be part of our sustainable movement transforming waste into beautiful
      paper products.
    </p>
    <Link to="/contact">
      <button className="bg-white text-black px-6 py-3 rounded-md flex items-center mx-auto hover:bg-gray-100 transition-colors">
        Get Involved
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </Link>
  </div>
</section>

  );
};

export default RevolutionCTA;