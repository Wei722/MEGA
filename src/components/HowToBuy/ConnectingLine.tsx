import React from 'react';

export function ConnectingLine() {
  return (
    <>
      {/* Desktop horizontal line */}
      <div className="absolute top-24 left-0 w-full hidden md:block">
        <div className="relative h-0.5 mx-32">
          {/* Base line */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 via-neon-blue/20 to-cyber-blue/20" />
          {/* Animated line */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-neon-blue to-cyber-blue opacity-75 animate-pulse" />
          {/* Glowing dots */}
          <div className="absolute -top-1 left-1/3 w-3 h-3">
            <div className="absolute inset-0 bg-cyber-blue rounded-full animate-ping opacity-75" />
            <div className="relative w-3 h-3 bg-cyber-blue rounded-full" />
          </div>
          <div className="absolute -top-1 left-2/3 w-3 h-3">
            <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-75" />
            <div className="relative w-3 h-3 bg-neon-blue rounded-full" />
          </div>
        </div>
      </div>

      {/* Mobile vertical lines */}
      <div className="md:hidden">
        {/* Line between step 1 and 2 */}
        <div className="absolute left-1/2 top-[calc(100%/3-2rem)] h-[calc(100%/3)] w-0.5">
          <div className="relative h-full">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 via-neon-blue/20 to-cyber-blue/20" />
            {/* Animated line */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue via-neon-blue to-cyber-blue opacity-75 animate-pulse" />
            {/* Glowing dot */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-3 h-3">
              <div className="absolute inset-0 bg-cyber-blue rounded-full animate-ping opacity-75" />
              <div className="relative w-3 h-3 bg-cyber-blue rounded-full" />
            </div>
          </div>
        </div>

        {/* Line between step 2 and 3 */}
        <div className="absolute left-1/2 top-[calc(200%/3-2rem)] h-[calc(100%/3)] w-0.5">
          <div className="relative h-full">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 via-neon-blue/20 to-cyber-blue/20" />
            {/* Animated line */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue via-neon-blue to-cyber-blue opacity-75 animate-pulse" />
            {/* Glowing dot */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-3 h-3">
              <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-75" />
              <div className="relative w-3 h-3 bg-neon-blue rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}