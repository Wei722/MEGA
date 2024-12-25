import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Hero() {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
    setShowSubscribe(false);
  };

  return (
    <div className="min-h-screen bg-mesh relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-cyber-blue/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-blue">
          MEGA
        </h1>
        
        <p className="text-2xl md:text-4xl mb-12 text-white font-light tracking-wider">
          Make <span className="text-cyber-blue">ETH</span> Great Again
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0xc06bf3589345a81f0c2845e4db76bdb64bbbbc9d&inputCurrency=ETH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border border-cyber-blue rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyber-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="relative text-cyber-blue text-lg font-bold group-hover:text-white transition-colors">
              Buy MEGA
            </span>
          </a>
          
          {!showSubscribe ? (
            <button
              onClick={() => setShowSubscribe(true)}
              className="group relative px-8 py-4 bg-cyber-blue rounded-full overflow-hidden glow-effect"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="relative text-black text-lg font-bold">
                Subscribe
              </span>
            </button>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full bg-deep-space border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-white"
                required
              />
              <button
                type="submit"
                className="group relative px-6 py-3 bg-cyber-blue rounded-full overflow-hidden glow-effect"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </form>
          )}
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-neon-blue rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyber-blue rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-neon-blue rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
}