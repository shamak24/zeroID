import React from 'react';
import { motion } from 'framer-motion';

function DigitalIDStatus({ status, issuedAt }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow"
    >
      <h3 className="text-xl font-semibold">Digital ID Status</h3>
      <p className="mt-2 text-gray-700">Status: <span className="font-bold text-green-600">{status}</span></p>
      <p className="text-gray-500 text-sm">Issued on: {issuedAt}</p>
    </motion.div>
  );
}
export default DigitalIDStatus;