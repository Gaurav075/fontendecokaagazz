import { Leaf, RefreshCcw, Globe2, Recycle } from "lucide-react";

const values = [
  { icon: <Leaf size={48} />, title: "Eco-Conscious", color: "text-green-600" },
  { icon: <RefreshCcw size={48} />, title: "Reduce, Reuse, Recycle", color: "text-blue-500" },
  { icon: <Globe2 size={48} />, title: "Global Cooperation", color: "text-indigo-600" },
  { icon: <Recycle size={48} />, title: "Circular Economy", color: "text-yellow-500" },
];

const Values = () => {
  return (
    <section className="py-24 px-6 bg-white font-serif">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#5C4033] mb-20">
          Our Values
        </h2>

        <div className="flex justify-center gap-24 flex-wrap">
          {values.map((value, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <div
                className={`w-28 h-28 rounded-full bg-gray-100 shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 ${value.color}`}
              >
                {value.icon}
              </div>
              <div className="mt-5 text-lg md:text-xl text-[#5C4033] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {value.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
