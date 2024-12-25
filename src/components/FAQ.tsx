import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is MEGA?',
      answer: 'MEGA (Make ETH Great Again) is a revolutionary cryptocurrency project built on the Ethereum blockchain, aimed at enhancing the ETH ecosystem.'
    },
    {
      question: 'How can I buy MEGA tokens?',
      answer: 'You can buy MEGA tokens through Uniswap by connecting your wallet and swapping ETH for MEGA.'
    },
    {
      question: 'Is MEGA audited?',
      answer: 'Yes, MEGA smart contracts have been thoroughly audited by leading blockchain security firms to ensure maximum safety.'
    },
    {
      question: 'What makes MEGA unique?',
      answer: 'MEGA combines innovative tokenomics, strong community focus, and real utility within the Ethereum ecosystem.'
    }
  ];

  return (
    <Section 
      title="FAQ" 
      description="Common questions about MEGA"
      className="bg-deep-space"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card 
            key={index} 
            className={`transition-all duration-300 ${
              openIndex === index ? 'glow-effect' : ''
            }`}
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-white">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-cyber-blue" />
              ) : (
                <ChevronDown className="w-5 h-5 text-cyber-blue" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-4 pt-4 border-t border-cyber-blue/20 text-gray-400">
                {faq.answer}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}