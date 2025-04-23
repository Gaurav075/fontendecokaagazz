import { Leaf, RefreshCcw, Globe2, Recycle } from "lucide-react";

const values = [
  {
    icon: <Leaf size={40} className="text-green-600" />,
    title: "Eco-Conscious",
  },
  {
    icon: <RefreshCcw size={40} className="text-blue-500" />,
    title: "Reduce, Reuse, Recycle",
  },
  {
    icon: <Globe2 size={40} className="text-indigo-600" />,
    title: "Global Cooperation",
  },
  {
    icon: <Recycle size={40} className="text-yellow-600" />,
    title: "Circular Economy",
  },
];

const Values = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold tracking-tight uppercase text-gray-800 mb-16">
          Our Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gray-50 p-6 rounded-2xl"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
