import { useState } from "react";
import AWSDevOpsImg from "../../../../../public/assets/aws_devops.png";
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

const AWSDevOpsHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryOrange: "#FF9900",
    darkBlue: "#232F3E",
  };

  const mainCardItems = [
    { icon: Users, text: "250 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "10,200 Trained Professionals", circle: true },
    { icon: Laptop, text: "AWS DevOps Engineer Professional Exam Prep", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of DevOps Training Leadership" },
    { icon: Globe, text: "Global Cloud Training Network" },
    { icon: Laptop, text: "Hands-on AWS Labs & CI/CD Pipelines" },
    { icon: User, text: "AWS Certified DevOps Experts" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Enterprise DevOps Programs" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative font-semibold">

        {/* WATERMARK */}
        <img
          src={AWSDevOpsImg}
          alt="AWS DevOps Logo"
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
            AWS-DevOps Training <br /> Certification Course
          </h1>

          <div
            className={`text-[18px] leading-relaxed text-[#334155] space-y-6 ${
              expanded ? "" : "line-clamp-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>
              Master the skills required to become a certified{" "}
              <span className="font-semibold text-[#FF9900]">
                AWS DevOps Engineer – Professional
              </span>{" "}
              through live instructor-led sessions. Learn to design, deploy,
              and manage secure, scalable, and fault-tolerant applications on{" "}
              <span className="font-medium text-[#232F3E]">
                Amazon Web Services (AWS)
              </span>.
            </p>

            <p>
              This course covers core AWS services including{" "}
              <span className="font-medium text-[#232F3E]">
                EC2, S3, VPC, Auto Scaling, RDS, CloudFormation, CodePipeline
              </span>{" "}
              and more. Gain hands-on experience through practical labs and
              real-world projects to build robust DevOps pipelines.
            </p>

            {expanded && (
              <>
                <p>
                  Learn CI/CD automation, Infrastructure as Code (IaC),
                  monitoring, logging, and high-availability strategies using
                  AWS best practices.
                </p>

                <p>
                  Prepare for high-demand roles such as{" "}
                  <span className="font-semibold text-[#FF9900]">
                    DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE)
                  </span>{" "}
                  and other advanced cloud-focused positions.
                </p>
              </>
            )}
          </div>

          {/* View More / Less */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-[#FF9900] font-medium text-base hover:underline transition-all"
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

export default AWSDevOpsHero;