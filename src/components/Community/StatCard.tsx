import React from 'react';
import { Card } from '../ui/Card';
import { StatProps } from './types';

export function StatCard({ stat }: { stat: StatProps }) {
  return (
    <Card className="relative group">
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-neon-blue to-cyber-blue opacity-20 blur-sm group-hover:opacity-40 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative bg-deep-space/90 m-[1px] p-6 h-full flex items-center gap-6">
        {/* Icon with glow */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-neon-blue opacity-20 rounded-full animate-ping" />
          <div className="relative text-cyber-blue transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {stat.icon}
          </div>
        </div>
        
        <div>
          <div className="text-5xl font-bold mb-1 bg-gradient-to-r from-cyber-blue to-neon-blue bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-gray-400 text-lg font-light tracking-wider uppercase">
            {stat.label}
          </div>
        </div>
      </div>
    </Card>
  );
}