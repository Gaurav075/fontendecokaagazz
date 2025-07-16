import React from "react";

const HeroSection = () => (
  <div className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full font-serif overflow-hidden">
    {/* Background Image */}
    <img
      src="/carousel.png"
      alt="Sustainability Banner"
      className="absolute inset-0 w-full h-full object-cover brightness-75"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E]/70 via-transparent to-transparent" />

    {/* Heading */}
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
      <h1 className="text-white text-center font-bold leading-tight drop-shadow-md 
        text-balance break-words
        max-w-[95%] sm:max-w-[85%] md:max-w-4xl lg:max-w-5xl
        text-[16px] sm:text-[20px] md:text-[30px] lg:text-[36px] xl:text-[42px]
        whitespace-normal">
        Sustainability at Kaagazz: Preserving Nature, One Page at a Time
      </h1>
    </div>
  </div>
);

const StoriesOnImpact = () => (
  <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-16">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#2f2f2f] mb-6">
      Stories on Impact
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Example Story Card */}
      <div className="bg-[#f9f6f1] border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold mb-2 text-[#3a3a3a]">Tree Saved Initiative</h3>
        <p className="text-sm text-gray-600">
          Through our recycled notebooks, we’ve saved over 150+ trees across 5 districts.
        </p>
      </div>

      <div className="bg-[#f9f6f1] border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold mb-2 text-[#3a3a3a]">Local Employment</h3>
        <p className="text-sm text-gray-600">
          Empowering women in rural areas by offering paper sorting and binding work.
        </p>
      </div>

      <div className="bg-[#f9f6f1] border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-all">
        <h3 className="text-lg font-semibold mb-2 text-[#3a3a3a]">Campus Drives</h3>
        <p className="text-sm text-gray-600">
          Collaborating with university eco-clubs to promote sustainable stationery habits.
        </p>
      </div>
    </div>
  </section>
);

// Combined Export (if you're using both in the same file/page)
export default function SustainabilityPage() {
  return (
    <>
      <HeroSection />
      <StoriesOnImpact />
    </>
  );
}
