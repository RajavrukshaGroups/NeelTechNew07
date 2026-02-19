import linuxImg from "../../../../../public/assets/linux.png";
import { useState } from "react";
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

const LinuxHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  /* ---------- MAIN STATS ---------- */
  const mainCardItems = [
    { icon: Users, text: "200+ Delivered Sessions", circle: true },
    { icon: BookOpen, text: "9,000+ Trained Professionals", circle: true },
    { icon: Laptop, text: "RHEL & Enterprise Focused", circle: true },
    { icon: Clock, text: "45 Hours Duration", circle: true },
  ];

  /* ---------- FEATURE HIGHLIGHTS ---------- */
  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of Linux Training Expertise" },
    { icon: Globe, text: "Global Enterprise Exposure" },
    { icon: Laptop, text: "Hands-on Real Server Labs" },
    { icon: User, text: "Certified Linux Instructors" },
    { icon: BookOpen, text: "Flexible Learning Modes" },
    { icon: Building, text: "Corporate Training Available" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">
        {/* WATERMARK IMAGE */}
        <img
          src={linuxImg}
          alt="Linux Logo"
          className="absolute left-10 top-28 w-[420px] opacity-[0.4] pointer-events-none select-none"
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
            Linux Training <br /> Certification Course
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
                Linux Certification Training Course
              </span>{" "}
              is designed to equip you with the skills needed to administer,
              secure, and automate enterprise-grade Linux environments, with a
              special focus on{" "}
              <span className="font-semibold text-[#0694d1]">
                Red Hat Enterprise Linux (RHEL)
              </span>{" "}
              best practices. Through expert-led sessions, you’ll learn to
              install, configure, and manage reliable, scalable server
              infrastructures powering modern data centers and cloud platforms.
            </p>

            {/* Paragraph 2 */}
            <p>
              This comprehensive program covers essential Linux administration
              topics such as{" "}
              <span className="font-medium text-[#0F3E57]">
                system architecture, file-system & storage management, user and
                permission handling, networking, firewalls, SELinux, and package
                management with YUM/DNF
              </span>
              . You will also work with{" "}
              <span className="font-medium text-[#0F3E57]">
                systemd services, shell scripting, and automation using Ansible
              </span>
              , reinforced through real-world projects and hands-on labs.
            </p>

            {/* EXTRA CONTENT */}
            {expanded && (
              <>
                <p>
                  By the end of the course, you will confidently deploy and
                  maintain{" "}
                  <span className="font-medium text-[#0F3E57]">
                    secure, high-availability Linux servers
                  </span>
                  , troubleshoot production issues, and automate routine system
                  administration tasks.
                </p>

                <p>
                  Linux professionals are in high demand across industries
                  including cloud computing, DevOps, cybersecurity, and system
                  administration. This training prepares you for roles such as{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Linux Administrator, DevOps Engineer, Site Reliability
                    Engineer (SRE), Cloud Operations Engineer, and
                    Infrastructure Engineer
                  </span>
                  .
                </p>

                <p>
                  With strong practical exposure, structured certification
                  preparation, and enterprise-level lab experience, this course
                  positions you for significant career growth, salary
                  advancement, and global job opportunities.
                </p>
              </>
            )}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-[#0694d1] font-medium text-base hover:underline transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {expanded ? "Show Less" : "View More"}
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-8 relative z-10 max-w-[520px] ml-auto">
          <CommonCard items={mainCardItems} variant="primary" />
          <CommonCard items={featureCardItems} variant="feature" />
        </div>
      </div>
    </section>
  );
};

export default LinuxHero;
