function Hero() {
  return (
    <div
      id="hero1"
      className="relative py-14 md:py-20 px-2 sm:px-6 lg:px-8 overflow-hidden bg-[#033500] text-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
        Chitrayan - The Indian Arts Affair
      </h1>
      <h4 className="text-lg sm:text-2xl md:text-3xl text-white font-light my-4 md:my-6">
        Crafting India's Folk Art Through Kaagazz
      </h4>
      <p className="text-base sm:text-lg text-gray-200 mx-auto max-w-xl md:max-w-3xl mb-6 md:mb-10">
        A premium DIY paper‐kit series celebrating the richness of Indian folk
        traditions, sustainably handmade on Kaagazz's tree‑free sheets.
      </p>

      <div
        id="buttons"
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
      >
        <button
          className="hover:text-gray-400 text-white px-6 sm:px-8 py-3 rounded-md transition-all duration-200 w-full sm:w-auto underline"
          onClick={() => {
            const el = document.getElementById("collection-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Collection 
        </button>
        <button
          className="hover:text-gray-400 text-white px-6 sm:px-8 py-3 rounded-md transition-all duration-200 w-full sm:w-auto"
          onClick={() => {
            const section = document.getElementById("learn-more");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Find More →
        </button>
      </div>
    </div>
  );
}

export default Hero;
