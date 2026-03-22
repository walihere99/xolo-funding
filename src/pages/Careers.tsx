import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Zap, Star, Shield, Cpu } from 'lucide-react';

const OPEN_POSITIONS = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Head of Marketing",
    department: "Marketing",
    location: "London / Remote",
    type: "Full-time"
  },
  {
    title: "Customer Support Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Senior Risk Analyst",
    department: "Finance",
    location: "Dubai / Remote",
    type: "Full-time"
  }
];

const VALUES = [
  {
    icon: <Zap className="w-6 h-6 text-[#FFD000]" />,
    title: "Move Fast",
    desc: "We iterate quickly and decisively. Speed is our ultimate competitive advantage in the proprietary trading industry."
  },
  {
    icon: <Shield className="w-6 h-6 text-brand" />,
    title: "Traders First",
    desc: "Every decision from infrastructure to payout models is made with the trader's success and security in mind."
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "Tech-Driven",
    desc: "We leverage bleeding-edge technology to build industry-leading, scalable, and seamless platform experiences."
  },
  {
    icon: <Star className="w-6 h-6 text-purple-400" />,
    title: "Excellence",
    desc: "We hold ourselves to the highest global standards, aiming for perfection in our community and service."
  }
];

export function Careers() {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#050505] text-white">
      
      {/* Background Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyan-400 to-purple-500">Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              We are building the world's most innovative proprietary trading firm. 
              Help us empower traders globally and shape the future of finance.
            </p>
            <a href="#positions" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold tracking-wide transition-all bg-white text-black hover:bg-gray-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              View Open Roles <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400">The core principles driving our explosive growth and tight-knit culture.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div 
          id="positions"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Open Positions</h2>
            <span className="px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold border border-brand/20">
              {OPEN_POSITIONS.length} Roles Available
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {OPEN_POSITIONS.map((job, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer hover:border-brand/40">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">{job.department}</span>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand/90 transition-colors shadow-[0_8px_30px_rgba(2,94,228,0.4)] w-full md:w-auto">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <div className="mt-32 text-center bg-gradient-to-br from-brand/10 via-[#0a0a0a] to-purple-600/10 border border-white/10 rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your perfect role?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We are always on the lookout for exceptional talent globally. If you believe you belong at Xolo Funding, send us an open application.
          </p>
          <a href="mailto:careers@xolofunding.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold tracking-wide transition-all bg-white text-black hover:bg-gray-200">
            Email Us Your CV <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}
