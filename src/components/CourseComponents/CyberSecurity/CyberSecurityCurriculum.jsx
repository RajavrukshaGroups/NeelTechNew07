import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const CyberSecurityCurriculum = () => {
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
      title: "Module 1: Cloud Computing & AWS Fundamentals",
      objective:
        "Understand cloud computing basics and AWS infrastructure essentials for cybersecurity.",
      topics: [
        "Introduction to Cloud Computing (IaaS, PaaS, SaaS)",
        "Overview of AWS (Cyber Security Cloud)",
        "AWS Global Infrastructure: Regions & Availability Zones",
        "Creating a Free Tier AWS Account",
        "Understanding the AWS Console & Support Plans",
        "Setting up Billing Alerts and Budget Notifications",
      ],
    },
    {
      title: "Module 2: Identity and Access Management (IAM)",
      objective:
        "Secure AWS resources through proper identity and access management.",
      topics: [
        "Introduction to IAM: Users, Groups, Roles",
        "IAM Policies and Permissions",
        "Multi-Factor Authentication (MFA)",
        "Best Practices for IAM Security",
      ],
    },
    {
      title: "Module 3: Networking & Virtual Private Cloud (VPC)",
      objective:
        "Build secure and isolated network environments in AWS.",
      topics: [
        "Basics of Networking and IP Addressing",
        "Default vs. Custom VPCs",
        "Subnets, CIDR Blocks",
        "Public vs. Private Subnets",
      ],
    },
    {
      title: "Module 4: VPC Components",
      objective:
        "Configure essential VPC components for secure traffic management.",
      topics: [
        "Route Tables & Internet Gateway",
        "NACLs vs. Security Groups",
        "Customizing Traffic Rules and Access Control",
      ],
    },
    {
      title: "Module 5: EC2 – Elastic Compute Cloud",
      objective:
        "Launch and manage secure virtual servers in AWS.",
      topics: [
        "Virtualization Basics and EC2 Overview",
        "EC2 Instance Types & AMIs",
        "Launch, Manage, and Secure EC2 Instances",
        "Elastic IPs and Key Pairs",
        "Instance Lifecycle & State Management",
      ],
    },
    {
      title: "Module 6: NAT Gateway & VPC Peering",
      objective:
        "Enable secure communication between private and public networks.",
      topics: [
        "Understanding NAT Instances vs. NAT Gateways",
        "Private and Public Network Configuration",
        "VPC Peering: Setup and Routing",
      ],
    },
    {
      title: "Module 7: AWS Storage Services – EBS & Instance Store",
      objective:
        "Manage persistent storage securely in AWS.",
      topics: [
        "Types of AWS Storage: EBS, SSD, HDD",
        "EBS Volume Management: Create, Attach, Modify",
        "EBS vs. Instance Store Volumes",
        "Snapshots and Backup Strategies",
      ],
    },
    {
      title: "Module 8: EC2 Pricing Models",
      objective:
        "Understand cost models and optimize EC2 usage.",
      topics: [
        "On-Demand, Reserved, Spot Instances",
        "Savings Plans: Use Cases & Cost Optimization",
        "Spot Instance Bidding and Management",
      ],
    },
    {
      title: "Module 9: Networking Enhancements",
      objective:
        "Improve availability and performance of AWS networking.",
      topics: [
        "Elastic Network Interface (ENI)",
        "Placement Groups: Cluster, Spread, Partition",
      ],
    },
    {
      title: "Module 10: EBS Snapshots & Migration",
      objective:
        "Backup and migrate EBS volumes efficiently.",
      topics: [
        "Creating and Restoring Snapshots",
        "AZ and Region Migration via Snapshots",
        "Incremental Backup and Snapshot Copying",
      ],
    },
    {
      title: "Module 11: Encryption & Security",
      objective:
        "Secure AWS resources using encryption and key management.",
      topics: [
        "EBS and Snapshot Encryption using KMS",
        "Customer Managed Keys vs. AWS Managed Keys",
        "Encryption in Transit and at Rest",
        "Creating & Managing AMIs",
      ],
    },
    {
      title: "Module 12: Load Balancing & Auto Scaling",
      objective:
        "Design scalable and resilient architectures.",
      topics: [
        "Application Load Balancer (ALB) Configuration",
        "Health Checks, Target Groups",
        "Auto Scaling Groups & Policies",
        "Integration with CloudWatch",
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
          Cyber Security Curriculum
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

export default CyberSecurityCurriculum;