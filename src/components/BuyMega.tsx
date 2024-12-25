import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/Card';
import { exchanges } from '../data/exchanges';
import { Exchange } from '../types/exchange';

function ExchangeCard({ exchange }: { exchange: Exchange }) {
  return (
    <a
      href={exchange.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:bg-cyber-blue/10 p-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-cyber-blue group-hover:scale-105 transition-transform p-2 bg-deep-space rounded-full w-12 h-12 flex items-center justify-center">
            {'imageUrl' in exchange && (
              <img 
                src={exchange.imageUrl} 
                alt={exchange.name} 
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div className="text-center">
            <h3 className="text-sm font-bold text-white mb-0.5">{exchange.name}</h3>
            <p className="text-xs text-gray-400">{exchange.description}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-cyber-blue transform group-hover:rotate-45 transition-transform" />
        </div>
      </Card>
    </a>
  );
}

export default function BuyMega() {
  return (
    <section className="py-16 bg-deep-space relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-blue/5 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-blue">
          Buy MEGA On
        </h2>
        <p className="text-center text-gray-400 mb-8">Trade MEGA on your preferred platform</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {exchanges.map((exchange) => (
            <ExchangeCard key={exchange.name} exchange={exchange} />
          ))}
        </div>
      </div>
    </section>
  );
}