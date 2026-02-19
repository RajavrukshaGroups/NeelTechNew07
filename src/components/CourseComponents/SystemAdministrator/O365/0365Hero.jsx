import { useState } from "react";
import O365Image from "../../../../../public/assets/O365.png";
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
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import CommonCard from "../../CommonCard/commonCard";

const O365Hero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "200+ Delivered Sessions", circle: true },
    { icon: BookOpen, text: "8,000+ Trained Professionals", circle: true },
    { icon: Laptop, text: "O365 Architect Certification Prep", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: ShieldCheck, text: "Security & Compliance Focus" },
    { icon: Globe, text: "Hybrid & Cloud Architecture" },
    { icon: Laptop, text: "Exchange, SharePoint & Teams Mastery" },
    { icon: User, text: "Expert-Led Sessions" },
    { icon: Building, text: "Enterprise Migration Strategies" },
    { icon: Briefcase, text: "Solution Architect Career Path" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">
        {/* WATERMARK IMAGE */}
        <img
          src={O365Image}
          alt="Microsoft 365"
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[680px] opacity-[0.05] pointer-events-none select-none"
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
            O365 Training <br /> Certification Course
          </h1>

          <div
            className={`text-[18px] leading-relaxed text-[#334155] space-y-6 ${
              expanded ? "" : "line-clamp-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {/* Paragraph 1 */}
            <p>
              <span className="font-semibold text-[#0694d1]">
                O365 Training Certification Course for Solution Architects
              </span>{" "}
              is designed to provide you with in-depth knowledge and hands-on
              expertise in designing, deploying, and managing{" "}
              <span className="font-semibold text-[#0694d1]">
                Microsoft 365 enterprise solutions
              </span>
              . This course covers core services including{" "}
              <span className="font-medium text-[#0F3E57]">
                Exchange Online, SharePoint Online, Microsoft Teams, OneDrive,
                and Azure AD
              </span>
              , with a strong focus on security, compliance, and collaboration.
            </p>

            {/* Paragraph 2 */}
            <p>
              Through expert-led sessions, you’ll learn how to architect
              scalable, secure, and efficient Microsoft 365 environments
              tailored to organizational needs — supporting both{" "}
              <span className="font-medium text-[#0F3E57]">
                hybrid and cloud-only infrastructures
              </span>
              .
            </p>

            {expanded && (
              <>
                <p>
                  By the end of the course, you’ll be well-prepared for key
                  roles such as{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Microsoft 365 Solution Architect, Collaboration Engineer, or
                    Cloud Consultant
                  </span>
                  , gaining the skills required to lead enterprise-scale
                  migrations and modern workplace transformations.
                </p>

                <p>
                  Learn from top-rated mentors and fast-track your journey
                  toward becoming a certified Microsoft 365 expert with hands-on
                  labs and real-world project scenarios.
                </p>

                <p>
                  Enroll today and start building intelligent, connected, and
                  secure digital workplaces powered by Office 365.
                </p>
              </>
            )}
          </div>

          {/* View More / Less */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-[#0694d1] font-medium text-base hover:underline transition-all"
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

export default O365Hero;
