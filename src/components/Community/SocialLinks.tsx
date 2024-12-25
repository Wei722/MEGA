import React from 'react';
import { Send, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';

const socials = [
  {
    name: 'X',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg',
    url: 'https://x.com/megatokenerc',
    members: 'Join X',
    description: 'Follow us for the latest updates',
    gradient: 'from-[#000000] to-[#141414]'
  },
  {
    name: 'Telegram',
    icon: <Send className="w-8 h-8" />,
    url: 'https://t.me/MEGA_Token_ERC20',
    members: 'Join Telegram',
    description: 'Join our active community',
    gradient: 'from-[#0088cc] to-cyber-blue'
  }
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition-gpu"
        >
          <Card className="relative overflow-hidden backdrop-blur-lg bg-gradient-to-b from-deep-space/90 to-deep-space/70 p-8 hover:scale-105 transition-all duration-500">
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Glowing orb effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyber-blue/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            
            {/* Content */}
            <div className="relative flex flex-col items-center">
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {typeof social.icon === 'string' ? (
                  <div className="w-12 h-12 relative">
                    <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse" />
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="relative w-full h-full object-contain filter brightness-0 invert" 
                    />
                  </div>
                ) : (
                  <div className="text-cyber-blue">
                    {social.icon}
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors duration-500">
                {social.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-center mb-8 group-hover:text-gray-300 transition-colors duration-500">
                {social.description}
              </p>
              
              {/* Join button */}
              <div className="flex items-center gap-3 text-cyber-blue">
                <span className="font-bold text-lg">{social.members}</span>
                <ExternalLink className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
}