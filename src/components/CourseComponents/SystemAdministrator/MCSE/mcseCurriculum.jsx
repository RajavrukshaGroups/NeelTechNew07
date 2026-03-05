import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const McseCurriculum = () => {
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
      title:
        "Module 1: Microsoft Server Fundamentals, Workgroup & Domain Environments",
      objective:
        "This module introduces the foundational concepts of servers, highlighting their purpose, types, and the differences between workgroup and domain environments.",
      topics: [
        "Introduction to Servers and Their Purpose",
        "Differences Between Client and Server Operating Systems",
        "Overview of Workgroup vs. Domain Models",
        "Steps to Set Up a Domain Environment",
        "Key Differences Between Workgroup and Domain Networks",
        "Common Server Roles and Their Functions",
        "Basic Server Installation Process",
        "Comparing Server Core and Server GUI Modes",
      ],
    },
    {
      title: "Module 2: Installing and Configuring Windows Server",
      objective:
        "Learn the step-by-step process of installing Windows Server and configuring essential system settings.",
      topics: [
        "Installing Windows Server (manual & unattended)",
        "Post-installation configuration (hostname, IP, etc.)",
        "Understanding system properties",
        "Installing and managing Server Roles and Features",
        "Windows Admin Center and Server Manager",
        "Updating and patching the server",
      ],
    },
    {
      title: "Module 3: Active Directory Domain Services (AD DS)",
      objective:
        "Gain knowledge of Active Directory, its structure, and how to set up and manage a domain.",
      topics: [
        "What is Active Directory?",
        "Installing AD DS and promoting a server to Domain Controller",
        "Forests, Domains, and Organizational Units (OUs)",
        "Adding additional domain controllers",
        "Basic AD structure: users, computers, groups",
        "Introduction to FSMO roles",
      ],
    },
    {
      title: "Module 4: User and Group Management in Active Directory",
      objective:
        "Understand how to manage users, groups, and computer accounts in AD.",
      topics: [
        "Creating and managing AD user accounts",
        "Managing computer objects in AD",
        "Group types and scopes (Security vs Distribution)",
        "Best practices in Group Management (AGDLP model)",
        "Managing OUs and delegation",
      ],
    },
    {
      title: "Module 5: Group Policy Management",
      objective:
        "Learn how to use Group Policy Objects (GPOs) to control and configure user and computer settings.",
      topics: [
        "Introduction to Group Policy",
        "Creating and linking GPOs",
        "Managing GPO inheritance and enforcement",
        "Common user and computer policies",
        "Using Group Policy Modeling and Results tools",
        "GPO troubleshooting and logging",
      ],
    },
    {
      title: "Module 6: Managing File Systems and Permissions",
      objective:
        "Explore NTFS and share permissions, and manage secure access to files and folders.",
      topics: [
        "NTFS vs Share permissions",
        "Configuring shared folders",
        "Effective permission calculations",
        "File ownership and permission inheritance",
        "Auditing file access",
        "Storage management: quotas and compression",
      ],
    },
    {
      title: "Module 7: DNS and DHCP Configuration",
      objective:
        "Understand the role of DNS and DHCP in network communication.",
      topics: [
        "DNS fundamentals and configuration",
        "Forward and reverse lookup zones",
        "DHCP installation and configuration",
        "Creating scopes and reservations",
        "Configuring DNS and DHCP redundancy",
        "IP conflict management",
      ],
    },
    {
      title: "Module 8: Introduction to Virtualization with Hyper-V",
      objective:
        "Get familiar with Microsoft Hyper-V and virtual machine management.",
      topics: [
        "Introduction to virtualization and Hyper-V",
        "Installing and enabling Hyper-V role",
        "Creating virtual switches",
        "Creating and configuring virtual machines",
        "Managing VM settings (CPU, RAM, Disk)",
        "Virtual disk types (VHD, VHDX)",
      ],
    },
    {
      title: "Module 9: Managing and Monitoring Server Performance",
      objective:
        "Use built-in tools to monitor, maintain, and troubleshoot server performance.",
      topics: [
        "Task Manager and Resource Monitor",
        "Performance Monitor",
        "Event Viewer",
        "Server health checks",
        "Troubleshooting hardware and software issues",
        "Remote management tools",
        "Backup and restore basics",
      ],
    },
    {
      title: "Module 10: Security and Updates",
      objective: "Learn how to secure your server and keep it updated.",
      topics: [
        "Configuring Windows Firewall",
        "Managing user rights and permissions",
        "Implementing account policies",
        "Managing Windows Updates",
        "Using Windows Defender",
        "Introduction to BitLocker encryption",
      ],
    },
    {
      title: "Module 11: Backup and Disaster Recovery",
      objective: "Understand backups and recovery using Windows Server tools.",
      topics: [
        "Installing Windows Server Backup",
        "Creating backup schedules",
        "System State Backup",
        "Restoring files and system states",
        "Bare-metal recovery",
        "Planning for disaster recovery",
      ],
    },
    {
      title: "Module 12: Introduction to PowerShell for Windows Server",
      objective:
        "Get started with PowerShell to automate administrative tasks.",
      topics: [
        "PowerShell syntax and command structure",
        "Running basic cmdlets",
        "User and group management using PowerShell",
        "Managing services and processes",
        "Writing simple scripts",
        "Using pipelines and filters",
      ],
    },
  ];

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
                      color:"black",
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

export default McseCurriculum;
