import { motion } from 'framer-motion';
import { ShieldCheck, Wallet, Clock, Zap, FileText, TrendingUp, Award, HelpCircle, Gift, Star, ChevronRight } from 'lucide-react';

const LEFT_FEATURES = [
    { icon: Wallet, title: 'Up to 90% Profit Split' },
    { icon: Clock, title: 'No Time Limits' },
    { icon: Zap, title: 'Instant Payouts' },
    { icon: FileText, title: 'News Trading Allowed' },
];

const RIGHT_FEATURES = [
    { icon: TrendingUp, title: 'Scale to $2M', desc: 'Consistent profitable traders' },
    { icon: Award, title: 'Payout Guarantee', desc: 'Processed within 24 hours' },
    { icon: HelpCircle, title: 'No Hidden Rules', desc: 'Check FAQ for details' },
    { icon: Gift, title: 'Xolo Points', desc: 'Loyalty rewarded' },
];

export function WhyTradersChooseUs() {
    return (
        <section className="py-16 md:py-24 px-6 max-w-[1400px] mx-auto relative">
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
                <h2 className="font-bebas text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] text-white tracking-wide">
                    WHY TRADERS CHOOSE <br className="md:hidden" />
                    <span className="text-brand">XOLO FUNDING</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center relative z-10 w-full max-w-6xl mx-auto">

                {/* Left Column */}
                <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                    {LEFT_FEATURES.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-center gap-4 glass-card rounded-2xl p-4 md:p-5 group cursor-default h-[76px] md:h-[84px]"
                        >
                            <feature.icon className="w-5 h-5 text-brand group-hover:scale-110 transition-transform flex-shrink-0" />
                            <span className="font-syne text-white/90 font-bold text-sm md:text-base tracking-wide">
                                {feature.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Center Column - Widget Image */}
                <div className="relative flex justify-center items-center w-full py-10 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="relative w-full max-w-[320px] md:max-w-[400px]"
                    >
                        {/* Soft background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand/30 rounded-full blur-[80px] animate-pulse pointer-events-none -z-10"></div>

                        <motion.img
                            src="/whyus.png"
                            alt="Xolo Funding Emblem"
                            className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(2,94,228,0.3)] relative z-10"
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                    {RIGHT_FEATURES.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex flex-col justify-center glass-card rounded-2xl p-4 md:p-5 group cursor-default h-[76px] md:h-[84px]"
                        >
                            <div className="flex items-center gap-3 mb-1">
                                <feature.icon className="w-4 h-4 text-brand group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span className="font-syne text-white/90 font-bold text-sm md:text-base tracking-wide leading-none">
                                    {feature.title}
                                </span>
                            </div>
                            <span className="font-syne text-white/50 text-xs md:text-sm pl-7">
                                {feature.desc}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Area */}
            <div className="flex flex-col items-center mt-20 relative z-10">
                <h3 className="font-bebas text-3xl md:text-5xl text-white mb-8 tracking-wider text-center leading-[1.1]">
                    TRADE UP TO <span className="text-brand">$2M</span>, GET PAID <br className="md:hidden" />
                    <span className="text-white">100% ON DEMAND</span>
                </h3>

                <button className="w-full max-w-[280px] group relative px-8 py-5 bg-white text-black rounded-xl font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-8">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative flex items-center justify-center gap-3">
                        GET FUNDED <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>

                <div className="flex items-center gap-2 text-brand">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-mono uppercase tracking-wider font-bold text-xs mt-0.5">4.8 Stars from 5k verified Reviews</span>
                </div>
            </div>
        </section>
    );
}
