import { useEffect, useRef, useState, useId } from "react";
import { FaUserAlt, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import { Card, CardContent } from "../../components/ui/card";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [current]);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      handleNextClick();
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      visible.push(testimonials[(current + i + total) % total]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  // Swipe gesture handling
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (deltaX > 50) {
        handlePreviousClick();
      } else if (deltaX < -50) {
        handleNextClick();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-16 px-6 bg-[#F2EFE6] text-[#5C5044] min-h-[600px]">
      <h2 className="text-4xl font-bold text-center mb-12 font-serif tracking-wide">
        Their Voice
      </h2>
      <div
        className="relative w-full max-w-7xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-sm:hidden h-full bg-[#F2EFE6] w-[15%] absolute z-100 ">
        </div>
        <ul className="flex justify-center items-center gap-6 transition-transform duration-700 ease-in-out overflow-x-hidden ">
          {visibleTestimonials.map((testimonial, i) => (
            <li
              key={i}
              className={`w-full md:w-[80%] lg:w-[40%] transition-all duration-500 ease-in-out overflow-hidden ${
                i === 1
                  ? "scale-100 opacity-100 z-20"
                  : "scale-95 opacity-50 z-10 max-sm:hidden"
              }`}
              style={{ transformOrigin: "center" }}
            >
              <Card className="bg-gradient-to-r from-[#e4e3d2] to-[#f6f2e6]   rounded-2xl shadow-md h-full min-h-[380px] max-h-[380px]">
                <CardContent className="p-6 space-y-4 h-full flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center gap-3">
                    <FaUserAlt className="text-2xl text-[#5C5044]" />
                    <span className="font-semibold text-lg truncate">
                      {testimonial.author}
                    </span>
                  </div>
                  <p className="italic text-gray-800 text-base leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <div className="text-sm text-gray-500">- A voice of change</div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
  <div className="max-sm:hidden h-full bg-[#F2EFE6] w-[15%] absolute z-100  top-0 right-0">
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <button
            className="w-10 h-10 flex items-center justify-center bg-neutral-200 border-3 border-transparent rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 rotate-180"
            title="Previous"
            onClick={() => {
              stopAutoScroll();
              handlePreviousClick();
              startAutoScroll();
            }}
          >
            <FaArrowRight className="text-neutral-600" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center bg-neutral-200 border-3 border-transparent rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
            title="Next"
            onClick={() => {
              stopAutoScroll();
              handleNextClick();
              startAutoScroll();
            }}
          >
            <FaArrowRight className="text-neutral-600" />
          </button>
        </div>
      </div>
    </section>
  );
}