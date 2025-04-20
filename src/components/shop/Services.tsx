import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="bg-[#f2efe6] px-6 py-16 font-serif text-[#2d2d2d]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">More Than Just Products</h2>
        <p className="text-sm md:text-base text-gray-700 tracking-wide">
          Discover how we help your ideas come to life and empower sustainable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/artisinal/3.png"
            alt="Print With Us"
            className="w-full h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">🖨️ Print With Us</h3>
              <p className="text-sm text-gray-600">
                Custom eco-friendly prints for your Books, weddings, events, or your brand. We bring your vision to paper—sustainably.
              </p>
            </div>
            <Link to="/partner">
            <button className="mt-6 self-start bg-black text-white px-4 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition-all">
              Get a Quote
            </button></Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="/partner.png"
            alt="CSR Partnership"
            className="w-full h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">🤝 Partnership for CSR</h3>
              <p className="text-sm text-gray-600">
                Collaborate with us to amplify your Corporate Social Responsibility through sustainable gifting and awareness drives.
              </p>
            </div>
            <Link to="/partner">
            <button className="mt-6 self-start bg-black text-white px-4 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition-all">
              Partner With Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
