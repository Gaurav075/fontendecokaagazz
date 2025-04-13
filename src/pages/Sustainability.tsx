import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const Sustainability: React.FC = () => {
  return (
    <div className="relative bg-beige text-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[350px] w-full">
        <img
          src="/carousel3.png"  // A full-width hero image with sustainability vibes
          alt="Sustainability Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beige to-transparent flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold text-center px-4">
            Sustainability at Kaagazz: Preserving Nature, One Page at a Time
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto -mt-24 px-4 sm:px-6 py-16 bg-white shadow-xl rounded-3xl">

        {/* Intro Video / Media */}
        <div className="bg-beige rounded-lg h-72 sm:h-96 mb-8 flex items-center justify-center text-gray-500 text-sm italic">
          [ Video / Media Placeholder ]
        </div>

        {/* Main Title */}
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
          Sustainability at Kaagazz: Preserving Nature, One Page at a Time
        </h1>
        <p className="text-base text-gray-700 mb-6">
          At Kaagazz, sustainability isn’t a buzzword—it’s our foundation. Every page we produce tells a story of renewal, responsibility, and reverence for nature.
        </p>

        {/* Our Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-beige mb-6">Our Approach: Sustainable from Start to Finish</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-700">
            <li className="flex items-center gap-4">
              <img src="/tree-icon.svg" alt="Zero Deforestation" className="w-8 h-8" />
              <strong>Zero Deforestation:</strong> We never cut trees for paper.
            </li>
            <li className="flex items-center gap-4">
              <img src="/recycle-icon.svg" alt="Waste Reduction" className="w-8 h-8" />
              <strong>Waste Reduction:</strong> We give new life to discarded materials.
            </li>
            <li className="flex items-center gap-4">
              <img src="/water-icon.svg" alt="Low Water Usage" className="w-8 h-8" />
              <strong>Low Water Usage:</strong> Innovative techniques that conserve water.
            </li>
            <li className="flex items-center gap-4">
              <img src="/carbon-icon.svg" alt="Reduced Emissions" className="w-8 h-8" />
              <strong>Reduced Emissions:</strong> Clean energy and local sourcing minimize our footprint.
            </li>
          </ul>
        </section>

        {/* Circular Economy Timeline */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-beige mb-8 text-center">Our Model: Circular Economy in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[ 
              { title: "Collect", desc: "Gathering organic waste from markets and food processing units." },
              { title: "Transform", desc: "Converting waste into high-quality paper through our proprietary process." },
              { title: "Create", desc: "Manufacturing premium paper products while creating employment." },
              { title: "Regenerate", desc: "Products biodegrade naturally, returning to the earth without harm." }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-8 shadow-xl bg-beige">
                <h3 className="font-bold text-xl mb-4 text-gray-900">{idx + 1}. {item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-beige mb-6">Our Story</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            In June 2022, under New Delhi’s scorching sun, we observed a ragpicker tirelessly collecting domestic waste...
          </p>

          {/* Image Placeholder */}
          <div className="bg-beige rounded-lg h-72 sm:h-96 mb-8 flex items-center justify-center text-gray-500 text-sm italic">
            [ Image Placeholder ]
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-beige mb-8 text-center">Their Voice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
            {["“Kaagazz helped us align our values with our operations.”", "“The quality is impeccable—and it feels good to support a mission.”", "“Our team loves the eco-conscious designs and story behind each product.”"]
              .map((quote, i) => (
                <div key={i} className="bg-beige p-6 rounded-xl shadow-lg italic">
                  {quote}
                </div>
            ))}
          </div>
        </section>

        {/* Corporate Sustainability */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-beige mb-8 text-center">Corporate Sustainability</h2>
          <img src="/corporate-partners.jpg" alt="Corporate Partners" className="rounded-lg mb-6 w-full object-cover h-64" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Partner for a Sustainable Future</h3>
              <p className="text-sm text-gray-700">We collaborate with forward-thinking businesses to implement eco solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Office Supplies</h3>
              <p className="text-sm text-gray-700">Switch to sustainable paper for daily operations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Corporate Gifts</h3>
              <p className="text-sm text-gray-700">Make a lasting impression with eco-conscious gifting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">CSR Initiatives</h3>
              <p className="text-sm text-gray-700">Support community upliftment through social programs.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition text-sm font-medium">
              Become a Corporate Partner
            </button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center border-t border-gray-200 pt-12">
          <p className="text-sm font-medium mb-4 text-gray-800">🌿 Join Us in Making a Difference</p>
          <p className="text-sm text-gray-700 max-w-xl mx-auto mb-6">
            Whether you’re a writer, artist, or business—your choice matters. Choose Kaagazz and be part of a movement.
          </p>
          <button className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
            Join Kaagazz
          </button>
          <p className="text-xs text-gray-500 mt-6">
            Dive into an eco-friendly shopping experience<br />with Kaagazz.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Sustainability;
