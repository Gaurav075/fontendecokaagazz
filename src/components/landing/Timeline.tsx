const Timeline = () => {
  return (
    <section className="py-32 px-6 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')] bg-cover bg-center text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold uppercase mb-24">
          OUR JOURNEY THROUGH TIME
        </h2>

        <div className="relative">
          {/* Horizontal Bar */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-3 flex z-0">
            <div className="w-1/4 bg-[#2f2b27] rounded-l-full" />
            <div className="w-1/4 bg-[#d2b48c]" />
            <div className="w-1/4 bg-[#f5f5f5]" />
            <div className="w-1/4 bg-[#2f2b27] rounded-r-full" />
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-4 gap-4 relative z-10">

          <div className="flex flex-col items-center relative">
  {/* Number Circle above */}
  <div className="flex flex-col items-center mb-4">
    <div className="w-16 h-16 rounded-full bg-[#2f2b27] text-white flex items-center justify-center text-xl font-bold z-10">
      1
    </div>
    <div className="w-1 h-6 bg-black" /> {/* Small vertical line */}

  </div>

  {/* Horizontal bar will go here (handled globally in layout) */}

  {/* Description below */}
  <div className="mt-4 text-center max-w-[10rem]">
    <h3 className="font-bold">Jan 2024</h3>
    <p className="text-sm">


"     

 MVP Created and business plan drafted
"    </p>
  </div>
</div>


            {/* Point 2 - Image Above, Text Below */}
            <div className="flex flex-col items-center">
              <img
                src="/lovable-uploads/dtu.png"
                alt="DTU"
                
                className="w-40 h-28 object-cover rounded-md mb-4"
                
              />
              <div className="mt-6 text-center">
                <h3 className="font-bold">May 2024</h3>
                <p className="text-sm">
                  Incubated at Delhi Technological University's prestigious innovation cell
                </p>
              </div>
              <div className="w-1 h-6 bg-black" /> {/* Small vertical line */}

              <div className="w-16 h-16 rounded-full bg-[#d2b48c] text-black flex items-center justify-center text-xl font-bold z-10">
                2
              </div>
              
            </div>

            {/* Point 3 - Text Above, Image Below */}
            <div className="flex flex-col items-center">
              
              <div className="w-16 h-16 rounded-full bg-[#f5f5f5] text-black flex items-center justify-center text-xl font-bold z-10">
                3
              </div>
              <div className="w-1 h-6 bg-black" /> {/* Small vertical line */}
              <div className="mb-6 text-center">
                <h3 className="font-bold">Nov 2024</h3>
                <p className="text-sm">
                  Shortlisted for MSME Hackathon by FITT at IIT Delhi
                </p>
              </div>
              <img
                src="/lovable-uploads/iitdelhi.png"
                alt="MSME Hackathon"
                className="w-40 h-28 object-cover rounded-md mt-4"
              />
            </div>

            {/* Point 4 - Image Above, Text Below */}
            <div className="flex flex-col items-center">
              <img
                src="/lovable-uploads/gusec.png"
                alt="herSTART"
                className="w-40 h-28 object-cover rounded-md mb-4"
              />
              <div className="mt-6 text-center">
                <h3 className="font-bold">Jan 2025</h3>
                <p className="text-sm">
                  Completed herSTART 4.0 Bootcamp with GUSEC & UNICEF
                </p>
              </div>
              <div className="w-1 h-6 bg-black" /> {/* Small vertical line */}

              <div className="w-16 h-16 rounded-full bg-[#2f2b27] text-white flex items-center justify-center text-xl font-bold z-10">
                4
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
