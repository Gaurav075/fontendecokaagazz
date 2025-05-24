import { useState, useEffect } from "react";
import { reviews } from "../../data/review";
import SectionHeader from "./SectionHeader";
import FeaturedTestimonial from "./FeaturedTestimonial";
import ImpactShowcase from "./ImpactShowcase";
import CarouselDots from "./CarouselDots";
import TestimonialCard from "./TestimonialCard";
import BackgroundElements from "./BackgroundElements";

const TheirVoices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredReviews = reviews.filter(review => review.featured !== false);
  
  const bottomCardReviews = reviews.slice(0, 3);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredReviews.length]);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#FAF8F3] via-[#F2EFE6] to-[#EAE4D3] overflow-hidden">
      <BackgroundElements />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="VOICES OF CHANGE"
          title="Stories of Impact"
          subtitle="Discover how EcoKaagazz is transforming waste into sustainable paper solutions, one partnership at a time"
          isVisible={isVisible}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FeaturedTestimonial 
            testimonial={featuredReviews[currentIndex]} 
            currentIndex={currentIndex}
          />
          <ImpactShowcase />
        </div>
        <CarouselDots
          total={featuredReviews.length}
          current={currentIndex}
          onDotClick={setCurrentIndex}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {bottomCardReviews.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheirVoices;