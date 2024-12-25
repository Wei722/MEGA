import React from 'react';
import { Users, Trophy, Rocket } from 'lucide-react';
import { Card } from '../ui/Card';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '2K+',
    label: 'Community Members',
    gradient: 'from-cyber-blue to-neon-blue'
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: '1.8K',
    label: 'Holders',
    gradient: 'from-neon-blue to-purple-500'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    value: '$1M+',
    label: 'Market Cap',
    gradient: 'from-purple-500 to-cyber-blue'
  }
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {stats.map((stat, index) => (
        <Card 
          key={stat.label}
          className="relative group hover:scale-105 transition-all duration-500 backdrop-blur-lg bg-gradient-to-b from-deep-space/90 to-deep-space/70"
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-blue/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative p-8">
            {/* Icon with glow effect */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse" />
              <div className="relative text-cyber-blue transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {stat.icon}
              </div>
            </div>
            
            {/* Value with gradient */}
            <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            
            {/* Label */}
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
              {stat.label}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}