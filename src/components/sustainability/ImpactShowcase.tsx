import { motion } from "framer-motion";

interface ImpactShowcaseProps {
  wasteReduced?: string;
  treesSaved?: string;
  carbonReduction?: string;
}

const ImpactShowcase = ({ 
  wasteReduced = "85%", 
  treesSaved = "100K+", 
  carbonReduction = "40%" 
}: ImpactShowcaseProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative bg-gradient-to-br from-[#E8DCC0] to-[#D4C4A8] p-8 rounded-3xl shadow-2xl">
        {/* Paper transformation visual */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#5C5044] mb-2">Our Impact</h3>
            <p className="text-[#7A6B52]">Transforming waste into premium paper</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">🗑️</div>
              <div className="text-sm font-semibold text-red-800">Waste Material</div>
              <div className="text-xs text-red-600">Collected & Sorted</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">📄</div>
              <div className="text-sm font-semibold text-green-800">Premium Paper</div>
              <div className="text-xs text-green-600">Sustainable & Quality</div>
            </motion.div>
          </div>
          
          <div className="bg-gradient-to-r from-[#FAF8F3] to-white p-6 rounded-xl border border-[#E8DCC0]/50">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#5C5044]">{wasteReduced}</div>
                <div className="text-xs text-[#7A6B52]">Waste Reduced</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#5C5044]">{treesSaved}</div>
                <div className="text-xs text-[#7A6B52]">Trees Saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#5C5044]">{carbonReduction}</div>
                <div className="text-xs text-[#7A6B52]">Carbon Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactShowcase;