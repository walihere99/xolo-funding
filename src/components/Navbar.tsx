import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTradingOpen, setMobileTradingOpen] = useState(false); // New state for mobile dropdown
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileTradingOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 md:px-6 pointer-events-none">
      <nav
        className={cn(
          'w-full max-w-7xl transition-all duration-300 rounded-2xl pointer-events-auto',
          'bg-black/30 backdrop-blur-2xl border border-white/10',
          scrolled ? 'bg-black/80 border-brand/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-2' : 'py-3'
        )}
      >
        <div className="px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Xolo Funding Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 relative">

            {/* 1. TRADING Dropdown Container */}
            <div className="relative group">
              <button className="font-syne text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group-hover:text-brand">
                Trading
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] p-3 min-w-[200px] flex flex-col gap-1 backdrop-blur-xl">
                  {/* Glowing top border indicator */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent"></div>

                  <Link
                    to="/models"
                    className="px-4 py-3 rounded-xl hover:bg-white/[0.04] text-white/80 hover:text-brand transition-colors font-syne text-sm font-semibold flex items-center justify-between group/link"
                  >
                    Models
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-brand" />
                  </Link>
                  <Link
                    to="/rewards"
                    className="px-4 py-3 rounded-xl hover:bg-white/[0.04] text-white/80 hover:text-brand transition-colors font-syne text-sm font-semibold flex items-center justify-between group/link"
                  >
                    Rewards
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-brand" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. About Us */}
            <Link to="/about" className="font-syne text-sm text-white/70 hover:text-white transition-colors">
              About Us
            </Link>

            {/* 3. Challenges */}
            <a href="/#challenges" className="font-syne text-sm text-white/70 hover:text-white transition-colors">
              Challenges
            </a>

            {/* 4. Payouts */}
            <a href="/#payouts" className="font-syne text-sm text-white/70 hover:text-white transition-colors">
              Payouts
            </a>

            {/* 5. FAQ */}
            <a href="/#faq" className="font-syne text-sm text-white/70 hover:text-white transition-colors">
              FAQ
            </a>

            {/* 6. Contact */}
            <Link to="/contact" className="font-syne text-sm text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4 ml-4">
            <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-syne font-bold text-sm tracking-wide hover:bg-white/5 transition-colors duration-300">
              LOGIN
            </button>
            <button className="group relative px-6 py-2.5 bg-white text-black rounded-lg font-syne font-bold text-sm overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10">GET FUNDED</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-3xl border-b border-white/10"
            >
              <div className="flex flex-col px-6 py-6 pb-8 gap-6">

                {/* 1. TRADING Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileTradingOpen(!mobileTradingOpen)}
                    className="w-full font-syne text-lg text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4 flex items-center justify-between"
                  >
                    Trading
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", mobileTradingOpen ? "rotate-180 text-brand" : "")} />
                  </button>

                  <AnimatePresence>
                    {mobileTradingOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-white/[0.02] rounded-xl mt-2 border border-white/5"
                      >
                        <div className="flex flex-col py-2">
                          <Link
                            to="/models"
                            className="font-syne text-base text-white/70 hover:text-brand transition-colors py-3 px-6 flex items-center gap-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Models
                            <ArrowRight className="w-3 h-3 opacity-50" />
                          </Link>
                          <Link
                            to="/rewards"
                            className="font-syne text-base text-white/70 hover:text-brand transition-colors py-3 px-6 flex items-center gap-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Rewards
                            <ArrowRight className="w-3 h-3 opacity-50" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. About Us */}
                <Link
                  to="/about"
                  className="font-syne text-lg text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* 3. Challenges */}
                <a
                  href="/#challenges"
                  className="font-syne text-lg text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Challenges
                </a>

                {/* 4. Payouts */}
                <a
                  href="/#payouts"
                  className="font-syne text-lg text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Payouts
                </a>

                {/* 5. FAQ */}
                <a
                  href="/#faq"
                  className="font-syne text-lg text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>

                {/* 6. Contact */}
                <Link
                  to="/contact"
                  className="font-syne text-lg text-white/80 hover:text-white transition-colors border-b border-white/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 flex flex-col gap-3">
                  <button className="w-full px-6 py-4 rounded-lg border border-white/20 text-white font-syne font-bold text-lg tracking-wide hover:bg-white/5 transition-colors duration-300">
                    LOGIN
                  </button>
                  <button className="w-full group relative px-6 py-4 bg-white text-black rounded-lg font-syne font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative z-10">GET FUNDED</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
