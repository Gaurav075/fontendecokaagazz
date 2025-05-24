import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  isVisible: boolean;
}

const SectionHeader = ({ badge, title, subtitle, isVisible }: SectionHeaderProps) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8 }}
    >
      {badge && (
        <motion.div
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-[#E8DCC0] to-[#DDD0B4] rounded-full border border-[#C8B99C]/30 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[#7A6B52] font-medium tracking-wide">{badge}</span>
        </motion.div>
      )}
      
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text mb-4">
        {title}
      </h2>
      <p className="text-xl text-[#7A6B52]/80 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;