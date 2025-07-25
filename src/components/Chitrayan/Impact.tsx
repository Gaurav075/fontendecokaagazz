import { Leaf, Heart, Package } from "lucide-react";

const Impact = () => {
  return (
    <>
      <div className="text-center mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <h2 className="text-3xl font-semibold text-gray-800 my-5 mx-auto">
          Sustainable Impact
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto">
          "From tree‑free papers to meaningful employment and folk‑art revival,
          Chitrayan extends Kaagazz's dream by one sheet and brushstroke
          at a time."
        </p>

        <div className="grid grid-cols-3 gap-2">
          <div className="flex" >
            <Leaf className="w-12 h-12 text-center" />
            Made on citrus‑peel, fruit‑flower paper{" "}
          </div>
          <div>
            <Package />
            Packaged plastic‑free in recyclable wraps
          </div>
          <div>
            <Heart className=""/>
            Proceeds fund artisan and cultural education
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
