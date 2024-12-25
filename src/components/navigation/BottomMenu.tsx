import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { MenuButton } from './MenuButton';
import { MenuContent } from './MenuContent';

export default function BottomMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ticker = document.querySelector('#ticker');
      if (ticker) {
        const tickerBottom = ticker.getBoundingClientRect().bottom;
        setIsVisible(tickerBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <MenuContent isOpen={isOpen} />
    </div>
  );
}