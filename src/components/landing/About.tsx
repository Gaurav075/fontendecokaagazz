const About = () => {
  return (
    <section className="py-12 px-4 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <h2 className="text-center text-6xl font-Outfit font-bold uppercase mb-8 text-[#000000]">
          WHAT IS KAAGAZZ?
        </h2>
        
        {/* Three Key Statements Section */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-xl font-LibreBaskerville font-normal leading-[32px] text-[#6B5D4D]">
            Kaagazz is a dream to have forests full of trees and roads free of filth.
          </p>
          <p className="text-xl font-LibreBaskerville font-normal leading-[32px] text-[#6B5D4D]">
            Kaagazz is a promise to treat all with respect and care.
          </p>
          <p className="text-xl font-LibreBaskerville font-normal leading-[32px] text-[#6B5D4D]">
            Kaagazz is an experience of finest Indian tree-free paper.
          </p>
        </div>
        
        {/* Description Section */}
        <div className="text-center mt-8 mb-6 text-sm">
          <p className="max-w-3xl mx-auto font-LibreBaskerville font-bold text-[20px] leading-[32.5px] text-[#4A3F35] text-center">
            Kaagazz is a social enterprise founded by DTU alumni. We create premium paper products while 
            empowering marginalized communities through sustainable employment. Our innovative production 
            technology transforms urban waste into exquisite paper, fostering environmental stewardship and 
            social change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
