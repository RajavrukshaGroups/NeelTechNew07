import {
  Cloud,
  TrendingUp,
  Globe,
  Briefcase,
  Server,
  ShieldCheck
} from "lucide-react";

const WhyGoogleCloud = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-blue-500">
              Google Cloud Certification?
            </span>
          </h2>
          <p className="text-gray-1000 font-medium text-xl mt-6 max-w-3xl mx-auto" style={{ fontFamily: "ui-sans-serif" }}>
            Build expertise in one of the fastest-growing cloud platforms and
            unlock high-demand cloud and DevOps career opportunities.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Cloud Innovation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Cloud size={40} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              AI & Innovation Leader
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Google Cloud is a leader in{" "}
              <strong>AI, Machine Learning, and Data Analytics</strong>,
              powering modern digital transformation globally.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <TrendingUp size={40} className="text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              High-Paying Career Roles
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Qualify for roles like{" "}
              <strong>
                Cloud Engineer, Data Engineer, DevOps Engineer, Architect
              </strong>{" "}
              with globally recognised certifications.
            </p>
          </div>

          {/* Global Infrastructure */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Globe size={40} className="text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Global Network Infrastructure
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Deploy applications across global regions with{" "}
              <strong>high-performance networking and reliability</strong>.
            </p>
          </div>

          {/* Compute & Services */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Server size={40} className="text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Powerful Cloud Services
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Gain hands-on experience with{" "}
              <strong>
                Compute Engine, Cloud Storage, BigQuery, Kubernetes Engine
              </strong>{" "}
              and other essential services.
            </p>
          </div>

          {/* Security */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <ShieldCheck size={40} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Advanced Security & Compliance
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Implement secure cloud architectures using{" "}
              <strong>
                IAM, encryption, Identity-Aware Proxy, and compliance tools
              </strong>.
            </p>
          </div>

          {/* Job Market */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Briefcase size={40} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0F3E57]">
              Rapidly Expanding Market
            </h3>
            <p className="text-lg text-gray-1000 font-medium leading-relaxed" style={{ fontFamily: "ui-sans-serif" }}>
              Google Cloud adoption is increasing globally, making GCP skills{" "}
              <strong>future-ready and highly valuable</strong>.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#0F3E57] to-blue-500 text-white p-14 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Google Cloud Expert ☁️
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Enrol in Google Cloud training and build scalable, secure, and
            intelligent cloud solutions.
          </p>

          <button className="bg-white text-[#0F3E57] px-10 py-4 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            Enrol Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyGoogleCloud;