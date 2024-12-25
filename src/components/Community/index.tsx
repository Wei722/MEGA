import React from 'react';
import { Section } from '../ui/Section';
import { X, Send } from 'lucide-react';

export default function Community() {
  const socials = [
    {
      name: 'Telegram',
      icon: <Send className="w-8 h-8" />,
      url: 'https://t.me/MEGA_Token_ERC20',
      color: 'from-[#229ED9] to-[#1E96CF]'
    },
    {
      name: 'X',
      icon: <X className="w-8 h-8" />,
      url: 'https://x.com/megatokenerc',
      color: 'from-[#14171A] to-[#1B2730]'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#000B1D]">
      {/* Animated tech background */}
      <div className="absolute inset-0">
        {/* Hexagon grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' fill='none' stroke='%2300F0FF' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Glowing circuit lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute top-2/4 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30 animate-pulse delay-700"></div>
        </div>

        {/* Data nodes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyber-blue rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-['Impact'] text-7xl md:text-9xl text-center mb-6 text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
          JOIN THE MEGA MOVEMENT
        </h1>

        <div className="text-center mb-16 space-y-4">
          <p className="font-['Impact'] text-3xl md:text-4xl text-white">
            LET'S MAKE ETH GREAT AGAIN!
          </p>
          <p className="font-['Impact'] text-2xl md:text-3xl text-cyber-blue">
            FOLLOW US FOR THE LATEST UPDATES
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${social.color} p-[2px] transition-transform duration-300 group-hover:scale-110`}>
                <div className="w-full h-full rounded-2xl bg-[#000B1D] flex items-center justify-center relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyber-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  {/* Icon */}
                  <div className="text-cyber-blue relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {social.icon}
                  </div>
                </div>
              </div>
              {/* Bottom glow */}
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-cyber-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}