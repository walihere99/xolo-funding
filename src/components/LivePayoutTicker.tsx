import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const PAYOUTS = [
  { name: 'A***med', amount: 8450, account: '100K' },
  { name: 'J***n', amount: 12200, account: '200K' },
  { name: 'S***h', amount: 3150, account: '25K' },
  { name: 'M***o', amount: 15800, account: '200K' },
  { name: 'D***d', amount: 5400, account: '50K' },
  { name: 'L***a', amount: 9200, account: '100K' },
  { name: 'R***y', amount: 2100, account: '25K' },
  { name: 'K***n', amount: 18500, account: '200K' },
];

export function LivePayoutTicker() {
  return (
    <div className="w-full border-y border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden flex items-center h-16 relative">

      {/* High-End Glass Badge on the Left */}
      <div className="absolute left-0 top-0 bottom-0 bg-black/60 backdrop-blur-3xl border-r border-white/10 text-white font-mono text-[11px] font-bold px-6 flex items-center gap-2.5 z-20 uppercase tracking-[0.2em]">
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Activity className="w-4 h-4 text-brand filter drop-shadow-[0_0_8px_rgba(0,112,243,0.8)]" />
        </motion.div>
        Live Payouts
        {/* Subtle right-edge glow strictly on the badge */}
        <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand to-transparent opacity-50"></div>
      </div>

      {/* True Alpha-Mask Gradient on the edges to fade out the text natively into whatever background is underneath */}
      <div
        className="flex pl-[200px] w-full"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
      >
        <div className="ticker-track flex items-center h-full">
          {[...PAYOUTS, ...PAYOUTS, ...PAYOUTS].map((payout, i) => (
            <div key={i} className="flex items-center gap-4 px-6 font-mono text-[13px] whitespace-nowrap">
              <span className="text-white/45 tracking-wider">{payout.name}</span>
              <span className="text-white/20">—</span>
              {/* Premium Metallic Gradient Text for Payouts */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-emerald-300 font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                +${payout.amount.toLocaleString()} USDT
              </span>
              <span className="text-white/20">—</span>
              <span className="text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded tracking-widest">${payout.account} Account</span>

              {/* Glowing Orb Divider */}
              <span className="w-1.5 h-1.5 rounded-full bg-brand ml-4 shadow-[0_0_10px_rgba(0,112,243,0.8)]"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
