const Sustainability = () => {
  return (
    <section className="bg-white py-10 px-2 sm:py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto text-start">
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-10 text-center">
        Our Commitment to Sustainability
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base px-2">
        We are committed to sustainability. Our kits are packaged using
        eco-friendly materials, ensuring minimal environmental impact. We
        source our materials responsibly, supporting local artisans and
        promoting ethical practices.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="rounded-lg overflow-hidden shadow-sm aspect-square w-full max-w-xs mx-auto"
          >
            <img
              src={`/Chitrayan/Sustainability/sust${num}.jpg`}
              alt={
                num === 1
                  ? "Eco Packaging"
                  : num === 2
                  ? "Sustainable Materials"
                  : "Ethical Sourcing"
              }
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sustainability;
