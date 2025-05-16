import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-10">
      <a href="/" className="text-2xl font-bold">
        <img src="/zeroIDDark.png" alt="logo" className="h-8" />
      </a>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0`}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
         className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 w-full md:w-auto">
          Launch App
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;