import {
  Cloud,
  TrendingUp,
  Globe,
  Briefcase,
  Server,
  ShieldCheck
} from "lucide-react";

const WhyAzureSentinel = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-blue-600">
              Azure Sentinel Certification?
            </span>
          </h2>
          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Master cloud-native SIEM and security analytics with Microsoft
            Sentinel and become a cybersecurity specialist.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Cloud-Native SIEM */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Cloud size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Cloud-Native SIEM
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Azure Sentinel is a scalable, cloud-native SIEM that detects,
              investigates, and responds to threats in real time.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High-Demand Security Roles
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Qualify for roles like{" "}
              <strong>
                SOC Analyst, Security Engineer, Threat Analyst, Cloud Security Specialist
              </strong>{" "}
              with globally recognized credentials.
            </p>
          </div>

          {/* Global Security Intelligence */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Microsoft Threat Intelligence
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Leverage Microsoft’s global threat intelligence to proactively
              detect and mitigate cyber attacks.
            </p>
          </div>

          {/* Automation & Integration */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Automation & SOAR Capabilities
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Automate threat response using playbooks, Logic Apps,
              and advanced analytics for faster incident resolution.
            </p>
          </div>

          {/* Security & Compliance */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Advanced Security & Compliance
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Implement security monitoring, compliance tracking,
              log analytics, and zero-trust architecture.
            </p>
          </div>

          {/* Job Market */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Rapidly Growing Cybersecurity Market
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              With rising cyber threats worldwide, Azure Sentinel experts
              are highly valued across industries.
            </p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Cloud Security Expert 🔐
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enrol in Azure Sentinel training and master modern
            cloud threat detection and response.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          onClick={() => window.open("https://wa.me/916361866299", "_blank")}>
            
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyAzureSentinel;