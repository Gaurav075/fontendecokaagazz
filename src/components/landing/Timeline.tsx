import { FileText, Building, Award, Rocket } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      date: "Jan 2024",
      title: "MVP Created",
      description: "Business plan drafted.",
      icon: FileText,
      image: "/artisinal/3.png" // Placeholder for document/plan image
    },
    {
      date: "May 2024",
      title: "Incubated at DTU",
      description: "Delhi Technological University.",
      icon: Building,
      image: "/lovable-uploads/dtu.png" // Placeholder for university image
    },
    {
      date: "Nov 2024",
      title: "MSME Hackathon",
      description: "Shortlisted by FITT at IIT Delhi.",
      icon: Award,
      image: "/iit.jpg" // Placeholder for hackathon image
    },
    {
      date: "Jan 2025",
      title: "HerSTART 4.0 Completed",
      description: "Bootcamp with GUSEC & UNICEF.",
      icon: Rocket,
      image: "/herCamp.jpg" // Placeholder for bootcamp image
    },
  ];

  return (
    <section className="bg-[#fefaf6] py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-5xl font-serif text-center mb-20 text-[#3b3a36]">
          Our Journey Through Time
        </h2>

        {/* Desktop Timeline (hidden on small screens) */}
        <div className="hidden sm:block relative pb-20">
          {/* Middle Timeline Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#e0d8c3] rounded-full z-10 transform -translate-x-1/2" />

          {/* Milestones */}
          <div className="relative">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="flex items-center justify-center mb-24 relative">
                  {/* Content box with alternating left/right positioning */}
                  <div className={`w-5/12 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg relative z-20 overflow-hidden border border-[#eae4d3]">
                      {/* Image at the top */}
                      <div className="w-full h-60 bg-[#f5f2eb] overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="p-5">
                        {/* Simple date display */}
                        <span className="inline-block bg-[#e0d8c3] px-3 py-1 rounded-md text-sm font-medium text-[#4b433a]">
                          {item.date}
                        </span>
                        
                        <div className="flex items-start mt-3">
                          <Icon className="w-5 h-5 mr-2 text-[#7a7467] mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-[#4b433a]">
                              {item.title}
                            </h3>
                            <p className="text-[#7a7467] text-sm mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle and Connector Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    {/* Circle marker */}
                    <div className="w-6 h-6 rounded-full bg-[#e0d8c3] border-4 border-white z-20 relative" />
                    
                    {/* Horizontal connector line */}
                    <div className={`absolute top-3 h-1 bg-[#e0d8c3] z-10 ${
                      isEven ? 'right-3 w-16' : 'left-3 w-16'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (vertical, visible only on small screens) */}
        <div className="sm:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#e0d8c3] rounded-full z-0" />

            {milestones.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div key={index} className="flex mb-16 relative">
                  {/* Circle on timeline */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-[#e0d8c3] border-4 border-white transform -translate-x-1/2 z-10" />
                  
                  {/* Connector line */}
                  <div className="absolute left-4 top-6 h-1 w-12 bg-[#e0d8c3] transform -translate-x-1/2" />
                  
                  {/* Content box */}
                  <div className="ml-16 bg-white rounded-2xl shadow-lg relative w-full z-10 overflow-hidden border border-[#eae4d3]">
                    {/* Image at the top */}
                    <div className="w-full h-32 bg-[#f5f2eb] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="p-4">
                      {/* Simple date display */}
                      <span className="inline-block bg-[#e0d8c3] px-3 py-1 rounded-md text-sm font-medium text-[#4b433a]">
                        {item.date}
                      </span>
                      
                      <div className="flex items-start mt-3">
                        <Icon className="w-5 h-5 mr-2 text-[#7a7467] mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-[#4b433a]">
                            {item.title}
                          </h3>
                          <p className="text-[#7a7467] text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;