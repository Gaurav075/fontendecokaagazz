import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const KaagazzPrint = () => {
  const tabs = [
    { name: "Print Book", path: "/printbook" },
    { name: "Certificates", path: "/certificates" },
    { name: "Business Cards", path: "/business-cards" },
    { name: "Quick Print", path: "/quick-print" },
  ];

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 font-serif text-[#1e1e1e]">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl font-bold tracking-tight mb-4 text-[#3e2f22]">
            Print With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bespoke printing for your cherished moments, crafted with sustainable elegance.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className="px-5 py-2 text-sm font-medium rounded-full border border-gray-300 bg-white shadow-sm hover:bg-[#5D4037] hover:text-white transition-all"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Celebrate Sustainably Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-3xl font-semibold text-center text-[#3e2f22] mb-10">
            Celebrate Sustainably
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Marriage */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <img
                src="/marriage.jpg"
                alt="Marriage"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h4 className="font-semibold text-lg">Marriage</h4>
                <p className="text-sm text-gray-600">
                  Timeless invitations for your special day, printed on exquisite,
                  eco-friendly paper.
                </p>
                <Link to="/marriage">
                  <button className="mt-2 px-4 py-2 bg-[#5D4037] text-white text-sm rounded-full hover:bg-[#3e2f22] transition-all">
                    Explore Designs
                  </button>
                </Link>
              </div>
            </div>

            {/* Baby Shower */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <img
                src="/babyshower.jpg"
                alt="Baby Shower"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h4 className="font-semibold text-lg">Baby Shower</h4>
                <p className="text-sm text-gray-600">
                  Announce your bundle of joy with charming, sustainable stationery.
                </p>
                <Link to="/babyshower">
                  <button className="mt-2 px-4 py-2 bg-[#5D4037] text-white text-sm rounded-full hover:bg-[#3e2f22] transition-all">
                    Discover Themes
                  </button>
                </Link>
              </div>
            </div>

            {/* Birthday */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <img
                src="/birthday.jpg"
                alt="Birthday"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h4 className="font-semibold text-lg">Birthday</h4>
                <p className="text-sm text-gray-600">
                  Mark another year with personalized, eco-conscious invitations.
                </p>
                <Link to="/birthday">
                  <button className="mt-2 px-4 py-2 bg-[#5D4037] text-white text-sm rounded-full hover:bg-[#3e2f22] transition-all">
                    View Styles
                  </button>
                </Link>
              </div>
            </div>

            {/* Anniversary */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <img
                src="/anniversary.jpg"
                alt="Anniversary"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h4 className="font-semibold text-lg">Anniversary</h4>
                <p className="text-sm text-gray-600">
                  Commemorate your love story with elegant, sustainably printed keepsakes.
                </p>
                <Link to="/anniversary">
                  <button className="mt-2 px-4 py-2 bg-[#5D4037] text-white text-sm rounded-full hover:bg-[#3e2f22] transition-all">
                    Browse Collection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KaagazzPrint;
