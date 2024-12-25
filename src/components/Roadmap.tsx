import React from 'react';
import { Card } from './ui/Card';
import { Section } from './ui/Section';
import { Milestone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Launch & Community',
      items: ['Token Launch', 'Community Growth', 'Marketing Campaign'],
      active: true
    },
    {
      phase: 'Phase 2',
      title: 'Platform Development',
      items: ['DEX Integration', 'Staking Platform', 'Governance System']
    },
    {
      phase: 'Phase 3',
      title: 'Ecosystem Expansion',
      items: ['Cross-chain Bridge', 'NFT Marketplace', 'Mobile App']
    }
  ];

  return (
    <Section 
      title="Roadmap" 
      description="Our journey to revolutionize the Ethereum ecosystem"
      className="bg-mesh"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase, index) => (
          <Card 
            key={phase.phase}
            className={`relative ${phase.active ? 'glow-effect' : ''}`}
          >
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyber-blue rounded-full flex items-center justify-center">
              {phase.active ? (
                <CheckCircle2 className="w-4 h-4 text-black" />
              ) : (
                <ArrowRight className="w-4 h-4 text-black" />
              )}
            </div>
            <div className="text-cyber-blue font-bold mb-2">{phase.phase}</div>
            <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
            <ul className="space-y-3">
              {phase.items.map((item) => (
                <li key={item} className="flex items-center space-x-2 text-gray-400">
                  <Milestone className="w-4 h-4 text-cyber-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}