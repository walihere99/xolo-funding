import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Zap, ArrowRight } from 'lucide-react';
import { SupportSection } from '../components/SupportSection';
import { CTABanner } from '../components/CTABanner';
import { Comparison } from '../components/Comparison';

export function AboutUs() {
    return (
        <div className="pt-32 pb-24 overflow-hidden relative">

            {/* 1. Cinematic Hero Section */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    <span className="text-brand font-mono text-xs uppercase tracking-widest font-bold">The Xolo Protocol</span>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="flex-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-bebas text-[clamp(4rem,10vw,8rem)] leading-[0.85] text-white tracking-tight drop-shadow-2xl"
                        >
                            FORGED <br />
                            FOR THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-300">ELITE.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-syne text-white/60 text-xl leading-relaxed mt-8 max-w-xl mx-auto lg:mx-0"
                        >
                            We aren't just another prop firm. Xolo Funding was built by traders, for traders—engineered to provide the highest leverage, tightest spreads, and most aggressive payout structure in the industry.
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

                        {/* Massive Xolo Coin floating hero */}
                        <motion.img
                            src="/whyus.png"
                            alt="Xolo Coin Hero"
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_40px_80px_rgba(0,112,243,0.5)]"
                            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* NEW COMPANY OVERVIEW SECTION */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="flex flex-row items-center justify-center gap-4 md:gap-6 font-bebas text-[clamp(4.5rem,8vw,10rem)] text-white tracking-tight leading-[0.9]">
                        <span>ABOUT</span>
                        <img src="/logo.png" alt="Xolo Funding" className="h-16 md:h-[96px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                    </h2>
                    <p className="font-syne text-white/60 text-lg lg:text-xl mt-8 mb-10 max-w-2xl">
                        Everything you need to know about us
                    </p>
                    <div className="flex justify-center w-full max-w-sm">
                        <a href="/#how-it-works" className="w-full group relative px-8 py-4 bg-white text-black rounded-xl font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Learn more
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Established\nIn 2025",
                            image: "/time.png", // Provided clock asset
                            desc: ""
                        },
                        {
                            title: "100% Own\nTechnology",
                            image: "/server.png", // Provided stacked blocks asset
                            desc: ""
                        },
                        {
                            title: "60+ Industry\nProfessional Team\nMembers",
                            image: "/team.png", // Provided team ring asset
                            desc: ""
                        }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden group hover:border-brand/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,112,243,0.3)] flex flex-col h-[420px] md:h-[480px]"
                        >
                            {/* Inner Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none rounded-[32px]"></div>

                            {/* Subtle Grid / Noise Background */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none rounded-[32px]"></div>

                            {/* Text Top Left */}
                            <div className="p-8 z-20 relative">
                                <h3 className="font-syne font-bold text-2xl md:text-3xl text-white whitespace-pre-line leading-tight group-hover:text-brand transition-colors duration-500 drop-shadow-md">
                                    {card.title}
                                </h3>
                            </div>

                            {/* 3D Asset Bottom Center */}
                            <div className="absolute bottom-[-5%] left-0 w-full h-[75%] flex items-end justify-center z-10 group-hover:scale-110 transition-transform duration-700 ease-out">
                                <img
                                    src={card.image}
                                    alt={card.title.replace('\n', ' ')}
                                    className="w-[90%] h-full object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] filter brightness-90 group-hover:brightness-110 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-700"
                                />
                            </div>

                            {/* Subtle Ambient Glow behind image */}
                            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-brand/10 blur-[60px] pointer-events-none rounded-full group-hover:bg-brand/20 transition-colors duration-700 z-0"></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 2. Mission / Glass Cards */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-tight">OUR TRADING <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-emerald-300">EDGE</span></h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 relative z-10 w-full mb-16">
                    {[
                        {
                            num: "01",
                            image: "/Raw Execution.png",
                            title: "Raw Execution",
                            desc: "Direct market access with zero markups. Our servers are co-located in major financial hubs to ensure sub-millisecond execution.",
                        },
                        {
                            num: "02",
                            image: "/Fort Knox Security.png",
                            title: "Fort Knox Security",
                            desc: "Your profits are ring-fenced. We operate with strict risk-management protocols to ensure every dollar requested is paid out instantly.",
                        },
                        {
                            num: "03",
                            image: "/No Hidden Rules.png",
                            title: "No Hidden Rules",
                            desc: "We don't rely on sneaky drawdown rules to fail you. Trade your strategy, hit the target, and get funded. It's really that simple.",
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="relative p-6 md:p-8 bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl group hover:border-brand/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col items-start w-full md:w-[340px] lg:w-[380px] h-[450px]"
                        >
                            {/* Subtle Grid / Noise Background */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none rounded-3xl"></div>

                            {/* Ghost Number inside Card */}
                            <div className="absolute top-6 right-6 font-bebas text-8xl text-white/[0.03] select-none pointer-events-none group-hover:text-brand/10 transition-colors duration-500">
                                {feature.num}
                            </div>

                            <div className="w-full flex-grow flex items-center justify-center mb-4 relative z-10">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-[260px] object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="font-syne text-[1.4rem] font-bold text-white mb-2 group-hover:text-brand transition-colors relative z-10 mt-auto">
                                {feature.title}
                            </h3>
                            <p className="font-syne text-white/50 leading-relaxed group-hover:text-white/70 transition-colors relative z-10 text-[13px]">
                                {feature.desc}
                            </p>

                            {/* Hover Tint Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NEW COMPARISON SECTION */}
            <Comparison />

            {/* NEW STATISTICS SECTION */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {[
                        { title: "Total Payouts", prefix: "$", value: 12.5, suffix: "M+", decimals: 1, gradient: "from-success to-emerald-300" },
                        { title: "Active Traders", prefix: "", value: 45, suffix: "k+", decimals: 0, gradient: "from-brand to-cyan-300" },
                        { title: "Avg. Payout Time", prefix: "", value: 4, suffix: "hrs", decimals: 0, gradient: "from-yellow-400 to-amber-500" },
                        { title: "Countries Supported", prefix: "", value: 150, suffix: "+", decimals: 0, gradient: "from-purple-400 to-pink-400" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 text-center shadow-lg hover:border-white/10 transition-colors"
                        >
                            <h3 className="font-syne text-white/50 text-xs md:text-sm uppercase tracking-widest font-bold mb-2">{stat.title}</h3>
                            <div className={`font-bebas text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} drop-shadow-lg flex items-center justify-center`}>
                                {stat.prefix}
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    decimals={stat.decimals}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                {stat.suffix}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. The Manifesto */}
            <section className="px-6 max-w-4xl mx-auto text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand/10 blur-[150px] -z-10 pointer-events-none"></div>

                <h2 className="font-bebas text-6xl md:text-8xl text-white mb-8">JOIN THE <br /> <span className="text-brand">REVOLUTION.</span></h2>
                <p className="font-syne text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                    The industry standard isn't good enough anymore. We built Xolo Funding to be the home for aggressive, profitable traders who demand premium infrastructure.
                </p>

                <a href="/#pricing" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-syne font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                    Prove Your Edge
                    <ArrowRight className="w-5 h-5" />
                </a>
            </section>

            <SupportSection />
            <CTABanner />

        </div>
    );
}
