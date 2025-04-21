import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import eye from "../../../public/eye.jpg";
import mission from "../../../public/target.jpg";

const Stats = () => {
  const navigate = useNavigate();

  const handleLearnOurStoryClick = () => {
    navigate("/about");
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Vision Section */}
          <div className="text-center">
            <h2 className="text-5xl font-Outfit font-bold mb-6 capitalize">
              OUR VISION
            </h2>
            <div className="flex justify-center mb-6">
              <img
                src={eye}
                alt="Vision Icon"
                className="w-[186px] h-[174px] object-contain"
              />
            </div>
            <h3
              className="font-Outfit font-bold text-2xl mb-4"
              style={{
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
              }}
            >
              From Peel To Paper: A Sustainable Revolution
            </h3>
            <p
              className="font-Outfit text-sm mb-6 px-4"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
              }}
            >
              Kaagazz envisions a world where waste becomes a valuable resource.
              Our Tree-free Paper from Everyday Fruit Peel brings Beauty,
              Offering Sustainability, Zero Waste Products Designed for Action
              and Sustainable Solutions.
            </p>
            <Button
              variant="default"
              className="rounded-[33554400px] bg-black text-white hover:bg-gray-800 w-[255px] h-[48px] mt-4 px-10"
              style={{
                paddingTop: "12px",
                paddingRight: "40px",
                paddingBottom: "12px",
                paddingLeft: "40px",
                borderRadius: "33554400px",
              }}
              onClick={handleLearnOurStoryClick}
            >
              Learn Our Story
            </Button>
          </div>

          {/* Vertical Line */}
          <div className="flex justify-center">
            <div
              className="bg-black"
              style={{
                width: "1px",
                height: "488px",
              }}
            ></div>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <h2 className="text-5xl font-Outfit font-bold mb-6 capitalize">
              OUR MISSION
            </h2>
            <div className="flex justify-center mb-6">
              <img
                src={mission}
                alt="Mission Icon"
                className="w-[186px] h-[174px] object-contain"
              />
            </div>
            <h3
              className="font-Outfit font-bold text-2xl mb-4"
              style={{
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
              }}
            >
              From Peel To Paper: A Sustainable Revolution
            </h3>
            <p
              className="font-Outfit text-sm mb-6 px-4"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
              }}
            >
              Kaagazz transforms everyday fruit waste into premium paper
              products. Our Tree-free Paper from Everyday Fruit Peels Creates
              Beauty, Offering Sustainability, Zero Waste Products Designed for
              Action and Sustainable Solutions.
            </p>
            <Button
              variant="default"
              className="rounded-[33554400px] bg-black text-white hover:bg-gray-800 w-[255px] h-[48px] mt-4 px-10"
              style={{
                paddingTop: "12px",
                paddingRight: "40px",
                paddingBottom: "12px",
                paddingLeft: "40px",
                borderRadius: "33554400px",
              }}
              onClick={handleLearnOurStoryClick}
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
