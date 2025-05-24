import { motion } from "framer-motion";

interface CarouselDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const CarouselDots = ({ total, current, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-3 mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current 
              ? 'bg-gradient-to-r from-[#7A6B52] to-[#8B7355] w-8' 
              : 'bg-[#D4C4A8] hover:bg-[#C8B99C]'
          }`}
          onClick={() => onDotClick(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
};

export default CarouselDots;