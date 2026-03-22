import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { HowItWorks } from './components/HowItWorks';
import { ChallengePricing } from './components/ChallengePricing';
import { ExecutionPlatforms } from './components/ExecutionPlatforms';
import { WhyTradersChooseUs } from './components/WhyTradersChooseUs';
import { VerifiedPayouts } from './components/VerifiedPayouts';
import { ProfitCalculator } from './components/ProfitCalculator';
import { FAQ } from './components/FAQ';
import { SupportSection } from './components/SupportSection';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { BackgroundEmblems } from './components/BackgroundEmblems';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { Rewards } from './pages/Rewards';
import { Models } from './pages/Models';
import { Checkout } from './pages/Checkout';
import { RefundPolicy } from './pages/RefundPolicy';
import { ComplaintsPolicy } from './pages/ComplaintsPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Platforms } from './pages/Platforms';

// Extracted the homepage content into its own component
function Home() {
  return (
    <main>
      <Hero />
      <LivePayoutTicker />
      <HowItWorks />
      <ChallengePricing />
      <ExecutionPlatforms />
      <VerifiedPayouts />
      <ProfitCalculator />
      <WhyTradersChooseUs />
      <SupportSection />
      <FAQ />
      <CTABanner />
    </main>
  );
}

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Backup prevention for image dragging
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-brand/30 selection:text-white relative overflow-x-hidden w-full">
      {/* Global Atmospheric Glass Background Orbs (Persist across pages) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-brand/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] bg-brand/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-brand/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Faded Coin Emblems (Scrolling with page, persists) */}
      <BackgroundEmblems />

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />

        {/* 
          Router logic setup.
          Navbar and Footer are globally shared. Space between handles the page content.
        */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/models" element={<Models />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/complaints-policy" element={<ComplaintsPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/platforms" element={<Platforms />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}
