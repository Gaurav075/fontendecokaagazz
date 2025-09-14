import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const birthdayThemes = [
  {
    id: 1,
    title: "Classic Balloons",
    description: "Bright and colorful balloons with festive vibes.",
    image: "/images/birthday1.jpg",
  },
  {
    id: 2,
    title: "Elegant Gold",
    description: "Sophisticated golden and black designs for a classy party.",
    image: "/images/birthday2.jpg",
  },
  {
    id: 3,
    title: "Cartoon Fun",
    description: "Playful cartoon-themed designs for kids' birthdays.",
    image: "/images/birthday3.jpg",
  },
];

const BirthdayPrint = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-[#fff8f0] flex items-center justify-center">
        <img
          src="/images/birthday-banner.jpg"
          alt="Birthday Invitations"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-[#3e2f22] drop-shadow-lg">
            Birthday Invitations
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Make birthdays extra special with our creative invitation designs.
          </p>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="bg-[#fff8f0] px-6 py-16 font-serif text-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#3e2f22] mb-10">
            Discover Our Birthday Themes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {birthdayThemes.map((theme) => (
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
                  {/* Button same as BabyShowerPrint */}
                  <Link
                    to={`/birthday/${theme.id}`}
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

export default BirthdayPrint;
