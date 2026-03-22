import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function SupportSection() {
    return (
        <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto relative overflow-visible">
            {/* Global Section Glow underneath everything */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-brand/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

                {/* Left Column: Text & CTA */}
                <div className="flex flex-col mx-auto lg:mx-0 text-center lg:text-left w-full max-w-xl">

                    {/* Decorative Top Accent */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-brand to-transparent mb-8 mx-auto lg:mx-0 rounded-full"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-bebas text-[clamp(4.5rem,8vw,8rem)] leading-[0.85] text-white tracking-widest mb-8 drop-shadow-2xl"
                    >
                        WE'RE HERE <br />
                        TO HELP <span className="text-brand filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">24/7</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-syne text-white/50 text-xl leading-relaxed mb-12 max-w-[480px] mx-auto lg:mx-0"
                    >
                        Check our FAQ for quick answers or contact us anytime. Our elite support team is always ready to assist you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <a href="#faq" className="w-full sm:w-auto group relative px-10 py-5 bg-white text-black rounded-xl font-syne font-bold text-[15px] overflow-hidden transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                READ FAQ <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a href="mailto:support@xolofunding.com" className="w-full sm:w-auto px-10 py-5 glass-card border border-white/10 text-white rounded-xl font-syne font-bold text-[15px] hover:bg-white/5 hover:border-brand/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            CONTACT US
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Massive Widget Image */}
                <div className="relative flex justify-center lg:justify-end w-full lg:scale-110 lg:translate-x-8">
                    {/* Deep Core Glow immediately behind the image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="relative z-10 w-full rounded-2xl"
                    >
                        <div className="filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                            <motion.img
                                src="/support-widget.png"
                                alt="Xolo Funding Support Widget"
                                className="w-full max-w-[800px] h-auto object-contain mx-auto"
                                animate={{
                                    y: [0, -20, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section >
    );
}
