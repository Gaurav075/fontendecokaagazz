import React from "react";
import { TreeDeciduous, RefreshCw, Droplets, Wind } from "lucide-react";

const approachItems = [
  { icon: <TreeDeciduous className="w-10 h-10 text-green-600" />, label: "Zero Deforestation" },
  { icon: <RefreshCw className="w-10 h-10 text-blue-500" />, label: "Waste Reduction" },
  { icon: <Droplets className="w-10 h-10 text-cyan-500" />, label: "Low Water Usage" },
  { icon: <Wind className="w-10 h-10 text-gray-500" />, label: "Reduced Emissions" },
];

const OurApproach = () => (
  <section className="py-12 px-8">
    <h2 className="text-4xl font-bold text-[#4A3F35] text-center mb-6">OUR APPROACH</h2>
    <h3 className="text-2xl font-semibold text-center text-gray-600 mb-12">
      Sustainable from Start to Finish
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {approachItems.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3 bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          {item.icon}
          <p className="text-sm font-medium text-gray-800">{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurApproach;
