import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const GoogleCloudCurriculum = () => {
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
      title: "Module 1: Introduction to Cloud Computing & GCP Overview",
      objective:
        "Understand cloud computing fundamentals and get familiar with Google Cloud Platform services and infrastructure.",
      topics: [
        "Cloud Computing: IaaS, PaaS, SaaS",
        "Introduction to Google Cloud Platform",
        "GCP Global Infrastructure: Regions, Zones, Edge Locations",
        "GCP Free Tier & Account Setup",
        "Navigating GCP Console",
        "Understanding Billing & Setting Budget Alerts",
        "Overview of GCP Support Plans",
      ],
    },
    {
      title: "Module 2: Identity & Access Management (IAM)",
      objective:
        "Learn how identity, authentication, and authorization work in GCP.",
      topics: [
        "What is IAM in GCP",
        "Creating & Managing IAM Users, Groups, Roles",
        "Understanding Predefined & Custom Roles",
        "Assigning Permissions using Policies",
        "Enabling Multi-Factor Authentication (MFA)",
        "Best Practices for Identity Security",
      ],
    },
    {
      title: "Module 3: Networking & Virtual Private Cloud (VPC)",
      objective:
        "Understand GCP networking fundamentals and VPC configuration.",
      topics: [
        "Basics of Networking for Cloud",
        "GCP Virtual Private Cloud (VPC) Concepts",
        "Subnets & IP Ranges (CIDR)",
        "VPC Peering & Shared VPC",
        "Firewall Rules & Route Tables",
        "Network Pricing Overview",
      ],
    },
    {
      title: "Module 4: Compute Engine (VM Instances)",
      objective:
        "Deploy and manage virtual machines using Compute Engine.",
      topics: [
        "Introduction to Compute Engine",
        "VM Types, Machine Families & Sizing",
        "Creating & Managing VM Instances",
        "Persistent Disks vs Local SSDs",
        "Snapshots & Images",
        "SSH Key Management",
        "Instance Groups & Autoscaling",
      ],
    },
    {
      title: "Module 5: Load Balancing & Auto Scaling",
      objective:
        "Implement scalable and highly available architectures.",
      topics: [
        "Load Balancing in GCP (Global & Regional)",
        "HTTP(S), SSL Proxy, TCP/UDP Load Balancers",
        "Backend Services & Health Checks",
        "Managed Instance Groups",
        "Configuring Auto Scaling Policies",
      ],
    },
    {
      title: "Module 6: Storage Services",
      objective:
        "Learn about different storage solutions available in GCP.",
      topics: [
        "Cloud Storage Overview",
        "Storage Classes (Standard, Nearline, Coldline, Archive)",
        "Lifecycle Rules & Object Versioning",
        "Static Website Hosting with Cloud Storage",
        "Data Transfer & gsutil Tool",
      ],
    },
    {
      title: "Module 7: Relational & NoSQL Databases",
      objective:
        "Understand managed database services in GCP.",
      topics: [
        "Cloud SQL: MySQL, PostgreSQL, SQL Server",
        "High Availability & Failover Configurations",
        "Cloud Spanner for Global Scale SQL",
        "Cloud Firestore (NoSQL Document DB)",
        "Bigtable for Wide-Column Storage",
        "Backups, Replication & Read Replicas",
      ],
    },
    {
      title: "Module 8: Kubernetes & Serverless Computing",
      objective:
        "Deploy containerized and serverless applications in GCP.",
      topics: [
        "Introduction to GKE (Google Kubernetes Engine)",
        "Deploying Containers on GKE",
        "Cloud Functions (Event-driven)",
        "Cloud Run (Serverless Containers)",
        "Cloud Build & CI/CD Pipelines",
      ],
    },
    {
      title: "Module 9: Security & Encryption",
      objective:
        "Implement security best practices and encryption strategies.",
      topics: [
        "Encryption at Rest & In Transit",
        "Customer-Managed Encryption Keys (CMEK) via Cloud KMS",
        "Organization Policy Constraints",
        "VPC Service Controls",
        "Shielded VMs & Binary Authorization",
      ],
    },
    {
      title: "Module 10: Monitoring, Logging & Cost Management",
      objective:
        "Monitor infrastructure performance and manage costs effectively.",
      topics: [
        "Cloud Operations Suite: Monitoring, Logging, Trace",
        "Setting up Alerts & Dashboards",
        "Billing Reports & Cost Analysis",
        "Resource Usage Optimization",
        "Labels & Budgets for Project Management",
      ],
    },
    {
      title: "Module 11: DNS, CDN & Identity Federation",
      objective:
        "Manage DNS, CDN services and integrate identity providers.",
      topics: [
        "Cloud DNS Overview",
        "Creating DNS Records: A, CNAME, MX",
        "Cloud CDN for Web Acceleration",
        "Identity Federation (Google Workspace / LDAP)",
        "Hybrid Cloud with Active Directory Connector",
      ],
    },
    {
      title: "Module 12: Hybrid Connectivity & VPN",
      objective:
        "Establish secure hybrid cloud connectivity solutions.",
      topics: [
        "Cloud VPN Setup (Site-to-Site VPN)",
        "Interconnect & Peering Options",
        "Deploying Fortinet NGFW (Firewall Appliance)",
        "Private Google Access",
        "Hybrid Connectivity Use Cases",
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

export default GoogleCloudCurriculum;