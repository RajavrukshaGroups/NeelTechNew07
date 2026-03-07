import { useState } from "react";
import googleCloudImage from "../../../../../public/assets/google_cloud_gcp.png";
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

const GoogleCloudHero = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = {
    primaryBlue: "#1a73e8",
    darkBlue: "#174ea6",
  };

  const mainCardItems = [
    { icon: Users, text: "220 Delivered Sessions", circle: true },
    { icon: BookOpen, text: "8,500 Trained Professionals", circle: true },
    { icon: Laptop, text: "GCP Professional Architect Exam Prep", circle: true },
    { icon: Clock, text: "40 Hours Duration", circle: true },
  ];

  const featureCardItems = [
    { icon: Lightbulb, text: "5+ Years of Cloud Training Leadership" },
    { icon: Globe, text: "Global Training Network" },
    { icon: Laptop, text: "Hands-on Google Cloud Labs" },
    { icon: User, text: "Certified GCP Instructors" },
    { icon: BookOpen, text: "Flexible Learning Options" },
    { icon: Building, text: "Corporate Training Excellence" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full py-20 bg-[#eef4ff] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 relative font-semibold">

        {/* WATERMARK */}
        <img
          src={googleCloudImage}
          alt="Google Cloud Logo"
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
            Google Cloud Training <br /> Certification Course
          </h1>

          <div
            className={`text-[18px] leading-relaxed text-[#334155] space-y-6 ${
              expanded ? "" : "line-clamp-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {/* Paragraph 1 */}
            <p>
              <span className="font-semibold text-[#1a73e8]">
                Google Cloud Training Certification Course
              </span>{" "}
              is designed to prepare you for the{" "}
              <span className="font-semibold text-[#1a73e8]">
                Google Cloud Certified – Professional Cloud Architect
              </span>{" "}
              exam. Through instructor-led sessions, you will gain the
              expertise to architect and deploy secure, scalable cloud
              solutions on{" "}
              <span className="font-medium text-[#174ea6]">
                Google Cloud Platform (GCP)
              </span>.
            </p>

            {/* Paragraph 2 */}
            <p>
              You will learn essential cloud services including{" "}
              <span className="font-medium text-[#174ea6]">
                Compute Engine, VPC, Cloud Storage, Auto-Scaling, Cloud SQL, IAM
              </span>
              . This course equips you to build highly available,
              scalable, and fault-tolerant cloud architectures using
              industry best practices.
            </p>

            {/* Expanded Content */}
            {expanded && (
              <>
                <p>
                  Through practical labs and real-world projects, you'll
                  develop strong expertise in deployment automation,
                  security management, cost optimization, and performance
                  tuning within Google Cloud environments.
                </p>

                <p>
                  Earning this certification enhances your career
                  opportunities and prepares you for roles such as{" "}
                  <span className="font-semibold text-[#1a73e8]">
                    Cloud Engineer, Cloud Architect, DevOps Engineer
                  </span>
                  , and other high-demand cloud roles.
                </p>
              </>
            )}
          </div>

          {/* View More / Less */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-[#1a73e8] font-medium text-base hover:underline transition-all"
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

export default GoogleCloudHero;