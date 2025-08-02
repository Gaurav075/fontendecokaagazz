import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Accessibility, Trash2, TreePine, Users } from "lucide-react";

const services = [
  {
    title: "Ability for 'Dis'Ability",
    description:
      "Providing the opportunities to the 'Specially-abled people' and financially backwards people helps them to live with dignity.",
    icon: <Accessibility className="w-8 h-8 text-[#5C4033]" />,
    image: "/carousel2.png",
  },
  {
    title: "Sanitation for All",
    description:
      "We have overturned the waste problem of urban landscapes into a scalable solution. We care for humans and animals that have suffered from the filth that decays around ourselves.",
    icon: <Trash2 className="w-8 h-8 text-[#5C4033]" />,
    image: "/cows.png",
  },
  {
    title: "NO to Deforestation",
    description:
      "We create tree-free carbon-neutral and chemical-free paper using our patented technology. This is the key to our fight against global issues like climate change and greenhouse gas emissions.",
    icon: <TreePine className="w-8 h-8 text-[#5C4033]" />,
    image: "/carousel3.png",
  },
  {
    title: "Inclusive Employment",
    description:
      "We are an equal opportunity platform that welcomes all genders for dignified employment.",
    icon: <Users className="w-8 h-8 text-[#5C4033]" />,
    image: "/ladies2.jpg",
  },
];

const WhatWeDo = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = () => {
    autoplay.current?.reset(); // Reset autoplay timer
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    autoplay.current?.reset(); // Reset autoplay timer
    emblaApi?.scrollNext();
  };

  return (
    <section className="py-24 px-6 bg-[url('/bg3.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-serif font-bold text-[#5C4033] mb-16 tracking-wide">
          What Do We Do?
        </h2>

        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row items-center gap-10 px-4"
                >
                  {/* Text Section */}
                  <div className="w-full md:w-1/2 p-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-[#EFE1D1] shadow-inner">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-[#5C4033] font-serif">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#3A3A3A] text-base leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] md:left-[-80px] z-10">
            <button
              onClick={scrollPrev}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="text-[#5C4033]" />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-60px] md:right-[-80px] z-10">
            <button
              onClick={scrollNext}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Next Slide"
            >
              <ChevronRight className="text-[#5C4033]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
