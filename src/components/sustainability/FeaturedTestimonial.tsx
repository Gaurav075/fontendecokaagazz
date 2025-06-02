import { motion } from "framer-motion";
import { Review } from "../../data/review";
import StarRating from "./StarRating";

interface FeaturedTestimonialProps {
  testimonial: Review;
  currentIndex: number;
}

const FeaturedTestimonial = ({ testimonial, currentIndex }: FeaturedTestimonialProps) => {
  return (
    <motion.div
      key={currentIndex}
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-br from-white/80 to-[#FAF8F3]/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-[#E8DCC0]/50 relative overflow-hidden">
        {/* Quote decoration */}
        <div className="absolute top-4 left-4 text-6xl text-[#D4C4A8]/30 font-serif">"</div>
        <div className="absolute bottom-4 right-4 text-6xl text-[#D4C4A8]/30 font-serif rotate-180">"</div>
        
        <div className="relative z-10">
          <StarRating rating={testimonial.rating} className="mb-4" />
          
          <blockquote className="text-xl md:text-2xl text-[#5C5044] leading-relaxed mb-8 font-light">
            {testimonial.quote}
          </blockquote>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-[#E8DCC0]/50"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="font-bold text-[#5C5044] text-lg">
                {testimonial.author}
              </h4>
              <p className="text-[#7A6B52] text-sm">
                {testimonial.role}
              </p>
              {/* <p className="text-[#A89B7E] text-xs font-medium">
                {testimonial.company}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedTestimonial;