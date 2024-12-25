import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function Section({ children, title, description, className = '' }: SectionProps) {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-blue">
          {title}
        </h2>
        {description && (
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}