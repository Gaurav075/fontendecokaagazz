import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="font-serif text-[#2d2d2d] bg-[#F2EFE6]">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs text-center py-2 tracking-wider">
        FREE SHIPPING ON ORDERS ABOVE RS. 2500
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-3 gap-0 px-0 py-2">
        <img
          src="/diary3.jpg"
          alt="Left Image"
          className="w-full h-[300px] object-cover shadow-lg"
        />

        <div className="relative flex items-center justify-center">
          <img
            src="/a4/4.jpg"
            alt="Center Image"
            className="w-full h-[300px] object-cover shadow-lg"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-6 text-center">
            <p className="uppercase text-xs tracking-wide mb-2">Check out our</p>
            <h2 className="text-xl font-bold tracking-wider mb-2">Latest Collection</h2>
            <Link to="/products">
              <button className="bg-white text-black px-4 py-1 text-sm font-semibold mt-2 hover:bg-gray-200 transition-all">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <img
          src="/artisinal/3.png"
          alt="Right Image"
          className="w-full h-[300px] object-cover shadow-lg"
        />
      </section>

      {/* Certificate Info */}
      <div className="text-center text-sm text-gray-700 underline underline-offset-4 mb-10">
        Every product comes with a Certificate of Sustainability <br />
        showcasing your efforts for a better future!
      </div>
    </div>
  );
};

export default HeroSection;
