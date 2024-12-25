import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

export function Card({ children, className = '', glowEffect = false }: CardProps) {
  return (
    <div className={`
      relative bg-deep-space/50 backdrop-blur-lg border border-cyber-blue/20 rounded-xl p-6
      ${glowEffect ? 'glow-effect' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}