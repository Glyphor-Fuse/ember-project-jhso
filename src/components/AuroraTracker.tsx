import { motion } from 'framer-motion';

const AuroraTracker = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#02040F] relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-60" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-xs text-glacier tracking-widest mb-4 block"
          >
            /// LIVE DATA FEED
          </motion.span>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-white mb-8"
          >
            The Magnetosphere is <span className="italic text-glacier">Singing</span>.
          </motion.h2>
          <p className="text-slate-400 font-sans text-sm leading-relaxed max-w-sm">
            Real-time telemetry from our Svalbard outpost indicates a KP-Index of 7.2. The probability of visual aurora within the next 4 hours is absolute.
          </p>
        </div>

        <div className="lg:col-span-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "KP INDEX", value: "7.2", status: "STORM LEVEL" },
              { label: "SOLAR WIND", value: "450 km/s", status: "FAST" },
              { label: "VISIBILITY", value: "100%", status: "CLEAR SKY" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-panel p-8 flex flex-col justify-between h-48 group hover:bg-white/5 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="font-display text-[10px] text-slate-500 tracking-widest">{stat.label}</span>
                  <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
                <div>
                  <span className="block font-display text-4xl text-white font-bold mb-1">{stat.value}</span>
                  <span className="block font-mono text-xs text-glacier uppercase">{stat.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuroraTracker;