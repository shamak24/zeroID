import React from 'react';
import { motion } from 'framer-motion';

function ActionButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700">Get Verified</button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300">Generate Credentials</button>
    </motion.div>
  );
}
export default ActionButtons;