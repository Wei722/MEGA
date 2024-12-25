import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import BuyMega from './components/BuyMega';
import Meganomics from './components/Meganomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="bg-deep-space min-h-screen text-white">
      <LoadingScreen />
      <div id="hero"><Hero /></div>
      <Ticker />
      <div id="about"><About /></div>
      <div id="how-to-buy"><HowToBuy /></div>
      <BuyMega />
      <Meganomics />
      <div id="roadmap"><Roadmap /></div>
      <div id="community"><Community /></div>
      <Newsletter />
      <div id="faq"><FAQ /></div>
    </div>
  );
}