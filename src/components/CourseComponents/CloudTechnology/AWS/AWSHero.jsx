import { useState } from "react";
import awsImg from "../../../../../public/assets/aws_solution_tech.png";
import {
  Users,
  BookOpen,
  Laptop,
  Clock,
  ChevronDown,
  ChevronUp,
  Globe,
  Server,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import CommonCard from "../../CommonCard/commonCard";

const AWSHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryOrange: "#FF9900",
    darkBlue: "#0F3E57",
  };

  const mainCardItems = [
    { icon: Users, text: "200 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "8,000+ Trained Professionals", circle: true },
    { icon: Laptop, text: "SAA-C03 Certification Prep", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "Cloud Architecture Mastery" },
    { icon: Globe, text: "Globally Recognized Certification" },
    { icon: Server, text: "Hands-on AWS Labs" },
    { icon: ShieldCheck, text: "Secure & Scalable Design" },
    { icon: BookOpen, text: "Exam-Focused Curriculum" },
    { icon: Laptop, text: "Real-World Projects" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#f3f8fc] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative">
        
        {/* WATERMARK */}
        <img
          src={awsImg}
          alt="AWS Solutions Architect Badge"
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
            AWS Solutions Architect <br /> Certification Course
          </h1>

          <div
            className={`text-[18px] leading-relaxed text-[#334155] space-y-6 ${
              expanded ? "" : "line-clamp-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {/* Paragraph 1 */}
            <p>
              <span className="font-semibold text-[#FF9900]">
                AWS Certification Course
              </span>{" "}
              is designed to prepare you for the{" "}
              <span className="font-semibold text-[#FF9900]">
                AWS Certified Solutions Architect – Associate (SAA-C03)
              </span>{" "}
              exam. Through expert-led sessions, you'll gain the skills to
              design scalable, highly available, and fault-tolerant cloud
              solutions on AWS.
            </p>

            {/* Paragraph 2 */}
            <p>
              You will master core cloud architecture concepts including{" "}
              <span className="font-medium text-[#0F3E57]">
                EC2, S3, RDS, VPC, IAM, Auto Scaling, Load Balancing, and
                serverless technologies
              </span>. The course focuses on designing cost-optimized, secure,
              and resilient AWS infrastructures.
            </p>

            {expanded && (
              <>
                <p>
                  With hands-on labs and real-world architecture scenarios,
                  you’ll develop practical expertise in deploying applications,
                  managing networking configurations, and implementing AWS
                  security best practices.
                </p>

                <p>
                  Learn from industry-certified cloud experts and become a{" "}
                  <span className="font-semibold text-[#FF9900]">
                    Certified AWS Solutions Architect
                  </span>.
                  Enroll today and accelerate your journey into high-demand
                  cloud roles.
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

export default AWSHero;
