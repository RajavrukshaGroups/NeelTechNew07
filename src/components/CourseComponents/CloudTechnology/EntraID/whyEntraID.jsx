import {
  Cloud,
  TrendingUp,
  Globe,
  Briefcase,
  Server,
  ShieldCheck,
} from "lucide-react";

const WhyEntraID = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-orange-500">
              Microsoft Entra ID Certification?
            </span>
          </h2>
          <p className="text-gray-1000 font-medium text-2xl mt-6 max-w-3xl mx-auto">
            Build advanced expertise in identity and access management and secure modern enterprise environments with Microsoft's leading identity platform.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Industry-Leading Identity Platform */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Cloud size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#052334]">
              Industry-Leading Identity Platform
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Microsoft Entra ID is used by organizations worldwide to manage identities, authentication, and secure access to applications across cloud and hybrid environments.
            </p>
          </div>

          {/* High-Demand Security Career */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High-Demand Security Career
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Professionals certified in the Microsoft SC-300 Identity and Access Administrator Certification can qualify for roles such as:
            </p>
            <ul className="text-lg text-gray-1000 font-medium leading-relaxed list-disc list-inside mt-2" style={{ fontFamily: "ui-sans-serif" }}>
              <li>Identity and Access Administrator</li>
              <li>Cloud Security Engineer</li>
              {/* <li>IAM Specialist</li>
              <li>Microsoft Security Administrator</li> */}
            </ul>
          </div>

          {/* Enterprise Identity Management */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise Identity Management
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Learn how enterprises manage users, groups, and access permissions using role-based access control (RBAC), identity governance, and secure authentication methods.
            </p>
          </div>

          {/* Advanced Authentication & Security */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Advanced Authentication & Security
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Gain hands-on experience implementing:
            </p>
            <ul className="text-lg text-gray-1000 font-medium leading-relaxed list-disc list-inside mt-2" style={{ fontFamily: "ui-sans-serif" }}>
              <li>Multi-Factor Authentication (MFA)</li>
              <li>Conditional Access Policies</li>
              {/* <li>Passwordless Authentication</li>
              <li>Identity Protection and Risk Policies</li> */}
            </ul>
          </div>

          {/* Hybrid Identity Integration */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Hybrid Identity Integration
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Understand how to integrate on-premises <strong>Active Directory with Microsoft Entra ID</strong> to support hybrid identity environments used by modern organizations.
            </p>
          </div>

          {/* Identity Governance & Monitoring */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Identity Governance & Monitoring
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Learn to manage identity lifecycle, perform access reviews, monitor sign-in activity, and ensure compliance using Microsoft security and governance tools.
            </p>
          </div>

          {/* Growing Demand for IAM Skills - This is an extra card since we have 7 items but grid is set to 6 */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <Globe size={40} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Growing Demand for IAM Skills
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              As organizations move to cloud services like Microsoft 365 and Microsoft Azure, identity security has become a critical part of enterprise cybersecurity strategies.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-orange-500 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become an IAM Expert
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll in Microsoft Entra ID training and master identity security for modern enterprises.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
           onClick={() => window.open("https://wa.me/916361866299", "_blank")}>
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyEntraID;