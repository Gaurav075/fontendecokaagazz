import { useNavigate } from 'react-router-dom';

const CorporateSustainability = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/partner');
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-20 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-sm font-semibold text-[#5C5044] tracking-wider uppercase mb-4">
          Corporate Sustainability
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Partner for a Sustainable Future
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          We collaborate with forward-thinking businesses to implement sustainable paper
          solutions and achieve corporate sustainability goals.
        </p>

        <div className="space-y-5 mb-8 ml-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Office Supplies</h4>
            <p className="text-sm text-gray-700">
              Replace conventional paper with eco-friendly alternatives for your daily operations.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Corporate Gifts</h4>
            <p className="text-sm text-gray-700">
              Impress clients and partners with sustainable, premium quality paper products.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">CSR Initiatives</h4>
            <p className="text-sm text-gray-700">
              Support community upliftment through our social impact programs.
            </p>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="bg-[#3C342A] hover:bg-[#2e2822] text-white text-sm px-5 py-2.5 rounded-md transition shadow"
        >
          Become a Corporate Partner
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="/sustainablepartner.png"
          alt="Corporate handshake"
          width={800}
          height={600}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
    </section>
  );
};

export default CorporateSustainability;
