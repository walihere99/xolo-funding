import { Twitter, Linkedin, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-border-default pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt="Xolo Funding Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="font-syne text-text-secondary text-sm leading-relaxed max-w-xs">
              The premier CFD & Forex prop trading firm. Trade our capital, keep up to 90% of the profits, and scale up to $2,000,000.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-mono text-brand text-xs font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 font-syne text-sm text-text-secondary">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Challenges</a></li>
              <li><Link to="/platforms" className="hover:text-white transition-colors text-brand font-bold">Platforms</Link></li>
              <li><a href="#payouts" className="hover:text-white transition-colors">Payouts</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-brand text-xs font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 font-syne text-sm text-text-secondary">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-brand text-xs font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4 font-syne text-sm text-text-secondary">
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/complaints-policy" className="hover:text-white transition-colors">Complaints Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="font-syne text-xs text-white/20 max-w-2xl text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Xolo Funding. All rights reserved. Trading CFDs and Forex involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved.
          </p>

          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, MessageSquare, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-border-default flex items-center justify-center text-text-secondary hover:text-brand hover:border-brand transition-colors group"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
