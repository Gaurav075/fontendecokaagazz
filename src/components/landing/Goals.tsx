import { TreePine, Recycle, Briefcase, Users } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      value: "50K+",
      label: "Trees Saved",
      icon: <TreePine className="w-8 h-8 text-[#4a6741]" />
    },
    {
      value: "200T+",
      label: "Waste Recycled",
      icon: <Recycle className="w-8 h-8 text-[#8a7b61]" />
    },
    {
      value: "100+",
      label: "Jobs Created",
      icon: <Briefcase className="w-8 h-8 text-[#6a8c61]" />
    },
    {
      value: "150+",
      label: "Business Partners",
      icon: <Users className="w-8 h-8 text-[#5D4037]" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-serif text-[#3e2f22] mb-12">Our Impact Goals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">
                {goal.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#2e2e2e] mb-1">{goal.value}</h3>
              <p className="text-sm text-[#5D4037] font-medium text-center">{goal.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
