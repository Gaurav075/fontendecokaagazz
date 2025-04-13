
const Founders = () => {
    const founders = [
      {
        name: "Srishti Singh",
        title: "Co-Founder & CEO",
        bio: "A STEM graduate and passionate entrepreneur, our visionary leader is committed to achieving sustainability through innovation.",
        image: "/lovable-uploads/729bb4b6-1a90-4efc-8190-5be004a7cee9.png"
      },
      {
        name: "Hemant Singh",
        title: "Co-Founder",
        bio: "A STEM graduate and visionary leader, he pioneers innovation with a passion for technology and impact.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    ];
  
    return (
      <section className="py-16 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-10">OUR FOUNDERS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-sm text-kaagazz-brown mb-2">{founder.title}</p>
                  <p className="text-sm">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Founders;