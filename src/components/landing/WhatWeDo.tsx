import { Accessibility, Trash2, TreePine, Users } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      title: "Ability for 'Dis'Ability",
      description:
        "Providing the opportunities to the 'Specially-abled people' and financially backwards people helps them to live with dignity.",
      icon: <Accessibility className="w-8 h-8 text-[#5C4033]" />,
      image: "/carousel2.png",
    },
    {
      title: "Sanitation for All",
      description:
        "We have overturned the waste problem of urban landscapes into a scalable solution. We care for humans and animals that have suffered from the filth that decays around ourselves.",
      icon: <Trash2 className="w-8 h-8 text-[#5C4033]" />,
      image: "/cows.png",
    },
    {
      title: "NO to Deforestation",
      description:
        "We create tree-free carbon-neutral and chemical-free paper using our patented technology. This is the key to our fight against global issues like climate change and greenhouse gas emissions.",
      icon: <TreePine className="w-8 h-8 text-[#5C4033]" />,
      image: "/carousel3.png",
    },
    {
      title: "Inclusive Employment",
      description:
        "We are an equal opportunity platform that welcomes all genders for dignified employment.",
      icon: <Users className="w-8 h-8 text-[#5C4033]" />,
      image: "/ladies2.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-serif font-bold text-[#5C4033] mb-20 tracking-wide">
          What Do We Do?
        </h2>

        <div className="flex flex-col space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Text Section (without background) */}
              <div className="w-full md:w-1/2 p-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-[#EFE1D1] shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#5C4033] font-serif">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#3A3A3A] text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Image Section (taller image) */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
