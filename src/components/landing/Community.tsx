import { Link } from "react-router-dom";

const Community = () => {
  return (
    <section className="py-20 px-4 bg-[#fffefc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-serif font-bold text-[#3e2f22] mb-12">
          Our Community
        </h2>

        <div className="max-w-md mx-auto text-center">
          <div className="bg-[#f6f3e7] p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-lg font-semibold text-[#5D4037] mb-1">What's New?</h3>
            <p className="text-xs text-gray-600 mb-4">4,200+ members</p>
            <img
              src="/lovable-uploads/dtu.png"
              alt="Community image"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className="text-xl font-semibold text-[#4b3b30] mb-4">
            Be a Part of Our Vibrant Community
          </h3>

          <Link to="/community">
            <button className="px-6 py-2 bg-[#5D4037] text-white rounded-full text-sm hover:bg-[#3e2f22] transition-colors duration-300">
              View Community
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;
