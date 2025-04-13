
const Timeline = () => {
    return (
      <section className="py-16 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold uppercase mb-12">OUR JOURNEY THROUGH TIME</h2>
          
          <div className="relative">
            {/* Timeline structure */}
            <div className="flex flex-col">
              {/* Top row with points 1 and 3 */}
              <div className="flex justify-between mb-8">
                {/* Point 1 */}
                <div className="relative w-1/4">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white font-bold text-2xl mx-auto">
                    1
                  </div>
                  <div className="mt-4 text-center">
                    <img 
                      src="/lovable-uploads/800eedaa-7509-4979-82a9-f8dd92d173c0.png" 
                      alt="DTU Innovation Cell" 
                      className="w-32 h-24 object-cover rounded-md mx-auto mb-2"
                    />
                    <h3 className="font-semibold">May 2024</h3>
                    <p className="text-sm mt-1 px-2">Incubated at Delhi Technological University's prestigious innovation cell</p>
                  </div>
                  {/* Vertical line */}
                  <div className="absolute h-24 w-0.5 bg-black left-1/2 top-16"></div>
                </div>
  
                {/* Spacer */}
                <div className="w-1/4"></div>
  
                {/* Point 3 */}
                <div className="relative w-1/4">
                  <div className="w-16 h-16 rounded-full bg-[#f5f2e9] flex items-center justify-center text-black font-bold text-2xl mx-auto">
                    3
                  </div>
                  <div className="mt-4 text-center">
                    <img 
                      src="/lovable-uploads/047b00a3-3792-42d7-a9e9-86ad2fc1608b.png" 
                      alt="herSTART 4.0 Bootcamp" 
                      className="w-32 h-24 object-cover rounded-md mx-auto mb-2"
                    />
                    <h3 className="font-semibold">Jan 2025</h3>
                    <p className="text-sm mt-1 px-2">Completed herSTART 4.0 Bootcamp with GUSEc and UNICEF</p>
                  </div>
                  {/* Vertical line */}
                  <div className="absolute h-24 w-0.5 bg-black left-1/2 top-16"></div>
                </div>
  
                {/* Spacer */}
                <div className="w-1/4"></div>
              </div>
  
              {/* Middle timeline bar */}
              <div className="flex justify-between h-2 mx-auto w-3/4">
                <div className="w-1/3 bg-black"></div>
                <div className="w-1/3 bg-[#d2b48c]"></div>
                <div className="w-1/3 bg-black"></div>
              </div>
  
              {/* Bottom row with points 2 and 4 */}
              <div className="flex justify-between mt-24">
                {/* Spacer */}
                <div className="w-1/4"></div>
  
                {/* Point 2 */}
                <div className="relative w-1/4">
                  <div className="w-16 h-16 rounded-full bg-[#d2b48c] flex items-center justify-center text-black font-bold text-2xl mx-auto">
                    2
                  </div>
                  <div className="mb-4 text-center">
                    <h3 className="font-semibold">Jan 2024</h3>
                    <p className="text-sm mt-1 px-2">MVP Created and business plan drafted</p>
                  </div>
                  {/* Vertical line */}
                  <div className="absolute h-24 w-0.5 bg-[#d2b48c] left-1/2 -top-24"></div>
                </div>
  
                {/* Spacer */}
                <div className="w-1/4"></div>
  
                {/* Point 4 */}
                <div className="relative w-1/4">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white font-bold text-2xl mx-auto">
                    4
                  </div>
                  <div className="mb-4 text-center">
                    <img 
                      src="/lovable-uploads/90fe0f44-8716-4b83-b871-946d44b3eda5.png" 
                      alt="MSME Hackathon" 
                      className="w-32 h-24 object-cover rounded-md mx-auto mb-2"
                    />
                    <h3 className="font-semibold">Nov 2024</h3>
                    <p className="text-sm mt-1 px-2">Shortlisted for MSME Hackathon by FITT at IIT Delhi</p>
                  </div>
                  {/* Vertical line */}
                  <div className="absolute h-24 w-0.5 bg-black left-1/2 -top-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Timeline;