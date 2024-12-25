import React from 'react';
import { Home, Info, ShoppingCart, Users, Map, HelpCircle } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: Info, label: 'About', href: '#about' },
  { icon: ShoppingCart, label: 'Buy', href: '#how-to-buy' },
  { icon: Users, label: 'Community', href: '#community' },
  { icon: Map, label: 'Roadmap', href: '#roadmap' },
  { icon: HelpCircle, label: 'FAQ', href: '#faq' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-deep-space/95 backdrop-blur-lg border-t border-cyber-blue/20 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-cyber-blue transition-colors group"
            >
              <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}