import React from 'react';
import { Link } from 'react-router-dom';

export function ComplaintsPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-bebas text-5xl md:text-6xl text-white tracking-widest mb-4">
          Complaints <span className="text-brand">Policy</span>
        </h1>
        <p className="text-sm font-mono text-white/40 mb-12 border-b border-white/10 pb-6 uppercase tracking-widest">
          Effective Date: 01/06/2025 | Last Updated: 01/06/2025
        </p>

        <div className="space-y-10 font-syne text-white/70 leading-relaxed">
          <p className="text-lg text-white/90">
            At Xolo Funding, we are highly committed to delivering a premium standard of service to all our users. We acknowledge that, occasionally, things may not go as planned. When issues arise, we strongly encourage you to reach out so we have the opportunity to make things right as swiftly as possible. This Complaints Policy details how you can formally raise a complaint with us, how our team will handle it, and what you can expect during the process.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">1. Who Can Make a Complaint?</h2>
            <p>Any individual or entity who has interacted with Xolo Funding may submit a complaint, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registered platform users (whether in the funded or evaluation phases)</li>
              <li>Prospective clients</li>
              <li>Business partners and affiliates</li>
              <li>General website visitors</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">2. What Constitutes a Complaint?</h2>
            <p>We define a formal complaint as:</p>
            <blockquote className="italic border-l border-white/20 pl-4 py-2 text-white/60">
              "Any expression of dissatisfaction, whether communicated orally or in writing, and whether justified or not, regarding a specific service, decision, or outcome provided by Xolo Funding."
            </blockquote>
            <p>This may encompass, but is not limited to, the following scenarios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disputes regarding challenge results or final evaluation outcomes</li>
              <li>Platform performance drops or persistent technical issues</li>
              <li>Account suspensions or permanent terminations</li>
              <li>Disagreements regarding billing, fees, or charges</li>
              <li>Concerns regarding our communication or customer service quality</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">3. How to Submit a Complaint</h2>
            <p><strong>Online Submission (Preferred):</strong> Please contact us via our official support channels.</p>
            <p>Contact Support Form: <Link to="/contact" className="text-brand hover:underline">xolofunding.com/contact</Link></p>
            <p>Or send an email directly to: <a href="mailto:support@xolofunding.com" className="text-brand hover:underline">support@xolofunding.com</a></p>
            
            <p className="mt-4">When submitting your complaint, please ensure you include the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full legal name</li>
              <li>The email address registered to your account</li>
              <li>Your Account ID (if applicable)</li>
              <li>A comprehensive description of the issue you experienced</li>
              <li>Any supporting documentation, logs, or screenshots</li>
            </ul>
            <p className="text-sm border border-white/10 p-4 rounded bg-white/5 mt-4">
              <strong>Xolo Funding - Complaints Department</strong><br/>
              support@xolofunding.com<br/>
              <em>Please ensure you include a valid return email address or phone number so we can reach you.</em>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">4. What Happens Next?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acknowledgement:</strong> You will receive a formal acknowledgment of receipt within 2 business days.</li>
              <li><strong>Investigation:</strong> We strive to fully investigate and resolve complaints within 10 business days. If additional time is required for a thorough review, we will notify you immediately.</li>
              <li><strong>Resolution:</strong> We will provide a fair, objective outcome outlining any corrective actions we intend to take.</li>
              <li><strong>Appeals:</strong> If you remain dissatisfied with the decision, you possess the right to request an internal review within 10 business days of receiving our official response.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">5. Record-Keeping and Confidentiality</h2>
            <p>All complaints are treated with strict confidentiality and processed securely according to our privacy standards. We maintain comprehensive records of all complaints and their resolutions for a minimum duration of five (5) years.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">6. External Review or Mediation</h2>
            <p>Please note that Xolo Funding operates as a proprietary trading evaluation firm and is not a regulated financial institution. If you are ultimately unsatisfied with our internal resolution, you may seek independent legal advice or escalate the issue via any applicable dispute resolution protocol outlined in our general Terms of Service.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide border-l-4 border-brand pl-4">7. Our Commitment to You</h2>
            <p>We are dedicated to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Handling all complaints fairly, reasonably, and with utmost transparency.</li>
              <li>Responding to all inquiries promptly and professionally.</li>
              <li>Learning from user feedback and complaints to continuously improve our platform services.</li>
            </ul>
            <p className="mt-6 pt-6 border-t border-white/10">
              For general inquiries, please contact our Help Center.<br/>
              <strong>Sincerely, The Xolo Funding Team</strong>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
