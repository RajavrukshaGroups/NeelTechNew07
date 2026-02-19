import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const O365Curriculum = () => {
  const theme = {
    darkBlue: "#0F3E57",
    accentOrange: "#F28C28",
    lightOrangeBg: "#fff7ef",
  };

  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      title: "Module 1: Introduction to Microsoft 365",
      objective:
        "Understand Microsoft 365 fundamentals, plans, pricing models, and how cloud-based collaboration differs from traditional on-premise solutions.",
      topics: [
        "Overview of Microsoft 365 (formerly Office 365)",
        "Key features and benefits",
        "Microsoft 365 plans and pricing",
        "Comparison with traditional on-premise solutions",
        "Navigating the Microsoft 365 Admin Center",
      ],
    },
    {
      title: "Module 2: Microsoft 365 Identity and Access Management",
      objective:
        "Learn identity models, Azure AD fundamentals, and secure access control using RBAC, SSPR, and MFA.",
      topics: [
        "Azure Active Directory (Azure AD) fundamentals",
        "Identity models: Cloud-only, Hybrid, and Federated",
        "User and group management",
        "Role-Based Access Control (RBAC)",
        "Self-service password reset (SSPR) and MFA",
      ],
    },
    {
      title: "Module 3: Microsoft 365 Core Services Overview",
      objective:
        "Explore Microsoft 365 core collaboration services and understand how they integrate within enterprise environments.",
      topics: [
        "Exchange Online",
        "SharePoint Online",
        "Microsoft Teams",
        "OneDrive for Business",
        "Microsoft Lists, Planner, and Forms",
      ],
    },
    {
      title: "Module 4: Exchange Online Administration",
      objective:
        "Gain hands-on experience managing mailboxes, email security, retention policies, and mail flow configuration.",
      topics: [
        "Mailbox types: User, Shared, Resource",
        "Managing recipients and distribution groups",
        "Email flow and protection",
        "Retention policies and archiving",
        "Anti-spam and anti-malware configuration",
      ],
    },
    {
      title: "Module 5: SharePoint Online Administration",
      objective:
        "Learn to manage SharePoint architecture, site collections, permissions, document libraries, and external sharing.",
      topics: [
        "SharePoint architecture and site types",
        "Managing site collections and permissions",
        "Document libraries and metadata",
        "External sharing and access control",
        "SharePoint Lists and workflows",
      ],
    },
    {
      title: "Module 6: Microsoft Teams and Collaboration Tools",
      objective:
        "Configure and manage Microsoft Teams architecture, governance policies, and integration with other M365 services.",
      topics: [
        "Teams architecture and configuration",
        "Creating and managing teams and channels",
        "Teams policies and governance",
        "Integration with other M365 services",
        "Teams voice and phone system basics",
      ],
    },
    {
      title: "Module 7: OneDrive for Business",
      objective:
        "Understand file synchronization, compliance, access control, and troubleshooting within OneDrive environments.",
      topics: [
        "OneDrive vs. SharePoint",
        "File synchronization and backup",
        "Access control and sharing",
        "Compliance and DLP for OneDrive",
        "Recovery and troubleshooting",
      ],
    },
    {
      title: "Module 8: Microsoft 365 Security and Compliance",
      objective:
        "Implement enterprise-level security using Defender, DLP, sensitivity labels, and compliance monitoring tools.",
      topics: [
        "Microsoft Defender for Office 365",
        "Data Loss Prevention (DLP)",
        "Information protection and sensitivity labels",
        "Compliance Manager and Secure Score",
        "Insider risk management and audit logs",
      ],
    },
    {
      title: "Module 9: Device and App Management with Intune",
      objective:
        "Manage enterprise devices and applications using Microsoft Intune and Endpoint Manager.",
      topics: [
        "Introduction to Microsoft Intune and Endpoint Manager",
        "Managing apps and updates",
        "Compliance policies and Conditional Access",
        "Mobile Device Management (MDM) overview",
        "Integration with Microsoft Defender",
      ],
    },
    {
      title: "Module 10: Microsoft 365 Reporting and Monitoring",
      objective:
        "Monitor service usage, generate reports, track audit logs, and troubleshoot enterprise Microsoft 365 environments.",
      topics: [
        "Using the Microsoft 365 Reports Dashboard",
        "Exchange, SharePoint, and Teams usage reports",
        "Audit logs and activity alerts",
        "Troubleshooting tools and message trace",
      ],
    },
  ];

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

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

                    <p className="mb-5 text-[15px] md:text-[17px] leading-relaxed">
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

export default O365Curriculum;
