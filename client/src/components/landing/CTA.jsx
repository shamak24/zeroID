import React from 'react';
import { motion } from 'framer-motion';

function CTA() {
  return (
    <section className="py-12 bg-indigo-600 text-white text-center px-4">
      <h4 className="text-xl sm:text-2xl font-bold mb-4">Ready to try zeroID?</h4>
      <motion.button 
        whileHover={{ scale: 1.05 }}
      className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        Get Started Now
      </motion.button>
    </section>
  );
}

export default CTA;