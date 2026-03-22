import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowRight, Send } from 'lucide-react';
import { CTABanner } from '../components/CTABanner';

export function ContactUs() {
    return (
        <div className="min-h-screen bg-black text-white font-syne selection:bg-brand/30 selection:text-white pb-32">
            {/* 1. Cinematic Hero Section */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-40 md:pt-48 pb-16 overflow-hidden">
                {/* Darker Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="font-mono text-brand text-sm md:text-base tracking-[0.3em] uppercase mb-6 block drop-shadow-[0_0_15px_rgba(2,94,228,0.5)]">
                            We're Here For You
                        </span>
                        <h1 className="font-bebas text-[clamp(4rem,10vw,10rem)] leading-[0.85] text-white tracking-tight drop-shadow-2xl mb-8">
                            GET IN <span className="text-brand">TOUCH</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="font-syne text-white/60 text-lg md:text-2xl leading-relaxed max-w-2xl text-center"
                    >
                        Have a question about our platforms, evaluation rules, or your account? Our elite support team is online 24/7.
                    </motion.p>
                </div>

                {/* Subtle Grid Background */}
                <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black)] -z-10 pointer-events-none"></div>
            </section>

            {/* 2. Contact Grid Section */}
            <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Side - Contact Info Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <h3 className="font-bebas text-4xl text-white mb-4">Direct Lines</h3>

                        {/* Info Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="glass-card rounded-2xl p-6 md:p-8 flex items-start gap-4 group hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-300">
                                <Mail className="w-6 h-6 text-brand" />
                            </div>
                            <div>
                                <h4 className="font-syne font-bold text-white text-lg mb-1">Email Support</h4>
                                <p className="font-syne text-white/50 text-sm mb-3">Guaranteed response within 2 hours during market hours.</p>
                                <a href="mailto:support@xolofunding.com" className="font-mono text-brand text-sm hover:underline tracking-wide">support@xolofunding.com</a>
                            </div>
                        </motion.div>

                        {/* Info Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="glass-card rounded-2xl p-6 md:p-8 flex items-start gap-4 group hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-300">
                                <MessageCircle className="w-6 h-6 text-brand" />
                            </div>
                            <div>
                                <h4 className="font-syne font-bold text-white text-lg mb-1">Live Chat</h4>
                                <p className="font-syne text-white/50 text-sm mb-3">Speak directly with our team via the widget in the bottom right corner.</p>
                                <span className="font-mono text-success text-xs border border-success/30 bg-success/10 px-2 py-1 rounded inline-block">ONLINE 24/7</span>
                            </div>
                        </motion.div>

                        {/* Info Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="glass-card rounded-2xl p-6 md:p-8 flex items-start gap-4 group hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-300">
                                <MapPin className="w-6 h-6 text-brand" />
                            </div>
                            <div>
                                <h4 className="font-syne font-bold text-white text-lg mb-1">Headquarters</h4>
                                <p className="font-syne text-white/50 text-sm">Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Premium Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="lg:col-span-7 bg-[#0a0a0a] backdrop-blur-3xl border top-border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                        {/* Form Inner Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="font-bebas text-4xl text-white mb-2 relative z-10">Send a Message</h3>
                        <p className="font-syne text-white/50 mb-8 relative z-10 text-sm md:text-base">Fill out the form below and we will get back to you as soon as possible.</p>

                        <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-syne text-white/70 text-sm font-bold ml-1 block">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white font-syne focus:outline-none focus:border-brand focus:bg-white/[0.06] transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-syne text-white/70 text-sm font-bold ml-1 block">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white font-syne focus:outline-none focus:border-brand focus:bg-white/[0.06] transition-all placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-syne text-white/70 text-sm font-bold ml-1 block">Department</label>
                                <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white font-syne focus:outline-none focus:border-brand focus:bg-white/[0.06] transition-all appearance-none outline-none">
                                    <option className="bg-[#0a0a0a] text-white">General Inquiry</option>
                                    <option className="bg-[#0a0a0a] text-white">Technical Support</option>
                                    <option className="bg-[#0a0a0a] text-white">Billing & Payouts</option>
                                    <option className="bg-[#0a0a0a] text-white">Partnerships</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-syne text-white/70 text-sm font-bold ml-1 block">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="How can we help you today?"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white font-syne focus:outline-none focus:border-brand focus:bg-white/[0.06] transition-all placeholder:text-white/20 resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full mt-2 group relative px-8 py-4.5 bg-white text-black rounded-xl font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    Send Message <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>

            {/* Reuse standard CTA Banner at bottom */}
            <CTABanner />

        </div>
    );
}
