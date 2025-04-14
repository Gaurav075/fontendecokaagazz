import { motion } from "framer-motion";

const quotes = [
  "“Kaagazz helped us align our values with our operations.”",
  "“The quality is impeccable—and it feels good to support a mission.”",
  "“Our team loves the eco-conscious designs and story behind each product.”",
  "“Switching to Kaagazz was seamless, and our clients love it too!”",
];

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
        {[...quotes, ...quotes].map((quote, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-xs bg-white p-6 rounded-xl shadow-md italic text-sm text-gray-700"
          >
            {quote}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
