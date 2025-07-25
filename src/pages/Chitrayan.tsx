import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Chitrayan/Hero";
import WhatIsChitrayan from "../components/Chitrayan/WhatIsChitrayan";
import Benefit from "../components/Chitrayan/Benefit";
import HowItWorks from "../components/Chitrayan/HowItWorks";
import TheCollections from "../components/Chitrayan/TheCollections";
import Impact from "../components/Chitrayan/Impact";
import Testimonial from "../components/Chitrayan/Testimonial";
import Sustainability from "../components/Chitrayan/Sustainablity";
import RevolutionCTA from "../components/landing/RevolutionCTA";

const Chitrayan = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Hero />
        <WhatIsChitrayan />
        <Benefit />
        <HowItWorks />
        <TheCollections />
        <Impact />
        <Testimonial />
        <Sustainability />
        <RevolutionCTA />
        <Footer />
      </div>
    </>
  );
};

export default Chitrayan;
