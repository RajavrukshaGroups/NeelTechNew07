import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Laptop,
} from "lucide-react";

const WhyMicrosoftAzure = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-blue-500">
              Microsoft Azure Certification?
            </span>
          </h2>
          <p className="text-gray-1000 font-medium text-xl mt-6 max-w-3xl mx-auto" style={{ fontFamily: "ui-sans-serif" }}>
            Build in-demand cloud skills and become a certified Azure
            professional in today’s rapidly growing cloud industry.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Salary Growth */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <DollarSign size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High Salary Opportunities
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Azure-certified professionals often receive{" "}
              <strong>competitive global salaries</strong> due to the high
              demand for cloud expertise.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Accelerated Career Growth
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Transition into roles like{" "}
              <strong>
                Azure Administrator, Cloud Engineer, Solutions Architect,
                DevOps Engineer
              </strong>{" "}
              faster.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Cloud Demand
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Microsoft Azure is one of the{" "}
              <strong>top cloud platforms worldwide</strong>, adopted by
              enterprises and startups alike.
            </p>
          </div>

          {/* Job Roles */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Diverse Cloud Roles
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Become a{" "}
              <strong>
                Cloud Administrator, Infrastructure Engineer, Cloud Consultant,
                or Azure Developer
              </strong>.
            </p>
          </div>

          {/* Enterprise Skills */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-cyan-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise-Level Skills
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Master Virtual Machines, Networking, Security, Identity,
              Storage, and Resource Management in real-world cloud
              environments.
            </p>
          </div>

          {/* Freelancing & Remote Work */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Laptop size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Remote & Consulting Opportunities
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Work remotely or independently as an{" "}
              <strong>Azure Consultant or Cloud Specialist</strong>{" "}
              for global organizations.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Cloud Career with Azure 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and gain practical Azure cloud experience with
            hands-on labs and expert guidance.
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

export default WhyMicrosoftAzure;
