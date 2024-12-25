import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const slideTimer = setTimeout(() => {
      setIsSliding(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 3500); // Extra time for slide animation to complete

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#000B1D] flex items-center justify-center transition-transform duration-500 ${
        isSliding ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Circuit line background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse" />
        <div className="absolute top-3/4 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse delay-300" />
        <div className="absolute left-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse delay-500" />
        <div className="absolute right-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse delay-700" />
      </div>

      <div className="relative text-center">
        {/* Text */}
        <h1 className="font-['Impact'] text-7xl text-white mb-12 tracking-wider animate-pulse">
          MEGA
        </h1>
        
        {/* Loading bar */}
        <div className="relative w-64 h-1 bg-deep-space/50 rounded-full overflow-hidden mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-neon-blue animate-[loading_3s_ease-in-out]" />
          
          {/* Glowing dots */}
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-cyber-blue rounded-full blur-sm animate-[loading_3s_ease-in-out]" />
          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-neon-blue rounded-full blur-md animate-[loading_3s_ease-in-out_0.2s]" />
        </div>

        {/* Loading text */}
        <p className="mt-4 text-cyber-blue text-sm tracking-[0.3em] animate-pulse">
          INITIALIZING
        </p>
      </div>
    </div>
  );
}