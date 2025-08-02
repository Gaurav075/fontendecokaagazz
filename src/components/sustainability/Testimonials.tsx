import { useEffect, useRef, useState } from "react";
import { FaUserAlt, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import { Card, CardContent } from "../../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isMedium, setIsMedium] = useState(false);
  const total = testimonials.length;
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Check for mobile
  useEffect(() => {
    const checkMedium = () => setIsMedium(window.innerWidth < 1024);
    checkMedium();
    window.addEventListener("resize", checkMedium);
    return () => window.removeEventListener("resize", checkMedium);
  }, []);

  // Auto-scroll only for desktop
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      handleNextClick();
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [current, isMedium]);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const getIndex = (offset: number) => (current + offset + total) % total;

  const cards = isMedium
    ? [{ index: getIndex(0), position: 0 }]
    : [
        { index: getIndex(-1), position: -1 },
        { index: getIndex(0), position: 0 },
        { index: getIndex(1), position: 1 },
      ];

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
    <section className="py-16 p-5 bg-[#F2EFE6] text-[#5C5044] min-h-[600px] max-sm:min-h-[600px]">
      <h2 className="text-4xl font-bold text-center mb-12 font-serif tracking-wide">
        Their Voice
      </h2>
      <div
        className="relative w-full max-w-7xl mx-auto overflow-visible"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative h-[380px] flex justify-center items-center gap-4 transition-all duration-1000 ease-in-out"
          style={{ perspective: "1200px" }}
        >
          {isMedium ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9,rotateY:60 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: { duration: 0.7, ease: [0.55, 0.06, 0.68, 0.19] },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: -60,
                  transition: { duration: 0.7, ease: "easeOut" },
                }}
                className="absolute w-full mx-4 transform-gpu"
              >
                <Card className="bg-gradient-to-r from-[#e4e3d2] to-[#f6f2e6] rounded-2xl shadow-md min-h-[400px] h-full">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center gap-3">
                      <FaUserAlt className="text-2xl text-[#5C5044]" />
                      <span className="font-semibold text-lg truncate">
                        {testimonials[current].author}
                      </span>
                    </div>
                    <p className="italic text-gray-800 text-base leading-relaxed">
                      “{testimonials[current].quote}”
                    </p>
                    <div className="text-sm text-gray-500">
                      - A voice of change
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          ) : (
            cards.map(({ index, position }) => {
              const testimonial = testimonials[index];
              const transform =
                position === 0
                  ? "translateZ(0px) scale(1)"
                  : position === -1
                  ? "translateX(-110%) scale(0.85) rotateY(18deg)"
                  : "translateX(110%) scale(0.85) rotateY(-18deg)";
              const zIndex = position === 0 ? 30 : 10;
              const opacity = position === 0 ? 1 :0.9;

              return (
                <div
                  key={index}
                  className="absolute transform-gpu transition-all duration-1000 ease-in-out"
                  style={{
                    width: "33.33%",
                    minWidth: "300px",
                    maxWidth: "400px",
                    transform,
                    zIndex,
                    opacity,
                  }}
                >
                  <Card className="bg-gradient-to-r from-[#e4e3d2] to-[#f6f2e6] rounded-2xl shadow-md min-h-[380px] h-full">
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
                      <div className="text-sm text-gray-500">
                        - A voice of change
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-10 mx-3">
          <button
            className="w-10 h-10 flex items-center justify-center bg-neutral-200 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 rotate-180"
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
            className="w-10 h-10 flex items-center justify-center bg-neutral-200 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
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
