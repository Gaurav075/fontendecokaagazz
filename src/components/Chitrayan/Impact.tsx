import { Leaf, Heart, Package } from "lucide-react";

const Impact = () => {
  return (
    <section className="bg-white py-10 sm:py-16 px-2 sm:px-8 lg:px-20 text-center max-w-6xl mx-auto rounded-xl overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Sustainable Impact
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
          "From tree‑free papers to meaningful employment and folk‑art revival,
          Chitrayan extends Kaagazz's dream by one sheet and brushstroke
          at a time."
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          <div className="flex flex-col items-center text-center gap-4">
            <Leaf className="w-10 h-10 text-green-700 mx-auto" />
            <p className="text-gray-800 text-sm sm:text-base max-w-xs">
              Made on citrus‑peel, fruit‑flower paper
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Package className="w-10 h-10 text-green-700 mx-auto" />
            <p className="text-gray-800 text-sm sm:text-base max-w-xs">
              Packaged plastic‑free in recyclable wraps
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Heart className="w-10 h-10 text-green-700 mx-auto" />
            <p className="text-gray-800 text-sm sm:text-base max-w-xs">
              Proceeds fund artisan and cultural education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
