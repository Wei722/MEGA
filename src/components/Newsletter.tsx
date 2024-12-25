import React from 'react';
import { Mail, Send } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Newsletter() {
  return (
    <Section title="Stay Updated" className="bg-mesh">
      <Card className="max-w-2xl mx-auto text-center" glowEffect>
        <Mail className="w-12 h-12 text-cyber-blue mx-auto mb-6" />
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter for the latest updates and announcements
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full bg-deep-space border border-cyber-blue/20 text-white focus:outline-none focus:border-cyber-blue transition-colors"
          />
          <button
            type="submit"
            className="group relative px-8 py-4 bg-cyber-blue rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="relative flex items-center justify-center gap-2">
              <span className="text-black font-bold">Subscribe</span>
              <Send className="w-4 h-4 text-black" />
            </div>
          </button>
        </form>
      </Card>
    </Section>
  );
}