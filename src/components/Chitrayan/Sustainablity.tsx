const Sustainability = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-start">
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl mb-10 text-center">
        Our Commitment to Sustainability
      </h2>
      <p className="text-gray-600 max-w-6xl mx-4 mb-10 text-sm sm:text-base">
        We are committed to sustainability. Our kits are packaged using
        eco-friendly materials, ensuring minimal environmental impact. We
        source our materials responsibly, supporting local artisans and
        promoting ethical practices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src="/public/Chitrayan/sust2.jpg"
            alt="Eco Packaging"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src="/public/Chitrayan/sust2.jpg"
            alt="Sustainable Materials"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src="/public/Chitrayan/sust2.jpg"
            alt="Ethical Sourcing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
