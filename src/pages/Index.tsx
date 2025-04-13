
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Timeline from "../components/landing/Timeline";
import Values from "../components/landing/Values";
import Stats from "../components/landing/Stats";
import WhatWeDo from "../components/landing/WhatWeDo";
import HowItWorks from "../components/landing/HowItWorks";
import Goals from "../components/landing/Goals";
import Products from "../components/landing/Products";
import Testimonials from "../components/landing/Testimonials";
import Founders from "../components/landing/Founders";
import Community from "../components/landing/Community";
import RevolutionCTA from "../components/landing/RevolutionCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      <div className="absolute top-0 left-0 w-full z-10 text-center py-10 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
        <h1 className="text-5xl md:text-7xl font-bold text-[#3d3121] uppercase">KAAGAZZ</h1>
        <p className="text-lg md:text-xl text-[#5d4b32] mt-2">Building a safe future for all, one sheet at a time.</p>
      </div>
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Values />
        <WhatWeDo />
        <HowItWorks />
        <Goals />
        <Community />
        <Products />
        <Testimonials />
        <Founders />
        <RevolutionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;