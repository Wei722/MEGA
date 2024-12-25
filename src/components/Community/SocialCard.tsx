import React from 'react';
import { Card } from '../ui/Card';
import { SocialProps } from './types';
import { ExternalLink } from 'lucide-react';

export function SocialCard({ social }: { social: SocialProps }) {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="relative overflow-hidden">
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-neon-blue to-cyber-blue opacity-20 blur-sm group-hover:opacity-40 transition-all duration-500" />
        
        {/* Content */}
        <div className="relative bg-deep-space/90 m-[1px] p-8">
          <div className="flex items-center gap-8">
            {/* Icon container */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-neon-blue opacity-20 rounded-full animate-ping" />
              <div className="relative text-cyber-blue transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {social.icon}
              </div>
            </div>
            
            {/* Text content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-4xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-500">
                  {social.name}
                </h3>
                <ExternalLink className="w-6 h-6 text-cyber-blue transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <p className="text-xl text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                {social.description}
              </p>
            </div>
          </div>

          {/* Hover effect line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </Card>
    </a>
  );
}