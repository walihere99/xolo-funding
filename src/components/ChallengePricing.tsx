import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check, Lock, ArrowRight, Target, TrendingUp,
  ShieldAlert, Shield, Calendar, Zap, MonitorSmartphone, Bitcoin
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ACCOUNT_TYPES = ['2-Step', '2-Step Pro', '1-Step', 'Instant'];
const ACCOUNT_SIZES = ['5K', '10K', '25K', '50K', '100K', '200K'];

const PRICING: Record<string, Record<string, number>> = {
  '2-Step': { '5K': 49, '10K': 89, '25K': 149, '50K': 299, '100K': 549, '200K': 949 },
  '2-Step Pro': { '5K': 59, '10K': 109, '25K': 179, '50K': 349, '100K': 649, '200K': 1149 },
  '1-Step': { '5K': 55, '10K': 99, '25K': 169, '50K': 329, '100K': 599, '200K': 1049 },
  'Instant': { '5K': 249, '10K': 449, '25K': 899, '50K': 1699, '100K': 3199, '200K': 5999 },
};

export function ChallengePricing() {
  const [type, setType] = useState('2-Step');
  const [size, setSize] = useState('100K');
  const [platform, setPlatform] = useState<'xoloterminal' | 'bybit'>('xoloterminal');

  const price = PRICING[type][size];
  const sizeNum = parseInt(size.replace('K', '000'));

  const getRules = () => {
    const rules: Array<{ icon: ReactNode; label: string; value: string; subValue?: string }> = [
      { icon: <Target className="w-5 h-5 text-brand" />, label: 'Funded Capital', value: `$${sizeNum.toLocaleString()}` },
    ];

    if (type.includes('2-Step')) {
      rules.push({ icon: <TrendingUp className="w-5 h-5 text-success" />, label: 'Phase 1 Target', value: '8%' });
      rules.push({ icon: <TrendingUp className="w-5 h-5 text-success" />, label: 'Phase 2 Target', value: '5%' });
    } else if (type === '1-Step') {
      rules.push({ icon: <TrendingUp className="w-5 h-5 text-success" />, label: 'Profit Target', value: '10%' });
    } else {
      rules.push({ icon: <TrendingUp className="w-5 h-5 text-success" />, label: 'Profit Target', value: '10%' });
    }

    const maxDailyLoss = type === '2-Step Pro' ? '5% Static' : '5%';
    const maxOverallLoss = type === '2-Step Pro' ? '10% Static' : '8%';

    const dailyLossAmount = sizeNum * 0.05;
    const overallLossAmount = sizeNum * (type === '2-Step Pro' ? 0.10 : 0.08);

    rules.push({
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
      label: 'Max Daily Loss',
      value: maxDailyLoss,
      subValue: `($${dailyLossAmount.toLocaleString()})`
    });

    rules.push({
      icon: <Shield className="w-5 h-5 text-red-500" />,
      label: 'Max Overall Loss',
      value: maxOverallLoss,
      subValue: `($${overallLossAmount.toLocaleString()})`
    });

    rules.push({ icon: <Calendar className="w-5 h-5 text-blue-400" />, label: 'Minimum Days', value: '0 Days' });
    rules.push({ icon: <Zap className="w-5 h-5 text-yellow-400" />, label: 'Weekend/News', value: 'Allowed' });
    rules.push({ icon: <MonitorSmartphone className="w-5 h-5 text-purple-400" />, label: 'Platforms', value: 'Xolo Terminal, MT5' });

    return rules;
  };

  return (
    <section id="pricing" className="py-12 md:py-16 px-6 max-w-7xl mx-auto relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
          Tailored For You
        </span>
        <h2 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white mb-6 md:mb-10">
          SELECT YOUR <span className="text-brand">CHALLENGE</span>
        </h2>

        {/* Premium Segmented Control for Account Type */}
        <div className="glass-panel p-1.5 inline-flex flex-wrap justify-center gap-1 rounded-2xl mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {ACCOUNT_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={cn(
                'relative px-8 py-3 rounded-xl font-syne text-sm font-bold transition-all duration-300 overflow-hidden',
                type === t ? 'text-white' : 'text-white/40 hover:text-white/80'
              )}
            >
              {type === t && (
                <motion.div
                  layoutId="activeType"
                  className="absolute inset-0 bg-brand/20 border border-brand/50 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>

        {/* Glowing Size Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {ACCOUNT_SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={cn(
                'relative px-6 py-3 rounded-xl font-bebas text-2xl tracking-wider transition-all duration-300',
                size === s
                  ? 'text-white shadow-[0_0_20px_rgba(2,94,228,0.3)] scale-110 z-10'
                  : 'text-white/30 hover:text-white/70 glass-card hover:scale-105'
              )}
            >
              {size === s && (
                <motion.div
                  layoutId="activeSize"
                  className="absolute inset-0 bg-gradient-to-b from-brand/40 to-brand/10 border border-brand rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">${s}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard-Style Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 glass-card rounded-[2rem] overflow-hidden border-white/10 shadow-2xl"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">

          {/* Left Side - Price & CTA */}
          <div className="lg:col-span-5 p-10 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 backdrop-blur-md relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/30 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-white/70 uppercase tracking-widest mb-8">
                <Lock className="w-3 h-3 text-brand" /> One-Time Refundable Fee
              </div>

              <div className="flex items-start gap-2 mb-6 h-24">
                <span className="font-bebas text-4xl text-brand mt-2">$</span>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="font-bebas text-8xl md:text-[120px] leading-none text-white tracking-tight"
                  >
                    {price}
                  </motion.span>
                </AnimatePresence>
              </div>

              <p className="font-syne text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                Unlock a <strong className="text-white">${sizeNum.toLocaleString()}</strong> funded account. Keep up to 90% of your profits with bi-weekly payouts.
              </p>

              {/* Platform Selection */}
              <div className="mb-8">
                <div className="font-syne text-sm text-white/60 mb-3 uppercase tracking-wider font-bold">Select Platform</div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPlatform('xoloterminal')}
                    className={cn(
                      'relative p-3 md:p-4 rounded-xl border flex items-center justify-start gap-3 transition-all duration-300 overflow-hidden',
                      platform === 'xoloterminal'
                        ? 'bg-white/10 border-brand shadow-[0_0_15px_rgba(2,94,228,0.2)]'
                        : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/5'
                    )}
                  >
                    {platform === 'xoloterminal' && (
                      <div className="absolute top-0 right-0 bg-brand text-white text-[9px] font-bold px-1.5 py-0.5 rounded-bl-lg tracking-wider z-10">
                        POPULAR
                      </div>
                    )}
                    <img src="/whyus.png" alt="XoloTerminal" className="h-6 w-auto object-contain relative z-10" />
                    <span className="font-syne font-bold text-white text-sm whitespace-nowrap relative z-10">XOLO TERMINAL</span>
                  </button>

                  <button
                    onClick={() => setPlatform('bybit')}
                    className={cn(
                      'relative p-3 md:p-4 rounded-xl border flex items-center justify-start gap-3 transition-all duration-300 overflow-hidden',
                      platform === 'bybit'
                        ? 'bg-white/10 border-brand shadow-[0_0_15px_rgba(2,94,228,0.2)]'
                        : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/5'
                    )}
                  >
                    <img src="/bybit.png" alt="Bybit" className="h-6 w-auto object-contain relative z-10" />
                    <span className="font-syne font-bold text-white text-sm whitespace-nowrap relative z-10">BYBIT</span>
                  </button>
                </div>
              </div>

              <Link 
                to="/checkout" 
                state={{ type, size, platform, price }}
                className="w-full group relative px-4 sm:px-8 py-4 sm:py-5 bg-white text-black rounded-xl font-syne font-bold text-[15px] sm:text-base md:text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] block text-center"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap">
                  Start Trading Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side - Dashboard Rules */}
          <div className="lg:col-span-7 p-10 md:p-12 bg-white/[0.02] relative">
            {size === '100K' && (
              <div className="absolute top-6 right-6 bg-brand/20 text-brand border border-brand/30 px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(2,94,228,0.2)]">
                <Zap className="w-3 h-3" /> Best Value
              </div>
            )}

            <h3 className="font-syne text-xl font-bold text-white mb-8 flex items-center gap-3">
              Evaluation Parameters
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getRules().map((rule, i) => (
                <motion.div
                  key={`${type}-${size}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass-panel p-4 flex items-center gap-4 group hover:bg-white/[0.04] transition-colors border-white/5 hover:border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {rule.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
                      {rule.label}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-syne text-sm font-bold text-white">
                        {rule.value}
                      </span>
                      {rule.subValue && (
                        <span className="font-mono text-[10px] text-white/30">
                          {rule.subValue}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Methods */}
      <div className="mt-12 flex flex-col items-center justify-center gap-6 relative z-10">
        <span className="font-mono text-xs text-white/30 uppercase tracking-widest">Supported Payment Methods</span>
        <div className="flex flex-wrap justify-center items-center gap-6 transition-all duration-500">
          <img src="/Payment Icons/visa.png" alt="Visa" className="h-7 w-auto object-contain" />
          <img src="/Payment Icons/master-card.png" alt="Mastercard" className="h-7 w-auto object-contain" />
          <img src="/Payment Icons/american-express.png" alt="AMEX" className="h-7 w-auto object-contain" />
          <img src="/Payment Icons/paypal.png" alt="PayPal" className="h-7 w-auto object-contain" />
          <img src="/Payment Icons/skrill.png" alt="Skrill" className="h-7 w-auto object-contain" />
          <img src="/Payment Icons/bitcoin.png" alt="Bitcoin" className="h-7 w-auto object-contain" />
          <img src="/Payment Icons/ethereum.png" alt="Ethereum" className="h-7 w-auto object-contain invert brightness-0" />
          <img src="/Payment Icons/tether.png" alt="Tether" className="h-7 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
