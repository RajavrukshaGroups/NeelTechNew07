import { useState } from "react";
import ccnaImg from "../../../../../public/assets/ccna.png";
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

const CCNAHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "200+ Delivered Sessions", circle: true },
    { icon: BookOpen, text: "9,150+ Trained Professionals", circle: true },
    { icon: Laptop, text: "CCNA (200-301) Exam Preparation", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of Networking Training Expertise" },
    { icon: Globe, text: "Global Training Network" },
    { icon: Laptop, text: "Hands-on Lab Based Learning" },
    { icon: User, text: "Cisco Certified Instructors" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate & Enterprise Training" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden font-semibold"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">
        {/* WATERMARK */}
        <img
          src={ccnaImg}
          alt="CCNA Certification Logo"
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[650px] opacity-[0.4] pointer-events-none select-none"
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
            CCNA Training <br /> Certification Course
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
                CCNA Training Certification Course
              </span>{" "}
              prepares you for the{" "}
              <span className="font-semibold text-[#0694d1]">
                Cisco Certified Network Associate (200-301)
              </span>{" "}
              certification exam. This program equips you with strong
              foundational networking skills required to design, configure,
              manage, and troubleshoot enterprise networks.
            </p>

            {/* Paragraph 2 */}
            <p>
              Through expert-led sessions and practical labs, you will master
              core networking concepts such as{" "}
              <span className="font-medium text-[#0F3E57]">
                routing and switching, IP addressing and subnetting, VLANs,
                network security, wireless networking, and automation basics
              </span>
              . You will also gain hands-on experience working with Cisco
              routers and switches in real-world scenarios.
            </p>

            {/* EXTRA CONTENT */}
            {expanded && (
              <>
                <p>
                  The course provides in-depth coverage of networking protocols
                  including{" "}
                  <span className="font-medium text-[#0F3E57]">
                    OSPF, EIGRP, TCP/IP, ACLs, NAT, and WAN technologies
                  </span>
                  . Practical labs ensure that you develop confidence in
                  configuring and managing network infrastructure in enterprise
                  environments.
                </p>

                <p>
                  With structured exam preparation, mock tests, and guided lab
                  sessions, you will be fully prepared to pass the CCNA exam and
                  pursue career roles such as{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Network Administrator, Network Engineer, Technical Support
                    Engineer, and IT Infrastructure Specialist
                  </span>
                  .
                </p>

                <p>
                  CCNA certification significantly enhances your career
                  prospects by validating your networking expertise and opening
                  doors to high-demand IT networking opportunities globally.
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

export default CCNAHero;
