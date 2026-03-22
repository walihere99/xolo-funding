import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full min-h-screen flex text-white relative bg-[#050505]">
      
      {/* Left Panel: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 pt-32 pb-20 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md w-full mx-auto"
        >
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
              Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Back</span>
            </h1>
            <p className="text-gray-400 text-lg">Enter your details to access your dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Social Logins */}
            <div className="flex gap-4">
              <button type="button" className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor"><path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"/></svg>
                Google
              </button>
            </div>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-xs text-gray-500 font-medium tracking-wide uppercase">Or continue with email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

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

            {/* Password Field */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-gray-300 group-focus-within:text-brand transition-colors">Password</label>
                <a href="#" className="text-xs text-brand hover:text-brand/80 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 transition-colors group-focus-within:text-brand">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-all shadow-inner"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-8 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(2,94,228,0.4)] transition-all"
            >
              <div className="w-full py-3.5 px-6 flex items-center justify-center bg-brand text-white hover:bg-brand/90 transition-colors">
                <span className="font-semibold tracking-wide text-[15px]">Sign In</span>
              </div>
            </motion.button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white font-medium hover:text-brand transition-colors hover:underline underline-offset-4">
              Create an account
            </Link>
          </p>
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

        {/* Floating Glassmorphism Statistic Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-20 right-20 z-10 p-6 rounded-3xl backdrop-blur-3xl bg-black/40 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] max-w-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-purple-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <div>
              <p className="text-white font-semibold flex items-center gap-2">
                Join 50,000+ Traders
              </p>
              <p className="text-gray-400 text-xs">Getting payouts globally</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand to-cyan-400 w-3/4"></div>
            </div>
            <p className="text-xs text-gray-300 font-medium">Average payout time: <span className="text-brand">Under 24h</span></p>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}
