import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700"
      >
        Your Identity, Zero Compromise
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl"
      >
        A fast, secure, and privacy-first identity verification platform.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-indigo-700"
      >
        Get Started
      </motion.button>
    </section>
  );
}

export default HeroSection;