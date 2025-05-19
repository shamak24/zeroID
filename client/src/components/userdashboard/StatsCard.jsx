import React from 'react';
import { motion } from 'framer-motion';

function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <p className="text-sm text-gray-500">{stat.title}</p>
          <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
        </motion.div>
      ))}
    </div>
  );
}
export default StatsCards;