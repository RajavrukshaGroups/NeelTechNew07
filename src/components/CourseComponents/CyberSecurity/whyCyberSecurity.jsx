import {
  Cloud,
  TrendingUp,
  Globe,
  Briefcase,
  Server,
  ShieldCheck
} from "lucide-react";

const WhyCyberSecurity = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-red-600">
              Cyber Security Certification?
            </span>
          </h2>
          <p className="text-gray-1000 font-medium text-xl mt-6 max-w-3xl mx-auto" style={{ fontFamily: "ui-sans-serif" }}>
            Protect organizations from cyber threats and build a
            high-demand career in ethical hacking and security operations.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Rising Cyber Threats */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Rising Global Cyber Threats
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              With increasing cyber attacks worldwide, skilled security
              professionals are more important than ever.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High-Paying Career Opportunities
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Qualify for roles like{" "}
              <strong>
                Security Analyst, Ethical Hacker, SOC Analyst,
                Penetration Tester, Security Engineer
              </strong>.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Massive Global Demand
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Organizations across all industries require cybersecurity
              experts to protect data and digital infrastructure.
            </p>
          </div>

          {/* Security Tools */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Hands-On Security Tools
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Gain practical experience with{" "}
              <strong>
                SIEM tools, Firewalls, IDS/IPS, Vulnerability Scanners,
                Kali Linux, and Cloud Security Platforms
              </strong>.
            </p>
          </div>

          {/* Cloud & Network Security */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Cloud size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Cloud & Network Protection
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Learn to secure cloud environments, networks,
              applications, and endpoints against modern threats.
            </p>
          </div>

          {/* Job Market */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Future-Proof Career Path
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Cybersecurity remains one of the fastest-growing
              and most secure career paths globally.
            </p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-red-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Cyber Security Expert 🔐
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enrol in Cyber Security training and master
            threat detection, prevention, and ethical hacking.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            Enrol Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyCyberSecurity;