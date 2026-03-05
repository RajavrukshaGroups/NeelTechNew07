import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const EntraIDCurriculum = () => {
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
        "Module 1: Introduction to Identity and Access Management (IAM) & Microsoft Entra ID",
      objective:
        "Understand the fundamentals of IAM, its role in modern IT environments, and the core features of Microsoft Entra ID.",
      topics: [
        "What is Identity and Access Management?",
        "Evolution from Active Directory to Entra ID (Azure AD)",
        "Core components and benefits of Entra ID",
        "Use cases in cloud and hybrid infrastructure",
        "Licensing overview and service tiers",
      ],
    },
    {
      title: "Module 2: Users, Groups & Organizational Structure",
      objective:
        "Learn how to manage users, groups, and administrative units in Microsoft Entra ID to support scalable access management.",
      topics: [
        "Creating and managing user identities",
        "Managing groups and dynamic groups",
        "Understanding roles: Global admin, User admin, etc.",
        "Administrative units and scoped management",
        "Self-service password reset and user delegation",
      ],
    },
    {
      title: "Module 3: Entra ID Authentication & Conditional Access",
      objective:
        "Explore authentication methods, multi-factor authentication (MFA), and conditional access policies to protect identity.",
      topics: [
        "Understanding authentication protocols (SAML, OAuth, OpenID)",
        "Enabling and enforcing MFA",
        "Passwordless authentication",
        "Configuring and applying Conditional Access policies",
        "Blocking risky sign-ins",
      ],
    },
    {
      title: "Module 4: Application Integration and SSO (Single Sign-On)",
      objective:
        "Learn how to securely integrate cloud or on-premise applications with Entra ID and enable seamless single sign-on.",
      topics: [
        "Integrating SaaS applications with Entra ID",
        "Setting up SSO using SAML and OIDC",
        "Enterprise applications & gallery apps",
        "Assigning apps to users or groups",
        "Monitoring app sign-ins and usage",
      ],
    },
    {
      title: "Module 5: Device Management and Identity Protection",
      objective:
        "Manage and secure devices using Entra ID, including compliance-based access and identity protection.",
      topics: [
        "Device registration and join types (Azure AD Join, Hybrid Join)",
        "Enforcing compliance through Conditional Access",
        "Identity Protection overview",
        "Risk-based sign-in and user risk policies",
        "Integration with Microsoft Defender",
      ],
    },
    {
      title: "Module 6: Roles, Delegation & Access Reviews",
      objective:
        "Implement role-based access control (RBAC), assign roles securely, and manage periodic access reviews.",
      topics: [
        "Understanding RBAC in Entra ID",
        "Assigning built-in and custom roles",
        "Delegated administration",
        "Access reviews and just-in-time access",
        "Privileged Identity Management (PIM) overview",
      ],
    },
    {
      title: "Module 7: Auditing, Monitoring & Governance",
      objective:
        "Track, monitor, and audit Entra ID activities to ensure secure and compliant identity infrastructure.",
      topics: [
        "Sign-in logs and audit logs",
        "Monitoring with Microsoft Entra Admin Center",
        "Integrating with Microsoft Sentinel (optional)",
        "Alerts and incident response",
        "Compliance and governance best practices",
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
          Microsoft Entra ID Curriculum
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
                      className="font-semibold mb-2"
                      style={{
                        color: theme.darkBlue,
                        fontFamily: "serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      Learning Objective:
                    </p>

                    <p className="mb-5 text-[15px] md:text-[17px] leading-relaxed" style={{ fontFamily: " system-ui", }}>
                      {module.objective}
                    </p>

                    <p
                      className="font-semibold mb-3"
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

export default EntraIDCurriculum;
