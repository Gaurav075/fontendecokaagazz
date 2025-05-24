import { motion } from "framer-motion";

const BackgroundElements = () => {
  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full blur-2xl"></div>
      </div>

      {/* Floating paper elements */}
      <motion.div
        className="absolute top-16 right-20 w-8 h-10 bg-gradient-to-br from-[#D4C4A8] to-[#B8A082] rounded-sm shadow-lg"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-8 bg-gradient-to-br from-[#C8B99C] to-[#A89B7E] rounded-sm shadow-lg"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
};

export default BackgroundElements;