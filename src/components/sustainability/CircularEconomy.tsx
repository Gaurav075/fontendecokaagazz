const modelSteps = [
  { title: "Collect", desc: "Gathering organic waste from markets and food processing units." },
  { title: "Transform", desc: "Converting waste into high-quality paper through our proprietary process." },
  { title: "Create", desc: "Manufacturing premium paper products while creating employment." },
  { title: "Regenerate", desc: "Products biodegrade naturally, returning to the earth without harm." },
];

const CircularEconomy = () => (
  <section className="py-16 px-4 bg-[#F2EFE6]">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-2">Our Model</h3>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Circular Economy Approach</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Our business model is built on the principles of circular economy, turning waste into resources and creating sustainable value chains.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modelSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3A2F27] text-white text-lg font-bold mb-4">
              {idx + 1}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CircularEconomy;
