import { Link } from "react-router-dom";

const Community = () => {
  return (
    <section className="py-20 px-4 bg-[#f2efe6]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Text + Button */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-serif font-bold text-[#3e2f22] mb-6">
            Our Community
          </h2>
          <ul className="mb-6 space-y-4 text-[#4b3b30] text-lg">
            <li className="whitespace-nowrap">🌱 Connect with sustainability enthusiasts</li>
            <li className="whitespace-nowrap">📢 Participate in events and discussions</li>
            <li className="whitespace-nowrap">🤝 Collaborate on real-world projects</li>
            <li className="whitespace-nowrap">🗳️ Influence future initiatives</li>
          </ul>
          <Link to="/partner">
            <button className="mt-4 px-6 py-3 bg-[#5D4037] text-white rounded-full text-sm hover:bg-[#3e2f22] transition-colors duration-300">
              Become a Community Partner
            </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2">
          <img
            src="/community.jpeg"
            alt="Community"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
