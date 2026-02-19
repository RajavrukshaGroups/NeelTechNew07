import { useState } from "react";
import entraImg from "../../../../../public/assets/entra_id.jpg";
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

const EntraIDHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "150 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "6,500 Trained Professionals", circle: true },
    { icon: Laptop, text: "SC-300 Certification Prep", circle: true },
    { icon: Clock, text: "35 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "Identity & Access Expertise" },
    { icon: Globe, text: "Hybrid & Cloud Identity Solutions" },
    { icon: Laptop, text: "Hands-on Security Labs" },
    { icon: User, text: "Certified Microsoft Trainers" },
    { icon: BookOpen, text: "Exam-Focused Curriculum" },
    { icon: Building, text: "Enterprise IAM Implementation" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">

        {/* WATERMARK */}
        <img
          src={entraImg}
          alt="Microsoft Entra ID Logo"
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[680px] opacity-[0.15] pointer-events-none select-none"
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
            Microsoft Entra ID <br /> Certification Course
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
                Microsoft Entra ID Certification Course
              </span>{" "}
              is designed to prepare you for the{" "}
              <span className="font-semibold text-[#0694d1]">
                SC-300 Identity and Access Administrator
              </span>{" "}
              exam. Through expert-led training, you’ll gain the skills needed
              to manage secure identities and access across modern cloud and
              hybrid environments.
            </p>

            {/* Paragraph 2 */}
            <p>
              You will learn core identity management concepts including{" "}
              <span className="font-medium text-[#0F3E57]">
                authentication, conditional access, RBAC, identity governance,
                multi-factor authentication (MFA), and hybrid identity
                integration
              </span>. The course focuses on implementing enterprise-grade
              identity and access management solutions.
            </p>

            {expanded && (
              <>
                <p>
                  With hands-on labs and real-world security scenarios, you’ll
                  develop practical expertise in configuring Microsoft Entra ID,
                  securing cloud applications, and protecting organizational
                  resources.
                </p>

                <p>
                  Learn from top-rated mentors and become a{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Certified Identity & Access Administrator
                  </span>.
                  Enroll today and take the next step toward a successful career
                  in cloud security and identity management.
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

export default EntraIDHero;
