
import { Eye, Target } from "lucide-react";
import { Button } from "../ui/button";

const Stats = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">OUR VISION</h2>
            <div className="flex justify-center mb-6">
              <Eye size={48} />
            </div>
            <h3 className="font-bold mb-4">From Peel To Paper: A Sustainable Revolution</h3>
            <p className="text-sm mb-6 px-4">
              Kaagazz envisions a world where waste becomes a valuable resource.
              Our Tree-free Paper from Everyday Fruit Peel brings Beauty, Offering
              Sustainability, Zero Waste Products Designed for Action and Sustainable
              Solutions.
            </p>
            <Button variant="default" className="rounded-full bg-black text-white hover:bg-gray-800">
              Learn Our Story
            </Button>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">OUR MISSION</h2>
            <div className="flex justify-center mb-6">
              <Target size={48} />
            </div>
            <h3 className="font-bold mb-4">From Peel To Paper: A Sustainable Revolution</h3>
            <p className="text-sm mb-6 px-4">
              Kaagazz transforms everyday fruit waste into premium paper products.
              Our Tree-free Paper from Everyday Fruit Peels Creates Beauty, Offering
              Sustainability, Zero Waste Products Designed for Action and Sustainable
              Solutions.
            </p>
            <Button variant="default" className="rounded-full bg-black text-white hover:bg-gray-800">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;