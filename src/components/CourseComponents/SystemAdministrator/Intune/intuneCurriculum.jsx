import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const IntuneCurriculum = () => {
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
      title: "Module 1: Introduction to Microsoft Intune",
      objective:
        "Understand Microsoft Intune fundamentals, its role in modern device management, and how it integrates with Microsoft Endpoint Manager.",
      topics: [
        "What is Microsoft Intune?",
        "Benefits of using Intune",
        "Intune as part of Microsoft Endpoint Manager (MEM)",
        "Licensing and prerequisites",
        "Overview of Mobile Device Management (MDM) and Mobile Application Management (MAM)",
      ],
    },
    {
      title: "Module 2: Intune Architecture and Components",
      objective:
        "Explore Intune architecture, integration with Azure AD, and key components that enable enterprise device management.",
      topics: [
        "Intune architecture and integration with Azure AD",
        "Key components: Endpoint Manager, Azure AD, Autopilot, and Defender",
        "How Intune works with other Microsoft 365 services",
      ],
    },
    {
      title: "Module 3: Setting Up Microsoft Intune",
      objective:
        "Learn how to configure Intune tenant settings, assign licenses, and enroll devices across platforms.",
      topics: [
        "Tenant setup and initial configurations",
        "Assigning Intune licenses to users",
        "Configuring Intune roles and permissions (RBAC)",
        "Enrolling devices: Windows, macOS, iOS, and Android",
      ],
    },
    {
      title: "Module 4: Device Enrollment Strategies",
      objective:
        "Understand enrollment methods and implement best practices for BYOD and corporate-owned devices.",
      topics: [
        "Overview of enrollment methods",
        "Automatic enrollment via Azure AD",
        "Windows Autopilot configuration",
        "Apple Business Manager and Android Enterprise integration",
        "BYOD vs Corporate-owned strategies",
      ],
    },
    {
      title: "Module 5: Device Configuration Profiles",
      objective:
        "Create and manage configuration profiles to enforce device security and compliance standards.",
      topics: [
        "Creating and assigning configuration profiles",
        "Profile types: Device restrictions, Wi-Fi, VPN, email",
        "Custom settings with OMA-URI",
        "Administrative templates and ADMX-backed policies",
      ],
    },
    {
      title: "Module 6: Application Management",
      objective:
        "Deploy and manage enterprise applications using various app deployment strategies in Intune.",
      topics: [
        "App deployment strategies: Store, LOB, Win32, Web, etc.",
        "Assigning apps to users and devices",
        "Managing Microsoft 365 apps",
        "Mobile Application Management (MAM) without enrollment",
      ],
    },
    {
      title: "Module 7: Compliance Policies and Conditional Access",
      objective:
        "Implement compliance policies and integrate with Azure AD Conditional Access to secure enterprise devices.",
      topics: [
        "Creating and managing compliance policies",
        "Monitoring compliance status and reporting",
        "Integrating with Azure AD Conditional Access",
        "Remediation actions for non-compliant devices",
      ],
    },
    {
      title: "Module 8: Endpoint Security with Intune",
      objective:
        "Configure endpoint security policies and integrate Microsoft Defender for advanced threat protection.",
      topics: [
        "Defender for Endpoint integration",
        "Antivirus, Firewall, and BitLocker policy management",
        "Security baselines overview and implementation",
        "Role of Endpoint detection and response (EDR)",
      ],
    },
    {
      title: "Module 9: Monitoring and Reporting",
      objective:
        "Monitor device health, generate reports, and troubleshoot enrollment and synchronization issues.",
      topics: [
        "Using Intune dashboard and reports",
        "Monitoring device and user compliance",
        "Troubleshooting enrollment and sync issues",
        "Using log files and diagnostic tools",
      ],
    },
    {
      title: "Module 10: Intune and Autopilot Integration",
      objective:
        "Understand Windows Autopilot lifecycle and configure deployment scenarios including hybrid Azure AD join.",
      topics: [
        "Windows Autopilot lifecycle",
        "Creating and deploying Autopilot profiles",
        "Self-deploying and pre-provisioned deployment scenarios",
        "User-driven deployment and hybrid Azure AD join",
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

                    <p className="mb-5 text-[15px] md:text-[17px] leading-relaxed" style={{  fontFamily: " system-ui", }}>
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
                          className="flex items-start text-gray-950 gap-3 text-[15px] md:text-[17px] leading-relaxed"
                          style={{ fontFamily: " system-ui", }}
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

export default IntuneCurriculum;
