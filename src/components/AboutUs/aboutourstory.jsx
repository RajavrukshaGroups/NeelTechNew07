import { useState } from "react";
import {
  Calendar,
  Users,
  Award,
  Globe,
  Briefcase,
  Target,
  TrendingUp,
  Building2,
  Network,
  Sparkles,
} from "lucide-react";
import ourstoryimg from "../../../public/assets/story_new.jpeg";

const OurStory = () => {
  const [activeYear, setActiveYear] = useState(null);

  const timelineData = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Founded with a vision to bridge the gap between education and industry requirements.",
      color: "#f28c28",
      metrics: "First batch of students",
    },
    {
      year: "2021",
      title: "Expansion",
      description:
        "Expanded course offerings and onboarded first industry experts.",
      color: "#1C5D8F",
      metrics: "5+ courses · 100+ students",
    },
    {
      year: "2022",
      title: "Growth",
      description:
        "Established reputation for quality training and student success.",
      color: "#f28c28",
      metrics: "10+ experts · 500+ students",
    },
    {
      year: "2023",
      title: "Innovation",
      description:
        "Introduced multiple learning formats to reach more students across India.",
      color: "#1C5D8F",
      metrics: "Live Online · Corporate Workshops",
    },
    {
      year: "2024",
      title: "Leadership",
      description:
        "Trusted training institute with expert faculty and career-focused programs.",
      color: "#f28c28",
      metrics: "20+ experts · 5000+ students",
    },
    {
      year: "2025",
      title: "Pan-India Presence",
      description:
        "Expanded footprint with training centers in major metropolitan cities.",
      color: "#1C5D8F",
      metrics: "10+ cities · 10000+ students",
    },
    {
      year: "2026",
      title: "Center of Excellence",
      description:
        "Launched advanced learning platforms and AI-powered personalized training paths.",
      color: "#f28c28",
      metrics: "50+ courses · 15000+ students",
    },
  ];

  const stats = [
    { value: "2020", label: "Founded", icon: "🏢" },
    { value: "20+", label: "Industry Experts", icon: "👥" },
    { value: "15000+", label: "Students Trained", icon: "🎓" },
    { value: "10+", label: "Cities", icon: "🏙️" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      {/* Header */}
      {/* <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0F3E57] mb-4">
          Our Journey
        </h2>
        <div className="w-20 h-1 bg-[#f28c28] mx-auto"></div>
      </div> */}

      {/* Hero Section */}
      <div className="relative mb-24 md:mb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3E57]/90 to-transparent rounded-2xl md:rounded-3xl z-10"></div>
        <img
          src={ourstoryimg}
          alt="Neel Technologies"
          className="w-full h-[250px] md:h-[320px] object-cover rounded-2xl md:rounded-3xl"
        />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 text-white">
          <p className="text-base md:text-lg font-light tracking-wider mb-3 opacity-80">
            EST. 2020
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            Neel Technologies
          </h3>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mt-3 opacity-90">
            From a small initiative to a premier IT training institute
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mb-24 md:mb-28">
        {/* Timeline Line */}
        <div className="absolute top-8 left-0 w-full h-px bg-gray-200 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="grid grid-cols-2 md:flex md:justify-between gap-8 md:gap-0 relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center md:w-32 lg:w-36"
              onMouseEnter={() => setActiveYear(index)}
              onMouseLeave={() => setActiveYear(null)}
            >
              {/* Year Marker */}
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-medium text-base md:text-lg transition-all duration-300 mb-4 ${
                  activeYear === index ? "scale-110 shadow-lg" : ""
                }`}
                style={{ backgroundColor: item.color }}
              >
                {item.year.slice(-2)}
              </div>

              {/* Year Label */}
              <span className="text-sm md:text-base font-medium text-gray-500 mb-2">
                {item.year}
              </span>

              {/* Title */}
              <span className="text-base md:text-lg font-medium text-[#0F3E57]">
                {item.title}
              </span>

              {/* Tooltip */}
              {activeYear === index && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl p-4 z-30 text-left animate-fadeIn">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <p
                    className="text-sm font-medium mt-3"
                    style={{ color: item.color }}
                  >
                    {item.metrics}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Image Section */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={ourstoryimg}
              alt="Our Story"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3E57]/40 to-transparent"></div>
          </div>

          {/* Year Badges */}
          <div className="absolute -bottom-5 -right-5 flex flex-col gap-3">
            {timelineData.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-3"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span
                  className="text-base font-medium"
                  style={{ color: item.color }}
                >
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Story Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#f28c28]/10 rounded-full">
            <span className="text-sm font-medium text-[#f28c28] uppercase tracking-wider">
              Our Story
            </span>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg md:text-xl">
              <span className="font-semibold text-[#0F3E57]">
                Neel Technologies
              </span>{" "}
              stands as a trusted IT training institute. Just{" "}
              <span className="font-semibold text-[#f28c28]">
                5 years ago in 2020
              </span>
              , it began as a small initiative with a powerful vision — to
              bridge the gap between education and industry.
            </p>

            <p className="text-lg md:text-xl">
              What started with limited resources has evolved into a
              professional training center backed by{" "}
              <span className="font-semibold text-[#f28c28]">
                20+ industry experts
              </span>
              , delivering career-focused programs across multiple learning
              formats.
            </p>

            <p className="text-lg md:text-xl">
              Today, with{" "}
              <span className="font-semibold text-[#f28c28]">
                training centers in 10+ cities
              </span>{" "}
              across India and{" "}
              <span className="font-semibold text-[#f28c28]">
                15,000+ students trained
              </span>
              , we continue to innovate and expand our reach.
            </p>
          </div>

          {/* Quick Timeline */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {timelineData.slice(0, 6).map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-500">{item.year}</span>
                <span className="text-sm font-medium text-[#0F3E57]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-24">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-[#f28c28]/20 transition-all duration-300 hover:shadow-md"
          >
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div className="text-2xl font-semibold text-[#0F3E57]">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -5px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OurStory;
