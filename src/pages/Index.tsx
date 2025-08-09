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
import Testimonials from "../components/sustainability/Testimonials";
// import Founders from "../components/landing/Founders";
import Community from "../components/landing/Community";
import RevolutionCTA from "../components/landing/RevolutionCTA";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Values />
        <WhatWeDo/>
        <HowItWorks />
        <Goals />
        <Community />
        <Products />
        <Testimonials />
        {/* <Founders /> */}
        <RevolutionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
