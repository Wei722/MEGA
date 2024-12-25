import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { StepCard } from './StepCard';
import { ConnectingLine } from './ConnectingLine';
import { steps } from './data';

export default function HowToBuy() {
  return (
    <Section 
      title="How To Buy" 
      description="Get started with MEGA in three simple steps"
      className="bg-deep-space relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative">
        <ConnectingLine />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {steps.map((step, index) => (
            <div key={step.title} className="group">
              <StepCard step={step} index={index} />
              
              {/* Enhanced mobile arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6 md:hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-lg animate-pulse" />
                    <ArrowDownCircle className="w-8 h-8 text-cyber-blue animate-bounce relative" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}