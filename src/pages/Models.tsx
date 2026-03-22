import { motion } from 'framer-motion';
import { Target, Shield, Clock, Zap, ArrowRight, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CTABanner } from '../components/CTABanner';
import { ChallengePricing } from '../components/ChallengePricing';
import { ProfitCalculator } from '../components/ProfitCalculator';
import { SupportSection } from '../components/SupportSection';

export function Models() {
    return (
        <div className="min-h-screen bg-black text-white font-syne selection:bg-brand/30 selection:text-white pb-32">

            {/* 1. Cinematic Hero Section */}
            <section className="px-6 max-w-7xl mx-auto mb-20 pt-40 md:pt-48 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8"
                        >
                            <Target className="w-4 h-4 text-brand" />
                            <span className="text-brand font-mono text-xs uppercase tracking-widest font-bold">Account Types</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="font-bebas text-[clamp(4rem,8vw,7rem)] leading-[0.85] text-white tracking-tight drop-shadow-2xl"
                        >
                            CHOOSE YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-300">FUNDING PATH</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="font-syne text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Choose the evaluation path that fits your unique trading style. From lightning-fast 1-step challenges to disciplined multi-phase validations.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="flex-1 relative w-full aspect-square max-w-[500px]"
                    >
                        {/* Glowing abstract background piece */}
                        <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>

                        {/* Floating Hero Widget */}
                        <motion.img
                            src="/models-hero.png"
                            alt="Models Hero Widget"
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_40px_80px_rgba(0,112,243,0.5)]"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. Models Comparison Grid */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 relative">
                    <h2 className="flex flex-row items-center justify-center gap-4 md:gap-6 font-bebas text-[clamp(4rem,8vw,6rem)] text-white tracking-tight leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <img src="/logo.png" alt="Xolo Funding" className="h-12 md:h-16 lg:h-[72px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                        <span>MODELS</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16 max-w-6xl mx-auto">

                    {/* INSTANT FUNDING CARD - Image Left, Text Right */}
                    <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden group hover:border-[rgb(212,175,55)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)] flex flex-col md:flex-row items-center gap-12">
                        {/* Inner Glow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-[3rem]"></div>

                        {/* Static Equal-Sized Image Container */}
                        <div className="w-full md:w-1/2 aspect-square relative flex items-center justify-center z-10">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-[rgb(212,175,55)]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[rgb(212,175,55)]/30 transition-all duration-700 scale-75"></div>

                            <motion.img
                                src="/instant-funding-cash.png"
                                alt="Instant Funding Cash"
                                className="w-full h-full object-contain relative z-20 drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] filter brightness-90 group-hover:brightness-110 transition-all duration-700"
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Text Container */}
                        <div className="w-full md:w-1/2 relative z-20 flex flex-col justify-center text-center md:text-left">
                            <h3 className="font-bebas text-5xl lg:text-7xl text-white tracking-widest leading-[1.0] mb-6 group-hover:text-[rgb(212,175,55)] transition-colors duration-500 drop-shadow-md">
                                INSTANT FUNDING <br /> ACCOUNT
                            </h3>
                            <p className="font-syne text-white/50 text-lg lg:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                                Bypass the validation phase completely. Pay a one-time premium fee to immediately unlock live funded capital and start earning your profit split from day one.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start">
                                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-syne font-bold tracking-wide transition-all group-hover:border-[rgb(212,175,55)]/50 hover:scale-105 active:scale-95">
                                    EXPLORE INSTANT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CHALLENGE ACCOUNT CARD - Text Left, Image Right */}
                    <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden group hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,112,243,0.2)] flex flex-col md:flex-row-reverse items-center gap-12">
                        {/* Inner Glow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-[3rem]"></div>

                        {/* Static Equal-Sized Image Container */}
                        <div className="w-full md:w-1/2 aspect-square relative flex items-center justify-center z-10">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-brand/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand/30 transition-all duration-700 scale-75"></div>

                            <motion.img
                                src="/challenge-vault.png"
                                alt="Premium Challenge Vault"
                                className="w-full h-full object-contain relative z-20 drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] filter brightness-90 group-hover:brightness-110 transition-all duration-700 scale-110 lg:scale-125 translate-y-4"
                                animate={{ y: [15, -15, 15] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </div>

                        {/* Text Container */}
                        <div className="w-full md:w-1/2 relative z-20 flex flex-col justify-center text-center md:text-left">
                            <h3 className="font-bebas text-5xl lg:text-7xl text-white tracking-widest leading-[1.0] mb-6 group-hover:text-brand transition-colors duration-500 drop-shadow-md">
                                CHALLENGE <br /> ACCOUNT
                            </h3>
                            <p className="font-syne text-white/50 text-lg lg:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                                Prove your consistency and risk management. Pass a standard 1, 2, or 3-step evaluation to unlock maximum funded capital with our lowest upfront cost.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start">
                                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-syne font-bold tracking-wide transition-all group-hover:border-brand/50 hover:scale-105 active:scale-95">
                                    START CHALLENGE
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Challenge Pricing Component */}
            <ChallengePricing />

            {/* 4. Profit Calculator ("HOW MUCH CAN YOU MAKE") */}
            <div className="relative">
                <ProfitCalculator />
            </div>

            {/* 5. Support Section ("WE'RE HERE TO HELP") */}
            <SupportSection />

            {/* Final CTA */}
            <CTABanner />

        </div>
    );
}
