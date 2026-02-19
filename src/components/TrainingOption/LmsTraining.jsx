import LMSVideoImg from "../../../public/assets/LMS.png";
import { Video, RefreshCcw, MonitorPlay, MessageCircle } from "lucide-react";

const LMSVideoPortal = () => {
  const features = [
    { icon: Video, text: "Topic wise Live Recorded Lectures" },
    { icon: RefreshCcw, text: "Upgrade to Online or Classroom Training" },
    { icon: MonitorPlay, text: "LMS updated regularly" },
    { icon: MessageCircle, text: "Online Learning Portal" },
  ];

  return (
    // <section className="w-full py-14 bg-gradient-to-br from-[#fff4e6] via-[#eef7ff] to-[#e0f2fe]">
    <section className="w-full py-14 bg-gradient-to-br from-[#fff4e6] via-[#eef7ff] to-[#e0f2fe]">
      <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#0F3E57] leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Self Paced Learning -{" "}
            <span className="text-orange-500">
              Live Recorded Video Lectures
            </span>
          </h2>

          <p
            className="mt-4 text-base text-gray-700 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            In today’s fast-evolving world, education has been adapted to meet
            the needs of diverse learners. Individuals can now pursue their
            desired education while continuing to work or manage personal
            responsibilities. Our LMS portal enables flexible learning from the
            comfort of your home with structured, practical video sessions.
          </p>

          {/* Feature Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <Icon size={20} className="text-orange-500" />
                  </div>

                  <p
                    className="text-sm font-medium text-[#0F3E57] leading-snug"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Visit Button */}
          <a
            href="https://techskillsvideos.com/courses/power-shell/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#0F3E57] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-500 transition-all duration-300"
          >
            Visit Video Portal →
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={LMSVideoImg}
            alt="LMS Video Portal"
            className="w-full max-w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LMSVideoPortal;
