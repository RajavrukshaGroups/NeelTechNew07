import {
  Cloud,
  TrendingUp,
  Globe,
  Briefcase,
  Server,
  ShieldCheck,
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
          <p className="text-gray-1000 font-medium text-2xl  mt-6 max-w-3xl mx-auto">
            Build expertise in the world’s leading cloud platform and unlock
            high-demand cloud career opportunities.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Cloud Leadership */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Cloud size={40} className="text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#052334]">
              Global Cloud Leader
            </h3>
            <p className="text-lg text-gray-1000  font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              AWS powers millions of applications worldwide and is trusted by{" "}
              <strong>startups, enterprises, and governments</strong>.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High-Paying Career Path
            </h3>
            <p className="text-lg text-gray-1000  font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Qualify for roles like{" "}
              <strong>
                Solutions Architect, DevOps Engineer, Cloud Engineer
              </strong>{" "}
              with globally recognized credentials.
            </p>
          </div>

          {/* Global Infrastructure */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Massive Global Infrastructure
            </h3>
            <p className="text-lg text-gray-1000  font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Deploy applications across multiple{" "}
              <strong>regions, availability zones, and edge locations</strong>{" "}
              with unmatched scalability.
            </p>
          </div>

          {/* Compute & Services */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]" >
              Powerful Cloud Services
            </h3>
            <p className="text-lg text-gray-1000  font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Gain hands-on experience with{" "}
              <strong>EC2, S3, RDS, Lambda, VPC, Auto Scaling</strong> and
              other essential services.
            </p>
          </div>

          {/* Security */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Enterprise-Grade Security
            </h3>
            <p className="text-lg text-gray-1000  font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Implement secure architectures using{" "}
              <strong>IAM, encryption, security groups, and compliance tools</strong>.
            </p>
          </div>

          {/* Job Market */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Expanding Job Market
            </h3>
            <p className="text-lg text-gray-1000  font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}  >
              Cloud adoption continues to grow rapidly, making AWS skills{" "}
              <strong>future-proof and highly in-demand</strong>.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-orange-500 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Cloud Expert ☁️
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enroll in AWS training and build scalable, secure, and modern
            cloud solutions.
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

export default WhyAWS;
