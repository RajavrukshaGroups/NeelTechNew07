import { useState } from "react";
import pythonImg from "../../../../../public/assets/python.png";
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

const PythonHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#0694d1",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "180 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "8,200 Trained Professionals", circle: true },
    { icon: Laptop, text: "AWS SAA-C03 Preparation", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "Top-Rated Mentors" },
    { icon: Globe, text: "Global Learning Network" },
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
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">

        {/* WATERMARK */}
        <img
          src={pythonImg}
          alt="Python Logo"
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
            Python Training <br /> Certification Course
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
                Python Training Certification Course
              </span>{" "}
              is designed to prepare you for the{" "}
              <span className="font-semibold text-[#0694d1]">
                Certified Solutions Architect – Associate (SAA-C03)
              </span>{" "}
              exam. Through instructor-led sessions, you’ll gain the skills
              needed to architect and deploy secure, scalable cloud environments
              on{" "}
              <span className="font-medium text-[#0F3E57]">
                Amazon Web Services (AWS)
              </span>.
            </p>

            {/* Paragraph 2 */}
            <p>
              You will learn key concepts of cloud computing, including{" "}
              <span className="font-medium text-[#0F3E57]">
                VPC, S3, EC2, Auto Scaling, RDS
              </span>{" "}
              and more. The course focuses on building highly available,
              fault-tolerant, and scalable cloud solutions using various AWS
              services.
            </p>

            {expanded && (
              <>
                <p>
                  With hands-on labs and real-world projects, you’ll develop
                  practical expertise in designing and managing cloud
                  infrastructure. This certification not only boosts your career
                  prospects but also equips you for cloud-centric roles across
                  diverse industries.
                </p>

                <p>
                  Learn from top-rated mentors and become a{" "}
                  <span className="font-semibold text-[#0694d1]">
                    Certified Solutions Architect
                  </span>.
                  Enroll today and take the first step toward a successful
                  career in cloud computing.
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

export default PythonHero;
