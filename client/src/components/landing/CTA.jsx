import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="py-14 px-6 sm:px-12 max-w-5xl mx-auto text-center">
      <div className="bg-indigo-700 rounded-2xl shadow-lg py-12 px-8 sm:px-16">
        <h4 className="text-3xl font-extrabold text-white mb-6 leading-tight">
          Ready to try <span className="text-indigo-300">zeroID?</span>
        </h4>
        <Link to="/dashboard">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-100 transition"
        >
          Get Started Now
        </motion.button>
        </Link>
      </div>
    </section>
  );
}

export default CTA;
