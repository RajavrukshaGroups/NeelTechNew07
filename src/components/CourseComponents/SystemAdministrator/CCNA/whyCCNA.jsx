import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Laptop,
} from "lucide-react";

const WhyCCNA = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-blue-500">CCNA Certification?</span>
          </h2>
          <p className="text-gray-1000 font-medium text-xl mt-6 max-w-3xl mx-auto" Launch your networking career with globally recognized >
            Launch your networking career with globally recognized Cisco certification
            and hands-on enterprise networking expertise.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Salary Growth */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <DollarSign size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Strong Salary Potential
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              CCNA-certified professionals often experience a{" "}
              <strong>25–45% salary increase</strong>. Networking engineers are
              in high demand across IT, telecom, banking, and cloud industries.
            </p>
          </div>

          {/* Career Advancement */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Rapid Career Growth
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Move from IT Support to{" "}
              <strong>
                Network Administrator, Network Engineer, or NOC Engineer
              </strong>{" "}
              roles faster with validated Cisco networking skills.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Recognition
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Cisco certifications are recognized worldwide, opening doors to{" "}
              <strong>international networking opportunities</strong>.
            </p>
          </div>

          {/* Job Roles */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              In-Demand Networking Roles
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Become a{" "}
              <strong>
                Network Engineer, Routing & Switching Specialist, Technical Support Engineer, or Infrastructure Analyst
              </strong>.
            </p>
          </div>

          {/* Enterprise Skills */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-cyan-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise-Level Networking Skills
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Master{" "}
              <strong>
                routing, switching, VLANs, IP addressing, subnetting, ACLs, network security, and automation
              </strong>{" "}
              — skills used in real enterprise networks.
            </p>
          </div>

          {/* Freelancing */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Laptop size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Freelancing & Remote Work
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Work independently as a{" "}
              <strong>Network Consultant or Remote Infrastructure Engineer</strong>{" "}
              supporting startups and enterprises globally.
            </p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Networking Career Today 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and gain hands-on Cisco networking skills that employers actively seek.
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

export default WhyCCNA;
