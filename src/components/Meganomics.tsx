import React from 'react';
import { FileText, Lock, Coins, CheckCircle2, Shield, Rocket } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Meganomics() {
  const tokenInfo = [
    {
      icon: <Coins className="w-12 h-12" />,
      label: 'Total Supply',
      value: '1,000,000 MEGA',
      description: '1 Million tokens',
      gradient: 'from-cyber-blue to-blue-500'
    },
    {
      icon: <Lock className="w-12 h-12" />,
      label: 'Ownership',
      value: 'Renounced',
      description: 'Contract ownership renounced',
      gradient: 'from-purple-500 to-cyber-blue'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      label: 'Security',
      value: 'Verified',
      description: 'Audited & KYC verified',
      gradient: 'from-green-500 to-cyber-blue'
    }
  ];

  return (
    <Section 
      title="Meganomics" 
      description="Secure, transparent, and community-driven"
      className="bg-deep-space"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main token info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {tokenInfo.map((info) => (
          <Card 
            key={info.label} 
            className="p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="text-cyber-blue mb-4 transform group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {info.label}
              </h3>
              <p className="text-cyber-blue font-mono text-lg mb-2">
                {info.value}
              </p>
              <p className="text-gray-400">
                {info.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Contract details card */}
      <Card className="max-w-2xl mx-auto p-6 border-cyber-blue/30 hover:border-cyber-blue/50 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-cyber-blue" />
            <h3 className="text-lg font-bold text-white">Contract Address</h3>
          </div>
          <CheckCircle2 className="w-6 h-6 text-green-500" />
        </div>
        <div className="bg-deep-space/50 p-4 rounded-lg border border-cyber-blue/20 group hover:border-cyber-blue/40 transition-colors">
          <div className="flex items-center justify-between">
            <code className="text-cyber-blue font-mono text-sm break-all">
              0xc06bF3589345A81f0C2845E4Db76bdb64BBBbc9D
            </code>
            <button 
              onClick={() => navigator.clipboard.writeText('0xc06bF3589345A81f0C2845E4Db76bdb64BBBbc9D')}
              className="ml-2 p-2 rounded-lg hover:bg-cyber-blue/10 transition-colors group"
            >
              <Rocket className="w-5 h-5 text-cyber-blue transform group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-4">
          <a 
            href={`https://etherscan.io/token/0xc06bF3589345A81f0C2845E4Db76bdb64BBBbc9D`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyber-blue hover:underline flex items-center"
          >
            View on Etherscan
            <FileText className="w-4 h-4 ml-1" />
          </a>
        </div>
      </Card>
    </Section>
  );
}