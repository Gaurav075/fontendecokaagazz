
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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative">
      {/* Header text overlay */}
      <div className="absolute top-0 left-0 w-full z-10 text-center py-10 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
        <h1 className="text-5xl md:text-7xl font-bold text-[#3d3121] uppercase">KAAGAZZ</h1>
        <p className="text-lg md:text-xl text-[#5d4b32] mt-2">Building a safe future for all, one sheet at a time.</p>
      </div>
      
      <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden mt-24">
        <Carousel className="w-full h-full absolute top-0 left-0" setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/b1012313-962b-4dc9-9ab9-f456062a1e2e.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/a54c8b02-500e-4240-a88e-51f118c6aa81.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/3223d151-c2fc-4664-8d8a-f0f1d8cb04d3.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 z-20" />
          <CarouselNext className="right-4 z-20" />
        </Carousel>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
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