import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    q: 'What is a prop trading firm?',
    a: 'A proprietary trading firm provides capital to traders who pass an evaluation. You trade our money, and we split the profits. You risk none of your own capital.',
  },
  {
    q: 'How does the profit split work?',
    a: 'Traders keep up to 90% of the profits they generate on their funded account. Payouts are processed bi-weekly.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. You only pay the one-time evaluation fee. If you pass the challenge and get your first payout, the evaluation fee is fully refunded to you.',
  },
  {
    q: 'What assets can I trade?',
    a: 'We offer a wide range of CFD and Forex assets, including major pairs, commodities, and indices.',
  },
  {
    q: 'Can I hold trades over the weekend?',
    a: 'Yes, CFD and Forex trading offers extensive market hours. Please refer to our trading schedule for specific asset closures.',
  },
  {
    q: 'How long does it take to get funded?',
    a: 'As soon as you hit the profit target and meet the minimum trading days (0 days for most accounts), your funded account credentials will be emailed to you within 24 hours.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-6 max-w-[860px] mx-auto relative">
      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
          Got Questions?
        </span>
        <h2 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white">
          FREQUENTLY ASKED <span className="text-brand">QUESTIONS</span>
        </h2>
      </div>

      <div className="glass-panel p-2 md:p-8">
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-white/5 last:border-0 px-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-syne text-lg font-bold text-white group-hover:text-brand transition-colors">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    'w-8 h-8 border flex items-center justify-center transition-colors',
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
                    <p className="pb-6 font-syne text-text-secondary leading-relaxed pr-12">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
