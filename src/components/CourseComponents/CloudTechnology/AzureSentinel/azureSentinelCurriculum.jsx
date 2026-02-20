import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AzureSentinelCurriculum = () => {
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
      title: "Module 1: Introduction to Azure Sentinel",
      objective:
        "Understand Azure Sentinel as a cloud-native SIEM & SOAR solution and its architecture.",
      topics: [
        "Overview of Azure Sentinel (SIEM & SOAR)",
        "Benefits of Cloud-Based Threat Detection & Response",
        "Azure Sentinel Architecture & Data Flow",
        "Sentinel vs Traditional SIEM Tools",
      ],
    },
    {
      title: "Module 2: Setting Up Azure Sentinel",
      objective:
        "Learn how to deploy and configure Azure Sentinel in the Azure environment.",
      topics: [
        "Provisioning Azure Sentinel in Azure Portal",
        "Connecting to Azure Log Analytics Workspace",
        "Onboarding Data Connectors (Azure AD, M365, Defender)",
        "Understanding Ingestion Costs & Data Retention Policies",
      ],
    },
    {
      title: "Module 3: Data Collection and Normalization",
      objective:
        "Collect and normalize security logs from various sources.",
      topics: [
        "Collecting Logs from On-Prem, Azure & Multi-Cloud",
        "Using Syslog, CEF & Custom Connectors",
        "Data Normalization with KQL",
        "Best Practices for Efficient Log Ingestion",
      ],
    },
    {
      title: "Module 4: Kusto Query Language (KQL) for Security Analytics",
      objective:
        "Write and optimize KQL queries for security investigations.",
      topics: [
        "Basics of KQL Syntax & Operators",
        "Writing Queries for Log Analysis",
        "Building Queries for Security Investigation",
        "Optimizing Queries for Performance & Cost",
      ],
    },
    {
      title: "Module 5: Threat Detection and Analytics Rules",
      objective:
        "Create and manage analytics rules for threat detection.",
      topics: [
        "Built-in vs Custom Analytics Rules",
        "Creating Rules Using KQL",
        "Scheduled, Microsoft Security & Fusion Rules",
        "Tuning Rules to Reduce False Positives",
      ],
    },
    {
      title: "Module 6: Security Playbooks and Automation",
      objective:
        "Automate security responses using playbooks and SOAR capabilities.",
      topics: [
        "Introduction to SOAR",
        "Creating Playbooks with Logic Apps",
        "Automating Incident Response Workflows",
        "Integration with Ticketing Systems & Third-Party Tools",
      ],
    },
    {
      title: "Module 7: Incident Investigation and Response",
      objective:
        "Investigate and respond to security incidents effectively.",
      topics: [
        "Understanding the Incident Lifecycle",
        "Investigating Alerts & Incidents",
        "Using Entity Behavior Analytics (UEBA)",
        "Hunting Queries for Proactive Threat Detection",
      ],
    },
    {
      title: "Module 8: Threat Intelligence Integration",
      objective:
        "Leverage threat intelligence for enhanced detection and response.",
      topics: [
        "Overview of Threat Intelligence (TI) in Sentinel",
        "Configuring Threat Indicators",
        "Leveraging Microsoft Threat Intelligence",
        "Advanced Correlation & Alert Enrichment",
      ],
    },
    {
      title: "Module 9: Workbooks, Dashboards, and Reporting",
      objective:
        "Visualize security data and generate reports for SOC teams.",
      topics: [
        "Creating Workbooks for Visualization",
        "Building Custom Dashboards",
        "Using Built-in Templates",
        "Reporting & Compliance Monitoring",
      ],
    },
    {
      title: "Module 10: Best Practices, Governance, and Certification Preparation",
      objective:
        "Apply governance best practices and prepare for Microsoft security certifications.",
      topics: [
        "Security Governance in Azure Sentinel",
        "Cost Management & Optimization",
        "Deployment Best Practices",
        "Preparation for SC-200, SC-900 Certifications",
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

export default AzureSentinelCurriculum;