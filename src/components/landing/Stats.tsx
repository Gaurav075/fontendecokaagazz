import { Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";


const Stats = () => {
  return (
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Vision Section */}
      <div className="text-center px-4">
        <div className="flex justify-center mb-4">
          <Eye size={60} strokeWidth={1.8} className="text-[#3d3121] drop-shadow-md" />

        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3121] uppercase mb-4 tracking-wide">
          Our Vision
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-[#5d4b32] italic mb-3">
          From Peel To Paper: A Sustainable Revolution
        </h3>
        <p className="text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-md mx-auto font-light">
          Kaagazz is transforming the paper industry by creating high-quality, tree-free paper from fruit peels.
          We envision a world where waste becomes a resource, and sustainable living is the norm.
        </p>
      </div>

      {/* Mission Section */}
      <div className="text-center px-4">
        <div className="flex justify-center mb-4">
          <Target size={60} strokeWidth={1.8} className="text-[#3d3121] drop-shadow-md" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3121] uppercase mb-4 tracking-wide">
          Our Mission
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-[#5d4b32] italic mb-3">
          From Peel To Paper: A Sustainable Revolution
        </h3>
        <p className="text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-md mx-auto font-light">
          Kaagazz is committed to empowering communities by converting waste into wonder. We craft sustainable,
          zero-waste paper goods while driving social change and innovation from the ground up.
        </p>
      </div>
    </div>

    {/* Unified Button */}
    <div className="mt-16 text-center">
      <Link to="/sustainability">
      <button className="rounded-full bg-[#3d3121] hover:bg-[#2b2319] text-white text-sm md:text-base font-medium px-6 py-3 shadow-md transition">
        Learn Our Story
      </button>
      </Link>
    </div>
  </div>
</section>



  );
};
export default Stats;