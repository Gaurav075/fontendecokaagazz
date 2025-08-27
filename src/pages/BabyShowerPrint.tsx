import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const babyShowerThemes = [
  {
    id: 1,
    title: "Sweet Pastels",
    description: "Soft pastel colors with cute baby icons and balloons.",
    image: "/images/baby1.jpg",
  },
  {
    id: 2,
    title: "Floral Baby Bliss",
    description: "Elegant floral patterns with delicate baby-themed accents.",
    image: "/images/baby2.jpg",
  },
  {
    id: 3,
    title: "Modern Minimal",
    description: "Clean modern designs with minimal yet joyful touches.",
    image: "/images/baby3.jpg",
  },
];

const BabyShowerPrint = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-[#f6f4ef] flex items-center justify-center">
        <img
          src="/images/baby-banner.jpg"
          alt="Baby Shower Invitations"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-[#3e2f22] drop-shadow-lg">
            Baby Shower Invitations
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Celebrate the joy of a new life with beautiful baby shower invites.
          </p>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="bg-[#f6f4ef] px-6 py-16 font-serif text-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#3e2f22] mb-10">
            Discover Our Themes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {babyShowerThemes.map((theme) => (
              <div
                key={theme.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-2">{theme.title}</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    {theme.description}
                  </p>
                  <Link
                    to={`/babyshower/${theme.id}`}
                    className="mt-4 px-4 py-2 bg-[#5D4037] text-white text-sm rounded-full hover:bg-[#3e2f22] transition-all text-center"
                  >
                    View Theme
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BabyShowerPrint;
