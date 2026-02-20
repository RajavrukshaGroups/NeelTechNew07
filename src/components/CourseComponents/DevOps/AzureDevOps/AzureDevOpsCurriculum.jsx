import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AzureDevOpsCurriculum = () => {
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
      title: "Module 1: Introduction to Cloud Computing & AWS Fundamentals",
      objective:
        "Understand cloud computing fundamentals and AWS infrastructure basics.",
      topics: [
        "Cloud Computing Models: IaaS, PaaS, SaaS",
        "AWS Global Infrastructure (Regions, AZs, Edge Locations)",
        "AWS Free-Tier Account Setup & Console Walkthrough",
        "Billing, Pricing Models & AWS Support Plans",
      ],
    },
    {
      title: "Module 2: Identity and Access Management (IAM)",
      objective:
        "Manage users, permissions, and secure authentication in AWS.",
      topics: [
        "Create IAM Users, Groups & Policies",
        "Permission Boundaries & IAM Roles",
        "Enable Multi-Factor Authentication (MFA)",
        "IAM Best Practices & Secure Sign-in",
      ],
    },
    {
      title: "Module 3: Amazon VPC - Networking Basics",
      objective:
        "Design and configure secure networking environments in AWS.",
      topics: [
        "Networking Basics: CIDR Blocks & Subnets",
        "Create & Customize VPCs",
        "Public vs Private Subnets",
        "Designing Secure Network Architectures",
      ],
    },
    {
      title: "Module 4: Core VPC Components",
      objective:
        "Configure routing and firewall components within a VPC.",
      topics: [
        "Route Tables & Internet Gateways (IGW)",
        "Security Groups (SGs) & Network ACLs (NACLs)",
        "SGs vs NACLs Comparison",
        "Subnet Association & Firewall Rules",
      ],
    },
    {
      title: "Module 5: EC2 - Compute Service Deep Dive",
      objective:
        "Launch, manage, and optimize EC2 compute resources.",
      topics: [
        "Virtualization & EC2 Instance Families",
        "Launching EC2 with Key Pairs",
        "AMIs, Instance States, Elastic IPs",
        "Termination Protection & Cost Optimization",
      ],
    },
    {
      title: "Module 6: NAT Gateway, NAT Instance & VPC Peering",
      objective:
        "Enable secure communication and internet access within VPC.",
      topics: [
        "NAT Gateway & NAT Instance Setup",
        "VPC Peering Configuration",
        "Updating Route Tables",
        "Source/Destination Checks",
      ],
    },
    {
      title: "Module 7: Storage in AWS - EBS & Instance Store",
      objective:
        "Understand block storage options and persistence strategies.",
      topics: [
        "EBS Volume Types (GP3, IO1, ST1, SC1)",
        "Attach, Resize & Snapshot EBS",
        "EBS vs Instance Store Comparison",
        "SLA & Data Persistence Options",
      ],
    },
    {
      title: "Module 8: EC2 Pricing Models & Cost Optimization",
      objective:
        "Optimize compute costs using AWS pricing models.",
      topics: [
        "On-Demand, Reserved & Spot Instances",
        "EC2 Savings Plans (Standard vs Convertible)",
        "Spot Use Cases & Pricing History",
        "Cost Forecasting & Budget Alerts",
      ],
    },
    {
      title: "Module 9: Networking Enhancements & Placement Groups",
      objective:
        "Improve networking performance and availability.",
      topics: [
        "Elastic Network Interfaces (ENI)",
        "Attach ENIs & Assign IPs",
        "Cluster, Spread & Partition Placement Groups",
        "Fault Tolerance & High Availability",
      ],
    },
    {
      title: "Module 10: EBS Snapshots & Volume Migrations",
      objective:
        "Manage backups and migrate storage across regions.",
      topics: [
        "Create & Manage EBS Snapshots",
        "Cross-AZ & Cross-Region Migration",
        "Restore Volumes from Snapshots",
        "Snapshot Lifecycle Management",
      ],
    },
    {
      title: "Module 11: Data Encryption & KMS",
      objective:
        "Secure AWS resources using encryption and key management.",
      topics: [
        "Encrypt EBS Volumes & Snapshots",
        "Customer Managed vs AWS Managed Keys",
        "Sharing Encrypted Snapshots",
        "Creating & Managing Custom AMIs",
      ],
    },
    {
      title: "Module 12: Load Balancing & Auto Scaling",
      objective:
        "Design scalable and highly available infrastructure.",
      topics: [
        "ELB Types: ALB, NLB, CLB",
        "Target Groups & Health Checks",
        "Auto Scaling Groups & Policies",
        "CloudWatch Integration for Monitoring",
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

export default AzureDevOpsCurriculum;