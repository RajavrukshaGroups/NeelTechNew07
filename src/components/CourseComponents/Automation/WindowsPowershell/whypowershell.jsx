import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Laptop,
} from "lucide-react";

const WhyWindowsPowershell = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-blue-500">
              Windows PowerShell Certification?
            </span>
          </h2>
          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Master automation, scripting, and enterprise-level Windows
            administration to accelerate your IT career.
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
            <p className="text-lg text-gray-700 leading-relaxed">
              Automation and scripting professionals often see{" "}
              <strong>significant salary growth</strong> due to their ability
              to streamline enterprise IT operations.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Faster Career Advancement
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Move into roles like{" "}
              <strong>
                System Administrator, Automation Engineer, DevOps Engineer
              </strong>{" "}
              more quickly with PowerShell expertise.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise-Level Demand
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              PowerShell is widely used across{" "}
              <strong>Windows Server, Azure, and enterprise IT environments</strong>{" "}
              globally.
            </p>
          </div>

          {/* Job Roles */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              In-Demand IT Roles
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Become a{" "}
              <strong>
                Windows Server Administrator, Cloud Automation Engineer,
                Infrastructure Specialist
              </strong>.
            </p>
          </div>

          {/* Practical Skills */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-cyan-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Automation & Security Skills
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn to automate tasks, manage Active Directory, configure
              servers, and enhance{" "}
              <strong>enterprise security and efficiency</strong>.
            </p>
          </div>

          {/* Freelancing */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Laptop size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Consulting & Freelancing
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Offer automation solutions as a{" "}
              <strong>PowerShell Consultant or IT Support Specialist</strong>{" "}
              to businesses and enterprises.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a PowerShell Automation Expert 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and gain hands-on PowerShell scripting skills for
            enterprise IT environments.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyWindowsPowershell;
