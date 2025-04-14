import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/community');
  };

  return (
    <section className="text-center border-t border-gray-200 pt-12 mt-12">
      <p className="text-sm font-medium mb-4 text-gray-800">🌿 Join Us in Making a Difference</p>
      <p className="text-sm text-gray-700 max-w-xl mx-auto mb-6">
        Whether you’re a writer, artist, or business—your choice matters. Choose Kaagazz and be part of a movement.
      </p>
      <button
        onClick={handleJoinClick}
        className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition font-medium shadow-sm"
      >
        Join Kaagazz
      </button>
      <p className="text-xs text-gray-500 mt-6">
        Dive into an eco-friendly shopping experience<br />with Kaagazz.
      </p>
    </section>
  );
};

export default FinalCTA;
