
import { Button } from "../..//ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-amber-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Join the Kaagazz
                <br />
                <span className="text-amber-700">Movement</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                We aim at documenting the transition of every business towards 
                a digital ecosystem which aims at creating a sustainable future 
                for the entire industry.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Business meeting" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
