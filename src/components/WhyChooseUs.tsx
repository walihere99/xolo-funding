import { motion } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, Coins, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Payouts',
    desc: 'Request your profits anytime. We process crypto withdrawals within 24 hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Personal Risk',
    desc: 'Trade our capital. If you lose, we cover the losses. You only share the upside.',
  },
  {
    icon: TrendingUp,
    title: 'Scale to $2M',
    desc: 'Consistent profitable traders get their account size increased up to $2,000,000.',
  },
  {
    icon: Coins,
    title: '700+ Crypto Assets',
    desc: 'Trade the widest selection of spot and perpetual futures in the prop industry.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
          The Xolo Advantage
        </span>
        <h2 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white">
          WHY CHOOSE <span className="text-brand">US</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-16">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative p-8 glass-card rounded-2xl group hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 shadow-xl"
          >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none rounded-2xl"></div>

            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-brand to-brand/20 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-t-2xl"></div>

            <div className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center mb-6 bg-black/40 backdrop-blur-md group-hover:bg-brand/20 group-hover:border-brand/50 transition-all duration-500 shadow-inner group-hover:scale-110">
              <feature.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
            </div>

            <h3 className="font-syne text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
              {feature.title}
            </h3>
            <p className="font-syne text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
              {feature.desc}
            </p>

            {/* Hover Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center relative z-10">
        <button className="w-full max-w-sm group relative px-8 py-5 bg-white text-black rounded-xl font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative flex items-center justify-center gap-3">
            Join Xolo Funding <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}
