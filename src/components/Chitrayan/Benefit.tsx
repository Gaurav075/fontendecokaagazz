import {
  Heart,
  Palette,
  Leaf,
  ShoppingCart,
  Star,
  Users,
  Award,
  Package,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-orange-600" />,
    title: "Celebrating Folk Artistery",
    description:
      "Rediscover regional folk arts, from the geometries of Warli to the mythic stories of Madhubani.",
  },
  {
    icon: <Palette className="w-8 h-8 text-orange-600" />,
    title: "Art as a Therapy",
    description:
      "DIY paper-art tools allow you to learn core techniques. Paint and make your own framed art pieces.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-orange-600" />,
    title: "Sustainably Rooted",
    description:
      "All kits are packaged and printed on Kaagazz's signature citrus-peel, plant-free premium paper.",
  },
];

const Benefit = () => {
  return (
    <>
      <div className="bg-[#033500] text-center">
        <h2 className="font-semibold text-center text-3xl pt-12 sm:text-4xl md:text-4xl text-white">
          Why Chitrayan Matters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-4 sm:mx-8 md:mx-24 py-8 md:py-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white border-orange-100 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefit;
