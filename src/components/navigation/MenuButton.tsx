import React from 'react';
import { Menu } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative z-50 
        w-14 h-14
        bg-cyber-blue
        transition-all duration-300
        ${isOpen ? 'rounded-lg' : 'clip-path-triangle'}
        hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]
      `}
    >
      <Menu 
        className={`
          w-6 h-6 
          text-black 
          absolute 
          bottom-2
          left-2
          transition-transform duration-300
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
      />
    </button>
  );
}