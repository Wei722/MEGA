import React from 'react';
import { Twitter, MessageCircle, Send, Users, Rocket, Trophy } from 'lucide-react';
import { Card } from './ui/Card';

export default function Community() {
  const stats = [
    { icon: <Users />, value: '2K+', label: 'Community Members' },
    { icon: <Trophy />, value: '1.8K', label: 'Holders' },
    { icon: <Rocket />, value: '$1M+', label: 'Market Cap' },
  ];

  const socials = [
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-6 h-6" />, 
      url: 'https://x.com/megatokenerc',
      members: 'Join Twitter',
      gradient: 'from-[#1DA1F2] to-cyber-blue'
    },
    { 
      name: 'Telegram', 
      icon: <Send className="w-6 h-6" />, 
      url: 'https://t.me/MEGA_Token_ERC20',
      members: 'Join Telegram',
      gradient: 'from-[#0088cc] to-cyber-blue'
    }
  ];

  return (
    <section className="py-20 bg-deep-space relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-blue">
          Join The Movement
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Be part of the revolution that's making Ethereum great again. Join our vibrant community of believers and innovators.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center p-6 hover:scale-105 transition-transform">
              <div className="text-cyber-blue mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative flex flex-col items-center">
                  <div className="text-cyber-blue mb-4 transform group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                  <p className="text-gray-400">{social.members}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}