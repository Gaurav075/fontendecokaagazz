import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials"; // Adjust the import path as necessary
import { FaUserAlt } from "react-icons/fa"; // User icon for author

const Testimonials = () => {
  return (
    <section className="py-14 px-6 bg-[#F2EFE6] overflow-hidden">
      <h2 className="text-3xl font-semibold text-[#5C5044] mb-10 text-center">Their Voice</h2>

      <motion.div
        className="flex w-max space-x-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-xs bg-gradient-to-r from-[#e4e3d2] to-[#F1F6E6] p-6 rounded-xl shadow-lg italic text-sm text-gray-700 space-y-4"
          >
            <div className="flex items-center gap-3">
              {/* User Icon */}
              <FaUserAlt className="text-2xl text-[#5C5044]" />
              {/* Author's Name */}
              <span className="font-semibold text-[#5C5044]">{testimonial.author}</span>
            </div>

            {/* Testimonial Quote */}
            <p className="leading-relaxed text-base text-gray-800">{testimonial.quote}</p>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>“{testimonial.author}”</span>
              <span>- A voice of change</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
