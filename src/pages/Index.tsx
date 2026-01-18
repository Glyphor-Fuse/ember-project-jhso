import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AuroraTracker from '../components/AuroraTracker';
import InteractiveSection from '../components/InteractiveSection';
import Footer from '../components/Footer';
import GlyphorBadge from '../utils/GlyphorBadge';
import { motion, useScroll, useTransform } from 'framer-motion';

const Index = () => {
  // Global parallax for smooth scrolling feel
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative w-full min-h-screen bg-[#02040F] selection:bg-glacier selection:text-black">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-glacier z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Manifesto Section - Pure Type */}
        <section className="py-32 px-6 md:px-24 bg-[#02040F] flex justify-center items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-center leading-relaxed text-slate-300 max-w-4xl"
          >
            We bridge the gap between the <span className="text-white italic">modern wanderer</span> and the ancient, frozen stillness of the North. Our journeys are not merely sightseeing, but a communion with the elemental forces of ice, steam, and silence.
          </motion.p>
        </section>

        <AuroraTracker />
        
        {/* Full Bleed Image Break */}
        <div className="w-full h-[60vh] overflow-hidden relative">
           <motion.img 
             initial={{ scale: 1.2 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 1.5 }}
             src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/12166061/pexels-photo-12166061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A detailed close-up of vivid blue glacier ice texture showcasing natural patterns."
    width="3223"
    height="2076"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/frozen-lake-surface-12166061/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by op23 on Pexels
    </a>
  </div>
</div>"
             className="w-full h-full object-cover"
             alt="Glacial Texture"
           />
           <div className="absolute inset-0 bg-black/40" />
           <div className="absolute bottom-12 left-6 md:left-12">
             <h2 className="font-display text-6xl md:text-8xl text-outline font-bold opacity-50">DEEP<br/>TIME</h2>
           </div>
        </div>

        <InteractiveSection />
      </main>

      <Footer />
      <GlyphorBadge />
    </div>
  );
};

export default Index;