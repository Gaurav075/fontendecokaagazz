import { Heart, Palette, Leaf } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-green-700" />,
    title: "Promoting Folk Artistry",
    description:
      "Rediscover regional folk arts, from the geometries of Warli to the mythic stories of Madhubani.",
  },
  {
    icon: <Palette className="w-8 h-8 text-green-700" />,
    title: "Art as Therapy",
    description:
      "DIY paper-art tools allow you to learn core techniques and create your own framed masterpieces.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-700" />,
    title: "Sustainably Rooted",
    description:
      "All kits are packaged and printed on Kaagazz's signature citrus-peel, plant-free premium paper.",
  },
];

const Benefit = () => {
  return (
    // bg-[#033500]
    <section className=" py-16 px-4 sm:px-8 lg:px-20 text-center text-white relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden">
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl mb-10 text-center text-[#333333]">
        Why Chitrayan?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white border-0">
            <CardContent className="p-6 sm:p-8 text-center border-0">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
