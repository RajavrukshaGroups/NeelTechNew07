import { useState } from "react";
import asureSentinelImg from "../../../../../public/assets/azure_sentinel.webp";
import {
  Users,
  BookOpen,
  Laptop,
  Clock,
  ChevronDown,
  ChevronUp,
  Globe,
  User,
  Building,
  Lightbulb,
} from "lucide-react";
import CommonCard from "../../CommonCard/commonCard";

const AzureSentinelHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0078D4",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "150 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "6,200 Trained Professionals", circle: true },
    { icon: Laptop, text: "Azure Sentinel & SC-200 Exam Prep", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years Cybersecurity Training" },
    { icon: Globe, text: "Global Security Training Network" },
    { icon: Laptop, text: "Hands-on SIEM Labs" },
    { icon: User, text: "Certified Security Experts" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate Cybersecurity Programs" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">

        {/* WATERMARK */}
        <img
          src={asureSentinelImg}
          alt="Azure Sentinel Logo"
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[680px] opacity-[0.12] pointer-events-none select-none"
        />

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1
            className="text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
            style={{
              color: theme.darkBlue,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Azure Sentinel Training <br /> Certification Course
          </h1>

          <div
            className={`text-[18px] leading-relaxed text-[#334155] space-y-6 ${
              expanded ? "" : "line-clamp-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {/* Paragraph 1 */}
            <p>
              <span className="font-semibold text-[#0078D4]">
                Azure Sentinel Training & Certification Course
              </span>{" "}
              is designed to equip you with the expertise needed to become
              proficient in Microsoft’s leading{" "}
              <span className="font-semibold text-[#0078D4]">
                cloud-native SIEM (Security Information and Event Management)
              </span>{" "}
              solution. Through hands-on training and real-world scenarios,
              you'll learn how to detect, investigate, and respond to security
              threats across hybrid and multi-cloud environments using{" "}
              <span className="font-medium text-[#0F3E57]">
                Azure Sentinel
              </span>.
            </p>

            {/* Paragraph 2 */}
            <p>
              By the end of the course, you'll gain confidence in building{" "}
              <span className="font-medium text-[#0F3E57]">
                advanced analytics rules, creating workbooks for visualization,
                integrating threat intelligence
              </span>
              , and automating incident response using playbooks.
            </p>

            {/* Expanded Content */}
            {expanded && (
              <>
                <p>
                  This certification strengthens your cybersecurity expertise
                  and prepares you for high-demand roles such as{" "}
                  <span className="font-semibold text-[#0078D4]">
                    Security Analyst, SOC Engineer, Threat Hunter, Cloud Security Specialist
                  </span>.
                </p>

                <p>
                  Learn from industry experts and accelerate your journey
                  toward becoming an Azure Sentinel professional. Enroll today
                  and safeguard modern IT infrastructures with Microsoft’s
                  intelligent security platform.
                </p>
              </>
            )}
          </div>

          {/* View More / Less */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-[#0078D4] font-medium text-base hover:underline transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {expanded ? "Show Less" : "View More"}
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8 relative z-10 max-w-[520px] ml-auto">
          <CommonCard items={mainCardItems} variant="primary" />
          <CommonCard items={featureCardItems} variant="feature" />
        </div>

      </div>
    </section>
  );
};

export default AzureSentinelHero;