import { Wallet, DollarSign, ArrowRightCircle } from 'lucide-react';
import { StepData } from './types';

export const steps: StepData[] = [
  {
    icon: Wallet,
    title: 'Create Wallet',
    description: 'Download MetaMask or your preferred wallet',
    link: 'https://metamask.io/download/',
    linkText: 'Get MetaMask'
  },
  {
    icon: DollarSign,
    title: 'Get ETH',
    description: 'Purchase ETH from your preferred exchange',
    link: 'https://coinbase.com',
    linkText: 'Buy ETH'
  },
  {
    icon: ArrowRightCircle,
    title: 'Swap for MEGA',
    description: 'Use Uniswap to swap ETH for MEGA',
    link: 'https://app.uniswap.org/swap?outputCurrency=0xc06bf3589345a81f0c2845e4db76bdb64bbbbc9d&inputCurrency=ETH',
    linkText: 'Swap Now'
  }
];