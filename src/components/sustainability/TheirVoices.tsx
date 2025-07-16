import React from "react";

const HeroSection = () => (
  <div className="relative h-[360px] md:h-[420px] w-full font-serif overflow-hidden">
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

export default HeroSection;
