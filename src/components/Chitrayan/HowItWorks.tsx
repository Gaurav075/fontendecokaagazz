import { Award, Package, Palette, Users } from "lucide-react";

const steps = [
  {
    stepno: "01",
    title: "Choose your art form",
    info: "Pick from Madhubani, Gond, Warli & more",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    stepno: "02",
    title: "Unbox your kit",
    info: "Includes base paper, templates, paint sticks, tracing tools",
    icon: <Package className="w-6 h-6" />,
  },
  {
    stepno: "03",
    title: "Follow the guide",
    info: "Step-by-step templates + audio/video tips (QR code included)",
    icon: <Users className="w-6 h-6" />,
  },
  {
    stepno: "04",
    title: "Display your art",
    info: "Frame it, gift it, or simply show it off—pride crafted by hand",
    icon: <Award className="w-6 h-6" />,
  },
];

const HowItWorks = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-center text-3xl py-12 sm:text-4xl md:text-4xl">How To Use</h2>

        <div className="px-16 pb-12 grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center hover">
                <div className="w-16 h-16 rounded-full bg-orange-100 mx-auto mb-4 hover:bg-orange-200 flex items-center justify-center transition-colors">{step.icon}</div>
                <div className="text-orange-600 font-semibold text-lg">{step.stepno}</div>
                <div className="font-semibold text-lg my-1">{step.title}</div>
                <div className="text-gray-500 text-sm">{step.info}</div>
            </div>
          ))}
        </div>
      </div>
    </>  
  );
};

export default HowItWorks;
