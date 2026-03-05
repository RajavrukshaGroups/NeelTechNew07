import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const CCNACurriculum = () => {
  const theme = {
    darkBlue: "#0F3E57",
    accentOrange: "#F28C28",
    lightOrangeBg: "#fff7ef",
  };

  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      title: "Module 1: Cloud Computing & CCNA Basics",
      objective:
        "Understand core cloud computing concepts including IaaS, PaaS, SaaS models, global infrastructure, regions, availability zones, billing, and support plans.",
      topics: [
        "Cloud Computing Models (IaaS, PaaS, SaaS)",
        "Overview of Cloud Infrastructure",
        "Regions & Availability Zones (AZ)",
        "Account Setup & Management Console",
        "Support Plans & Billing Setup",
        "Budget & Billing Alarm Configuration",
      ],
    },
    {
      title: "Module 2: Identity and Access Management (IAM)",
      objective:
        "Learn how to securely manage users, groups, roles, and permissions to control access within cloud environments.",
      topics: [
        "IAM Concepts",
        "Creating Users & Groups",
        "Policies & Permissions",
        "IAM Sign-in Configuration",
        "Multi-Factor Authentication (MFA)",
      ],
    },
    {
      title: "Module 3: Virtual Private Cloud (VPC)",
      objective:
        "Understand networking fundamentals and learn how to design and configure Virtual Private Cloud environments.",
      topics: [
        "Networking Basics",
        "VPC Fundamentals",
        "CIDR & Subnetting",
        "Default vs Custom VPC",
        "Creating Custom VPC & Subnets",
      ],
    },
    {
      title: "Module 4: VPC Components & Security",
      objective:
        "Configure essential VPC components including routing, gateways, and security controls.",
      topics: [
        "Route Tables (Create & Associate)",
        "Internet Gateway (Create & Attach)",
        "Security Groups (SG) & Rules",
        "Network ACL (NACL) & Rules",
        "Difference Between NACL & Security Groups",
      ],
    },
    {
      title: "Module 5: EC2 – Virtual Servers",
      objective:
        "Gain hands-on experience launching, configuring, and managing EC2 instances in the cloud.",
      topics: [
        "Virtualization Basics",
        "EC2 Overview & Instance Families",
        "Amazon Machine Image (AMI)",
        "Launching & Managing EC2 Instances",
        "Key Pairs & Instance States",
        "Elastic IP & Termination Protection",
      ],
    },
    {
      title: "Module 6: NAT & VPC Peering",
      objective:
        "Understand secure internet access for private instances and configure VPC connectivity.",
      topics: [
        "NAT Concepts & Types",
        "Private vs Public Subnets",
        "Source/Destination Check",
        "VPC Peering Setup",
        "Route Table Configuration",
      ],
    },
    {
      title: "Module 7: Elastic Block Storage (EBS)",
      objective:
        "Learn how to manage block storage volumes, backups, and performance optimization.",
      topics: [
        "EBS Volume Types & Creation",
        "Instance Store Volumes",
        "Volume Modification (Hot Add/Extend)",
        "Backup & SLA Concepts",
      ],
    },
    {
      title: "Module 8: EC2 Purchasing Options",
      objective:
        "Understand cost optimization strategies using various EC2 purchasing models.",
      topics: [
        "On-Demand Instances",
        "Reserved & Convertible Instances",
        "Saving Plans",
        "Spot Instances",
      ],
    },
    {
      title: "Module 9: ENI & Placement Groups",
      objective:
        "Learn advanced networking configurations and performance optimization strategies.",
      topics: [
        "Elastic Network Interface (ENI)",
        "Attaching ENI to EC2",
        "Placement Groups (Cluster, Spread, Partition)",
      ],
    },
    {
      title: "Module 10: EBS Snapshots & Migration",
      objective:
        "Manage data protection and migration across regions using snapshot technologies.",
      topics: [
        "Snapshot Creation & Restore",
        "Incremental Snapshots",
        "Cross-Region Snapshot Copy",
      ],
    },
    {
      title: "Module 11: Encryption & AMI Management",
      objective:
        "Secure cloud resources using encryption mechanisms and create reusable machine images.",
      topics: [
        "Encryption Concepts & KMS",
        "Encrypted Volumes & Snapshots",
        "Snapshot Sharing & Copying",
        "Creating & Managing AMIs",
      ],
    },
    {
      title: "Module 12: Load Balancing & Auto Scaling",
      objective:
        "Ensure high availability and scalability of applications using load balancing and auto scaling.",
      topics: [
        "Load Balancer Types & Setup",
        "Health Checks",
        "Auto Scaling Groups & Policies",
        "CloudWatch Monitoring",
      ],
    },
    {
      title: "Module 13: Storage & Database Services",
      objective:
        "Understand object storage, replication, notifications, and managed database services.",
      topics: [
        "S3 Bucket Management",
        "Versioning & Cross-Region Replication",
        "Static Website Hosting on S3",
        "SNS Configuration",
        "Introduction to RDS & Failover",
      ],
    },
  ];

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <section id="curriculum" className="w-full py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Title */}
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: theme.darkBlue,
          }}
        >
          Course Curriculum
        </h2>

        {/* Accordion */}
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
                {/* Header */}
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

                {/* Content */}
                {/* Content */}
                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-3"
                    style={{
                      backgroundColor: theme.lightOrangeBg,
                    }}
                  >
                    {/* Learning Objective */}
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
                      className="mb-5 text-[15px] md:text-[17px] leading-relaxed text-black-800"
                      style={{ fontFamily: "system-ui", fontSize: "1rem" }}
                    >
                      {module.objective}
                    </p>

                    {/* Topics */}
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
                          className="flex items-start gap-3 text-[15px] md:text-[17px] text-red leading-relaxed"
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

export default CCNACurriculum;
