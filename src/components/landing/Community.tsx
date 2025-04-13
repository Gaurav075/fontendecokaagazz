
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10">OUR COMMUNITY</h2>
        
        <div className="max-w-md mx-auto text-center">
          <div className="bg-[#f5f2e9] p-4 mb-8 rounded-md">
            <h3 className="text-lg font-semibold mb-1">What's New?</h3>
            <p className="text-xs text-gray-600 mb-4">4,200+ members</p>
            <img 
              src="/lovable-uploads/800eedaa-7509-4979-82a9-f8dd92d173c0.png" 
              alt="Community image" 
              className="w-full h-auto rounded-md"
            />
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Be a Part of our Vibrant community</h3>
          
          <Link to="/community" className="inline-block mt-6">
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm">
              View Community
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;