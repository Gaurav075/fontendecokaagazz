import { motion } from "framer-motion";
import { Review } from "../../data/review";

interface TestimonialCardProps {
  testimonial: Review;
  index: number;
  maxLength?: number;
}

const TestimonialCard = ({ testimonial, index, maxLength = 120 }: TestimonialCardProps) => {
  const truncatedQuote = testimonial.quote.length > maxLength 
    ? `${testimonial.quote.substring(0, maxLength)}...`
    : testimonial.quote;

  return (
    <motion.div
      className="bg-gradient-to-br from-white/60 to-[#FAF8F3]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DCC0]/30 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E8DCC0]/50"
        />
        <div>
          <h4 className="font-semibold text-[#5C5044]">{testimonial.author}</h4>
          <p className="text-xs text-[#7A6B52]">{testimonial.company}</p>
          {testimonial.industry && (
            <p className="text-xs text-[#A89B7E]">{testimonial.industry}</p>
          )}
        </div>
      </div>
      <p className="text-sm text-[#5C5044] leading-relaxed">
        "{truncatedQuote}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;