import image from "../../assets/whatischitrayan.png";
const HeroImage = "/Chitrayan/HeroImage.png";

const Hero = () => {
  return (
    <section className="mt-8 sm:mt-12 w-full bg-white text-center">
      <div className="grid grid-cols-1 md:grid-cols-7 max-w-7xl mx-auto items-center">
        {/* Left Image */}
        <div className="hidden md:block col-span-1">
          <img
            src={image}
            alt="Left Hand Drawing"
            className="w-full h-40 md:h-[350px] object-cover"
          />
        </div>

        {/* Center Hero */}
        <div className="relative col-span-5">
          <img
            src={HeroImage}
            alt="Chitrayan Banner"
            className="w-full h-48 sm:h-72 md:h-[500px] object-cover object-center rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col justify-center items-center text-white px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow">
              Create Your Own Traditional Art
            </h1>
            <p className="text-xs sm:text-base md:text-lg mt-2 sm:mt-4 max-w-xl">
              Discover the beauty of Madhubani and Kalamkari art with our
              premium DIY kits. Each kit includes everything you need to create
              stunning art pieces.
            </p>
            <a href="/products?category=Chitrayan">
              <button className="mt-4 sm:mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-lg transition-all duration-200">
                Shop Now
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block col-span-1">
          <img
            src={image}
            alt="Right Hand Drawing"
            className="w-full h-40 md:h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
