import { motion } from 'framer-motion';
import { Percent, Trophy, Cpu, RefreshCcw, ShieldCheck, Zap, Key, Tag, Check, X, ArrowRight } from 'lucide-react';

const COMPARISON_DATA = [
    { name: 'Profit Split', icon: Percent, xolo: '100%', industry: '80%' },
    { name: 'Rewards', icon: Trophy, xolo: 'On Demand', industry: '14 Days' },
    { name: 'Own Tech', icon: Cpu, xolo: true, industry: false },
    { name: 'Refunds', icon: RefreshCcw, xolo: true, industry: false },
    { name: 'Reward Guarantee', icon: ShieldCheck, xolo: true, industry: false },
    { name: 'Instant Funding', icon: Zap, xolo: true, industry: false },
    { name: 'Own MT5 License', icon: Key, xolo: true, industry: false },
    { name: '$100k Account Price', icon: Tag, xolo: '$398', industry: '$550' },
];

export function Comparison() {
    return (
        <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center mb-16 relative">
                {/* Ambient glow behind heading */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

                <span className="font-mono text-brand text-sm tracking-widest uppercase mb-4 block">
                    Superior Edge
                </span>
                <h2 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-white tracking-tight">
                    HOW WE <span className="text-brand">COMPARE</span>
                </h2>
                <p className="font-syne text-white/50 text-lg md:text-xl mt-6 max-w-lg">
                    We engineered the ultimate environment for the greatest traders, leaving the industry standard behind.
                </p>
            </div>

            <div className="w-full bg-black/40 backdrop-blur-3xl border top-border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-visible">
                {/* Inner Table Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

                <div className="relative z-10">
                    {/* Header Row */}
                    <div className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-3 items-center mb-6 pb-6 border-b border-white/5 relative z-10">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 flex justify-center">
                            <img src="/logo.png" alt="Xolo Funding" className="h-7 md:h-12 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform" />
                        </div>
                        <div className="col-span-1 flex justify-center text-center">
                            <span className="font-syne font-bold text-white/80 text-[12px] md:text-lg tracking-wide leading-tight">Industry<br className="md:hidden" /> Standard</span>
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col gap-3">
                        {COMPARISON_DATA.map((row, i) => {
                            const Icon = row.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-3 items-center bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-2xl p-3 md:p-5 transition-all duration-300 group hover:scale-[1.01]"
                                >
                                    <div className="col-span-1 flex items-center gap-2 md:gap-4">
                                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-white/50 group-hover:text-brand transition-colors" />
                                        </div>
                                        <span className="font-syne text-white/90 text-[11px] sm:text-xs md:text-sm font-bold md:whitespace-nowrap">{row.name}</span>
                                    </div>

                                    <div className="col-span-1 flex justify-center text-center font-bold font-syne text-[13px] md:text-lg text-brand drop-shadow-[0_0_15px_rgba(2,94,228,0.5)]">
                                        {typeof row.xolo === 'boolean' ? (
                                            row.xolo ? <Check className="w-5 h-5 md:w-6 md:h-6 text-brand" strokeWidth={3} /> : <X className="w-5 h-5 md:w-6 md:h-6 text-white/30" strokeWidth={3} />
                                        ) : (
                                            <span dangerouslySetInnerHTML={{ __html: row.xolo.replace('On Demand', 'On<br class="md:hidden"/> Demand') }} />
                                        )}
                                    </div>

                                    <div className="col-span-1 flex justify-center text-center font-bold font-syne text-[13px] md:text-lg text-white/40 group-hover:text-white/60 transition-colors">
                                        {typeof row.industry === 'boolean' ? (
                                            row.industry ? <Check className="w-5 h-5 md:w-6 md:h-6 text-white/40" strokeWidth={3} /> : <X className="w-5 h-5 md:w-6 md:h-6 text-white/20" strokeWidth={3} />
                                        ) : (
                                            <span dangerouslySetInnerHTML={{ __html: row.industry.replace('14 Days', '14<br class="md:hidden"/> Days') }} />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <a href="/#how-it-works" className="w-full max-w-[280px] group relative px-8 py-4 bg-white text-black rounded-xl font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                        Get Funded
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
            </div>
        </section>
    );
}
