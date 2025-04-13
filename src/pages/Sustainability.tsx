import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const Sustainability: React.FC = () => {
  return (
    <div className="relative bg-white text-gray-800">
        <Header/>
      {/* Hero Banner Background */}
      <div className="relative h-[300px] w-full">
        <img
          src="/carousel3.png"
          alt="Sustainability"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Section with overlap */}
      <div className="relative z-10 max-w-3xl mx-auto -mt-24 px-4 sm:px-6 py-10 bg-white shadow-lg rounded-md">
        {/* Top Media Placeholder */}
        <div className="bg-gray-300 rounded-md h-64 sm:h-72 mb-6 flex items-center justify-center text-gray-500 text-sm">
          [ Video / Media Placeholder ]
        </div>

        {/* Title + Text */}
        <h1 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
          Sustainability at Kaagazz: Preserving Nature, One Page at a Time
        </h1>

        <p className="text-sm text-gray-700 mb-6">
          At Kaagazz, sustainability is at the heart of everything we do. We believe that paper
          should tell a story—not just of books, but of responsibility, innovation, and environmental respect.
        </p>

        <h2 className="text-lg font-semibold mb-4">Our Commitment to Sustainability</h2>

        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <strong>Recycled, Not Wasted</strong>
            <p>
              Every Kaagazz product is crafted from 100% recycled materials, ensuring that no trees are cut down in the process.
              By repurposing discarded paper and agricultural waste, we give new life to materials that would otherwise be lost.
            </p>
          </div>
          <div>
            <strong>Clean & Green Production</strong>
            <p>
              We avoid harsh chemicals and bleach-free processing, keeping our paper safe for the environment and your hands.
              Our methods minimize water consumption and reduce pollution.
            </p>
          </div>
          <div>
            <strong>Zero-Waste Philosophy</strong>
            <p>
              At Kaagazz, sustainability means nothing goes to waste. We use every fiber efficiently, and any leftover materials are
              either reused or composted, ensuring a minimal footprint.
            </p>
          </div>
          <div>
            <strong>Empowered Local Communities</strong>
            <p>
              Promoting local skilled artisans, our paper is more than just a product—it’s a livelihood. We work closely with small-scale
              paper makers, helping preserve traditional techniques while creating fair and sustainable employment.
            </p>
          </div>
        </div>

        {/* Second Media Placeholder */}
        <div className="bg-gray-300 rounded-md h-64 sm:h-72 my-10 flex items-center justify-center text-gray-500 text-sm">
          [ Image Placeholder ]
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <p className="text-sm font-medium">🌿 Join Us in Making a Difference</p>
          <p className="text-sm text-gray-700 max-w-xl mx-auto">
            Sustainability is a shared responsibility. Whether you’re a writer, artist, or business, your choices matter.
            By choosing Kaagazz, you’re supporting a movement based on renewal, emotion, and a greener future.
          </p>
          <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition">
            Explore Our Community
          </button>
          <p className="text-sm text-gray-600 pt-6">
            Dive into an eco-friendly<br />
            shopping experience<br />
            with Kaagazz
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Sustainability;
