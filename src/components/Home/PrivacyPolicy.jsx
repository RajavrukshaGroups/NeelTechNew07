import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-16 px-6 font-[Inter]">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-12">

        <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
          Privacy Policy
        </h1>

       <p className="text-center text-gray-500 mb-10 text-lg">
        Effective Date: {new Date().toLocaleDateString("en-GB")}
      </p>

        <Intro />

        <Section title="1. Information We Collect">
          We collect personal and non-personal information including:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Full Name, Email Address, Phone Number</li>
            <li>Login credentials and account details</li>
            <li>Payment and billing information</li>
            <li>Device information, IP address, browser type</li>
            <li>Usage data such as pages visited and time spent</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          Your data is used to:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Provide and manage our training services</li>
            <li>Personalize your learning experience</li>
            <li>Process payments and transactions securely</li>
            <li>Send important updates and promotional content</li>
            <li>Improve platform performance and security</li>
          </ul>
        </Section>

        <Section title="3. Legal Basis for Processing">
          We process your data based on:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Compliance with legal obligations</li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          We retain your data only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.
        </Section>

        <Section title="5. Data Security">
          We implement industry-standard security measures including encryption, firewalls, and secure servers.
          However, no system can be completely secure, and users share data at their own risk.
        </Section>

        <Section title="6. Cookies & Tracking Technologies">
          We use cookies, analytics tools, and tracking technologies to enhance user experience and analyze website performance.
        </Section>

        <Section title="7. Third-Party Sharing">
          We may share data with:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Payment gateways (PhonePe, Razorpay, etc.)</li>
            <li>Cloud hosting providers</li>
            <li>Analytics and marketing tools</li>
            <li>Legal authorities when required</li>
          </ul>
        </Section>

        <Section title="8. International Data Transfers">
          Your information may be transferred to and maintained on servers located outside your state or country.
        </Section>

        <Section title="9. Your Rights">
          You have rights including:
          <ul className="list-disc ml-8 mt-3 space-y-2">
            <li>Access and correction of data</li>
            <li>Data deletion request</li>
            <li>Withdrawal of consent</li>
            <li>Restriction of processing</li>
          </ul>
        </Section>

        <Section title="10. Children's Privacy">
          We do not knowingly collect data from individuals under the age of 13.
        </Section>

        <Section title="11. Updates to This Policy">
          We may update this Privacy Policy periodically. Continued use of the service implies acceptance of changes.
        </Section>

        <Section title="12. Contact Information">
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
    <strong>Neel Technologies</strong> is committed to protecting your privacy.
    This policy explains how we collect, use, disclose, and safeguard your information.
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

export default PrivacyPolicy;