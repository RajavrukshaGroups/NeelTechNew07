import React from "react";
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-16 px-6 font-[Inter]">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-12">

        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
          Refund Policy
        </h1>

        <p className="text-center text-gray-500 mb-10 text-lg">
        Effective Date: {new Date().toLocaleDateString("en-GB")}
        </p>

        <Intro />

        {/* Sections */}
        <Section title="1. General Policy">
          All purchases made on <strong>Neel Technologies</strong> are final. 
          We maintain a strict <span className="font-bold text-red-600">no refund policy</span> 
          for all training programs, courses, and digital services unless explicitly stated otherwise.
        </Section>

        <Section title="2. Eligibility for Refunds (Exceptional Cases)">
          Refunds may only be considered under the following conditions:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Duplicate payment made due to technical error</li>
            <li>Failure of payment but amount deducted</li>
            <li>Inability to access course due to verified technical issue from our side</li>
          </ul>
        </Section>

        <Section title="3. Non-Refundable Situations">
          Refunds will <strong>not</strong> be provided in the following cases:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Change of mind after purchase</li>
            <li>Lack of usage or inactivity</li>
            <li>Misunderstanding of course content</li>
            <li>Failure to meet system requirements</li>
          </ul>
        </Section>

        <Section title="4. Refund Request Process">
          To request a refund (if eligible):
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Submit a request via email within 48 hours of payment</li>
            <li>Provide transaction details and valid proof</li>
            <li>Our team will review and respond within 3–5 business days</li>
          </ul>
        </Section>

        <Section title="5. Refund Processing Time">
          Approved refunds will be processed within:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>7–10 business days</li>
            <li>Refund will be credited to original payment method</li>
          </ul>
        </Section>

        <Section title="6. Course Access & Cancellation">
          Once access to course material is granted, cancellation is not allowed.
        </Section>

        <Section title="7. Payment Gateway Charges">
          Any transaction or processing fees charged by payment gateways are non-refundable.
        </Section>

        <Section title="8. Policy Updates">
          We reserve the right to update or modify this Refund Policy at any time without prior notice.
        </Section>

        <Section title="9. Contact Information">
          <p>Email: info@neeltechnologies.net</p>
          <p>Phone: +91 6361866299</p>
          <p>Phone: +91 8310521980</p>
          <p>Location: Bangalore, India</p>
        </Section>

      </div>
    </div>
    <Footer />
    </>
  );
};

const Intro = () => (
  <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
    At <strong>Neel Technologies</strong>, we strive to deliver high-quality training services. 
    Please read this Refund Policy carefully before making any purchase.
  </p>
);

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-semibold text-gray-900 mb-4 border-b pb-2">
      {title}
    </h2>
    <div className="text-lg text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

export default RefundPolicy;