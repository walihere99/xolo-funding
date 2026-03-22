import { motion } from 'framer-motion';

const PLATFORMS = [
  {
    name: 'XOLO TERMINAL',
    latency: '12ms',
    desc: 'Our proprietary web-based trading terminal built for speed and precision. No download required.',
    tags: ['700+ PAIRS', 'SPOT & FUTURES', 'WEB'],
    image: '/xoloterminal.png',
  },
  {
    name: 'BYBIT',
    latency: '8ms',
    desc: 'Trade directly on Bybit with our integrated API connection. Deep liquidity and advanced order types.',
    tags: ['NATIVE APP', 'FUTURES', 'API'],
    image: '/bybit.png',
  },
];

export function ExecutionPlatforms() {
  return (
    <section id="platforms" className="py-16 px-6 max-w-5xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-12 relative z-10">
        <span className="font-mono text-brand text-xs tracking-widest uppercase mb-3 block">
          Trade Where You Want
        </span>
        <h2 className="font-bebas text-[clamp(3rem,5vw,5rem)] leading-[0.9] text-white">
          EXECUTION <span className="text-brand">PLATFORMS</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {PLATFORMS.map((platform, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } glass-card rounded-2xl overflow-hidden group hover:border-brand/30 transition-colors bg-black/40`}
          >
            {/* Text Content Area */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 border border-border-default px-2 py-1 mb-6 rounded-sm bg-black/60 w-fit">
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                  {platform.latency} Latency
                </span>
              </div>

              <h3 className="font-bebas text-4xl md:text-5xl text-white mb-3 group-hover:text-brand transition-colors">
                {platform.name}
              </h3>
              <p className="font-syne text-white/60 mb-6 leading-relaxed text-sm md:text-base max-w-sm">
                {platform.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {platform.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-mono text-[9px] md:text-[10px] text-brand border border-brand/30 px-2 py-1 uppercase tracking-widest rounded-sm bg-brand/5 group-hover:bg-brand/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Area */}
            <div className={`w-full md:w-1/2 p-6 flex items-center justify-center bg-gradient-to-br from-brand/5 to-transparent border-t md:border-t-0 md:border-l border-white/5`}>
              <img
                src={platform.image}
                alt={`${platform.name} interface`}
                className="w-full h-auto max-h-[200px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
