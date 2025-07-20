// const image = "../../assets/whatischitrayan.png";

import image from "../../assets/whatischitrayan.png"

function WhatIsChitrayan() {
  return (
    <>
      <div id="learn-more" className="w-full grid grid-cols-2 gap-2 px-20 py-16 px-4 sm:px-6 lg:px-8 bg-[#eaddc8]">
        <div id="left" className="px-12 text-justify">
          <h2 className="text-4xl font-bold mb-6 text-black">What is Chitrayan?</h2>
          <p className="text-xl text-gray-900 leading-relaxed font-thin">
            Chitrayan is Kaagazz's homage to India's vibrant folk‑art legacy.
            Each kit draws inspiration from regional styles—Madhubani, Warli,
            Santhal, Gond—reimagined through easy-to-use papercraft tools and
            templates.
          </p>
          <br />
          <p className="text-xl text-gray-900 leading-relaxed font-thin ">
            Designed for art lovers of all levels, Chitrayan sparks creativity
            while reconnecting you with timeless traditions—no artistic training
            required, just curiosity.
          </p>
        </div>

        <div id="right" className="h-50 w-50"><img src={image} alt="" className="rounded-lg shadow-lg"/></div>
      </div>
    </>
  );
}

export default WhatIsChitrayan;
