import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface TripProps {
  title: string;
  coords: string;
  img: string;
  index: number;
}

const TripCard = ({ title, coords, img, index }: TripProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row gap-12 items-center py-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>
      <motion.div 
        className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </motion.div>
      
      <div className="w-full md:w-1/2 px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-mono text-xs text-glacier mb-4 block">{coords}</span>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase leading-[0.9]">{title}</h3>
          <p className="font-serif text-lg text-slate-400 mb-8 max-w-sm">
            Traverse the frozen archipelago where time stands still. Steam, ice, and black rock form the canvas of your rebirth.
          </p>
          <button className="text-white flex items-center gap-3 text-xs tracking-widest border-b border-transparent hover:border-white pb-1 transition-all">
            VIEW ITINERARY <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const InteractiveSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const trips = [
    {
      title: "Black Sand & Steam",
      coords: "64.1282° N, 21.8277° W",
      img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/18273081/pexels-photo-18273081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Majestic Vestrahorn mountain with black sand dunes, capturing Iceland's raw beauty."
    width="2832"
    height="4240"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/scenic-cliff-at-stokksnes-on-iceland-18273081/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Thibaut Tattevin on Pexels
    </a>
  </div>
</div>"
    },
    {
      title: "The Ice Cathedral",
      coords: "78.2232° N, 15.6267° E",
      img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/12125336/pexels-photo-12125336.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Explore the captivating beauty of an ice cave formation at a glacier in Whistler, BC."
    width="4000"
    height="6000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/entrance-to-ice-cave-12125336/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Nick Gosset on Pexels
    </a>
  </div>
</div>"
    },
    {
      title: "Volcanic Silence",
      coords: "63.4186° N, 19.0060° W",
      img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/7741332/pexels-photo-7741332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Dramatic aerial view of an Icelandic volcano surrounded by lush landscape and cloudy sky."
    width="2828"
    height="3534"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/an-aerial-shot-of-a-volcano-7741332/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by ArtHouse Studio on Pexels
    </a>
  </div>
</div>"
    }
  ];

  return (
    <section ref={ref} className="bg-[#02040F] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          style={{ opacity: scrollYProgress }} 
          className="mb-24 border-l border-white/20 pl-8"
        >
          <h2 className="font-display text-2xl text-white">SELECT YOUR<br />ISOLATION</h2>
        </motion.div>

        <div>
          {trips.map((trip, index) => (
            <TripCard key={index} index={index} {...trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;