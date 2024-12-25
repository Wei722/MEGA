import React from 'react';
import { Rocket, Zap, Target } from 'lucide-react';
import { Card } from './ui/Card';

export default function About() {
  return (
    <section className="py-20 bg-deep-space relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-blue">
            WELCOME ABOARD
            <br />
            THE MEGA TRAIN!
          </h1>
          
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              At <span className="text-cyber-blue">MEGA</span>, our mission is simple: to
              make Ethereum the undisputed titan of decentralized finance (DeFi). We're committed to
              bringing Ethereum back to its rightful place.
            </p>
            
            <p>
              Together, let's harness the power of MEGA to propel Ethereum to new heights.
              Buckle up, stay tuned, and get ready to witness the future of DeFi unfold
              before your eyes. Welcome to the MEGA family.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-12">
          {[...Array(4)].map((_, i) => (
            <Rocket 
              key={i} 
              className="w-6 h-6 text-cyber-blue animate-pulse" 
              style={{ animationDelay: `${i * 200}ms` }} 
            />
          ))}
        </div>

        <p className="text-center text-xl font-bold text-white tracking-wider mb-8">
          BELIEVE IN MEGA, BELIEVE IN ETHEREUM.
        </p>
      </div>
    </section>
  );
}