import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#02040F] text-white pt-32 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-none mb-8">
              UN<br/>CHARTED
            </h2>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
             <p className="font-serif italic text-2xl md:text-3xl max-w-md text-right mb-12">
               "The cold is not an absence of heat. It is a presence of clarity."
             </p>
             <div className="flex gap-8 font-display text-xs tracking-widest text-slate-500">
               <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
               <a href="#" className="hover:text-white transition-colors">TWITTER</a>
               <a href="#" className="hover:text-white transition-colors">JOURNAL</a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-slate-600">© 2024 AETHER & ICE</span>
            <span className="font-mono text-xs text-slate-600">REYKJAVIK / OSLO / SVALBARD</span>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mt-8 md:mt-0"
          >
             <h3 className="font-display text-lg">BOOKING@AETHER.ICE</h3>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;