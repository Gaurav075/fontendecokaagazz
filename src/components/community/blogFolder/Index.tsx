
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureBlocks } from "@/components/FeatureBlocks";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      <HeroSection />
      <FeatureBlocks />
      <FeaturesSection />
    </div>
  );
};

export default Index;