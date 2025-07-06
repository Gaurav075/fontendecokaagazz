import { title } from "process";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { ShoppingCart } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Madhubani Kit",
    state: "Bihar",
    descp: "Sacred motifs in vibrant geometry",
    price: "₹899",
    tag: "Popular",
    image: "",
  },
  {
    id: 2,
    title: "Warli Art Kit",
    state: "Maharashtra",
    descp: "Tribal stories in simple lines",
    price: "₹849",
    tag: "New",
    image: "",
  },
  {
    id: 3,
    title: "Gond Art Kit",
    state: "Madhya Pradesh",
    descp: "Mythic creatures come alive",
    price: "₹949",
    tag: "Premium",
    image: "",
  },
];

const TheCollections = () => {
  return (
    <>
      <div
        id="collection-section"
        className="bg-gradient-to-r from-orange-100/50 to-amber-100/50 text-center"
      >
        <h2 className="font-semibold text-center text-3xl py-12 sm:text-4xl md:text-4xl">
          The Collection
        </h2>

        <div className="md:grid grid-cols-3 gap-8 mx-32 pb-16">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group bg-white border-orange-100 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                    {collection.tag}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{collection.title}</h3>
                  <span className="font-bold text-2xl text-orange-600">
                    {collection.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm text-left">
                  {collection.state}
                </p>
                <p className="text-left text-gray-700 text-sm font-light mb-3">
                  {collection.descp}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white flex justify-center gap-2 p-2 w-full rounded-md ">
                  <ShoppingCart className="w-6 h-6 mr-2"/> Add to Cart
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TheCollections;
