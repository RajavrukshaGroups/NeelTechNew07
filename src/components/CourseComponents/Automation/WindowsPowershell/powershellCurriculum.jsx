import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const PowerShellCurriculum = () => {
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
      title: "Module 1: Introduction to PowerShell",
      objective:
        "Understand the fundamentals of PowerShell and its role in automation and system administration.",
      topics: [
        "What is PowerShell?",
        "PowerShell vs Command Prompt",
        "Installing and Setting Up PowerShell",
        "Understanding PowerShell Console & ISE",
        "Basic Command Syntax",
        "Getting Help in PowerShell",
      ],
    },
    {
      title: "Module 2: PowerShell Basics & Cmdlets",
      objective:
        "Learn core PowerShell commands and how to work with cmdlets.",
      topics: [
        "Understanding Cmdlets",
        "Verb-Noun Naming Convention",
        "Get-Command and Get-Help",
        "Working with Parameters",
        "Using Aliases",
        "Pipeline Basics",
      ],
    },
    {
      title: "Module 3: Working with Objects & Pipeline",
      objective:
        "Understand how PowerShell works with objects and the pipeline.",
      topics: [
        "Object-Oriented Nature of PowerShell",
        "Select-Object and Where-Object",
        "Sorting and Filtering Data",
        "Exporting Data (CSV, TXT)",
        "Formatting Output",
        "Working with Properties and Methods",
      ],
    },
    {
      title: "Module 4: Variables & Data Types",
      objective:
        "Learn how to store and manipulate data using variables.",
      topics: [
        "Creating Variables",
        "Data Types in PowerShell",
        "Arrays and Hash Tables",
        "String Manipulation",
        "Type Casting",
        "Environment Variables",
      ],
    },
    {
      title: "Module 5: Conditional Statements & Loops",
      objective:
        "Implement logic using conditional statements and loops.",
      topics: [
        "If, ElseIf, Else Statements",
        "Switch Statement",
        "For Loop",
        "While Loop",
        "ForEach Loop",
        "Break and Continue",
      ],
    },
    {
      title: "Module 6: Functions & Script Files",
      objective:
        "Create reusable scripts and functions in PowerShell.",
      topics: [
        "Creating Functions",
        "Function Parameters",
        "Returning Values",
        "Script Files (.ps1)",
        "Execution Policies",
        "Error Handling Basics",
      ],
    },
    {
      title: "Module 7: File & Folder Management",
      objective:
        "Manage files and directories using PowerShell commands.",
      topics: [
        "Creating, Copying, Moving Files",
        "Deleting Files and Folders",
        "Reading and Writing File Content",
        "Working with File Permissions",
        "Searching Files",
        "Automating File Tasks",
      ],
    },
    {
      title: "Module 8: System Administration with PowerShell",
      objective:
        "Perform system-level administrative tasks using PowerShell.",
      topics: [
        "Managing Services",
        "Managing Processes",
        "Working with Event Logs",
        "User and Group Management",
        "Registry Management",
        "Remote Management Basics",
      ],
    },
    {
      title: "Module 9: PowerShell Remoting & Automation",
      objective:
        "Automate tasks across remote systems.",
      topics: [
        "Introduction to PowerShell Remoting",
        "Enable-PSRemoting",
        "Using Invoke-Command",
        "Creating Scheduled Tasks",
        "Background Jobs",
        "Automation Best Practices",
      ],
    },
    {
      title: "Module 10: Advanced PowerShell Concepts",
      objective:
        "Explore advanced scripting and automation techniques.",
      topics: [
        "Working with Modules",
        "Creating Custom Modules",
        "Advanced Error Handling",
        "Working with APIs",
        "Security Best Practices",
        "Real-Time Automation Projects",
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

export default PowerShellCurriculum;
