import { useState } from "react";
import azureImg from "../../../../../public/assets/azure.png";
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

const MicrosoftAzureHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0078D4",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "150 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "6,500 Trained Professionals", circle: true },
    { icon: Laptop, text: "AZ-305 Exam Preparation", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "Top-Rated Cloud Mentors" },
    { icon: Globe, text: "Global Learning Network" },
    { icon: Laptop, text: "Hands-on Azure Labs" },
    { icon: User, text: "Certified Azure Experts" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate Cloud Training" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">

        {/* WATERMARK */}
        <img
          src={azureImg}
          alt="Azure Logo"
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
            Microsoft Azure Training <br /> Certification Course
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
                Microsoft Azure Training Certification Course
              </span>{" "}
              is designed to prepare you for the{" "}
              <span className="font-semibold text-[#0078D4]">
                Microsoft Certified: Azure Solutions Architect Expert (AZ-305)
              </span>{" "}
              certification. Through instructor-led sessions, you’ll gain the
              skills required to design and deploy secure, scalable cloud
              environments on{" "}
              <span className="font-medium text-[#0F3E57]">
                Microsoft Azure
              </span>.
            </p>

            {/* Paragraph 2 */}
            <p>
              You will learn key Azure services including{" "}
              <span className="font-medium text-[#0F3E57]">
                Virtual Networks (VNet), Blob Storage, Virtual Machines (VMs),
                Azure SQL Database, Autoscaling
              </span>{" "}
              and more. The course focuses on building highly available,
              fault-tolerant, and enterprise-grade cloud architectures.
            </p>

            {expanded && (
              <>
                <p>
                  With hands-on labs and real-world projects, you’ll develop
                  practical expertise in managing identity, networking,
                  security, storage, and governance across Azure environments.
                </p>

                <p>
                  Learn from certified cloud architects and become a{" "}
                  <span className="font-semibold text-[#0078D4]">
                    Microsoft Certified Azure Solutions Architect
                  </span>.
                  Enroll today and accelerate your cloud career.
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

export default MicrosoftAzureHero;
