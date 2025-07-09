import { Building, Award, Rocket, DraftingCompass } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    number: 1,
    date: "Jan 2024",
    title: "MVP Created",
    description:
      "Sustainable impact meets strategy — Kaagazz business plan completed.",
    icon: DraftingCompass,
    image: "/artisinal/3.png",
  },
  {
    number: 2,
    date: "May 2024",
    title: "Incubated at DTU",
    description:
      "Joined DTU’s prestigious innovation cell for early-stage startups.",
    icon: Building,
    image: "/lovable-uploads/dtu.png",
  },
  {
    number: 3,
    date: "Nov 2024",
    title: "MSME Hackathon",
    description: "Shortlisted by FITT at IIT Delhi for national challenge.",
    icon: Award,
    image: "/iit.jpg",
  },
  {
    number: 4,
    date: "Jan 2025",
    title: "HerSTART Bootcamp",
    description:
      "Completed Bootcamp with GUSEC & UNICEF for women-led startups.",
    icon: Rocket,
    image: "/herCamp.jpg",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-[url('/bg1.png')] px-4 py-10">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 font-serif text-[#2f2f2f]">
          Our Journey Through Time
        </h2>

        <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-4">
       
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#e2ddd3] z-0" />

          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center w-full md:w-1/4 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.4 }}
              >

                <div className="w-9 h-9 rounded-full bg-black text-white text-sm font-bold flex items-center justify-center mb-3 shadow-md">
                  {item.number}
                </div>


                <div className="bg-white border border-[#ece7dc] rounded-2xl shadow-md px-4 py-4 w-full max-w-[260px] md:max-w-[220px] text-left hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex flex-col text-left">
                      <h3 className="font-medium text-sm text-[#2e2e2e]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-2">
                    <div className="p-1.5 bg-[#f4f1ea] rounded-md">
                      <Icon className="w-4 h-4 text-[#7a7467]" />
                    </div>
                    <p className="text-xs text-[#5a5a5a] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>


                {index !== milestones.length - 1 && (
                  <div className="md:hidden w-px h-5 bg-[#e0d8c3] my-2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}