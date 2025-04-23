import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderConfirmation = () => {
  return (
    <>
    <Header/>
    <section className="min-h-screen bg-[#fefaf6] flex items-center justify-center px-6">
      <div className="bg-white border border-[#eae4d3] rounded-3xl shadow-md max-w-xl w-full px-8 py-12 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-[#8c7d63] w-16 h-16" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-[#3b3a36] mb-4">
          Order Placed Successfully!
        </h1>

        {/* Subtext */}
        <p className="text-[#5e5b54] text-base sm:text-lg mb-8">
          Thank you for choosing sustainability. We’re preparing your items with love and care. You’ll receive an update soon.
        </p>

        {/* CTA Button */}
        <Link to="/products">
          <button className="bg-[#8c7d63] hover:bg-[#75674f] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Explore More Products
          </button>
        </Link>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default OrderConfirmation;
