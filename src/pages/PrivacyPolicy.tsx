import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-bebas text-5xl md:text-6xl text-white tracking-widest mb-12 border-b border-white/10 pb-6">
          Privacy <span className="text-brand">Policy</span>
        </h1>
        
        <div className="space-y-8 font-syne text-white/70 leading-relaxed">
          <p className="text-lg">
            Welcome to Xolo Funding (the "Company," "we," "us," or "our"). This privacy notice outlines our data collection, processing, and storage practices. By accessing our platform and utilizing our Services, you formally acknowledge and agree to our procedures regarding your personal information. If you have inquiries, please contact us at <a href="mailto:support@xolofunding.com" className="text-brand hover:underline">support@xolofunding.com</a>. If you do not agree with these policies, you must immediately refrain from utilizing our Services.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">What Information Do We Collect?</h2>
            <p>Personal information is voluntarily gathered from you when you register for our Services, inquire about our products, participate in platform activities, or communicate with our support personnel. This information typically includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Legal Names</li>
              <li>Phone Numbers</li>
              <li>Valid Email Addresses</li>
              <li>Physical and Residential Addresses</li>
              <li>Billing Details</li>
            </ul>
            <p className="text-sm border-l-2 border-brand pl-3 text-white/50 mt-2">
              <strong>Sensitive Information:</strong> We do NOT collect highly sensitive data such as social security numbers or similar government-issued documentation unless explicitly required for KYC/AML verification under applicable law during payout processing.
            </p>
            <p className="text-sm border-l-2 border-brand pl-3 text-white/50">
              <strong>Payment Information:</strong> To process your purchases, we utilize robust third-party payment gateways. Payment instrument numbers and security codes are securely transmitted to and managed by these processors. You may consult their respective privacy protocols on their websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Information Automatically Collected</h2>
            <p>During your navigation throughout the Services, generic non-identifying data is automatically collected by our servers. This diagnostic, usage, and performance data includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your device IP address and specifications</li>
              <li>Browser types, versions, and language preferences</li>
              <li>In-app activity (timestamps, views, click paths)</li>
              <li>Device event logs detailing system errors or hardware configurations</li>
            </ul>
            <p>This automated data predominantly serves internal analytics, security monitoring, and maintaining fundamental platform stability via the deployment of browser cookies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">How Do We Process Your Information?</h2>
            <p>Your personal data is leveraged to achieve specific operational directives:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Facilitating seamless account creation, verification, and authentication.</li>
              <li>Identifying, preventing, and auditing potentially fraudulent platform activity.</li>
              <li>Communicating updates, fetching user feedback, and processing customer service inquiries.</li>
              <li>Safeguarding our vital business interests and strictly upholding our Terms & Conditions.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Legal Bases for Processing</h2>
            <p>We process your data strictly under recognized legal frameworks, primarily:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Consent:</strong> Acting upon explicit permissions you provide.</li>
              <li><strong>Legitimate Interest:</strong> Safeguarding the Company from fraud where fundamental rights are not overridden.</li>
              <li><strong>Contractual Fulfillment:</strong> Essential data processing requisite for fulfilling our service deliveries.</li>
              <li><strong>Legal Obligations:</strong> Compliance with international law enforcement and regulatory bodies when applicable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Data Sharing Practices</h2>
            <p>Your data is not sold. It may be shared strictly under the following operational circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Business Transfers:</strong> During mergers, asset liquidations, financing, or corporate acquisitions.</li>
              <li><strong>Vendors & Partners:</strong> With third-party infrastructure entities (payment gateways, CRM arrays) essential for executing our Services securely and maintaining adherence to our Terms & Conditions.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Your Privacy Rights & Protections</h2>
            <p>Regardless of jurisdiction (EU GDPR, UK GDPR, CCPA/CPRA), Xolo Funding endeavors to grant users the capacity to review, modify, or delete their personal data. Should you desire to exercise data portability, request data deletion, or dispute data processing, you may actively submit an inquiry to our designated privacy personnel via <a href="mailto:support@xolofunding.com" className="text-brand hover:underline">support@xolofunding.com</a>.</p>
            <p>We do not intentionally warehouse data originating from minors (individuals under the age of 18). Detected minor accounts will be promptly purged.</p>
          </section>

          <p className="mt-8 text-xs font-mono text-white/30 text-center border-t border-white/5 pt-8">
            Effective Date: 05/06/2023 | Subject to rolling revisions accessible via this permanent URI.
          </p>
        </div>
      </div>
    </div>
  );
}
