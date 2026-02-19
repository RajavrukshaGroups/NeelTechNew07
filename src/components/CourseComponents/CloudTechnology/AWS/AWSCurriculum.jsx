import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AWSCurriculum = () => {
  const theme = {
    darkBlue: "#0F3E57",
    accentOrange: "#F28C28",
    lightOrangeBg: "#fff7ef",
  };

  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const modules = [
    {
      title: "Module 1: Introduction to Cloud Computing & AWS",
      objective:
        "Understand cloud computing fundamentals and the core concepts of Amazon Web Services (AWS).",
      topics: [
        "What is Cloud Computing?",
        "Types of Cloud Models (Public, Private, Hybrid)",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Introduction to AWS Global Infrastructure",
        "Regions, Availability Zones & Edge Locations",
        "AWS Management Console Overview",
      ],
    },
    {
      title: "Module 2: AWS Identity and Access Management (IAM)",
      objective:
        "Learn how to securely manage users, roles, and permissions in AWS.",
      topics: [
        "Creating and Managing IAM Users",
        "IAM Groups and Policies",
        "Understanding IAM Roles",
        "Permission Policies and JSON structure",
        "Multi-Factor Authentication (MFA)",
        "Best Practices for Securing AWS Accounts",
      ],
    },
    {
      title: "Module 3: Amazon EC2 (Elastic Compute Cloud)",
      objective:
        "Deploy and manage virtual servers using Amazon EC2.",
      topics: [
        "Launching EC2 Instances",
        "Instance Types and Pricing Models",
        "Security Groups and Key Pairs",
        "Elastic IP and Networking Basics",
        "Monitoring with CloudWatch",
        "EC2 Auto Scaling Basics",
      ],
    },
    {
      title: "Module 4: Amazon S3 (Simple Storage Service)",
      objective:
        "Understand cloud storage concepts and manage data using Amazon S3.",
      topics: [
        "Creating and Managing S3 Buckets",
        "Storage Classes (Standard, IA, Glacier)",
        "Bucket Policies and Access Control",
        "Versioning and Lifecycle Policies",
        "Static Website Hosting on S3",
        "Data Encryption in S3",
      ],
    },
    {
      title: "Module 5: Virtual Private Cloud (VPC)",
      objective:
        "Learn how to design and configure secure networking in AWS.",
      topics: [
        "Introduction to VPC",
        "Subnets (Public & Private)",
        "Route Tables and Internet Gateway",
        "NAT Gateway and Bastion Host",
        "Network ACLs vs Security Groups",
        "VPC Peering Basics",
      ],
    },
    {
      title: "Module 6: Databases in AWS",
      objective:
        "Explore database services offered by AWS and their use cases.",
      topics: [
        "Introduction to Amazon RDS",
        "Creating and Managing RDS Instances",
        "Understanding Multi-AZ Deployment",
        "Introduction to DynamoDB",
        "Backup and Snapshot Management",
        "Database Security Best Practices",
      ],
    },
    {
      title: "Module 7: Load Balancing & Auto Scaling",
      objective:
        "Ensure high availability and scalability of applications in AWS.",
      topics: [
        "Elastic Load Balancer (ELB) Overview",
        "Application vs Network Load Balancer",
        "Creating Auto Scaling Groups",
        "Health Checks and Scaling Policies",
        "High Availability Architecture",
      ],
    },
    {
      title: "Module 8: Monitoring & Logging",
      objective:
        "Monitor AWS resources and maintain operational visibility.",
      topics: [
        "Amazon CloudWatch Metrics and Logs",
        "Setting Up Alarms",
        "AWS CloudTrail Overview",
        "Monitoring EC2 and RDS",
        "Cost Monitoring and Budgets",
      ],
    },
    {
      title: "Module 9: AWS Security & Best Practices",
      objective:
        "Implement security best practices to protect AWS environments.",
      topics: [
        "Shared Responsibility Model",
        "Securing S3 and EC2",
        "AWS Shield and WAF Overview",
        "Encryption in Transit and At Rest",
        "Identity Federation Basics",
        "Compliance and Governance",
      ],
    },
    {
      title: "Module 10: Deployment & DevOps Basics",
      objective:
        "Understand deployment strategies and automation in AWS.",
      topics: [
        "Introduction to AWS Elastic Beanstalk",
        "Basics of AWS CloudFormation",
        "CI/CD Concepts in AWS",
        "Introduction to AWS CodePipeline",
        "Infrastructure as Code (IaC) Overview",
      ],
    },
  ];

  return (
    <section id="curriculum" className="w-full py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: theme.darkBlue,
          }}
        >
          Course Curriculum
        </h2>

        <div className="space-y-4">
          {modules.map((module, index) => {
            const isOpen = activeModule === index;

            return (
              <div
                key={index}
                className="rounded-xl border transition-all duration-300"
                style={{
                  borderColor: isOpen ? theme.accentOrange : "#e5e7eb",
                }}
              >
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span
                    className="text-sm md:text-base font-semibold"
                    style={{
                      color: theme.darkBlue,
                      fontFamily: "Montserrat",
                    }}
                  >
                    {module.title}
                  </span>

                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{
                      backgroundColor: isOpen
                        ? theme.accentOrange
                        : theme.darkBlue,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={16} className="text-white" />
                    ) : (
                      <Plus size={16} className="text-white" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-3"
                    style={{
                      backgroundColor: theme.lightOrangeBg,
                    }}
                  >
                    <p
                      className="font-semibold mb-2 text-base md:text-lg"
                      style={{
                        color: theme.darkBlue,
                        fontFamily: "serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      Learning Objective:
                    </p>

                    <p
                      className="mb-5 text-[15px] md:text-[17px] leading-relaxed"
                      style={{ fontFamily: "system-ui", fontSize: "1rem" }}
                    >
                      {module.objective}
                    </p>

                    <p
                      className="font-semibold mb-3 text-base md:text-lg"
                      style={{
                        color: theme.darkBlue,
                        fontFamily: "serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      Topics Covered:
                    </p>

                    <ul className="space-y-3">
                      {module.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[15px] md:text-[17px] leading-relaxed"
                          style={{ fontFamily: "system-ui", fontSize: "1rem" }}
                        >
                          <span
                            className="mt-2 w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: theme.accentOrange,
                            }}
                          ></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AWSCurriculum;
