import { Users, Trophy, Rocket, Send } from 'lucide-react';
import { Stat, Social } from './types';

export const stats: Stat[] = [
  { 
    icon: Users, 
    value: '2K+', 
    label: 'Community Members',
    gradient: 'from-cyber-blue to-neon-blue'
  },
  { 
    icon: Trophy, 
    value: '1.8K', 
    label: 'Holders',
    gradient: 'from-neon-blue to-purple-500'
  },
  { 
    icon: Rocket, 
    value: '$1M+', 
    label: 'Market Cap',
    gradient: 'from-purple-500 to-cyber-blue'
  }
];

export const socials: Social[] = [
  { 
    name: 'X', 
    icon: 'https://banner2.cleanpng.com/20240119/bkq/transparent-x-icon-black-and-white-x-in-the-1710889063979.webp',
    url: 'https://x.com/megatokenerc',
    members: 'Join X',
    description: 'Follow us for the latest updates',
    gradient: 'from-[#000000] to-[#141414]'
  },
  { 
    name: 'Telegram', 
    icon: <Send className="w-6 h-6" />, 
    url: 'https://t.me/MEGA_Token_ERC20',
    members: 'Join Telegram',
    description: 'Join our active community',
    gradient: 'from-[#0088cc] to-cyber-blue'
  }
];