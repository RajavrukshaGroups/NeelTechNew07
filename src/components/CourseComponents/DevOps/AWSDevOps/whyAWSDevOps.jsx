import {
  Cloud,
  TrendingUp,
  Globe,
  Briefcase,
  Server,
  ShieldCheck
} from "lucide-react";

const WhyAWSDevOps = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-orange-500">
              AWS DevOps Certification?
            </span>
          </h2>
          <p className="text-gray-1000 font-medium text-xl mt-6 max-w-3xl mx-auto" style={{ fontFamily: "ui-sans-serif" }}>
            Master automation, CI/CD pipelines, and cloud infrastructure
            to become a highly skilled DevOps engineer.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Cloud Automation */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Cloud size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Cloud Automation Expertise
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Automate infrastructure using Infrastructure as Code (IaC)
              and configuration management tools.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High-Paying DevOps Roles
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Qualify for roles like{" "}
              <strong>
                DevOps Engineer, Site Reliability Engineer (SRE),
                Cloud Engineer, Automation Engineer
              </strong>{" "}
              with globally recognized certification.
            </p>
          </div>

          {/* CI/CD Pipelines */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              CI/CD Pipeline Mastery
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Build and manage CI/CD pipelines using{" "}
              <strong>
                CodePipeline, CodeBuild, CodeDeploy, Jenkins
              </strong>{" "}
              for faster and reliable deployments.
            </p>
          </div>

          {/* Cloud Services */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Advanced AWS Services
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Gain hands-on experience with{" "}
              <strong>
                EC2, ECS, EKS, Lambda, CloudFormation, Auto Scaling
              </strong>{" "}
              and monitoring tools like CloudWatch.
            </p>
          </div>

          {/* Monitoring & Security */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Monitoring & Security Best Practices
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Implement secure DevOps practices using IAM,
              logging, monitoring, and compliance automation.
            </p>
          </div>

          {/* Job Market */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Growing DevOps Job Market
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Companies worldwide are adopting DevOps practices,
              making AWS DevOps professionals highly in demand.
            </p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-orange-500 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become an AWS DevOps Expert 🚀
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enrol in AWS DevOps training and master automation,
            scalability, and continuous delivery.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            Enrol Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyAWSDevOps;