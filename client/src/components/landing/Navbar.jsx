import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-sm bg-transparent backdrop-blur-md sticky top-0 z-20">
      {/* Logo */}
      <Link to={"/"} className="flex items-center space-x-2">
        <motion.img
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="/zeroIDDark.png"
          alt="ZeroID Logo"
          className="h-8 w-auto"
        />
        <span className="text-white text-xl font-semibold"></span>
      </Link>

      {/* Hamburger Menu (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu" className="text-black">
          {open ? <X size={28} /> : <Menu size={28} className="text-black"/>}
        </button>
      </div>

      {/* Navigation Links + Button */}
      <div className="hidden md:flex items-center gap-6">
        {/* Add more nav links here if needed */}
        <Link to={"/dashboard"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition cursor-pointer"
        >
          Launch App
        </motion.button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-transparent backdrop-blur-md px-6 py-4 z-10"
          >
            {/* Add more nav items here if needed */}
            <Link to={"/dashboard"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-4 py-2 w-full rounded-full text-sm font-medium hover:bg-indigo-700 transition"
              onClick={() => setOpen(false)}
            >
              Launch App
            </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
