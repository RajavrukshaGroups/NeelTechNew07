import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Laptop,
} from "lucide-react";

const WhyO365 = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-blue-500">Microsoft O365 Certification?</span>
          </h2>
          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Master enterprise cloud collaboration, security, and architecture to
            lead modern workplace transformations.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* High Salary */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <DollarSign size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High Salary Packages
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Microsoft 365 Architects and Collaboration Engineers often earn{" "}
              <strong>top-tier enterprise salaries</strong> due to their
              advanced cloud expertise.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Leadership Career Growth
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Advance into roles such as{" "}
              <strong>
                Microsoft 365 Solution Architect, Cloud Consultant, or IT
                Transformation Lead
              </strong>
              .
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Enterprise Demand
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Microsoft 365 is used worldwide, creating{" "}
              <strong>international job opportunities</strong> across
              enterprises and IT consulting firms.
            </p>
          </div>

          {/* In-Demand Roles */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              In-Demand Enterprise Roles
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Become a{" "}
              <strong>
                Collaboration Engineer, Exchange Administrator, Teams
                Specialist, or Cloud Architect
              </strong>
              .
            </p>
          </div>

          {/* Security & Compliance */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-cyan-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Advanced Security & Compliance
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Master data protection, compliance policies, identity management,
              and secure enterprise collaboration.
            </p>
          </div>

          {/* Cloud Architecture */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Laptop size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Cloud Architecture Expertise
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Design and manage{" "}
              <strong>
                hybrid and cloud-only Microsoft 365 infrastructures
              </strong>{" "}
              for enterprise-scale organizations.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Microsoft 365 Enterprise Expert 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and gain hands-on expertise in cloud collaboration,
            security, and enterprise architecture.
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

export default WhyO365;
