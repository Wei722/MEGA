import React from 'react';
import { Home, Info, ShoppingCart, Users, Map, HelpCircle } from 'lucide-react';

interface MenuContentProps {
  isOpen: boolean;
}

export function MenuContent({ isOpen }: MenuContentProps) {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Info, label: 'About' },
    { icon: ShoppingCart, label: 'Buy' },
    { icon: Users, label: 'Community' },
    { icon: Map, label: 'Roadmap' },
    { icon: HelpCircle, label: 'FAQ' },
  ];

  return (
    <div
      className={`
        fixed bottom-0 left-0
        w-full bg-deep-space
        border-t border-cyber-blue/20
        transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyber-blue transition-colors group"
            >
              <item.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}