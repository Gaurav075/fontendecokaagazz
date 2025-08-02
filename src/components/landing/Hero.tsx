import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/dump.jpg",
  "/dump1.png",
  "/dump2.png",
  "/dump3.png", // Add your image URLs
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6">
      {/* Background Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
        </div>
      ))}

      {/* Foreground Content */}
      <div className="relative z-10 text-white max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          Your Journey To <br />
          <span className="text-primary-400">Sustainable Possibilities</span> <br />
          Begins Here.
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Discover a future built on mindful innovation, design excellence, and purposeful living.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
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
