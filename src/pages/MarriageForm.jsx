import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const marriageDesigns = {
  1: {
    title: "Classic Minimalist",
    image: "/images/marriage1.jpg",
  },
  2: {
    title: "Floral Harmony",
    image: "/images/marriage2.jpg",
  },
  3: {
    title: "Rustic Charm",
    image: "/images/marriage3.jpg",
  },
};

const MarriageForm = () => {
  const { id } = useParams();
  const design = marriageDesigns[id];

  if (!design) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Design not found</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={design.image}
              alt={design.title}
              className="w-48 h-48 object-cover rounded-xl shadow"
            />
            <h2 className="text-3xl font-bold text-[#3e2f22] mt-4">
              {design.title}
            </h2>
            <p className="text-gray-600 mt-2">
              Fill in your details to customize this design.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Customization Details
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your message or customization request"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3e2f22] transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MarriageForm;
