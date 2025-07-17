import { CircleIcon, ScrollText, Factory, Truck } from "lucide-react";

const HowItWorksTimeline = () => {
  const steps = [
    {
      title: "Collection",
      description: "Gathering organic waste (fruit peels) from markets and food processing units.",
      icon: <CircleIcon className="w-6 h-6 text-white" />,
    },
    {
      title: "Processing",
      description: "Converting peels into high-quality paper through our innovative technology.",
      icon: <ScrollText className="w-6 h-6 text-white" />,
    },
    {
      title: "Crafting",
      description: "Manufacturing premium sustainable stationery and paper products.",
      icon: <Factory className="w-6 h-6 text-white" />,
    },
    {
      title: "Delivery",
      description: "Bringing eco-friendly products to conscious consumers worldwide.",
      icon: <Truck className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-[#f2efe6] to-[#ffffff]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-[#5C4033] mb-6">
          How Kaagazz Works
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-[#3A3A3A] mb-16 leading-relaxed font-light">
          Our innovative process transforms organic waste into premium paper products through a sustainable production cycle.
        </p>

        <div className="relative border-l-4 border-[#D7CCC8] pl-6 ml-4">
          {steps.map((step, index) => (
            <div key={index} className="mb-14 relative">
              {/* Icon Circle */}
              <div className="absolute -left-[38px] top-1 w-8 h-8 rounded-full bg-[#5D4037] flex items-center justify-center shadow-md">
                {step.icon}
              </div>

              {/* Content */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-serif text-[#5C4033] font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#3A3A3A] font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
