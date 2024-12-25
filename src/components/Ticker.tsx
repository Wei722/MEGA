import React from 'react';

export default function Ticker() {
  const tickerContent = Array(20).fill('$MEGA IS LIVE');

  return (
    <div id="ticker" className="bg-cyber-blue/10 overflow-hidden py-2 border-y border-cyber-blue/20">
      <div className="animate-ticker whitespace-nowrap">
        <div className="inline-block">
          {tickerContent.map((text, i) => (
            <span key={i} className="inline-block mx-4 text-cyber-blue font-bold">
              {text}
            </span>
          ))}
        </div>
        <div className="inline-block">
          {tickerContent.map((text, i) => (
            <span key={i} className="inline-block mx-4 text-cyber-blue font-bold">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}