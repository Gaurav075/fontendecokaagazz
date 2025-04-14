import React from "react";

const HeroSection = () => (
  <div className="relative h-[350px] w-full font-serif">
    <img
      src="/carousel3.png"
      alt="Sustainability Banner"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-beige to-transparent flex justify-center items-center">
      <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-6 leading-snug">
        Sustainability at Kaagazz: Preserving Nature, One Page at a Time
      </h1>
    </div>
  </div>
);

export default HeroSection;
