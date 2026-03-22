import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ChevronDown, Lock } from 'lucide-react';

const ACCOUNT_SIZES = [5000, 10000, 25000, 50000, 100000, 200000];

export function ProfitCalculator() {
    const [accountSize, setAccountSize] = useState(100000);
    const [profitRate, setProfitRate] = useState(10); // Percentage
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const monthlyProfit = accountSize * (profitRate / 100);

    return (
        <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto relative overflow-visible">
            {/* Global Background Glow */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

                {/* Left Column: Typography & Floating Coins */}
                <div className="flex flex-col mx-auto lg:mx-0 text-center lg:text-left w-full h-full justify-between relative">

                    <div className="mb-20 lg:mb-0 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                        >
                            <Calculator className="w-4 h-4 text-brand" />
                            <span className="text-white font-mono text-xs uppercase tracking-widest font-bold">Calculate Your Profits</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-bebas text-[clamp(4.5rem,8vw,8rem)] leading-[0.85] text-white tracking-tight drop-shadow-2xl"
                        >
                            HOW MUCH <br />
                            CAN YOU <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">MAKE?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-syne text-white/50 text-xl leading-relaxed mt-6 max-w-[400px] mx-auto lg:mx-0"
                        >
                            Slide to calculate your potential payouts. Trade up to $200,000 in simulated capital and keep 100% of your first profits.
                        </motion.p>
                    </div>

                    {/* Decorative Floating Coins (Bottom Left) */}
                    <div className="hidden lg:block absolute -bottom-12 -left-20 w-[600px] h-[250px] pointer-events-none z-10">
                        <motion.img
                            src="/whyus.png"
                            alt="Xolo Coin"
                            className="absolute top-10 left-10 w-48 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                            animate={{ y: [0, -15, 0], rotate: [-10, -5, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src="/whyus.png"
                            alt="Xolo Coin"
                            className="absolute bottom-0 left-40 w-32 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] brightness-75"
                            animate={{ y: [0, -10, 0], rotate: [15, 20, 15] }}
                            transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src="/whyus.png"
                            alt="Xolo Coin"
                            className="absolute top-0 right-10 w-40 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] blur-[2px] opacity-70"
                            animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
                            transition={{ duration: 7, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                {/* Right Column: Calculator Glass Card */}
                <div className="relative flex justify-center lg:justify-end w-full">
                    {/* Deep Core Glow immediately behind the calculator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative z-10 w-full max-w-[500px] bg-black/80 backdrop-blur-3xl border border-white/20 rounded-[2rem] p-8 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                    >
                        {/* Guaranteed Lock Badge */}
                        <div className="flex items-center gap-2 mb-10 opacity-70">
                            <Lock className="w-4 h-4 text-white" />
                            <span className="text-white font-syne font-bold text-sm">Reward Guaranteed</span>
                        </div>

                        {/* Account Size Selector */}
                        <div className="mb-10 relative z-30">
                            <label className="block text-white/50 font-syne text-sm mb-3">Account Size</label>

                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`w-full flex items-center justify-between bg-white/[0.03] border transition-all duration-300 rounded-xl p-4 text-white font-bebas text-2xl ${isDropdownOpen
                                        ? 'border-brand shadow-[0_0_20px_rgba(0,112,243,0.3)]'
                                        : 'border-white/10 hover:border-brand/50 hover:shadow-[0_0_15px_rgba(0,112,243,0.2)]'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm border border-brand/50 font-sans">$</div>
                                        {accountSize.toLocaleString()}
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 w-full mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-40">
                                        {ACCOUNT_SIZES.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => {
                                                    setAccountSize(size);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="w-full text-left px-5 py-4 text-white font-bebas text-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                            >
                                                ${size.toLocaleString()}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Profit Rate Slider */}
                        <div className="mb-12 relative z-20">
                            <div className="flex justify-between items-end mb-4">
                                <label className="block text-white/50 font-syne text-sm">Profit Rate</label>
                                <span className="text-white font-bebas text-2xl">{profitRate}%</span>
                            </div>

                            <div className="relative w-full h-2.5 bg-white/10 rounded-full shadow-inner">
                                {/* Filled Track */}
                                <div
                                    className="absolute top-0 left-0 h-full bg-brand rounded-full shadow-[0_0_20px_rgba(0,112,243,0.8)]"
                                    style={{ width: `${(profitRate / 20) * 100}%` }}
                                ></div>
                                {/* Slider Thumb container invisible overlay for clicking */}
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    value={profitRate}
                                    onChange={(e) => setProfitRate(Number(e.target.value))}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                {/* Visual Thumb */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-white to-white/80 border-2 border-brand rounded-full shadow-[0_0_25px_rgba(0,112,243,0.8)] pointer-events-none transition-all flex items-center justify-center"
                                    style={{ left: `calc(${(profitRate / 20) * 100}% - 14px)` }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand/50 blur-[1px]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Results Row */}
                        <div className="flex items-end justify-between mb-10">
                            <div className="flex items-end gap-2">
                                <span className="font-bebas text-6xl md:text-7xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-success to-emerald-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.6)] filter">
                                    ${monthlyProfit.toLocaleString()}
                                </span>
                                <span className="font-syne text-sm text-white/40 mb-1">/ Month</span>
                            </div>

                            <div className="bg-brand/10 text-brand border border-brand/20 px-3 py-1.5 rounded text-xs font-bold font-syne uppercase tracking-wider">
                                100% Profit Split
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a href="#pricing" className="group relative w-full block px-8 py-5 bg-white text-black text-center rounded-xl font-syne font-bold text-[16px] tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative z-10">START EARNING</span>
                        </a>

                        <div className="text-center mt-6 text-white/30 text-xs font-syne">
                            You're not liable for any losses.
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
