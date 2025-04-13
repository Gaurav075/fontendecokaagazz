
import { TreePine, Recycle, Briefcase, Users } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      value: "50K+",
      label: "Trees Saving",
      icon: <TreePine className="w-8 h-8 text-[#4a6741]" />
    },
    {
      value: "200T+",
      label: "Tons of Waste Recycle",
      icon: <Recycle className="w-8 h-8 text-[#8a7b61]" />
    },
    {
      value: "100+",
      label: "Local Jobs Creation",
      icon: <Briefcase className="w-8 h-8 text-[#6a8c61]" />
    },
    {
      value: "150+",
      label: "Business Partners",
      icon: <Users className="w-8 h-8 text-[#5D4037]" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">What is the Goal?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                {goal.icon}
              </div>
              <h3 className="text-4xl font-bold mb-1">{goal.value}</h3>
              <p className="text-sm text-kaagazz-brown text-center">{goal.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;