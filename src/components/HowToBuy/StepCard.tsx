import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { StepProps } from './types';

export function StepCard({ step, index }: { step: StepProps; index: number }) {
  return (
    <Card className="relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,240,255,0.3)] backdrop-blur-lg bg-gradient-to-b from-deep-space/90 to-deep-space/70 border-cyber-blue/30 group">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      {/* Glowing orb behind number */}
      <div className="absolute -top-4 -left-4">
        <div className="relative">
          <div className="absolute inset-0 bg-cyber-blue/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-0 bg-cyber-blue/20 rounded-full animate-ping" />
          <div className="relative w-10 h-10 bg-gradient-to-r from-cyber-blue to-neon-blue rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            <span className="text-black font-bold text-lg">{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Icon with enhanced animation */}
      <div className="flex justify-center mb-8 pt-4">
        <div className="relative">
          <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse" />
          <div className="text-cyber-blue transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-float">
            {step.icon}
          </div>
        </div>
      </div>

      {/* Content with enhanced typography */}
      <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-neon-blue bg-clip-text text-transparent transform transition-transform duration-500 group-hover:scale-105">
        {step.title}
      </h3>
      <p className="text-gray-400 text-center mb-8 transition-colors duration-500 group-hover:text-gray-300">
        {step.description}
      </p>

      {/* Enhanced action button */}
      <a
        href={step.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-4 px-6 bg-gradient-to-r from-cyber-blue/10 to-neon-blue/10 hover:from-cyber-blue/20 hover:to-neon-blue/20 border border-cyber-blue/30 hover:border-cyber-blue rounded-full text-cyber-blue text-center font-semibold transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
      >
        <span className="flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-500">
          {step.linkText}
          <ChevronRight className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-1" />
        </span>
      </a>
    </Card>
  );
}