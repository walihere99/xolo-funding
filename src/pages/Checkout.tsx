import { useState, useMemo } from 'react';
import { CreditCard, Bitcoin, ShieldCheck, Check, Info } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');
  const [agreed, setAgreed] = useState(false);
  const [addons, setAddons] = useState({
    noStopLoss: false,
    profitSplit100: false,
  });

  const location = useLocation();
  const state = location.state || {
    type: '2-Step',
    size: '100K',
    platform: 'XOLO TERMINAL',
    price: 549,
  };

  // Pricing Logic
  const { totalPrice, originalPrice } = useMemo(() => {
    let current = state.price;
    let baseOriginal = current * 1.5; // Simulate a massive strikethrough "deal"

    if (addons.noStopLoss) { current += state.price * 0.1; }
    if (addons.profitSplit100) { current += state.price * 0.2; }

    return {
      totalPrice: Math.round(current),
      originalPrice: Math.round(baseOriginal),
    };
  }, [state.price, addons]);

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen pt-28 pb-32 bg-[#050505]">
      {/* Centered Narrow Column */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Global Header */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="XOLO Logo" className="h-10 opacity-90 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/models"
            className="px-5 py-2 rounded-lg border border-white/10 text-white/50 hover:bg-white/5 hover:text-white transition-colors uppercase text-xs font-bold font-syne tracking-wider"
          >
            Back to Models
          </Link>
        </div>

        {/* 1. Product Details Card */}
        <div className="bg-[#111111] rounded-2xl p-6 md:p-8 mb-6 border border-white/5 shadow-2xl">
          <div className="flex justify-between items-center border-b border-white/5 pb-5 mb-5">
            <h2 className="font-bebas text-2xl tracking-widest text-white uppercase">Product Details</h2>
            <Link to="/models" className="bg-brand text-bg px-5 py-2 font-bold font-syne text-xs uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity">
              Edit
            </Link>
          </div>

          <div className="space-y-4 font-syne text-[15px]">
            <div className="flex justify-between items-center">
              <span className="text-white">Challenge</span>
              <span className="text-brand font-bold">{state.type} Account</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Account Size</span>
              <span className="text-brand font-bold">${state.size}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Platform</span>
              <span className="text-brand font-bold uppercase">{state.platform}</span>
            </div>
          </div>
        </div>

        {/* 2. Price Summary Card */}
        <div className="bg-[#111111] rounded-2xl p-6 md:p-8 mb-6 border border-white/5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-syne font-bold uppercase text-xs tracking-wider mb-2">For ${state.size} Account</div>
            <div className="flex items-baseline gap-4">
              <span className="font-bebas text-6xl text-white tracking-widest leading-none">${totalPrice}</span>
              <span className="font-mono text-xl text-white/30 line-through decoration-white/20">${originalPrice}.00</span>
            </div>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
            <img src="/Payment Icons/visa.png" alt="Visa" className="h-6 w-auto object-contain" />
            <img src="/Payment Icons/master-card.png" alt="Mastercard" className="h-6 w-auto object-contain" />
            <img src="/Payment Icons/american-express.png" alt="AMEX" className="h-6 w-auto object-contain" />
            <img src="/Payment Icons/paypal.png" alt="PayPal" className="h-6 w-auto object-contain" />
            <img src="/Payment Icons/skrill.png" alt="Skrill" className="h-6 w-auto object-contain" />
            <img src="/Payment Icons/bitcoin.png" alt="Bitcoin" className="h-6 w-auto object-contain" />
            <img src="/Payment Icons/ethereum.png" alt="Ethereum" className="h-6 w-auto object-contain invert brightness-0" />
            <img src="/Payment Icons/tether.png" alt="Tether" className="h-6 w-auto object-contain" />
          </div>
        </div>

        {/* 3. Add-Ons Card */}
        <div className="bg-[#111111] rounded-2xl p-6 md:p-8 mb-6 border border-white/5 shadow-2xl">
          <h2 className="font-bebas text-2xl tracking-widest text-white uppercase mb-6 italic">Select – Add-ons</h2>
          
          <div className="space-y-4">
            
            {/* Add-on: No Stop Loss */}
            <label 
              className={cn(
                "relative flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-all border",
                addons.noStopLoss ? "bg-[#1a1a1a] border-brand" : "bg-transparent border-white/5 hover:border-white/10"
              )}
            >
              <input 
                type="checkbox" 
                className="hidden" 
                checked={addons.noStopLoss} 
                onChange={() => toggleAddon('noStopLoss')} 
              />
              <div className={cn("w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0 transition-colors", addons.noStopLoss && "border-brand")}>
                {addons.noStopLoss && <div className="w-2.5 h-2.5 bg-brand rounded-full" />}
              </div>
              <div className="flex-1">
                <div className="font-bebas text-2xl text-white tracking-wider mb-1">Remove Stop Loss</div>
                <div className="text-sm font-syne text-white/50">Trade without daily drawdown boundaries.</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-white text-lg font-mono mb-1">+${Math.round(state.price * 0.1)}</div>
                <div className="text-[10px] font-syne text-white/40 uppercase tracking-widest">per account</div>
              </div>
            </label>

            {/* Add-on: 100% Profit */}
            <label 
              className={cn(
                "relative flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-all border",
                addons.profitSplit100 ? "bg-[#1a1a1a] border-warning" : "bg-transparent border-white/5 hover:border-white/10"
              )}
            >
              {/* Highlight Ribbon */}
              <div className="absolute -top-3 left-6 bg-warning text-black px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-[0_0_10px_rgba(255,165,0,0.5)]">
                Best Value
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={addons.profitSplit100} 
                onChange={() => toggleAddon('profitSplit100')} 
              />
              <div className={cn("w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0 transition-colors", addons.profitSplit100 && "border-warning")}>
                {addons.profitSplit100 && <div className="w-2.5 h-2.5 bg-warning rounded-full" />}
              </div>
              <div className="flex-1 mt-1">
                <div className="font-bebas text-2xl text-white tracking-wider mb-1 flex items-center gap-2">
                  100% Profit Split 
                </div>
                <div className="text-sm font-syne text-white/50">Keep every penny you make from day one.</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-white text-lg font-mono mb-1">+${Math.round(state.price * 0.2)}</div>
                <div className="text-[10px] font-syne text-white/40 uppercase tracking-widest">per account</div>
              </div>
            </label>

          </div>
        </div>

        {/* 4. Billing Details Card */}
        <div className="bg-[#111111] rounded-2xl p-6 md:p-8 mb-6 border border-white/5 shadow-2xl">
          <h2 className="font-bebas text-2xl tracking-widest text-white uppercase mb-6">Billing Details</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[12px] font-syne text-white uppercase tracking-wider">Email Address *</label>
              <input type="email" placeholder="ENTER YOUR EMAIL" className="w-full bg-[#1a1a1a] border-none text-white px-5 py-4 rounded-xl placeholder:text-white/20 placeholder:font-syne placeholder:text-sm focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-syne text-white uppercase tracking-wider">First name *</label>
                <input type="text" placeholder="FIRST NAME" className="w-full bg-[#1a1a1a] border-none text-white px-5 py-4 rounded-xl placeholder:text-white/20 placeholder:font-syne placeholder:text-sm focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-syne text-white uppercase tracking-wider">Last name *</label>
                <input type="text" placeholder="LAST NAME" className="w-full bg-[#1a1a1a] border-none text-white px-5 py-4 rounded-xl placeholder:text-white/20 placeholder:font-syne placeholder:text-sm focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-syne text-white uppercase tracking-wider">Country / Region *</label>
              <select className="w-full bg-[#1a1a1a] border-none text-white px-5 py-4 rounded-xl placeholder:text-white/20 placeholder:font-syne placeholder:text-sm focus:ring-1 focus:ring-brand focus:outline-none transition-all appearance-none outline-none">
                <option value="">SELECT A COUNTRY / REGION...</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-syne text-white uppercase tracking-wider">Town / City *</label>
              <input type="text" placeholder="TOWN / CITY" className="w-full bg-[#1a1a1a] border-none text-white px-5 py-4 rounded-xl placeholder:text-white/20 placeholder:font-syne placeholder:text-sm focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
            </div>
          </div>
        </div>

        {/* 5. Payment Selection & Checkout Block */}
        <div className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-20"></div>
          
          <div className="space-y-3 mb-8">
            <label className="w-full flex items-center justify-between p-4 bg-transparent border-t border-b border-white/5 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center transition-colors group-hover:border-white/50">
                   {paymentMethod === 'card' && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="font-syne text-sm font-bold text-white tracking-wider">PAY WITH CREDIT / DEBIT CARD</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/Payment Icons/visa.png" alt="Visa" className="h-4 w-auto object-contain" />
                <img src="/Payment Icons/master-card.png" alt="Mastercard" className="h-4 w-auto object-contain" />
                <img src="/Payment Icons/american-express.png" alt="AMEX" className="h-4 w-auto object-contain" />
                <img src="/Payment Icons/paypal.png" alt="PayPal" className="h-4 w-auto object-contain" />
              </div>
              <input type="radio" name="payment" className="hidden" onChange={() => setPaymentMethod('card')} checked={paymentMethod === 'card'} />
            </label>

            {/* Minimal Card Details Form Reveal */}
            {paymentMethod === 'card' && (
              <div className="px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-[#1a1a1a] p-1 rounded-xl">
                  <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
                    <CreditCard className="w-4 h-4 text-white/30" />
                    <input type="text" placeholder="CARD NUMBER" className="bg-transparent border-none text-white w-full text-sm font-mono placeholder:text-white/20 focus:outline-none" />
                  </div>
                  <div className="flex">
                    <div className="flex-1 border-r border-white/5 px-4 py-3">
                      <input type="text" placeholder="MM / YY" className="bg-transparent border-none text-white w-full text-sm font-mono placeholder:text-white/20 focus:outline-none" />
                    </div>
                    <div className="flex-1 px-4 py-3">
                       <input type="text" placeholder="CVC" className="bg-transparent border-none text-white w-full text-sm font-mono placeholder:text-white/20 focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <label className="w-full flex items-center justify-between p-4 bg-transparent border-b border-white/5 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center transition-colors group-hover:border-white/50">
                   {paymentMethod === 'crypto' && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="font-syne text-sm font-bold text-white tracking-wider">PAY WITH CRYPTO</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/Payment Icons/bitcoin.png" alt="Bitcoin" className="h-4 w-auto object-contain" />
                <img src="/Payment Icons/ethereum.png" alt="Ethereum" className="h-4 w-auto object-contain invert brightness-0" />
                <img src="/Payment Icons/tether.png" alt="Tether" className="h-4 w-auto object-contain" />
              </div>
              <input type="radio" name="payment" className="hidden" onChange={() => setPaymentMethod('crypto')} checked={paymentMethod === 'crypto'} />
            </label>

            {paymentMethod === 'crypto' && (
              <div className="px-4 py-4 text-sm text-white/40 font-syne animate-in fade-in slide-in-from-top-2 duration-300">
                Proceeding will redirect you to coinbase commerce to finish your transaction securely.
              </div>
            )}
          </div>

          <p className="text-white/50 text-[13px] font-syne leading-relaxed mb-6">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-brand hover:underline cursor-pointer">privacy policy</span>.
          </p>

          <label className="flex items-center gap-3 cursor-pointer group mb-8">
            <div className={cn("w-5 h-5 rounded border flex items-center justify-center transition-colors", agreed ? "border-brand bg-brand/20" : "border-white/30 group-hover:border-white/50 bg-[#1a1a1a]")}>
              {agreed && <Check className="w-3.5 h-3.5 text-brand" />}
            </div>
            <span className="text-white text-sm font-syne">I have read and agree to the website <span className="text-brand hover:underline">terms and conditions</span> *</span>
            <input type="checkbox" className="hidden" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
          </label>

          <button 
            disabled={!agreed}
            className="w-full bg-brand text-black font-bebas text-3xl tracking-widest py-6 rounded-xl transition-all hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
          >
            PLACE ORDER
          </button>
          
          <div className="mt-6 flex items-center gap-2 justify-center text-white/30">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[11px] font-syne uppercase tracking-widest font-bold">Secure checkout guaranteed</span>
          </div>
        </div>

      </div>
    </div>
  );
}
