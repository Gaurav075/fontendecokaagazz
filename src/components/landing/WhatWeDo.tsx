import { Accessibility, Trash2, TreePine, Users } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      title: "Ability for 'Dis'Ability",
      description: "Providing the opportunities to the 'Specially-abled people' to make more things allowing them to live with dignity.",
      icon: <Accessibility className="w-8 h-8 text-black" />,
      image: "/lovable-uploads/bedfc182-a8b4-4c30-9a20-8d7cd4c3fa7e.png"
    },
    {
      title: "Sanitation for All",
      description: "Keeping the environment we live in and our urban landscapes with a sustainable solution. We care for humans and animals that have suffered from the filth that resides around us forever.",
      icon: <Trash2 className="w-8 h-8 text-black" />,
      image: "/lovable-uploads/bedfc182-a8b4-4c30-9a20-8d7cd4c3fa7e.png"
    },
    {
      title: "NO to Deforestation",
      description: "We create tree-free carbon-neutral and chemical-free paper using our patented technology. This helps us to fight climate change, reduce carbon change and greenhouse gas emissions.",
      icon: <TreePine className="w-8 h-8 text-black" />,
      image: "/lovable-uploads/bedfc182-a8b4-4c30-9a20-8d7cd4c3fa7e.png"
    },
    {
      title: "Inclusive Employment",
      description: "We are an equal opportunity platform that welcomes all genders for dignified employment.",
      icon: <Users className="w-8 h-8 text-black" />,
      image: "/lovable-uploads/bedfc182-a8b4-4c30-9a20-8d7cd4c3fa7e.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold uppercase mb-12">WHAT DO WE DO?</h2>
        
        <div className="flex flex-col space-y-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-6`}
            >
              <div className="w-full md:w-1/2 p-6">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-sm">{service.description}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 rounded-lg object-cover"
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