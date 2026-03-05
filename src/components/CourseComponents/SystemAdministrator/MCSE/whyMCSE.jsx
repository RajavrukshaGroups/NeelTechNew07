import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Laptop,
} from "lucide-react";

const WhyMCSE = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-blue-500">MCSE Certification?</span>
          </h2>
          <p className="text-gray-900 text-xl font-medium mt-6 max-w-3xl mx-auto"
          
          style={{fontFamily:"ui-sans-serif"}}>
            Boost your IT career with enterprise-level Microsoft Server
            expertise that companies actively hire for.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Salary Hike */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <DollarSign size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High Salary Growth
            </h3>
            <p className="text-lg font-poppins font-medium text-gray-1000 leading-relaxed"
            style={{fontFamily:"ui-sans-serif"}}>
              Certified professionals often see a{" "}
              <strong>30–50% salary hike</strong>. System Administrators and
              Server Engineers are in high demand globally.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Rapid Career Advancement
            </h3>
            <p className="text-lg font-medium text-gray-1000 leading-relaxed" 
            style={{fontFamily:"ui-sans-serif"}}>
              Move from IT Support to{" "}
              <strong>
                System Administrator, Network Engineer, or IT Manager
              </strong>{" "}
              roles faster.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Job Opportunities
            </h3>
            <p className="text-lg font-medium text-gray-1000 leading-relaxed"
            style={{fontFamily:"ui-sans-serif"}}>
              Microsoft Server infrastructure is used worldwide — opening doors
              to
              <strong> international IT careers</strong>.
            </p>
          </div>

          {/* Job Roles */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              In-Demand Job Roles
            </h3>
            <p className="text-lg font-medium text-gray-1000 leading-relaxed"
            style={{fontFamily:"ui-sans-serif"}}>
              Become a{" "}
              <strong>
                System Engineer, Active Directory Specialist, Windows Server
                Admin, or IT Infrastructure Expert.
              </strong>
            </p>
          </div>

          {/* Security & Enterprise Skills */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-cyan-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise-Level Skills
            </h3>
            <p className="text-lg font-medium text-gray-1000 leading-relaxed"
            style={{fontFamily:"ui-sans-serif"}}>
              Master Active Directory, DNS, DHCP, Group Policy, Security, and
              Virtualization — real enterprise tools.
            </p>
          </div>

          {/* Freelancing & Consulting */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Laptop size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Freelancing & Consulting
            </h3>
            <p className="text-lg font-medium text-gray-1000 leading-relaxed"
            style={{fontFamily:"ui-sans-serif"}}>
              Work independently as a{" "}
              <strong>Server Consultant or IT Support Freelancer</strong>
              for startups and enterprises.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your High-Paying IT Career Today 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and gain job-ready Microsoft Server expertise with
            hands-on training.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyMCSE;
