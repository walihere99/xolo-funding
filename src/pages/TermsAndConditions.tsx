import React from 'react';

export function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-bebas text-5xl md:text-6xl text-white tracking-widest mb-12 border-b border-white/10 pb-6">
          Terms & <span className="text-brand">Conditions</span>
        </h1>
        
        <div className="space-y-8 font-syne text-white/70 leading-relaxed text-sm">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">1. Welcome to Xolo Funding</h2>
            <p>1.1 Welcome to Xolo Funding (the "Company"). We provide you ("you" or the "Trader") with a limited license to utilize the services (the "Services") offered by the Company, strictly subject to the terms and conditions outlined in this binding document (the "Agreement").</p>
            <p>1.2 This Agreement functions as a legally binding contract. You maintain a duty to read this Agreement thoroughly before accessing or using the Services provided by the Company. By utilizing our Services, you explicitly agree to the terms and conditions articulated within this Agreement.</p>
            <p>1.3 The Company reserves the unilateral right to suspend, replace, modify, amend, or terminate this Agreement at any time, under its sole and absolute discretion. Should the Company modify or amend this Agreement, your continued usage of the Services after the Effective Date of said changes constitutes your complete agreement to any such replacement, modification, or amendment.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">2. Trader Representations</h2>
            <p>2.1 By engaging with the Services, you verify that you are a minimum of eighteen (18) years of age, are of sound mind, and possess the legal capacity to agree to and uphold the terms and conditions herein. If utilizing the Services on behalf of a corporate entity or third party, you confirm you possess actual authority to bind that entity to the terms of this Agreement.</p>
            <p>2.2 You verify that your utilization of the Services does not violate any local, national, or international law, standard, regulation, or treaty applicable in your home jurisdiction.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">3. Limited License</h2>
            <p>3.1 The Company grants you a limited, non-exclusive, non-sublicensable, non-assignable, revocable, and royalty-free license to utilize the Services for their customary, intended trading evaluation purposes. You are strictly forbidden from scraping, hacking, framing, reverse engineering, or crawling the Services or the Company Website without the Company's explicit written authorization.</p>
            <p>3.2 You acknowledge and accept that your confined usage of the Services does not grant you any ownership, license, or intellectual property rights regarding any underlying technology, trademarks, copyrights, or trade secrets belonging to the Company or its third-party contractors.</p>
            <p>3.3 This license may be revoked by the Company at any time. Any rights not expressly granted in this Agreement remain solely reserved for the Company.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">4. Prohibited Uses</h2>
            <p>4.1 You are outright forbidden from utilizing the Services to infringe upon any local, state, or international laws, or to violate the rights of any third party, compromising intellectual property rights, privacy rights, or proprietary rights.</p>
            <p>4.2 You must not aggregate, hack, execute denial of service (DOS) attacks on, reverse engineer, or bypass the technological protection thresholds of our Services or Website.</p>
            <p>4.4 You are explicitly prohibited from executing trading strategies that violate the rules of the Company or its partnered Brokers. "Prohibited Trading" includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-white/50">
              <li>Exploiting latency or errors in the broker’s pricing feeds.</li>
              <li>Trading based on non-public or insider information.</li>
              <li>Front-running existing trades.</li>
              <li>Engaging in "All-or-Nothing" gambling strategies risking the entire account balance on single trades.</li>
              <li>Utilizing High-Frequency Trading (HFT) Expert Advisors (EAs) or Gold Arbitrage mechanisms.</li>
              <li>Deploying off-the-shelf strategies purely marketed to bypass challenge parameters.</li>
              <li>Utilizing one automated EA strategy to "pass" an evaluation and abruptly switching to vastly conflicting manual trading once funded.</li>
              <li>Holding Single Share Equity CFDs into corporate earnings releases.</li>
              <li>Arbitraging across challenge accounts or with external brokerages.</li>
              <li>Creating multiple accounts to exploit system exposure or hedge against the firm.</li>
            </ul>
            <p className="mt-2 text-brand font-bold">4.5 Discovery of Prohibited Trading will result in immediate termination from our program and the forfeiture of any associated fees.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">5. Educational Nature of Services</h2>
            <p>5.1 Xolo Funding is an evaluation firm. The Company's intent is to identify individuals demonstrating a talent for trading. No live capital is provided directly by the Company during an evaluation. Traders who pass assessments are allocated capital to trade in live-simulated accounts per the constraints of their individual agreement with Xolo Funding.</p>
            <p>5.2 Information, data, and analytical content provided by the Company are exclusively intended for general informational and educational purposes, absolutely NOT construed as financial, investment, legal, or tax advice.</p>
            <p className="border border-white/20 p-4 rounded text-xs leading-relaxed text-white/40 mt-4">
              NONE OF THE SERVICES PROVIDED TO YOU BY THE COMPANY CAN BE CONSIDERED REGULATED INVESTMENT SERVICES. THE COMPANY DOES NOT PROVIDE GUIDANCE, INSTRUCTIONS, OR ADVICE ON YOUR TRADING BEHAVIOR. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS. YOU MUST ASSESS TRADING RISKS BASED ON YOUR EXPERIENCE AND CAPACITY TO ABSORB LOSSES.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">6. Account Creation & Operations</h2>
            <p>6.1 Upon registering, you must provide precise and truthful personal information. Accounts are unique and strictly personal to you.</p>
            <p>6.2 You may NOT share your account, nor may you purchase accounts on behalf of third parties. You are singularly accountable for securing your login credentials.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">7. Misconduct & Social Media Policy</h2>
            <p>Xolo Funding maintains an austere zero-tolerance policy against the deliberate dissemination of false information, malicious misinformation, or unjustified negative advertising across public social media platforms. Extorting the Company via reputational damage or publishing defamatory lies constitutes a severe breach of these terms. Discovered individuals will suffer immediate account termination without refund and face a permanent ban from engaging with Xolo Funding, including the prospect of appropriate legal recourse.</p>
          </section>
          
          <p className="mt-8 text-xs font-mono text-white/30 text-center border-t border-white/5 pt-8">
            These Terms & Conditions represent the complete agreement between the Trader and Xolo Funding.<br/>
            Effective Date: 01/06/2023
          </p>

        </div>
      </div>
    </div>
  );
}
