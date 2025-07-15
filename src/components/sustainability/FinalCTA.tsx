import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/community');
  };

  return (
    <section className="text-center border-t border-gray-200 pt-16 mt-0 px-4">
      <h2 className="text-xl font-semibold text-[#3C2F2F] mb-3">
        🌱 Be the Change with Kaagazz
      </h2>
      <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
        Whether you're an artist, writer, student, or business — your choices shape the future. 
        Join Kaagazz in redefining sustainability with every sheet of paper.
      </p>
      <button
        onClick={handleJoinClick}
        className="inline-block bg-[#2E7D32] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1B5E20] transition-all shadow-md"
      >
        Join the Movement
      </button>
      <p className="text-xs text-gray-500 mt-8 leading-relaxed">
        Let your creativity bloom on paper that cares for the planet.<br />
        Start your eco-conscious journey with Kaagazz today.
      </p>
    </section>
  );
};

export default FinalCTA;
