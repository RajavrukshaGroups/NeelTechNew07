import OnlineTraining1 from "../../../public/assets/onlinetraining1.jpg";
import OnlineTraining2 from "../../../public/assets/onlinetraining2.jpg";
import OnlineTraining3 from "../../../public/assets/onlinetraining3.jpg";
import OnlineTraining4 from "../../../public/assets/onlinetraining4.jpg";

import {
  Laptop,
  Cloud,
  UserCheck,
  FileCheck,
  Layers,
  Video,
  BookOpen,
  MessageCircle,
} from "lucide-react";

const OnlineTraining = () => {
  const features = [
    { icon: Cloud, text: "Free Cloud Labs & Software" },
    { icon: Laptop, text: "Live Hands-on Practicals" },
    { icon: UserCheck, text: "Instructor-Led Sessions" },
    { icon: FileCheck, text: "Free Practice Tests" },
    { icon: Layers, text: "Interactive Modules" },
    { icon: Video, text: "Topic-wise Live Recorded Videos" },
    { icon: BookOpen, text: "Online Training Material" },
    { icon: MessageCircle, text: "Trainer Support on WhatsApp" },
  ];

  return (
    <section className="w-full py-14 bg-gradient-to-br from-[#fff4e6] via-[#eef7ff] to-[#e0f2fe]">
    {/* <section className="w-full py-12 bg-[#fff]"> */}
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#0F3E57] leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Online Training with{" "}
          <span className="text-orange-500">Live Hands-on Practical</span>
        </h2>

        {/* Description */}
        <p
          className="mt-3 text-base text-gray-900 font-medium max-w-[800px] leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Live, hands-on online sessions with real-time labs and project
          simulations to help you build practical skills and confidence.
        </p>

        {/* Compact Feature Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Icon size={20} className="text-blue-600" />
                </div>

                <p
                  className="text-sm font-medium text-[#041823] leading-snug"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnlineTraining;
