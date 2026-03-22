import React from 'react';

export function RefundPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-bebas text-5xl md:text-6xl text-white tracking-widest mb-12 border-b border-white/10 pb-6">
          Refund <span className="text-brand">Policy</span>
        </h1>
        
        <div className="space-y-8 font-syne text-white/70 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">General Policy</h2>
            <p>
              Xolo Funding offers specialized products, services, subscriptions, and restricted platform access for a monetary fee. Please note that all pricing and availability are subject to change at our sole discretion without prior notice. 
            </p>
            <p>
              We may facilitate these purchases directly on our website or through an authorized white-label affiliate. It is entirely your responsibility to thoroughly review and comprehend the terms and conditions outlined here. By proceeding with any purchase, you acknowledge and agree that Xolo Funding assumes no liability for claims arising from your transactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Delivery of Services</h2>
            <p>
              Upon successful completion of a purchase for a product, service, subscription, or platform access, Xolo Funding will immediately grant you the respective access or deliver the specified service following transaction approval.
            </p>
            <p className="text-white font-bold p-4 bg-brand/10 border border-brand/20 rounded-lg">
              There are absolutely no refunds on any Services purchased from Xolo Funding.
            </p>
            <p>
              When you pay the one-time fee for an Evaluation attempt, you are paying for an immediate service. Because our services are rendered instantaneously upon the completion of your purchase, refunds cannot be issued under any circumstances. All financial transactions are final. By purchasing an evaluation through Xolo Funding, you explicitly acknowledge and agree that your fee will not be refunded.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Dispute & Chargeback Policy</h2>
            <p>
              Clients who improperly dispute legitimate charges or fraudulently request chargebacks through their bank or credit card provider will face an immediate and permanent ban from the Xolo Funding platform. If you encounter an issue or have billing questions, you must contact our community support team before taking action with your bank.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">Acceptance of this Policy</h2>
            <p>
              It is your sole responsibility to familiarize yourself with this Refund Policy prior to placing an order. By initiating a purchase for any of our products or services, you formally indicate that you have read, understood, and fully accepted the terms outlined in this document. If you do not agree with or fully accept these terms, we strongly advise that you do not place an order with us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
