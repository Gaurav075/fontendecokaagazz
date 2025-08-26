import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const marriageDesigns = [
  {
    id: 1,
    title: "Classic Minimalist",
    description: "Elegant cream-colored invitation with gold embossing.",
    image: "/images/marriage1.jpg",
  },
  {
    id: 2,
    title: "Floral Harmony",
    description: "Sustainable paper adorned with hand-illustrated floral motifs.",
    image: "/images/marriage2.jpg",
  },
  {
    id: 3,
    title: "Rustic Charm",
    description: "Eco-friendly kraft paper with earthy tones and textures.",
    image: "/images/marriage3.jpg",
  },
];

const MarriagePrint = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-[#f6f4ef] flex items-center justify-center">
        <img
          src="/images/marriage-banner.jpg"
          alt="Marriage Invitations"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-[#3e2f22] drop-shadow-lg">
            Marriage Invitations
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Celebrate love with bespoke, eco-friendly wedding stationery.
          </p>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="bg-[#f6f4ef] px-6 py-16 font-serif text-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#3e2f22] mb-10">
            Explore Our Designs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {marriageDesigns.map((design) => (
              <div
                key={design.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-2">{design.title}</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    {design.description}
                  </p>
                  <Link
                    to={`/marriage/${design.id}`}
                    className="mt-4 px-4 py-2 bg-[#5D4037] text-white text-sm rounded-full hover:bg-[#3e2f22] transition-all text-center"
                  >
                    View Design
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

export default MarriagePrint;
