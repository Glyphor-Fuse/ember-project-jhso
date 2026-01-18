import React from 'react';

const GlyphorBadge: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 mix-blend-difference pointer-events-none">
      <div className="group flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-white opacity-40 group-hover:opacity-100 transition-opacity">
          Made with Glyphor Fuse
        </span>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default GlyphorBadge;