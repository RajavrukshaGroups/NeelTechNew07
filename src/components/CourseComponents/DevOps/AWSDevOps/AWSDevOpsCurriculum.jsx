import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AWSDevOpsCurriculum = () => {
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
      title: "Module 1: Introduction to AWS & Cloud Fundamentals",
      objective:
        "Understand cloud fundamentals and get introduced to AWS global infrastructure and pricing.",
      topics: [
        "Cloud Computing: IaaS, PaaS, SaaS",
        "Overview of AWS Platform & Global Infrastructure",
        "AWS Free Tier Account Setup",
        "AWS Management Console Walkthrough",
        "Regions, Availability Zones & Edge Locations",
        "AWS Pricing Models & Billing Dashboard",
        "Setting up Budgets & Alarms",
      ],
    },
    {
      title: "Module 2: Identity & Access Management (IAM)",
      objective:
        "Learn how to manage users, permissions, and secure access in AWS.",
      topics: [
        "IAM Users, Groups, Roles & Policies",
        "Access Control & Permissions",
        "IAM Sign-in URLs & Multi-Factor Authentication (MFA)",
        "Best Practices for IAM Security",
        "Cross-Account Access & Temporary Credentials",
      ],
    },
    {
      title: "Module 3: Networking with Amazon VPC",
      objective:
        "Understand networking fundamentals and configure secure AWS VPC environments.",
      topics: [
        "Basics of Networking (CIDR, Subnets, IP Range)",
        "Default vs Custom VPC",
        "Internet Gateway (IGW), NAT Gateway & NAT Instances",
        "Route Tables & Subnet Association",
        "NACL vs Security Groups",
        "VPC Peering & Traffic Routing",
      ],
    },
    {
      title: "Module 4: Amazon EC2 – Compute Essentials",
      objective:
        "Launch and manage virtual machines using Amazon EC2.",
      topics: [
        "EC2 Overview & Instance Types",
        "Amazon Machine Images (AMI) & Marketplace",
        "Key Pairs & Security Groups",
        "EC2 Lifecycle Management",
        "Elastic IPs & Termination Protection",
        "Dedicated Hosts & Instances",
        "Placement Groups (Cluster, Spread, Partition)",
      ],
    },
    {
      title: "Module 5: EC2 Storage & Data Volumes",
      objective:
        "Manage storage volumes and snapshots in AWS.",
      topics: [
        "EBS Volume Types (gp3, io1/io2, sc1, st1)",
        "Instance Store vs EBS",
        "EBS Lifecycle Management",
        "Snapshots: Creation, Restore, Copy",
        "Cross-AZ & Cross-Region Snapshot Migration",
        "EBS Encryption & KMS",
        "Creating AMIs from Instances",
      ],
    },
    {
      title: "Module 6: Cost Optimization Techniques in AWS",
      objective:
        "Optimize AWS costs using various pricing and monitoring tools.",
      topics: [
        "EC2 Purchase Models (On-Demand, Reserved, Spot)",
        "EC2 Savings Plans",
        "Spot Pricing & Use Cases",
        "Billing & Cost Analysis Tools",
      ],
    },
    {
      title: "Module 7: Load Balancing & Auto Scaling",
      objective:
        "Implement scalable and highly available AWS infrastructure.",
      topics: [
        "Elastic Load Balancing (ELB)",
        "Application Load Balancer (ALB) Setup",
        "Target Groups & Health Checks",
        "Launch Templates & Auto Scaling Groups",
        "Scaling Policies & CloudWatch Integration",
      ],
    },
    {
      title: "Module 8: Object Storage with Amazon S3",
      objective:
        "Store and manage object data securely in AWS S3.",
      topics: [
        "S3 Buckets, Objects & Storage Classes",
        "Versioning, Lifecycle Rules & Policies",
        "Cross-Region Replication (CRR)",
        "Hosting Static Websites in S3",
        "S3 Security & Encryption",
        "SNS Integration for Notifications",
      ],
    },
    {
      title: "Module 9: AWS Databases – RDS & DynamoDB",
      objective:
        "Understand relational and NoSQL database services in AWS.",
      topics: [
        "Overview of RDS & Supported Engines",
        "RDS Multi-AZ Deployment & Failover",
        "Backups, Snapshots & Maintenance Windows",
        "Read Replicas & Performance Monitoring",
        "Introduction to DynamoDB",
        "Data Modeling & Use Cases",
      ],
    },
    {
      title: "Module 10: Serverless & Real-Time Data Processing",
      objective:
        "Build serverless and real-time data processing applications in AWS.",
      topics: [
        "AWS Lambda (Event-driven Functions)",
        "Triggering Lambda (S3, CloudWatch, SNS)",
        "Introduction to Amazon Kinesis",
        "Kinesis Streams & Real-Time Processing",
        "Amazon Redshift Data Warehousing",
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
                      color: "black",
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
                    style={{ backgroundColor: theme.lightOrangeBg }}
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

export default AWSDevOpsCurriculum;