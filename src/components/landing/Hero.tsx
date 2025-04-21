import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden mt-10 flex items-center justify-center px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/dump.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-white max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          Your Journey To <br />
          <span className="text-primary-400">Sustainable Possibilities</span> <br />
          Begins Here.
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Discover a future built on mindful innovation, design excellence, and purposeful living.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/products">
          <button className="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all duration-300">
            Explore Products
          </button>
          </Link>
          <Link to="/sustainability">
          <button className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black font-semibold transition-all duration-300">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
