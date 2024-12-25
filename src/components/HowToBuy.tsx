import React from 'react';
import { Wallet, DollarSign, ArrowRightCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

export default function HowToBuy() {
  const steps = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: 'Create Wallet',
      description: 'Download MetaMask or your preferred wallet',
      link: 'https://metamask.io/download/',
      linkText: 'Get MetaMask'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Get ETH',
      description: 'Purchase ETH from your preferred exchange',
      link: 'https://coinbase.com',
      linkText: 'Buy ETH'
    },
    {
      icon: <ArrowRightCircle className="w-12 h-12" />,
      title: 'Swap for MEGA',
      description: 'Use Uniswap to swap ETH for MEGA',
      link: 'https://app.uniswap.org/swap?outputCurrency=0xc06bf3589345a81f0c2845e4db76bdb64bbbbc9d&inputCurrency=ETH',
      linkText: 'Swap Now'
    }
  ];

  return (
    <Section 
      title="How To Buy" 
      description="Get started with MEGA in three simple steps"
      className="bg-deep-space"
    >
      <div className="relative">
        {/* Horizontal connecting line for desktop */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Vertical connecting line for mobile */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full h-8 w-0.5 md:hidden">
                  <div className="relative h-full">
                    {/* Base line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 via-neon-blue/20 to-cyber-blue/20" />
                    {/* Animated line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue via-neon-blue to-cyber-blue opacity-75 animate-pulse" />
                    {/* Glowing dot */}
                    <div className="absolute -bottom-1.5 -left-1 w-3 h-3">
                      <div className="absolute inset-0 bg-cyber-blue rounded-full animate-ping opacity-75" />
                      <div className="relative w-3 h-3 bg-cyber-blue rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              <Card className="relative group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                {/* Step number */}
                <div className="absolute -top-4 -left-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyber-blue/30 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-10 h-10 bg-gradient-to-r from-cyber-blue to-neon-blue rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-black font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 pt-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse" />
                    <div className="text-cyber-blue transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-center mb-6">
                  {step.description}
                </p>

                {/* Action button */}
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-gradient-to-r from-cyber-blue/10 to-neon-blue/10 hover:from-cyber-blue/20 hover:to-neon-blue/20 border border-cyber-blue/30 hover:border-cyber-blue rounded-full text-cyber-blue text-center font-semibold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <span className="flex items-center justify-center gap-2">
                    {step.linkText}
                    <ArrowRightCircle className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}