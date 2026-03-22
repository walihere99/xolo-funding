import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-[120px] px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-[80px] md:text-[120px] leading-[0.85] tracking-tight mb-8"
        >
          <div className="text-white">START TRADING</div>
          <div className="text-brand">OUR MONEY</div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/45 font-syne text-lg max-w-[520px] mb-12 leading-relaxed"
        >
          Join thousands of funded traders worldwide. Take the challenge today and get funded up to $2,000,000.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <button className="group relative px-10 py-5 bg-white text-black rounded-xl font-syne font-bold text-sm overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative flex items-center justify-center gap-2">
              GET FUNDED NOW <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-10 py-5 border border-white/20 text-white rounded-xl font-syne font-bold text-sm hover:bg-white/5 transition-colors">
            VIEW CHALLENGES
          </button>
        </motion.div>
      </div>
    </section>
  );
}
