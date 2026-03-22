import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowRight, Trophy } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 lg:pt-40 pb-12 overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-noise z-0 opacity-80"></div>

      {/* Glow Effects (Removed heavy animate-pulse) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="w-8 h-[1px] bg-brand"></div>
              <span className="font-mono text-brand text-sm tracking-widest uppercase">
                CFD & Forex Prop Trading Firm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bebas text-[72px] md:text-[96px] lg:text-[120px] leading-[0.85] tracking-tight mb-6 md:mb-8"
            >
              <div className="text-white">TRADE OUR</div>
              <div className="text-brand">CAPITAL.</div>
              <div className="text-ghost">YOUR EDGE.</div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/45 font-syne text-lg md:text-xl max-w-[520px] mb-10 md:mb-12 leading-relaxed"
            >
              Pass the evaluation, get funded up to $2,000,000, and keep up to 90% of your profits.
              Trade CFDs, Forex, and futures with zero personal risk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="group relative px-8 py-4 bg-white text-black rounded-xl font-syne font-bold text-sm overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex items-center justify-center gap-2">
                  GET FUNDED NOW <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-xl font-syne font-bold text-sm hover:bg-white/5 transition-colors">
                SEE HOW IT WORKS
              </button>
            </motion.div>
          </div>

          {/* Right Column: Hero Widget Image */}
          <div className="relative flex justify-center lg:justify-end items-center lg:mb-0 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="relative w-full max-w-[600px] xl:max-w-[700px] z-20"
            >
              {/* Subtle continuous glow behind the widget (Removed heavy pulse) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

              <div className="relative z-20 pb-12">
                <motion.img
                  src="/hero-widget.png"
                  alt="Xolo Funding Platform Demo"
                  className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.6)] relative"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Floating Payout Proof */}
              <motion.div
                className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 w-[280px] z-30 flex items-center gap-4 glass-card p-4 rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="w-12 h-12 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-syne mb-1 flex justify-between items-center w-full">
                    <span>Recent Payout</span>
                    <span className="text-white/40">2 mins ago</span>
                  </div>
                  <div className="text-white font-bebas text-2xl leading-none tracking-wider">
                    $18,450.00
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">
          {[
            { label: 'TOTAL PAYOUTS', value: 12.4, prefix: '$', suffix: 'M+' },
            { label: 'FUNDED TRADERS', value: 8500, prefix: '', suffix: '+' },
            { label: 'COUNTRIES', value: 130, prefix: '', suffix: '+' },
            { label: 'PROFIT SPLIT', value: 90, prefix: 'UP TO ', suffix: '%' },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-4 flex flex-col items-center justify-center text-center">
              <div className="font-bebas text-4xl md:text-5xl text-white mb-2">
                {stat.prefix}
                <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <div className="font-mono text-xs text-white/45 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
