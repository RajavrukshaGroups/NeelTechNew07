import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Server,
} from "lucide-react";

const WhyLinux = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-[#0694d1]">Linux Certification?</span>
          </h2>
          <p className="text-gray-1000 font-medium text-xl mt-6 max-w-3xl mx-auto" style={{fontFamily:"ui-sans-serif"}}>
            Linux powers over 90% of cloud servers worldwide. Mastering Linux
            opens doors to high-paying roles in Cloud, DevOps, and
            Cybersecurity.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Salary Growth */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <DollarSign size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High Salary Potential
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{fontFamily:"ui-sans-serif"}}>
              Linux professionals often earn{" "}
              <strong>40–70% higher salaries</strong>, especially in DevOps,
              Cloud Engineering, and Site Reliability roles.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Rapid Career Advancement
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{fontFamily:"ui-sans-serif"}}>
              Transition from IT Support to{" "}
              <strong>
                Linux Administrator, DevOps Engineer, Cloud Engineer
              </strong>{" "}
              roles faster.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Demand
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{fontFamily:"ui-sans-serif"}}>
              Linux runs major platforms like AWS, Azure, and Google Cloud —
              making it one of the most demanded skills worldwide.
            </p>
          </div>

          {/* Job Roles */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              In-Demand Job Roles
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{fontFamily:"ui-sans-serif"}}>
              Become a{" "}
              <strong>
                Linux System Administrator, DevOps Engineer, Cloud Architect,
                Site Reliability Engineer
              </strong>
              .
            </p>
          </div>

          {/* Security & Server Skills */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-cyan-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Server & Security Expertise
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{fontFamily:"ui-sans-serif"}}>
              Master server hardening, firewall setup, SELinux, automation,
              scripting, and production-grade infrastructure management.
            </p>
          </div>

          {/* Freelancing & Remote */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Freelancing & Remote Work
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{fontFamily:"ui-sans-serif"}}>
              Offer Linux server setup, cloud deployment, and automation
              services globally as a remote consultant or freelancer.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-[#0694d1] text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Linux & Cloud Expert 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and build a future-proof career in DevOps, Cloud, and
            Enterprise Infrastructure.
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

export default WhyLinux;
