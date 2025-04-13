
import { Separator } from "../ui/separator";
import { CircleIcon, ScrollText, Factory, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Collection",
      description: "Gathering organic waste (fruit peels) from markets and food processing units.",
      icon: <CircleIcon className="w-6 h-6 text-white" />
    },
    {
      number: 2,
      title: "Processing",
      description: "Converting peels into high-quality paper through our innovative technology.",
      icon: <ScrollText className="w-6 h-6 text-white" />
    },
    {
      number: 3,
      title: "Crafting",
      description: "Manufacturing premium sustainable stationery and paper products.",
      icon: <Factory className="w-6 h-6 text-white" />
    },
    {
      number: 4,
      title: "Delivery",
      description: "Bringing eco-friendly products to conscious consumers worldwide.",
      icon: <Truck className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">How Kaagazz Works</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Our innovative process transforms organic waste into premium paper products through a sustainable production cycle.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-1/4 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#5D4037] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
              <p className="text-sm text-center">{step.description}</p>
              
              {/* Add connecting line for all except the last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <Separator className="w-16 h-0.5 bg-[#5D4037]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;