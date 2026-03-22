import React, { useState } from 'react';
import { Target, Zap, Shield, BarChart3, Globe, Smartphone, Monitor, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const PLATFORM_FAQS = [
  {
    q: 'Do you offer MetaTrader (MT4/MT5)?',
    a: 'Due to recent industry restrictions, we have partnered with superior, specialized technology providers. Our custom-built XoloTerminal and our Bybit integration offer significantly better execution speed, tighter spreads, and modern trading tools compared to legacy platforms.',
  },
  {
    q: 'Can I trade crypto over the weekend?',
    a: 'Yes! Cryptocurrency markets run 24/7. If you select Bybit or trade crypto CFD pairs on XoloTerminal, you can execute trades all weekend long.',
  },
  {
    q: 'Is XoloTerminal available on mobile?',
    a: 'Absolutely. XoloTerminal is a progressive web application. You can access it directly via your mobile browser or install it to your home screen for a seamless, app-like experience on both iOS and Android.',
  },
  {
    q: 'What is the maximum leverage available?',
    a: 'We offer up to 1:100 leverage on Forex and up to 1:50 leverage on Crypto assets depending on the specific model and add-ons selected.',
  },
  {
    q: 'Can I use TradingView directly?',
    a: 'Yes, XoloTerminal features full native TradingView chart integration. You can do all your technical analysis directly inside the platform without needing a separate subscription.',
  },
];

export function Platforms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg">
      {/* Cinematic Split Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        {/* Deep ambient glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-brand/10 rounded-full blur-[150px] opacity-70" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#F7A600]/10 rounded-full blur-[150px] opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Detail */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 text-xs font-mono font-bold uppercase tracking-wider mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Next Generation Tech
            </div>
            <h1 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white tracking-widest">
              TRADE WITH THE <span className="text-brand">EDGE</span>
            </h1>
            <p className="font-syne text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We ditched legacy software. At Xolo Funding, you get direct market access via elite, zero-latency platforms designed for serious traders. Whether you are a Forex specialist or a Crypto native, we have the infrastructure you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/models" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-syne font-bold text-sm tracking-wide rounded-xl hover:bg-brand hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,184,255,0.4)] block text-center">
                START TRADING
              </Link>
              <a href="#terminals" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-syne font-bold text-sm tracking-wide rounded-xl hover:bg-white/5 transition-all text-center">
                EXPLORE PLATFORMS
              </a>
            </div>
          </div>

          {/* Right Visual Asset Cluster */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center pointer-events-none">
            {/* XoloTerminal floating left */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[10%] top-[20%] z-20 w-[45%]"
            >
              <div className="absolute inset-0 bg-brand/40 blur-[80px] rounded-full" />
              <img src="/whyus.png" alt="XoloTerminal Interface" className="w-full relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </motion.div>

            {/* Bybit floating right */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [0, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[5%] bottom-[15%] z-10 w-[55%]"
            >
              <div className="absolute inset-0 bg-[#F7A600]/40 blur-[80px] rounded-full" />
              <img src="/bybit.png" alt="Bybit Crypto" className="w-full relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* XoloTerminal Section */}
      <section className="py-20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-mono font-bold uppercase tracking-wider">
                <Shield className="w-3 h-3" />
                Proprietary Tech
              </div>
              <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wider">
                Xolo<span className="text-brand">Terminal</span>
              </h2>
              <p className="font-syne text-white/70 text-lg leading-relaxed">
                Built from the ground up for our funded traders, XoloTerminal is an incredibly lightweight, lightning-fast platform engineered for zero-latency execution. Designed by traders, for traders, it strips away the bloat and focuses entirely on performance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="glass-card border border-white/10 p-6 rounded-2xl bg-white/5">
                  <Zap className="w-6 h-6 text-brand mb-4" />
                  <h3 className="font-syne font-bold text-white text-lg mb-2">Instant Execution</h3>
                  <p className="font-syne text-sm text-white/50">Direct market access ensuring your orders are filled immediately at the requested price.</p>
                </div>
                <div className="glass-card border border-white/10 p-6 rounded-2xl bg-white/5">
                  <BarChart3 className="w-6 h-6 text-brand mb-4" />
                  <h3 className="font-syne font-bold text-white text-lg mb-2">Advanced Charting</h3>
                  <p className="font-syne text-sm text-white/50">Native TradingView integration so you can perform deep technical analysis right inside the terminal.</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2 text-white/60">
                  <Globe className="w-5 h-5 text-brand" /> <span className="font-syne text-sm font-bold">Web</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Monitor className="w-5 h-5 text-brand" /> <span className="font-syne text-sm font-bold">Desktop</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Smartphone className="w-5 h-5 text-brand" /> <span className="font-syne text-sm font-bold">Mobile</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full scale-75" />
              <img src="/whyus.png" alt="XoloTerminal Interface" className="w-[80%] max-w-[500px] object-contain relative z-10 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Bybit Section */}
      <section className="py-20 border-t border-white/5 bg-black/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex justify-center lg:justify-start relative">
              <div className="absolute inset-0 bg-[#F7A600]/20 blur-[100px] rounded-full scale-75" />
              <img src="/bybit.png" alt="Bybit Platform" className="w-[80%] max-w-[500px] object-contain relative z-10 animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F7A600]/30 bg-[#F7A600]/10 text-[#F7A600] text-xs font-mono font-bold uppercase tracking-wider">
                <Target className="w-3 h-3" />
                Crypto Native
              </div>
              <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wider">
                Powered by <span className="text-[#F7A600]">Bybit</span>
              </h2>
              <p className="font-syne text-white/70 text-lg leading-relaxed">
                For our crypto-focused traders, we offer deep integration with Bybit. Experience the unmatched liquidity, ultra-tight spreads, and world-renowned reliability of one of the planet's top cryptocurrency exchanges.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="glass-card border border-[#F7A600]/20 p-6 rounded-2xl bg-black/40">
                  <Globe className="w-6 h-6 text-[#F7A600] mb-4" />
                  <h3 className="font-syne font-bold text-white text-lg mb-2">Deep Liquidity</h3>
                  <p className="font-syne text-sm text-white/50">Trade large positions with zero slippage thanks to Bybit's massive institutional orderbooks.</p>
                </div>
                <div className="glass-card border border-[#F7A600]/20 p-6 rounded-2xl bg-black/40">
                  <Shield className="w-6 h-6 text-[#F7A600] mb-4" />
                  <h3 className="font-syne font-bold text-white text-lg mb-2">Maximum Security</h3>
                  <p className="font-syne text-sm text-white/50">Bank-grade security infrastructure ensuring a safe and stable trading environment 24/7/365.</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2 text-white/60">
                  <Globe className="w-5 h-5 text-[#F7A600]" /> <span className="font-syne text-sm font-bold">Web API</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Smartphone className="w-5 h-5 text-[#F7A600]" /> <span className="font-syne text-sm font-bold">Mobile App</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Platform FAQ Section */}
      <section className="py-24 border-t border-white/5 relative bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 relative z-10">
            <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
              Platform Specifics
            </span>
            <h2 className="font-bebas text-[clamp(3.5rem,6vw,5rem)] leading-[0.9] text-white">
              PLATFORM <span className="text-brand">FAQ</span>
            </h2>
          </div>

          <div className="glass-panel p-2 md:p-8">
            <div className="space-y-2">
              {PLATFORM_FAQS.map((faq, i) => (
                <div key={i} className="border-b border-white/5 last:border-0 px-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-syne text-lg font-bold text-white group-hover:text-brand transition-colors pr-8">
                      {faq.q}
                    </span>
                    <div
                      className={cn(
                        'shrink-0 w-8 h-8 border flex items-center justify-center transition-colors',
                        openIndex === i
                          ? 'bg-brand border-brand text-white'
                          : 'border-brand/30 text-brand group-hover:border-brand'
                      )}
                    >
                      {openIndex === i ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 font-syne text-white/60 leading-relaxed pr-12">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand/5" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-bebas text-5xl text-white tracking-widest mb-6">
            READY TO TRADE ON PREMIUM INFRASTRUCTURE?
          </h2>
          <p className="font-syne text-white/60 mb-10 text-lg">
            Get funded today and choose the trading platform that best suits your edge.
          </p>
          <Link 
            to="/models"
            className="inline-block px-12 py-5 bg-white text-black font-syne font-bold text-[15px] 
                     hover:bg-brand hover:text-white transition-all duration-300 rounded-xl
                     shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,184,255,0.5)]"
          >
            SELECT YOUR CHALLENGE
          </Link>
        </div>
      </section>

    </div>
  );
}
