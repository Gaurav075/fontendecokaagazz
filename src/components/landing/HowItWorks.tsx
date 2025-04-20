import { CircleIcon, ScrollText, Factory, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Collection",
      description: "Gathering organic waste (fruit peels) from markets and food processing units.",
      icon: <CircleIcon className="w-6 h-6 text-white" />
    },
    {
      title: "Processing",
      description: "Converting peels into high-quality paper through our innovative technology.",
      icon: <ScrollText className="w-6 h-6 text-white" />
    },
    {
      title: "Crafting",
      description: "Manufacturing premium sustainable stationery and paper products.",
      icon: <Factory className="w-6 h-6 text-white" />
    },
    {
      title: "Delivery",
      description: "Bringing eco-friendly products to conscious consumers worldwide.",
      icon: <Truck className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-[#5C4033] mb-6">
          How Kaagazz Works
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-[#4B3A2A] mb-16">
          Our innovative process transforms organic waste into premium paper products through a sustainable production cycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#5D4037] flex items-center justify-center mb-4 shadow-inner relative">
                <span className="absolute text-xs font-semibold top-0 left-0 w-5 h-5 bg-white text-[#5D4037] rounded-full flex items-center justify-center shadow">
                  {index + 1}
                </span>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#5C4033] font-serif mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#3A3A3A] font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
