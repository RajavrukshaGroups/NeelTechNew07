import {
  Laptop,
  Users,
  MessageCircle,
  BookOpen,
  FileText,
  Briefcase,
  Headphones,
} from "lucide-react";

const CommonKeyFeature = () => {
  const theme = {
    accentOrange: "#F28C28",
    darkBlue: "#0F3E57",
  };

  const features = [
    { icon: Users, text: "Instructor led live Training" },
    { icon: Laptop, text: "Hands-on Practical Training" },
    { icon: MessageCircle, text: "Trainer Support on WhatsApp" },
    { icon: BookOpen, text: "Recorded lectures on LMS" },
    { icon: FileText, text: "Access to Learning Portal" },
    { icon: FileText, text: "Certificate from Authorized Partner" },
    { icon: Briefcase, text: "Access to forum for new Job Openings" },
    { icon: Headphones, text: "Support Desk for Students" },
  ];

  return (
    <section
      id="keyfeature"
      className="w-full py-6"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f9fbfc 100%)",
      }}
    >
      <div className="max-w-[1150px] mx-auto px-4">
        {/* Title */}
        {/* <h2
          className="text-center text-2xl md:text-3xl font-semibold mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: theme.darkBlue,
          }}
        >
          Key Features
        </h2> */}
        {/* <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#0F3E57]">Key</span>{" "}
          <span className="text-blue-500">Features</span>
        </h2> */}

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-xl px-4 py-4 bg-white border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {/* Smaller Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: theme.accentOrange }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>

                  {/* Text */}
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{
                      color: theme.darkBlue,
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonKeyFeature;
