import { useEffect, useState } from "react";
import { reviews } from "../../data/review";
import TestimonialCard from "./TestimonialCard";

const TheirVoices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredReviews = reviews.filter((review) => review.featured !== false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredReviews.length]);

  const getVisibleReviews = () => {
    const total = featuredReviews.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [
      { ...featuredReviews[prev], position: "left" },
      { ...featuredReviews[currentIndex], position: "center" },
      { ...featuredReviews[next], position: "right" },
    ];
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="py-16 px-4 bg-[#F2EFE6]">
      <h2 className="text-3xl font-bold text-center text-[#5C5044] mb-10">Stories of Impact</h2>
      <div className="flex justify-center items-center gap-6 transition-all duration-500 ease-in-out">
        {visibleReviews.map((testimonial, index) => {
          let scale = "scale-90 opacity-60 z-10";
          if (testimonial.position === "center") scale = "scale-110 opacity-100 z-20";

          return (
            <div
              key={testimonial.id}
              className={`transition-transform duration-700 ease-in-out transform ${scale} w-[280px] sm:w-[320px]`}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TheirVoices;
