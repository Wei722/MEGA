import { Exchange } from '../types/exchange';

const dexes: Exchange[] = [
  {
    name: 'Uniswap',
    imageUrl: 'https://res.cloudinary.com/alchemy-website/image/upload/v1694675398/dapp-store/dapp-logos/Uniswap.svg',
    url: 'https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xc06bf3589345a81f0c2845e4db76bdb64bbbbc9d',
    description: 'Leading DEX',
    category: 'dex'
  },
  {
    name: '1inch',
    imageUrl: 'https://res.cloudinary.com/alchemy-website/image/upload/v1694675410/dapp-store/dapp-logos/1inch.svg',
    url: 'https://app.1inch.io/#/1/simple/swap/1:ETH/1:MEGA',
    description: 'Best rates',
    category: 'dex'
  },
  {
    name: 'SushiSwap',
    imageUrl: 'https://res.cloudinary.com/alchemy-website/image/upload/v1694675430/dapp-store/dapp-logos/Sushi.svg',
    url: 'https://www.sushi.com/ethereum/swap?token0=NATIVE&token1=0xc06bF3589345A81f0C2845E4Db76bdb64BBBbc9D',
    description: 'Multi-chain',
    category: 'dex'
  },
  {
    name: 'KyberSwap',
    imageUrl: 'https://res.cloudinary.com/alchemy-website/image/upload/v1694675668/dapp-store/dapp-logos/KyberSwap.svg',
    url: 'https://kyberswap.com/swap/ethereum/eth-to-0xc06bf3589345a81f0c2845e4db76bdb64bbbbc9d',
    description: 'Dynamic rates',
    category: 'dex'
  }
];

const analytics: Exchange[] = [
  {
    name: 'DexTools',
    imageUrl: 'https://www.alchemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675909%2Fdapp-store%2Fdapp-logos%2FDEXTools.jpg&w=640&q=75',
    url: 'https://www.dextools.io/app/en/token/mega?t=1735089932093',
    description: 'Trading tools',
    category: 'analytics'
  },
  {
    name: 'DexScreener',
    imageUrl: 'https://www.alchemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675556%2Fdapp-store%2Fdapp-logos%2FDEX%2520Screener.jpg&w=640&q=75',
    url: 'https://dexscreener.com/ethereum/0x8790891b7e9b2b6d3b2c898dae22f853949bd386',
    description: 'Live charts',
    category: 'analytics'
  },
  {
    name: 'GeckoTerminal',
    imageUrl: 'https://www.alchemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675920%2Fdapp-store%2Fdapp-logos%2FGeckoTerminal.png&w=640&q=75',
    url: 'https://www.geckoterminal.com/eth/pools/0x8790891b7e9b2b6d3b2c898dae22f853949bd386?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults',
    description: 'Analytics',
    category: 'analytics'
  },
  {
    name: 'CoinGecko',
    imageUrl: 'https://www.alchemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675423%2Fdapp-store%2Fdapp-logos%2FCoinGecko%2520API.webp&w=640&q=75',
    url: 'https://www.coingecko.com/en/coins/make-eth-great-again',
    description: 'Market data',
    category: 'analytics'
  }
];

const media: Exchange[] = [
  {
    name: 'Forbes',
    imageUrl: 'https://w7.pngwing.com/pngs/158/833/png-transparent-letter-case-alphabet-lettering-logo-forbes-angle-text-rectangle.png',
    url: 'https://www.forbes.com/digital-assets/assets/make-eth-great-again-mega/',
    description: 'Featured on Forbes',
    category: 'media'
  }
];

export const exchanges = [...dexes, ...analytics, ...media];