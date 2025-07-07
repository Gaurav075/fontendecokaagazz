import { FileText, Building, Award, Rocket } from 'lucide-react';

const milestones = [
  {
    date: 'Jan 2024',
    title: 'MVP Created',
    description: 'Business plan drafted.',
    icon: FileText,
    image: '/artisinal/3.png',
  },
  {
    date: 'May 2024',
    title: 'Incubated at DTU',
    description: 'Delhi Technological University.',
    icon: Building,
    image: '/lovable-uploads/dtu.png',
  },
  {
    date: 'Nov 2024',
    title: 'MSME Hackathon',
    description: 'Shortlisted by FITT at IIT Delhi.',
    icon: Award,
    image: '/iit.jpg',
  },
  {
    date: 'Jan 2025',
    title: 'HerSTART 4.0',
    description: 'Bootcamp with GUSEC & UNICEF.',
    icon: Rocket,
    image: '/herCamp.jpg',
  },
];

export default function ResponsiveTimeline() {
  return (
    <section className="bg-[#fefaf6] py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-serif font-bold text-[#5C4033] tracking-wide mb-8">
          Our Journey Through Time
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 w-full h-1 bg-[#e0d8c3] z-0" />

          {/* Cards */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-16 md:gap-4">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:w-1/4 items-center group"
                >
                  {/* Connecting Line for Desktop */}
                  {index !== milestones.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-[#e0d8c3] to-transparent z-[-1]" />
                  )}

                  {/* Dot Marker */}
                  <div className="z-10 w-5 h-5 rounded-full bg-[#3b3a36] border-4 border-[#fefaf6] mb-4 md:mb-0 md:mt-6" />

                  {/* Card */}
                  <div className="bg-white border border-[#eae4d3] shadow-lg rounded-xl overflow-hidden w-full max-w-sm flex flex-col min-h-[320px]">
                  <div className="w-full h-[200px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-[#3b3a36]">
                          {item.title}
                        </h3>
                        <span className="text-sm text-[#7a7467] font-medium">
                          {item.date}
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="p-2 bg-[#f5f2eb] rounded-xl">
                          <Icon className="w-5 h-5 text-[#7a7467]" />
                        </div>
                        <p className="text-[#7a7467] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                  {/* Vertical connector for mobile */}
                  {index !== milestones.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-[#e0d8c3] my-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
