import { motion } from "framer-motion";
import identityAnimation from "/LandingVideo.mp4";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-16 gap-12">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10 pl-4 sm:pl-8 md:pl-16 lg:pl-24 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-indigo-700 mb-6 leading-tight"
        >
          Your Identity,<br />
          <span className="text-indigo-500">Zero Compromise</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-6"
        >
          A fast, secure, and privacy-first identity verification platform that keeps your personal data safe.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </motion.button>
      </div>

      {/* Right Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <video
          src={identityAnimation}
          autoPlay
          loop
          playsInline
          controls
          className="w-full max-w-[90vw] sm:max-w-lg md:max-w-4xl lg:max-w-4xl rounded-xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
