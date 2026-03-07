import { useState } from "react";
import CyberSecurityHeroImg from "../../../../public/assets/cyber_security.png";
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
import CommonCard from "../CommonCard/commonCard";

const CyberSecurityHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryPurple: "#6B5B95",
    darkBlue: "#1F2937",
  };

  const mainCardItems = [
    { icon: Users, text: "200 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "8,500 Trained Professionals", circle: true },
    { icon: Laptop, text: "Cyber Security Certification Exam Prep", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of Cybersecurity Training" },
    { icon: Globe, text: "Global Security Training Network" },
    { icon: Laptop, text: "Hands-on Labs & Threat Simulations" },
    { icon: User, text: "Expert Cybersecurity Instructors" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate Security Programs" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef6fb] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative font-semibold">

        {/* WATERMARK */}
        <img
          src={CyberSecurityHeroImg}
          alt="Cyber Security Logo"
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
            CYBER SECURITY Training <br /> Certification Course
          </h1>

          <div
            className={`text-[18px] leading-relaxed text-[#334155] space-y-6 ${
              expanded ? "" : "line-clamp-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>
              Our <span className="font-semibold text-[#6B5B95]">Cyber Security Certification Training</span> is designed to prepare you for the <span className="font-semibold text-[#6B5B95]">Certified Solutions Architect – Associate (SAA-C03)</span> exam. With <span className="font-medium text-[#1F2937]">instructor-led live sessions</span>, you’ll learn to design and deploy secure, scalable cloud environments on <span className="font-medium text-[#1F2937]">Amazon Web Services (AWS)</span>.
            </p>

            <p>
              This course covers key topics such as <span className="font-medium text-[#1F2937]">Cloud Computing, VPC, S3, EC2, Auto Scaling, RDS</span> and more. Gain hands-on experience with various AWS services to build <span className="font-semibold text-[#6B5B95]">highly scalable, available, and fault-tolerant architectures</span>.
            </p>

            {expanded && (
              <>
                <p>
                  Through <span className="font-medium text-[#1F2937]">real-world projects and guided labs</span>, you’ll develop practical skills in designing, deploying, and managing cloud-based security solutions.
                </p>

                <p>
                  This certification significantly boosts your career prospects, preparing you for high-demand <span className="font-semibold text-[#6B5B95]">cloud security roles</span> across industries.
                </p>
              </>
            )}
          </div>

          {/* View More / Less */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-[#6B5B95] font-medium text-base hover:underline transition-all"
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

export default CyberSecurityHero;