import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LinuxCurriculum = () => {
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
      title: "Module 1: Introduction to Linux & Red Hat Enterprise Linux",
      objective:
        "Understand the fundamentals of Linux, open-source concepts, and the architecture of Red Hat Enterprise Linux (RHEL), including its role in enterprise environments.",
      topics: [
        "Overview of open-source software and Linux distributions",
        "Introduction to Red Hat Enterprise Linux (RHEL)",
        "Linux architecture and system components",
      ],
    },
    {
      title: "Module 2: Accessing the Command Line",
      objective:
        "Learn how to access and navigate the Linux system using the command-line interface (CLI) and execute essential shell commands.",
      topics: [
        "Logging into local and remote Linux systems",
        "Understanding the Bash shell",
        "Running basic Linux commands",
      ],
    },
    {
      title: "Module 3: Managing Files from the Command Line",
      objective:
        "Develop the ability to manage files and directories efficiently using command-line tools.",
      topics: [
        "Creating, copying, moving, and deleting files",
        "Directory navigation and management",
        "Using wildcards and file search commands",
      ],
    },
    {
      title: "Module 4: Getting Help in Linux",
      objective:
        "Learn how to use built-in documentation and help tools to troubleshoot and understand system commands.",
      topics: [
        "Using man pages and info pages",
        "Accessing system documentation",
        "Searching command help effectively",
      ],
    },
    {
      title: "Module 5: Creating, Viewing, and Editing Text Files",
      objective:
        "Gain hands-on experience in managing configuration and text files using command-line editors.",
      topics: [
        "Using nano and vi/vim editors",
        "Redirecting command output",
        "Editing and saving configuration files",
      ],
    },
    {
      title: "Module 6: Controlling Access to Files",
      objective:
        "Understand Linux file permissions and ownership to secure files and directories.",
      topics: [
        "File ownership and permission structure",
        "Using chmod, chown, and chgrp",
        "Understanding special permissions (SUID, SGID, Sticky bit)",
      ],
    },
    {
      title: "Module 7: Managing Local Users and Groups",
      objective:
        "Learn how to create, modify, and manage users and groups in a Linux system.",
      topics: [
        "User and group management commands",
        "Password policies",
        "Managing user environments",
      ],
    },
    {
      title: "Module 8: Monitoring and Managing Processes",
      objective:
        "Monitor, control, and troubleshoot running processes to ensure system stability.",
      topics: [
        "Using ps, top, and htop",
        "Managing foreground and background jobs",
        "Killing and controlling processes",
      ],
    },
    {
      title: "Module 9: Controlling Services and Daemons",
      objective:
        "Understand how to manage system services and daemons using systemd.",
      topics: [
        "Using systemctl to start, stop, and enable services",
        "Checking service status",
        "Managing system boot targets",
      ],
    },
    {
      title: "Module 10: Configuring and Securing SSH",
      objective:
        "Configure secure remote access to Linux servers using OpenSSH.",
      topics: [
        "Installing and configuring SSH",
        "Key-based authentication",
        "Securing SSH access",
      ],
    },
    {
      title: "Module 11: Analyzing and Managing Logs",
      objective:
        "Learn how to monitor and analyze system logs for troubleshooting and auditing.",
      topics: [
        "Understanding system log files",
        "Using journalctl",
        "Log analysis for troubleshooting",
      ],
    },
    {
      title: "Module 12: Archiving and Transferring Files",
      objective: "Manage file backups and transfers between systems securely.",
      topics: [
        "Using tar and gzip",
        "Secure file transfer with scp and rsync",
        "Creating compressed archives",
      ],
    },
    {
      title: "Module 13: Managing Networking",
      objective:
        "Configure and troubleshoot network settings on Linux servers.",
      topics: [
        "Configuring IP addresses and interfaces",
        "Managing network services",
        "Testing network connectivity",
      ],
    },
    {
      title: "Module 14: Installing and Updating Software",
      objective:
        "Install, update, and manage software packages using Linux package managers.",
      topics: [
        "Using yum and dnf",
        "Managing repositories",
        "Updating and patching systems",
      ],
    },
    {
      title: "Module 15: Managing Linux File Systems and Storage",
      objective:
        "Understand storage devices, partitions, and file systems in Linux.",
      topics: [
        "Mounting and unmounting file systems",
        "Managing partitions",
        "Understanding LVM basics",
      ],
    },
    {
      title: "Module 16: Server Troubleshooting and Support",
      objective:
        "Develop practical troubleshooting skills to diagnose and resolve common Linux server issues.",
      topics: [
        "Identifying performance bottlenecks",
        "Analyzing system errors",
        "Best practices for system maintenance",
      ],
    },
    {
      title: "Module 17: Comprehensive Review & Hands-On Practice",
      objective:
        "Reinforce learning through practical exercises and real-world scenarios to prepare for certification and job roles.",
      topics: [
        "End-to-end server configuration",
        "Security implementation practice",
        "Real-world troubleshooting exercises",
      ],
    },
  ];

  //   const toggleModule = (index) => {
  //     setActiveModule(activeModule === index ? null : index);
  //   };

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

export default LinuxCurriculum;
