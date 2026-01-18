import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#02040F] z-10" />
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/18272935/pexels-photo-18272935.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A breathtaking aerial view of the Vatnajökull Glacier in Iceland, showcasing its icy expanse and dramatic landscape."
    width="4000"
    height="2250"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/glacier-in-iceland-18272935/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Thibaut Tattevin on Pexels
    </a>
  </div>
</div>" 
          alt="Arctic Landscape" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full px-6 md:px-12 flex flex-col items-start justify-end h-full pb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="overflow-hidden"
        >
          <h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter text-white leading-[0.85] mix-blend-overlay">
            FROZEN<br/>
            <span className="ml-12 md:ml-32 text-outline">SILENCE</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between w-full border-t border-white/20 pt-8"
        >
          <div className="max-w-md">
            <p className="font-serif text-2xl md:text-3xl italic text-ice-100 leading-snug">
              "We go to the ends of the earth to find the beginning of ourselves."
            </p>
          </div>
          
          <button className="mt-8 md:mt-0 group flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowRight size={20} />
            </div>
            <span className="font-display text-xs tracking-widest">BEGIN EXPEDITION</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;