const Founders = () => {
  const founders = [
    {
      name: "Srishti Singh",
      title: "Co-Founder & CEO",
      bio: "A DTU alumnus and passionate entrepreneur, our CEO leads with a vision to revolutionize sustainability through innovation.",
      image: "/lovable-uploads/srishti.png",
    },
    {
      name: "Hemant Singh",
      title: "Co-Founder",
      bio: "A DTU alumnus and visionary leader, he pioneers sustainable innovation with a passion for technology and impact.",
      image: "/lovable-uploads/hemant.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#fefaf6] bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-serif font-bold text-[#5C4033] mb-20 tracking-wide">
          Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 border border-[#eae4d3]"
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-[#f4eee2] shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className={`w-full h-full object-cover ${founder.name === "Hemant Singh" ? "scale-[1] object-[40%_60%]" : "object-center" }`}
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-[#3b3a36]">{founder.name}</h3>
                <p className="text-kaagazz-brown text-sm mt-1 mb-2 italic tracking-wide">
                  {founder.title}
                </p>
                <p className="text-[#615c51] text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
