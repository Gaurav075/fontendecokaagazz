import { Award, Package, Palette, Users } from "lucide-react";

const steps = [
  {
    stepno: "01",
    title: "Choose your art form",
    info: "Pick from Madhubani, Gond, Warli & more",
    icon: <Palette className="w-10 h-10" />,
  },
  {
    stepno: "02",
    title: "Unbox your kit",
    info: "Includes base paper, templates, paint sticks, tracing tools",
    icon: <Package className="w-10 h-10" />,
  },
  {
    stepno: "03",
    title: "Follow the guide",
    info: "Step-by-step templates + audio/video tips (QR code included)",
    icon: <Users className="w-10 h-10" />,
  },
  {
    stepno: "04",
    title: "Display your art",
    info: "Frame it, gift it, or simply show it off—pride crafted by hand",
    icon: <Award className="w-10 h-10" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl py-10 sm:py-16 px-2 sm:px-6 mx-auto text-center bg-white">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-10 text-center">
          How To Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 mx-auto mb-4 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="text-gray-500 font-medium text-sm mb-1">
                Step {step.stepno}
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{step.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
