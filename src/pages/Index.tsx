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
        <div
          className="relative w-full z-10 text-center pt-16 px-4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')",
          }}
        >
          <div className="absolute inset-0 bg-[#fdf7f0]/70 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#3d3121] uppercase tracking-wide drop-shadow-md">
              KAAGAZZ
            </h1>
            <p className="text-xl md:text-2xl text-[#5d4b32] mt-4 tracking-tight leading-relaxed max-w-2xl mx-auto">
              Building a safe future for all, one sheet at a time.
            </p>
          </div>
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
