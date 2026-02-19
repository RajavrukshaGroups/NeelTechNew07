import {
  TrendingUp,
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Server,
} from "lucide-react";

const WhyAWS = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0F3E57]">Why Choose</span>{" "}
            <span className="text-orange-500">
              AWS Certification?
            </span>
          </h2>
          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Build globally recognized cloud expertise and unlock high-demand
            opportunities with the world’s leading cloud platform.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Salary Growth */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <DollarSign size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High Salary Opportunities
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              AWS-certified professionals earn{" "}
              <strong>competitive global salaries</strong> due to the massive
              demand for cloud expertise.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Accelerated Career Growth
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transition into roles like{" "}
              <strong>
                Solutions Architect, DevOps Engineer, Cloud Engineer
              </strong>{" "}
              faster.
            </p>
          </div>

          {/* Global Demand */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Cloud Leadership
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              AWS is one of the{" "}
              <strong>most widely adopted cloud platforms worldwide</strong>,
              trusted by enterprises and startups alike.
            </p>
          </div>

          {/* Job Roles */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Diverse Cloud Roles
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Become a{" "}
              <strong>
                Cloud Architect, Infrastructure Engineer, DevOps Specialist,
                Cloud Consultant
              </strong>.
            </p>
          </div>

          {/* Enterprise Skills */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise-Grade Security
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Master IAM, encryption, VPC security, monitoring, and compliance
              to build secure cloud architectures.
            </p>
          </div>

          {/* Cloud Services */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Powerful Cloud Services
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Gain hands-on expertise with{" "}
              <strong>
                EC2, S3, RDS, Lambda, Auto Scaling, CloudFormation
              </strong>{" "}
              and more.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-orange-500 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your AWS Cloud Journey ☁️
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll now and gain practical AWS experience with hands-on labs
            and expert mentorship.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyAWS;
