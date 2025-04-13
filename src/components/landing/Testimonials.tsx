
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "OHHH!! Thanks god !!! Finally there is someone making it for me to use on my projects. Love ya ❤️ ❤️ ❤️",
      author: "Lead designer",
      rating: 4.5
    },
    {
      quote: "The quality of Kaagazz products is exceptional. I'm impressed by their commitment to sustainability without compromising on performance.",
      author: "Environmental Advocate",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill="#FFA500" color="#FFA500" size={20} />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star fill="#FFA500" color="#FFA500" size={20} className="absolute" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
          <Star color="#FFA500" size={20} />
        </div>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} color="#FFA500" size={20} />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10">TESTIMONIALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-[#5D4037] rounded-lg text-white">
              <div className="flex items-start mb-4">
                <span className="text-3xl font-serif">"</span>
                <p className="text-sm">{testimonial.quote}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <p className="font-bold text-lg">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;