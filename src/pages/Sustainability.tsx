import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroSection from "../components/sustainability/HeroSection";
import VideoPlaceholder from "../components/sustainability/VideoPlaceholder";
import OurApproach from "../components/sustainability/OurApproach";
import CircularEconomy from "../components/sustainability/CircularEconomy";
import OurStory from "../components/sustainability/OurStory";
import Testimonials from "../components/sustainability/Testimonials";
import CorporateSustainability from "../components/sustainability/CorporateSustainability";
import FinalCTA from "../components/sustainability/FinalCTA";

const Sustainability = () => {
  return (
    <div className="relative bg-beige text-gray-800">
      <Header />
      <HeroSection />
      <div className="relative z-10 max-w-6xl mx-auto -mt-24 py-16 bg-white shadow-2xl rounded-3xl font-serif">
        <VideoPlaceholder />
        <div className="mx-10 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight mb-5 text-gray-900 leading-tight">
            Sustainability at Kaagazz: Preserving Nature, One Page at a Time
          </h1>
          <p className="text-base text-gray-700 mb-4">
          At Kaagazz, sustainability isn't just a business practice—it's the foundation of everything we do. Our innovative approach transforms 
          organic waste into premium paper products, addressing multiple environmental challenges while creating social impact.
          </p>
          <p className="text-base text-gray-700">
          From sourcing raw materials to the final product, every stage of our process is
          designed to minimize environmental impact and maximize social benefit.
          </p>
        </div>
        <OurApproach />
        <CircularEconomy />
        <OurStory />
        <Testimonials />
        <CorporateSustainability />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Sustainability;
