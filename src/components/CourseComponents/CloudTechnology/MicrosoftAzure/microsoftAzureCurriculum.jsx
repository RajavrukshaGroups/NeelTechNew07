import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AzureCurriculum = () => {
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
      title: "Module 1: Introduction to Azure Cloud Computing",
      objective:
        "Understand cloud computing fundamentals and get started with Microsoft Azure services and tools.",
      topics: [
        "Cloud Computing Concepts: IaaS, PaaS, SaaS",
        "Overview of Microsoft Azure",
        "Azure Global Infrastructure: Regions, Availability Zones",
        "Creating a Free Azure Account",
        "Azure Portal, CLI, and PowerShell Basics",
        "Azure Pricing Calculator and Cost Management",
      ],
    },
    {
      title: "Module 2: Identity and Governance in Azure",
      objective:
        "Learn how identity, access management, and governance are implemented in Azure environments.",
      topics: [
        "Introduction to Azure Active Directory (Azure AD)",
        "Role-Based Access Control (RBAC)",
        "Users, Groups, and Roles in Azure AD",
        "Conditional Access and Multi-Factor Authentication (MFA)",
        "Azure Policy and Blueprints",
        "Subscription and Billing Management",
      ],
    },
    {
      title: "Module 3: Networking in Azure",
      objective:
        "Understand networking components and connectivity solutions within Azure infrastructure.",
      topics: [
        "Virtual Networks (VNets)",
        "IP Addressing, Subnets, and Network Security Groups (NSG)",
        "Route Tables and DNS",
        "Azure VPN Gateway and Site-to-Site VPN",
        "Azure ExpressRoute (Intro Only)",
        "VNet Peering and Service Endpoints",
      ],
    },
    {
      title: "Module 4: Compute Services",
      objective:
        "Explore Azure compute options including virtual machines and scalability features.",
      topics: [
        "Azure Virtual Machines (VMs)",
        "VM Sizes, Series, and Pricing Models",
        "Custom Images and Shared Image Gallery",
        "Azure VM Availability Sets and Zones",
        "Azure Virtual Machine Scale Sets",
        "Azure Dedicated Hosts",
      ],
    },
    {
      title: "Module 5: Azure Storage Solutions",
      objective:
        "Learn various Azure storage services and how to manage and secure storage resources.",
      topics: [
        "Azure Blob, File, Queue, and Table Storage",
        "Storage Tiers and Redundancy Options",
        "Azure Managed Disks and Snapshots",
        "Data Migration and Import/Export",
        "Azure Storage Explorer and Lifecycle Management",
        "Disk Encryption and Access Control",
      ],
    },
    {
      title: "Module 6: High Availability and Load Balancing",
      objective:
        "Design highly available and fault-tolerant architectures using Azure load balancing solutions.",
      topics: [
        "Azure Load Balancer (Basic & Standard)",
        "Application Gateway and Web Application Firewall (WAF)",
        "Azure Front Door",
        "Azure Traffic Manager",
        "Design for Fault Tolerance and Redundancy",
      ],
    },
    {
      title: "Module 7: Monitoring, Logging & Automation",
      objective:
        "Implement monitoring, diagnostics, and automation solutions in Azure.",
      topics: [
        "Azure Monitor and Log Analytics",
        "Alerts and Metrics",
        "Azure Activity Logs",
        "Azure Automation and Runbooks",
        "Azure Resource Health and Service Health",
      ],
    },
    {
      title: "Module 8: Azure App Services and Containers",
      objective:
        "Understand Azure application hosting services and container orchestration basics.",
      topics: [
        "Azure App Services: Web Apps, API Apps",
        "Deployment Slots and Scaling Options",
        "Azure Container Instances (ACI)",
        "Azure Kubernetes Service (AKS) Basics",
        "Azure Functions (Serverless Computing)",
      ],
    },
    {
      title: "Module 9: Azure Databases",
      objective:
        "Learn Azure database services and how to implement secure and scalable database solutions.",
      topics: [
        "Azure SQL Database and Managed Instances",
        "Azure Database for PostgreSQL and MySQL",
        "Cosmos DB (NoSQL Database)",
        "Database Backup, Restore, and Geo-Replication",
        "Security and Performance Tuning",
      ],
    },
    {
      title: "Module 10: Azure Security and Compliance",
      objective:
        "Implement security best practices and compliance tools within Azure environments.",
      topics: [
        "Azure Security Center",
        "Azure Key Vault",
        "Azure Sentinel (SIEM)",
        "Data Protection and Encryption at Rest/In Transit",
        "Compliance Tools and Certifications",
      ],
    },
    {
      title: "Module 11: Business Continuity and Disaster Recovery",
      objective:
        "Design and implement backup, recovery, and disaster recovery strategies in Azure.",
      topics: [
        "Backup and Site Recovery (ASR)",
        "Geo-Redundancy and Replication Options",
        "Designing BCDR Strategies",
        "Azure Files and Blob Snapshot Management",
      ],
    },
    {
      title: "Module 12: Infrastructure as Code (IaC)",
      objective:
        "Automate Azure infrastructure deployment using Infrastructure as Code tools.",
      topics: [
        "Introduction to ARM Templates",
        "Deploying Resources via Templates",
        "Azure Bicep (Modern IaC Language)",
        "Azure DevOps Pipelines for IaC",
        "Terraform on Azure (Optional Advanced)",
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
                      className="font-semibold mb-2"
                      style={{
                        color: theme.darkBlue,
                        fontFamily: "serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      Learning Objective:
                    </p>

                    <p className="mb-5 text-[15px] md:text-[17px] leading-relaxed" style={{ fontFamily:"system-ui"}}>
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
                          className="flex items-start gap-3 text-[15px] md:text-[17px] leading-relaxed" style={{ fontFamily:"system-ui"}}
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

export default AzureCurriculum;
