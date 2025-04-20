
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "../ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    // Set up auto-play for the carousel
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative">
      {/* Header text overlay */}
     
      
      <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden mt-24">
        <Carousel className="w-full h-full absolute top-0 left-0" setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/carousel1.png')" }}>
                <div className="absolute inset-0 bg-/40"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/carousel2.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/carousel3.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 z-20" />
          <CarouselNext className="right-4 z-20" />
        </Carousel>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="font-Outfit font-bold text-[64px] leading-[100%] text-white text-center capitalize mb-6">
  Your Journey To
  <br />
  Sustainable Possibilities
  <br />
  Begins Here!
</h1>


        </div>
      </section>
    </div>
  );
};

export default Hero;