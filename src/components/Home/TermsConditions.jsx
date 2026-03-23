import React from "react";
import Footer from "./Footer";

const TermsConditions = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-16 px-6 font-[Inter]">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-12">

        <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-500 mb-10 text-lg">
        Effective Date: {new Date().toLocaleDateString("en-GB")}
        </p>

        <Intro />

        <Section title="1. Acceptance of Terms">
          By accessing our website, you agree to these Terms & Conditions.
        </Section>

        <Section title="2. Services Offered">
          We provide IT training, certification courses, and digital learning services.
        </Section>

        <Section title="3. User Accounts">
          Users are responsible for maintaining account confidentiality and all activities under their account.
        </Section>

        <Section title="4. Payment Terms">
          All payments must be completed before accessing services.
          Fees are non-refundable unless stated otherwise.
        </Section>

        <Section title="5. Intellectual Property Rights">
          All content including videos, materials, logos, and branding are owned by Neel Technologies.
        </Section>

        <Section title="6. Prohibited Activities">
          Users must not:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Use the platform for illegal purposes</li>
            <li>Attempt to hack or disrupt services</li>
            <li>Copy or distribute content without permission</li>
          </ul>
        </Section>

        <Section title="7. Limitation of Liability">
          We are not liable for indirect, incidental, or consequential damages arising from use of our services.
        </Section>

        <Section title="8. Indemnification">
          Users agree to indemnify and hold harmless Neel Technologies from any claims or damages.
        </Section>

        <Section title="9. Termination of Services">
          We reserve the right to terminate access if terms are violated.
        </Section>

        <Section title="10. Governing Law">
          These terms are governed by the laws of India.
        </Section>

        <Section title="11. Changes to Terms">
          We may update these terms at any time without prior notice.
        </Section>

        <Section title="12. Contact Information">
          <p>Email: info@neeltechnologies.net</p>
          <p>Phone: +91 6361866299</p>
        </Section>

      </div>
    </div>
     <Footer />

     </>
  );
};

const Intro = () => (
  <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
    These Terms & Conditions govern your use of <strong>Neel Technologies</strong> services.
    By using our platform, you agree to comply with these terms.
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

  <Footer />


export default TermsConditions;