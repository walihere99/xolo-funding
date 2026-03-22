import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ShieldCheck, ChevronDown, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCountries, getCountryCallingCode, isValidPhoneNumber, CountryCode } from 'libphonenumber-js';

const COUNTRY_LIST = getCountries()
  .map(country => ({
    code: country,
    dial: `+${getCountryCallingCode(country)}`
  }))
  .sort((a, b) => a.code.localeCompare(b.code));

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>('PK');
  const [phoneError, setPhoneError] = useState('');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validatePhone = () => {
    if (!phone) {
      setPhoneError('Phone number is required');
      return false;
    }

    let cleanNumber = phone.replace(/[^0-9+]/g, '');
    
    // Custom check for specific national rules (e.g., PK permits 10-digit without '0' and 11-digit with '0')
    if (selectedCountry === 'PK' && cleanNumber.length === 10 && !cleanNumber.startsWith('0')) {
      cleanNumber = '0' + cleanNumber;
    }

    try {
      const isValid = isValidPhoneNumber(cleanNumber, selectedCountry);
      if (!isValid) {
        setPhoneError(`Invalid phone number length or format for ${selectedCountry}`);
        return false;
      }
      setPhoneError('');
      return true;
    } catch (e) {
      setPhoneError('Invalid phone number format');
      return false;
    }
  };

  const isFormValid = name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && password !== '' && confirmPassword !== '' && agreeTerms && !phoneError;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const isPhoneValid = validatePhone();
    if (!isPhoneValid) return;

    if (password !== confirmPassword) {
      // Typically we'd show a password mismatch error here
      return;
    }
    
    console.log("Registering...", { name, email, phone, selectedCountry, password });
  };

  return (
    <div className="w-full min-h-screen flex text-white relative bg-[#050505] overflow-x-hidden">
      
      {/* Right Panel: Showcase (Flipped for variety on Signup) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#0a0a0a]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/auth_showcase.png)', transform: 'scaleX(-1)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" style={{ transform: 'scaleX(-1)' }}></div>
          <div className="absolute inset-0 bg-purple-500/5 mix-blend-overlay"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-1/3 left-20 z-10 p-8 rounded-3xl backdrop-blur-3xl bg-black/40 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] max-w-sm"
        >
          <ShieldCheck className="w-10 h-10 text-brand mb-4" />
          <h3 className="text-2xl font-bold mb-2">Secure & Reliable</h3>
          <p className="text-gray-400 text-sm mb-6">Experience institutional-grade infrastructure with seamless execution.</p>
          
          <ul className="space-y-4">
            {['No hidden fees', 'Up to 90% profit split', 'Instant scale-up'].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-sm font-medium text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Left Panel (Form) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 pt-28 pb-20 z-10 border-l border-white/5 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md w-full mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-500">Account</span>
            </h1>
            <p className="text-gray-400 text-lg">Start your journey with Xolo Funding today.</p>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            
            {/* Social Logins */}
            <div className="flex gap-4 mb-2">
              <button type="button" className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor"><path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"/></svg>
                Google
              </button>
            </div>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-xs text-gray-500 font-medium tracking-wide uppercase">Or register with email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            {/* Name Field */}
            <div className="group relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 transition-colors group-focus-within:text-purple-400">
                <User size={18} />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all shadow-inner text-sm"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="group relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 transition-colors group-focus-within:text-purple-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all shadow-inner text-sm"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="group relative">
              <div className="flex gap-2">
                <div className="relative w-[130px] shrink-0" ref={dropdownRef}>
                  <button 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl px-3 flex items-center justify-between text-white hover:border-white/20 transition-all focus:outline-none focus:ring-1 focus:ring-purple-500"
                  >
                    <span className="text-[13px] font-medium tracking-wide">{selectedCountry} (+{getCountryCallingCode(selectedCountry)})</span>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-full min-w-[170px] bg-[#1a1a1a] border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-2 z-50 max-h-56 overflow-y-auto"
                        style={{ scrollbarWidth: 'thin', scrollbarColor: '#444 transparent' }}
                      >
                        {COUNTRY_LIST.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2"
                            onClick={() => { 
                              setSelectedCountry(country.code as CountryCode); 
                              setIsDropdownOpen(false); 
                              if (phone) validatePhone(); // re-validate immediately
                            }}
                          >
                            <span className="font-medium tracking-wide w-8">{country.code}</span>
                            <span className="text-gray-500 text-xs">({country.dial})</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative flex-1 group">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    onBlur={validatePhone}
                    className={`w-full bg-[#0a0a0a] border ${phoneError ? 'border-red-500/50 focus:ring-red-500 focus:border-red-500' : 'border-white/10 focus:ring-purple-500 focus:border-purple-500'} rounded-xl py-3.5 px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all shadow-inner text-sm`}
                    placeholder="123 456 7890"
                    required
                  />
                </div>
              </div>

              {/* Error Message for Phone */}
              <AnimatePresence>
                {phoneError && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 text-red-500 ml-1 text-xs font-medium">
                      <AlertCircle size={14} />
                      {phoneError}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Password Field */}
            <div className="group relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3.5 pl-4 pr-11 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all shadow-inner text-sm"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 focus:outline-none transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="group relative flex flex-col">
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full bg-[#0a0a0a] border ${confirmPassword && password !== confirmPassword ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:ring-purple-500 focus:border-purple-500'} rounded-xl py-3.5 pl-4 pr-11 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all shadow-inner text-sm`}
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 focus:outline-none transition-colors"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <div className="flex items-center gap-1.5 text-red-500 mt-2 ml-1 text-xs font-medium">
                  <AlertCircle size={14} />
                  Passwords do not match
                </div>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start gap-3 mt-4 pt-1">
              <div className="flex items-center h-5 mt-0.5 relative group cursor-pointer">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-5 h-5 rounded border-white/20 bg-black/50 cursor-pointer focus:ring-0 appearance-none absolute inset-0 z-10 opacity-0"
                  required
                />
                <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors border ${agreeTerms ? 'bg-white border-white' : 'bg-transparent border-white/40 group-hover:border-white'}`}>
                  {agreeTerms && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <svg className="w-2.5 h-2.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </motion.div>
                  )}
                </div>
              </div>
              <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer select-none leading-relaxed font-medium mt-0.5">
                I have read and agree to the{' '}
                <Link to="/terms-and-conditions" className="font-semibold text-white hover:text-brand transition-colors underline decoration-white/20 underline-offset-2">Terms & Conditions</Link>,{' '}
                <Link to="/privacy-policy" className="font-semibold text-white hover:text-brand transition-colors underline decoration-white/20 underline-offset-2">Privacy Policy</Link>,{' '}
                and <Link to="/refund-policy" className="font-semibold text-white hover:text-brand transition-colors underline decoration-white/20 underline-offset-2">Refunds</Link>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!isFormValid}
              whileHover={isFormValid ? { scale: 1.01 } : {}}
              whileTap={isFormValid ? { scale: 0.99 } : {}}
              className={`w-full mt-6 rounded-xl overflow-hidden transition-all ${isFormValid ? 'shadow-[0_8px_30px_rgba(2,94,228,0.4)] cursor-pointer' : 'opacity-50 cursor-not-allowed grayscale-[0.5]'}`}
            >
              <div className={`w-full py-3.5 px-6 flex items-center justify-center bg-brand text-white ${isFormValid ? 'hover:bg-brand/90 transition-colors' : ''}`}>
                <span className="font-semibold tracking-wide text-[15px]">Register Now</span>
              </div>
            </motion.button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-white font-medium hover:text-purple-400 transition-colors hover:underline underline-offset-4">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
      
    </div>
  );
}
