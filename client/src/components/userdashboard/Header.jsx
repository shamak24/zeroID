import React from 'react';
import { motion } from 'framer-motion';

function Header({ user }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center"
    >
      <div>
        <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-indigo-300 flex items-center justify-center font-bold text-white">
        {user.name[0]}
      </div>
    </motion.div>
  );
}
export default Header;