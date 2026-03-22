import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, TrendingUp, Globe2 } from 'lucide-react';
import { useState } from 'react';

export function Affiliates() {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full min-h-screen pt-32 pb-20 relative overflow-hidden flex flex-col items-center justify-center bg-[#050505] text-white">
      {/* Background decorations specific to Affiliates */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(2,94,228,0.2)]"
          >
            <Sparkles size={16} />
            Partner Program
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Xolo Affiliates<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-purple-400 to-cyan-400">Coming Soon</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
          >
            We are building the proprietary trading industry's most rewarding and transparent affiliate program. 
            Earn industry-leading commissions by referring talented traders to Xolo Funding.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email for early access" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-white placeholder-gray-500 shadow-inner"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 rounded-xl font-bold tracking-wide transition-all bg-brand text-white hover:bg-brand/90 shadow-[0_8px_30px_rgba(2,94,228,0.4)] whitespace-nowrap flex items-center justify-center gap-2"
            >
              Notify Me <ArrowRight size={18} />
            </button>
          </motion.form>
        </div>

        {/* Feature Preview Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10"
        >
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-[#FFD000]" />,
              title: "High Commissions",
              desc: "Earn lucrative revenue splits on all referrals, ensuring a scalable income stream."
            },
            {
              icon: <Globe2 className="w-8 h-8 text-cyan-400" />,
              title: "Global Reach",
              desc: "Promote Xolo Funding globally with custom, high-converting localized marketing assets."
            },
            {
              icon: <Users className="w-8 h-8 text-purple-400" />,
              title: "Partner Dashboard",
              desc: "Direct access to a transparent dashboard tracking clicks, sub-affiliates, and real-time payouts."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
