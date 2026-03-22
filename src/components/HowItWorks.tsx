import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'UNLOCK CAPITAL',
    desc: 'Get Funded with our Capital',
    image: '/unlock.png',
  },
  {
    num: '02',
    title: 'TRADE',
    desc: 'Trade with your favorite Trading Platform',
    image: '/trade.png',
  },
  {
    num: '03',
    title: 'EARN',
    desc: 'Withdraw 100% of your profits',
    image: '/earn.png',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 max-w-[1400px] mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
          The Process
        </span>
        <h2 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white">
          HOW IT <span className="text-brand">WORKS</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 relative z-10 mb-16">
        {STEPS.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative p-6 md:p-8 glass-card rounded-3xl group hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col items-start w-full md:w-[340px] lg:w-[380px] h-[450px]"
            >
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none rounded-3xl"></div>

              {/* Ghost Number */}
              <div className="absolute top-6 right-6 font-bebas text-8xl text-white/[0.03] select-none pointer-events-none group-hover:text-brand/10 transition-colors duration-500">
                {step.num}
              </div>

              <div className="w-full flex-grow flex items-center justify-center mb-4 relative z-10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[260px] object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-syne text-[1.4rem] font-bold text-white mb-2 group-hover:text-brand transition-colors relative z-10 mt-auto">
                {step.title}
              </h3>
              <p className="font-syne text-white/50 leading-relaxed group-hover:text-white/70 transition-colors relative z-10 text-[13px]">
                {step.desc}
              </p>

              {/* Hover Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </motion.div>

            {/* Chevron separator for desktop */}
            {i < STEPS.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm -mx-2 z-20">
                <ChevronRight className="w-5 h-5 text-white/50 stroke-[3]" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center relative z-10">
        <button className="w-full max-w-md group relative px-8 py-5 bg-white text-black rounded-xl font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative flex items-center justify-center gap-3">
            Start Your Evaluation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}
