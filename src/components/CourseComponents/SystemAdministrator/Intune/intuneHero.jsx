import { useState } from "react";
 import intuneImg from "../../../../../public/assets/intune.png";
//import intuneImg from "../../../../../assets/intune.png";
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
  Smartphone,
} from "lucide-react";
import CommonCard from "../../CommonCard/commonCard";

const IntuneHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "150+ Delivered Sessions", circle: true },
    { icon: BookOpen, text: "5,000+ Trained Professionals", circle: true },
    { icon: Laptop, text: "Intune Certification Preparation", circle: true },
    { icon: Clock, text: "30 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: ShieldCheck, text: "Endpoint Security Expertise" },
    { icon: Smartphone, text: "Mobile Device Management (MDM)" },
    { icon: Laptop, text: "Application Deployment & Control" },
    { icon: Globe, text: "Cloud-Based Device Governance" },
    { icon: User, text: "Industry Expert Trainers" },
    { icon: Building, text: "Corporate IT Enablement" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative font-semibold">
        {/* WATERMARK IMAGE */}
        <img
          src={intuneImg}
          alt="Microsoft Intune"
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[680px] opacity-20  pointer-events-none select-none"
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
            Intune Training <br /> Certification Course
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
                Intune Certification Training Course
              </span>{" "}
              is designed to empower IT professionals with the skills needed to
              efficiently manage devices, applications, and security using{" "}
              <span className="font-semibold text-[#0694d1]">
                Microsoft Intune and Microsoft Endpoint Manager
              </span>
              . This course delivers hands-on expertise in modern device
              management, mobile application deployment, compliance policies,
              and endpoint security configuration.
            </p>

            {/* Paragraph 2 */}
            <p>
              Led by industry experts, you'll master device enrollment, policy
              enforcement, update management, and corporate data protection
              across{" "}
              <span className="font-medium text-[#0F3E57]">
                Windows, Android, iOS, and macOS platforms
              </span>
              . You’ll gain practical knowledge to manage both on-premises and
              cloud-based environments efficiently.
            </p>

            {expanded && (
              <>
                <p>
                  This program provides deep exposure to{" "}
                  <span className="font-medium text-[#0F3E57]">
                    Azure AD integration, conditional access, security
                    baselines, endpoint compliance, and mobile device lifecycle
                    management
                  </span>
                  . Real-world labs ensure you understand enterprise-level
                  deployment and governance strategies.
                </p>

                <p>
                  By the end of the course, you’ll confidently step into roles
                  such as{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Endpoint Administrator, MDM Specialist, Intune Consultant,
                    or Modern Workplace Engineer
                  </span>
                  , equipped to support secure and scalable digital workplaces.
                </p>

                <p>
                  With structured certification preparation, guided labs, and
                  mentoring support, you will be fully prepared to manage modern
                  enterprise mobility and security ecosystems.
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

export default IntuneHero;
