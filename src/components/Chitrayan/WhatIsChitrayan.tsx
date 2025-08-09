// const image = "../../assets/whatischitrayan.png";

import image from "../../assets/whatischitrayan.png";

function WhatIsChitrayan() {
  return (
    <div
      id="learn-more"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 max-w-6xl mx-auto rounded-xl overflow-hidden"
    >
      <div id="left" className="px-2 md:px-8 text-justify flex flex-col justify-center">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-10 text-center md:text-left">
          What is Chitrayan?
        </h2>
        <p className="text-base sm:text-xl text-gray-900 leading-relaxed font-thin">
          Chitrayan is Kaagazz's homage to India's vibrant folk‑art legacy.
          Each kit draws inspiration from regional styles—Madhubani, Warli,
          Santhal, Gond—reimagined through easy-to-use papercraft tools and
          templates.
        </p>
        <br />
        <p className="text-base sm:text-xl text-gray-900 leading-relaxed font-thin">
          Designed for art lovers of all levels, Chitrayan sparks creativity
          while reconnecting you with timeless traditions—no artistic training
          required, just curiosity.
        </p>
      </div>
      <div id="right" className="flex justify-center items-center">
        <img src={image} alt="" className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover" />
      </div>
    </div>
  );
}

export default WhatIsChitrayan;
