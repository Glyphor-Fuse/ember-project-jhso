import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg tracking-tighter">AETHER & ICE</span>
        <span className="font-serif italic text-xs opacity-70">Est. 2024 — Svalbard</span>
      </div>

      <div className="hidden md:flex gap-12 text-xs font-display tracking-widest">
        {['Expeditions', 'The Lodge', 'Manifesto', 'Journal'].map((item, i) => (
          <motion.a 
            key={item}
            href="#" 
            className="relative group overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-[0.19,1,0.22,1]">{item}</span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.19,1,0.22,1] text-glacier">{item}</span>
          </motion.a>
        ))}
      </div>

      <button className="md:hidden text-xs font-display border border-white/20 px-4 py-2 rounded-full">
        MENU
      </button>
    </motion.nav>
  );
};

export default Navbar;