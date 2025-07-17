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
    height: "min-h-[170px]",
  },
  {
    number: 2,
    date: "May 2024",
    title: "Incubated at DTU",
    description:
      "Joined DTU’s prestigious innovation cell for early-stage startups.",
    icon: Building,
    image: "/lovable-uploads/dtu.png",
    height: "min-h-[170px]",
  },
  {
    number: 3,
    date: "Nov 2024",
    title: "MSME Hackathon",
    description: "Shortlisted by FITT at IIT Delhi for national challenge.",
    icon: Award,
    image: "/iit.jpg",
    height: "min-h-[170px]",
  },
  {

    icon: Rocket,
    image: "/herCamp.jpg",
    height: "min-h-[170px]",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="hidden md:block">
      <section className="bg-[url('/bg1.png')] bg-cover bg-center px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif text-[#5C4033]">
            Our Journey Through Time
          </h2>

          <div className="relative flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-4">
            {/* Horizontal timeline line */}
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

                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>

                      </div>
                      <p className="text-xs text-[#5a5a5a] leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>

              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
