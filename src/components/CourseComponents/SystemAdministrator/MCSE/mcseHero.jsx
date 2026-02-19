import { useState } from "react";
import mcsc from "../../../../../public/assets/mcse.png";
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

const McseHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "200 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "9,150 Trained Professionals", circle: true },
    { icon: Laptop, text: "MCSE Exam Preparation", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of Training Leadership" },
    { icon: Globe, text: "Global Training Network" },
    { icon: Laptop, text: "Innovative Learning Methods" },
    { icon: User, text: "Expert Instructors" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate Training Excellence" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">
        {/* WATERMARK */}
        <img
          src={mcsc}
          alt="MCSE Logo"
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[680px] opacity-[0.5] pointer-events-none select-none"
        />

        {/* LEFT CONTENT */}
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1
            className="text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
            style={{
              color: theme.darkBlue,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            MCSE Training <br /> Certification Course
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
                MCSE Training Certification Course
              </span>{" "}
              is designed to equip you with the skills needed to become a{" "}
              <span className="font-semibold text-[#0694d1]">
                Microsoft Certified Solutions Expert (MCSE)
              </span>{" "}
              in{" "}
              <span className="font-medium text-[#0F3E57]">
                cloud infrastructure and enterprise systems
              </span>
              . Through expert-led sessions, you’ll gain the ability to design,
              implement, and manage{" "}
              <span className="font-medium text-[#0F3E57]">
                secure, scalable, and highly available IT environments
              </span>{" "}
              using Microsoft technologies.
            </p>

            {/* Paragraph 2 */}
            <p>
              By the end of the course, you'll have the confidence to architect
              and maintain{" "}
              <span className="font-medium text-[#0F3E57]">
                robust on-premises and hybrid cloud solutions
              </span>
              . The MCSE certification not only enhances your professional
              profile but also prepares you for high-demand roles such as{" "}
              <span className="font-semibold text-[#0694d1]">
                Systems Administrator, Cloud Engineer, Infrastructure Architect
              </span>
              , and more.
            </p>

            {/* EXTRA CONTENT — only visible when expanded */}
            {expanded && (
              <>
                <p>
                  This program provides in-depth exposure to{" "}
                  <span className="font-medium text-[#0F3E57]">
                    Windows Server, Active Directory, virtualization,
                    networking, identity management, and hybrid cloud
                    deployments
                  </span>
                  . You will work on real-world scenarios that simulate
                  enterprise environments, helping you gain practical confidence
                  beyond theory.
                </p>

                <p>
                  The course also focuses on{" "}
                  <span className="font-medium text-[#0F3E57]">
                    security best practices, performance optimization, disaster
                    recovery strategies, and infrastructure automation
                  </span>
                  , ensuring you are fully prepared to manage mission-critical
                  IT systems.
                </p>

                <p>
                  With structured exam preparation, guided labs, and career
                  mentoring, you will be ready to pursue opportunities in{" "}
                  <span className="font-semibold text-[#0694d1]">
                    enterprise IT, cloud engineering, infrastructure
                    architecture, and system administration leadership roles
                  </span>
                  .
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
        {/* RIGHT SIDE */}
        <div className="space-y-8 relative z-10 max-w-[520px] ml-auto">
          <CommonCard items={mainCardItems} variant="primary" />
          <CommonCard items={featureCardItems} variant="feature" />
        </div>
      </div>
    </section>
  );
};

export default McseHero;
