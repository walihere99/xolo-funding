import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Award, Gift, Star, ArrowRight, CheckCircle2, Crown, Zap, ShieldCheck } from 'lucide-react';
import { CTABanner } from '../components/CTABanner';

const SCALING_TIERS = [
    { level: 'Level 1', target: '10%', capital: '+25%', max: '$2,000,000' },
    { level: 'Level 2', target: '10%', capital: '+25%', max: '$2,000,000' },
    { level: 'Level 3', target: '10%', capital: '+25%', max: '$2,000,000' },
    { level: 'Level 4', target: '10%', capital: '+25%', max: '$2,000,000' },
];

export function Rewards() {
    return (
        <div className="min-h-screen bg-black text-white font-syne selection:bg-brand/30 selection:text-white pb-32">

            {/* 1. Split Layout Hero Section */}
            <section className="px-6 max-w-7xl mx-auto mb-16 pt-40 md:pt-48 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="flex-1 relative z-10 flex flex-col items-center lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8"
                        >
                            <Crown className="w-4 h-4 text-brand" />
                            <span className="text-brand font-mono text-xs uppercase tracking-widest font-bold">Elite Perks Program</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="font-bebas text-[clamp(4rem,9vw,8rem)] leading-[0.85] text-white tracking-tight drop-shadow-2xl"
                        >
                            EXCLUSIVE <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-300">REWARDS</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="font-syne text-white/60 text-lg md:text-xl leading-relaxed mt-8 max-w-xl mx-auto lg:mx-0"
                        >
                            We don't just fund traders, we reward greatness. From up to 100% profit splits to exclusive physical merchandise and capital scaling up to $2M.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="flex-1 relative w-full aspect-square max-w-[500px]"
                    >
                        <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full pointer-events-none -z-10 mt-10"></div>
                        <motion.img
                            src="/rewards-hero.png"
                            alt="Rewards Hero"
                            className="w-full h-[110%] object-contain relative z-10 transition-transform hover:scale-105 duration-700 hover:rotate-2 drop-shadow-[0_0_50px_rgba(2,94,228,0.2)]"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* NEW PEDESTAL GRID SECTION */}
            <section className="px-5 max-w-7xl mx-auto mb-32 relative z-10 w-full pt-4 md:pt-10">
                <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
                    <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest drop-shadow-2xl mb-4">OUR PROGRESS</h2>
                    <p className="font-syne text-white/50 text-base md:text-lg max-w-md">Our achievements speak for themselves. We are building the future of proprietary trading, one milestone at a time.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-8">

                    {/* Card 1: Rewards */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#050505] border border-white/[0.04] hover:border-brand/30 rounded-[2rem] p-8 pb-12 relative flex flex-col items-center justify-end min-h-[420px] group transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                    >
                        {/* Pedestal Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-brand/10 via-brand/5 to-transparent rounded-[2rem] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-brand rounded-t-full shadow-[0_0_20px_rgba(2,94,228,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Floating Image breaking out of top */}
                        <div className="absolute -top-20 md:-top-24 left-0 w-full flex justify-center h-[280px] md:h-[320px] pointer-events-none z-20">
                            <motion.img
                                src="/Reward.png"
                                alt="Paid Rewards Coins"
                                className="h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="relative z-10 text-center mt-48 w-full">
                            <h3 className="font-bebas text-6xl lg:text-[5.5rem] text-white tracking-widest leading-none mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">$2.3M</h3>
                            <p className="font-mono text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">Paid in rewards</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Trophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#050505] border border-white/[0.04] hover:border-brand/30 rounded-[2rem] p-8 pb-12 relative flex flex-col items-center justify-end min-h-[420px] group transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.8)] md:-translate-y-12"
                    >
                        {/* Pedestal Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-brand/10 via-brand/5 to-transparent rounded-[2rem] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-brand rounded-t-full shadow-[0_0_20px_rgba(2,94,228,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="absolute -top-20 md:-top-24 left-0 w-full flex justify-center h-[280px] md:h-[320px] pointer-events-none z-20">
                            <motion.img
                                src="/trophy.png"
                                alt="Average Reward"
                                className="h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </div>

                        <div className="relative z-10 text-center mt-48 w-full">
                            <h3 className="font-bebas text-6xl lg:text-[5.5rem] text-white tracking-widest leading-none mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">$2,180</h3>
                            <p className="font-mono text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">Average Reward</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Globe */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#050505] border border-white/[0.04] hover:border-brand/30 rounded-[2rem] p-8 pb-12 relative flex flex-col items-center justify-end min-h-[420px] group transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                    >
                        {/* Pedestal Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-brand/10 via-brand/5 to-transparent rounded-[2rem] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-brand rounded-t-full shadow-[0_0_20px_rgba(2,94,228,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="absolute -top-20 md:-top-24 left-0 w-full flex justify-center h-[280px] md:h-[320px] pointer-events-none z-20">
                            <motion.img
                                src="/globe.png"
                                alt="Worldwide"
                                className="h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            />
                        </div>

                        <div className="relative z-10 text-center mt-48 w-full">
                            <h3 className="font-bebas text-6xl lg:text-[5.5rem] text-white tracking-widest leading-none mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">48K+</h3>
                            <p className="font-mono text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">Traders Worldwide</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* XOLO FUNDING GUARANTEES SECTION */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10 w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="flex flex-row items-center justify-center gap-4 md:gap-6 font-bebas text-[clamp(3.5rem,6vw,6rem)] text-white tracking-tight leading-[0.9]">
                        <img src="/logo.png" alt="Xolo Funding" className="h-12 md:h-[72px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                        <span>GUARANTEES</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {/* Card 1: Profit Split */}
                    <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-8 md:p-10 pb-0 relative overflow-hidden flex flex-col justify-between min-h-[460px] md:min-h-[520px] group transition-all hover:bg-[#121212]">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none"></div>
                        <div className="relative z-10 h-[160px]"> {/* Fixed height container for perfect text alignment */}
                            <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-3">100% Profit<br />Split Available</h3>
                            <p className="font-syne text-white/60 text-sm md:text-base max-w-[220px] leading-relaxed">
                                Maximize your potential. Keep up to 100% of all profits generated in your funded stage.
                            </p>
                        </div>
                        <div className="relative z-10 w-full flex-1 flex items-end justify-center mt-8">
                            <motion.img
                                src="/coins.png"
                                alt="Profit Split Coins"
                                className="w-[100%] max-w-[360px] object-contain drop-shadow-[0_20px_40px_rgba(234,179,8,0.15)] origin-center"
                                animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    {/* Card 2: Reward Guarantee */}
                    <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-8 md:p-10 pb-0 relative overflow-hidden flex flex-col justify-between min-h-[460px] md:min-h-[520px] group transition-all hover:bg-[#121212]">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none"></div>
                        <div className="relative z-10 h-[160px]"> {/* Fixed height container for perfect text alignment */}
                            <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-3">Reward<br />Guarantee</h3>
                            <p className="font-syne text-white/60 text-sm md:text-base max-w-[220px] leading-relaxed">
                                Get Paid within 2 business days or we pay an extra $1000 directly to you.
                            </p>
                        </div>
                        <div className="relative z-10 w-full flex-1 flex items-end justify-center mt-8">
                            <motion.img
                                src="/safe.png"
                                alt="Reward Guarantee Safe"
                                className="w-[85%] max-w-[300px] object-contain drop-shadow-[0_20px_40px_rgba(2,94,228,0.15)] origin-bottom group-hover:-translate-y-4 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Card 3: Paid on Demand */}
                    <div className="bg-[#0e0e0e] border border-white/5 rounded-3xl p-8 md:p-10 pb-0 relative overflow-hidden flex flex-col justify-between min-h-[460px] md:min-h-[520px] group transition-all hover:bg-[#121212]">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none"></div>
                        <div className="relative z-10 h-[160px]"> {/* Fixed height container for perfect text alignment */}
                            <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-3">Paid on Demand<br />Available</h3>
                            <p className="font-syne text-white/60 text-sm md:text-base max-w-[220px] leading-relaxed">
                                Experience true financial freedom with an on-demand payout system anytime you generate rewards.
                            </p>
                        </div>
                        <div className="relative z-10 w-full flex-1 flex items-end justify-center mt-8">
                            <motion.img
                                src="/Lightning Card.png"
                                alt="Paid on Demand Lightning Card"
                                className="w-[105%] max-w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.05)] origin-bottom translate-y-8 group-hover:-translate-y-2 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Payout Masterpiece */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10 w-full">
                <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                    {/* Background Ambient Orbs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
                                <span className="text-brand">100% On-Demand</span> Payouts
                            </h2>
                            <p className="font-syne text-white/60 text-lg leading-relaxed max-w-lg">
                                Keep up to 100% of your generated profits. Once you are funded, you can request your payout at any time—no waiting 14 or 30 days like the rest of the industry.
                            </p>
                            <ul className="flex flex-col gap-4 mt-4">
                                {[
                                    'Bi-weekly default payout schedule',
                                    'On-demand payouts available',
                                    'Processed within 24-48 hours',
                                    'Crypto or Bank Wire transfer options'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-syne text-white/80">
                                        <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden group/image bg-[#030303] border border-white/[0.08] flex items-center justify-center shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]"
                        >
                            {/* Subtle Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0"></div>
                            
                            {/* Strong Central Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,94,228,0.2)_0%,transparent_60%)] group-hover/image:bg-[radial-gradient(circle_at_center,rgba(2,94,228,0.3)_0%,transparent_60%)] transition-colors duration-700 pointer-events-none z-0"></div>

                            {/* Floating Notifications Stack */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center z-10 p-6 md:p-12">
                                {/* Top Notification (Faded/Background) */}
                                <motion.img
                                    src="/notification.png"
                                    alt="Payout Notification 1"
                                    className="w-[85%] md:w-[75%] max-w-[400px] object-contain opacity-40 blur-[3px] absolute translate-y-[-80px] md:translate-y-[-100px] scale-[0.85] mix-blend-screen drop-shadow-xl"
                                    animate={{ y: [-80, -95, -80] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                    style={{ y: -80 }}
                                />

                                {/* Middle Notification (Slightly Faded) */}
                                <motion.img
                                    src="/notification.png"
                                    alt="Payout Notification 2"
                                    className="w-[90%] md:w-[85%] max-w-[450px] object-contain opacity-70 blur-[1px] absolute translate-y-[-30px] md:translate-y-[-40px] scale-[0.9] mix-blend-screen drop-shadow-2xl"
                                    animate={{ y: [-30, -42, -30] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    style={{ y: -30 }}
                                />

                                {/* Hero Bottom Notification (Crystal Clear) */}
                                <motion.div 
                                    className="absolute w-full flex justify-center translate-y-[40px] md:translate-y-[50px] z-20 group-hover/image:scale-110 transition-transform duration-700 ease-out"
                                    style={{ y: 40 }}
                                >
                                    <div className="absolute inset-0 bg-brand/30 blur-[40px] rounded-full sm:scale-75 z-0" />
                                    <motion.img
                                        src="/notification.png"
                                        alt="Payout Notification 3"
                                        className="w-[95%] md:w-[95%] max-w-[500px] object-contain opacity-100 relative z-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* 4. Xolo Points & Merchandise */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="flex flex-col gap-8 order-2 lg:order-1">
                            <div>
                                <span className="font-mono text-brand text-sm tracking-widest uppercase flex items-center gap-2 mb-4">
                                    <Gift className="w-4 h-4" /> Loyalty Program
                                </span>
                                <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-4">
                                    XOLO POINTS <span className="text-white/40">& MERCH</span>
                                </h2>
                                <p className="font-syne text-white/60 text-lg leading-relaxed max-w-lg">
                                    Every time you purchase a challenge or generate a payout, you earn Xolo Points. Trade them in for extreme value across our ecosystem.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 mt-2">
                                <div className="bg-[#0f0f0f] hover:bg-[#151515] transition-colors border border-white/5 p-5 rounded-2xl flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <ShieldCheck className="w-6 h-6 text-brand" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-syne font-bold text-white text-lg">Free Accounts</h4>
                                        <p className="font-syne text-white/50 text-sm">Redeem points for completely free evaluation challenges.</p>
                                    </div>
                                </div>
                                <div className="bg-[#0f0f0f] hover:bg-[#151515] transition-colors border border-white/5 p-5 rounded-2xl flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <Star className="w-6 h-6 text-brand" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-syne font-bold text-white text-lg">Xolo Apparel</h4>
                                        <p className="font-syne text-white/50 text-sm">Claim exclusive physical gear, hoodies, and premium caps.</p>
                                    </div>
                                </div>
                                <div className="bg-[#0f0f0f] hover:bg-[#151515] transition-colors border border-white/5 p-5 rounded-2xl flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <Crown className="w-6 h-6 text-brand" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-syne font-bold text-white text-lg">VIP Event Access</h4>
                                        <p className="font-syne text-white/50 text-sm">Unlock invites to our private trading retreats and seminars.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Merch Graphics Box */}
                        <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-[#050505] border border-white/[0.04] flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.8)] group transition-colors duration-700 hover:border-brand/30">
                            {/* Background ambient lighting */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,transparent_60%)] pointer-events-none z-0 group-hover:bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.25)_0%,transparent_60%)] transition-all duration-700"></div>

                            {/* Floating Loot Box */}
                            <motion.div
                                className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8"
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/loot-box.png"
                                    alt="Xolo Loyalty Vault"
                                    className="w-[90%] md:w-[85%] max-w-[450px] object-contain drop-shadow-[0_30px_50px_rgba(234,179,8,0.3)] group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                                />

                                <div className="absolute bottom-8 text-center w-full z-20">
                                    <h3 className="font-bebas text-4xl text-white tracking-widest drop-shadow-lg mb-1">LOYALTY VAULT</h3>
                                    <p className="font-mono text-brand text-sm uppercase tracking-[0.2em] font-bold">Unlock Premium Assets</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Certificates Banner */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="border border-brand/20 bg-brand/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-[0_0_50px_rgba(2,94,228,0.1)]">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bebas text-4xl text-white flex items-center justify-center md:justify-start gap-4">
                            <Award className="w-8 h-8 text-brand" /> Certificates of Excellence
                        </h3>
                        <p className="font-syne text-white/60 text-lg max-w-xl">
                            Upon reaching payout milestones, receive high-quality verified digital certificates to prove your track record to the world.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="whitespace-nowrap group relative px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-syne font-bold transition-all">
                            View Example Certificate
                        </button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTABanner />

        </div>
    );
}
