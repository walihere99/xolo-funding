import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PAYOUTS = [
  { flag: '🇺🇸', amount: 12450, name: 'T***r', country: 'USA', account: '200K' },
  { flag: '🇬🇧', amount: 8200, name: 'J***s', country: 'UK', account: '100K' },
  { flag: '🇦🇺', amount: 4150, name: 'M***a', country: 'AUS', account: '50K' },
  { flag: '🇨🇦', amount: 15800, name: 'D***n', country: 'CAN', account: '200K' },
  { flag: '🇩🇪', amount: 6400, name: 'L***s', country: 'GER', account: '100K' },
  { flag: '🇫🇷', amount: 3200, name: 'A***e', country: 'FRA', account: '25K' },
  { flag: '🇪🇸', amount: 9100, name: 'C***s', country: 'ESP', account: '100K' },
  { flag: '🇮🇹', amount: 18500, name: 'M***o', country: 'ITA', account: '200K' },
];

export function VerifiedPayouts() {
  return (
    <section id="payouts" className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
          Proof of Work
        </span>
        <h2 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white drop-shadow-2xl">
          VERIFIED <span className="text-brand">PAYOUTS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {PAYOUTS.map((payout, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, type: 'spring' }}
            className="group relative p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-success/40 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.3)]"
          >
            {/* Subtle internal gradient glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="text-3xl filter drop-shadow-md">{payout.flag}</span>
                <div className="flex items-center gap-1.5 bg-success/10 text-success px-2.5 py-1.5 rounded-md border border-success/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Paid</span>
                </div>
              </div>

              <div className="font-bebas text-[3.25rem] leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-success to-emerald-200 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                ${payout.amount.toLocaleString()}
              </div>

              <div className="flex justify-between items-end border-t border-white/10 pt-4">
                <div className="font-syne text-sm text-white/50 tracking-wide">
                  {payout.name} <span className="mx-1 text-white/20">•</span> {payout.country}
                </div>
                <div className="font-mono text-xs text-brand bg-brand/10 px-2 py-1 rounded uppercase tracking-wider font-bold border border-brand/20">
                  ${payout.account}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
