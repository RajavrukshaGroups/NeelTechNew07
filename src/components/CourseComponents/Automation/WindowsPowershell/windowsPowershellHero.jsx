import { useState } from "react";
import PowershellImg from "../../../../../public/assets/powershell.png";
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

const WindowsPowershellHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "200 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "9,150 Trained Professionals", circle: true },
    { icon: Laptop, text: "PowerShell & AWS Exam Preparation", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of Training Leadership" },
    { icon: Globe, text: "Global Training Network" },
    { icon: Laptop, text: "Hands-on Cloud Labs" },
    { icon: User, text: "Expert Instructors" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate Training Excellence" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative font-semibold">

        {/* WATERMARK */}
        <img
          src={PowershellImg}
          alt="PowerShell Logo"
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
            PowerShell Training <br /> Certification Course
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
                PowerShell Training Certification Course
              </span>{" "}
              is designed to help you prepare for the{" "}
              <span className="font-semibold text-[#0694d1]">
                AWS Certified Solutions Architect – Associate (SAA-C03)
              </span>{" "}
              exam. Through instructor-led sessions, you will gain the skills
              needed to effectively architect and deploy secure cloud
              environments on{" "}
              <span className="font-medium text-[#0F3E57]">
                Amazon Web Services (AWS)
              </span>.
            </p>

            {/* Paragraph 2 */}
            <p>
              You will learn key cloud computing concepts and gain hands-on
              experience with services such as{" "}
              <span className="font-medium text-[#0F3E57]">
                VPC, S3, EC2, Auto Scaling, RDS
              </span>
              . This course also covers how to create highly scalable,
              highly available, and fault-tolerant architectures using
              PowerShell automation in cloud environments.
            </p>

            {/* Expanded Content */}
            {expanded && (
              <>
                <p>
                  Through practical labs and real-world projects, you'll
                  develop expertise in designing, deploying, and managing
                  scalable cloud solutions. The program focuses on automation,
                  security best practices, and performance optimization.
                </p>

                <p>
                  Earning this certification can significantly boost your
                  career prospects and prepare you for high-demand roles such
                  as{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Cloud Engineer, Solutions Architect, DevOps Engineer
                  </span>
                  , and other cloud-centric careers.
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

export default WindowsPowershellHero;
