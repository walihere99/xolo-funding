import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, the API call to trigger the reset flow would go here.
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full min-h-screen flex text-white relative bg-[#050505]">
      
      {/* Left Panel: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 pt-32 pb-20 z-10 relative">
        <Link to="/login" className="absolute top-12 left-6 sm:left-12 md:left-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium pr-4 z-20">
          <ArrowLeft size={16} />
          Back to Login
        </Link>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md w-full mx-auto"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header */}
                <div className="mb-10">
                  <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                    Reset <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Password</span>
                  </h1>
                  <p className="text-gray-400 text-lg">Enter your email and we'll send you a secure link to reset your account password.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-gray-300 ml-1 group-focus-within:text-brand transition-colors">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 transition-colors group-focus-within:text-brand">
                        <Mail size={20} />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-all shadow-inner"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!email}
                    whileHover={email ? { scale: 1.01 } : {}}
                    whileTap={email ? { scale: 0.99 } : {}}
                    className={`w-full mt-8 rounded-xl overflow-hidden transition-all ${email ? 'shadow-[0_8px_30px_rgba(2,94,228,0.4)] cursor-pointer' : 'opacity-50 cursor-not-allowed grayscale-[0.5]'}`}
                  >
                    <div className={`w-full py-3.5 px-6 flex items-center justify-center bg-brand text-white ${email ? 'hover:bg-brand/90 transition-colors' : ''}`}>
                      <span className="font-semibold tracking-wide text-[15px]">Send Reset Link</span>
                    </div>
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-brand/10 border border-brand/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(2,94,228,0.2)]">
                  <CheckCircle2 className="w-10 h-10 text-brand" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Check Your Inbox</h2>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
                  We've sent a secure password reset link to <br/><strong className="text-white font-medium">{email}</strong>. Click the link inside to generate a new password.
                </p>
                <Link to="/login" className="inline-block px-8 py-3.5 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
                  Return to Login
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Right Panel: Showcase */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#0a0a0a]">
        {/* Abstract Image Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/auth_showcase.png)' }}
        >
          {/* Faded overlay map */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-brand/5 mix-blend-overlay"></div>
        </div>
      </div>
      
    </div>
  );
}
