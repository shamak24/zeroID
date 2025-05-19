import React from 'react';
import { motion } from 'framer-motion';

function LoginHistory({ logs }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow"
    >
      <h3 className="text-xl font-semibold mb-4">Login History</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {logs.map((log, index) => (
          <li key={index} className="border-b pb-2">
            <p><strong>Date:</strong> {log.date}</p>
            <p><strong>Location:</strong> {log.location}</p>
            <p><strong>Device:</strong> {log.device}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
export default LoginHistory;