import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const PythonCurriculum = () => {
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
      title: "Module 1: Overview",
      objective:
        "Understand the fundamentals of Python, why it is widely used, and learn about basic program structure.",
      topics: [
        "Why do we need Python?",
        "Program Structure",
      ],
    },
    {
      title: "Module 2: Environment Setup",
      objective:
        "Learn how to install Python and understand different execution environments and interpreters.",
      topics: [
        "Python Installation",
        "Execution Types",
        "What is an Interpreter?",
        "Interpreters vs Compilers",
        "Using the Python Interpreter",
        "Interactive Mode",
        "Running Python Files",
        "Working with Python Shell",
        "Integrated Development Environments (IDEs)",
        "Interactive Mode Programming",
        "Script Mode Programming",
      ],
    },
    {
      title: "Module 3: Basic Operators",
      objective:
        "Understand different types of operators in Python and how they are used in expressions.",
      topics: [
        "Types of Operators",
        "Python Arithmetic Operators",
        "Python Comparison Operators",
        "Python Assignment Operators",
        "Python Bitwise Operators",
        "Python Logical Operators",
        "Python Membership Operators (in, not in)",
        "Python Identity Operators (is, is not)",
        "Python Operator Precedence",
      ],
    },
    {
      title: "Module 4: Data Types",
      objective:
        "Learn about Python data types, variables, and working with numbers, strings, and lists.",
      topics: [
        "Variables",
        "Assigning Values to Variables",
        "Multiple Assignment",
        "Python Numbers",
        "Python Strings",
        "Accessing Values in Strings",
        "String Special Operators",
        "String Formatting Operator",
        "Triple Quotes",
        "Built-in String Operations",
        "Python Lists",
        "Accessing Values in Lists",
      ],
    },
    {
      title: "Module 5: Loops and Decision Making",
      objective:
        "Understand conditional statements and looping constructs in Python.",
      topics: [
        "if Statements",
        "else Statements",
        "Nested if Statements",
        "while Loop",
        "for Loop",
        "Nested Loops",
        "Loop Control Statements",
        "continue Statement",
        "pass Statement",
      ],
    },
    {
      title: "Module 6: Functions",
      objective:
        "Learn how to define, call, and manage functions in Python.",
      topics: [
        "Defining a Function",
        "Syntax",
        "Calling a Function",
        "Pass by Reference vs Value",
        "Function Arguments",
        "Required Arguments",
        "Keyword Arguments",
        "Default Arguments",
        "Variable-length Arguments",
        "The return Statement",
        "Scope of Variables",
        "Global vs Local Variables",
      ],
    },
    {
      title: "Module 7: Python Modules and Packages",
      objective:
        "Understand how modules and packages work in Python and how to organize code efficiently.",
      topics: [
        "Framework vs Packages",
        "Folium Introduction",
        "Why are Modules Used?",
        "Creating Modules",
        "The import Statement",
        "The from...import Statement",
        "The from...import * Statement",
      ],
    },
    {
      title: "Module 8: Basic OOP Concepts",
      objective:
        "Learn Object-Oriented Programming concepts and how to implement them in Python.",
      topics: [
        "Creating Class in Python",
        "Documented String",
        "Private Identifier",
        "Constructor",
        "Inheritance",
        "Polymorphism",
        "The PYTHONPATH Variable",
        "Namespaces and Scoping",
        "The dir() Function",
        "The globals() and locals() Functions",
        "The reload() Function",
        "Packages in Python",
      ],
    },
    {
      title: "Module 9: Anonymous Function",
      objective:
        "Understand anonymous functions and functional programming tools in Python.",
      topics: [
        "Lambda",
        "Map",
        "Filter",
        "Reduce",
      ],
    },
    {
      title: "Module 10: File Manipulation",
      objective:
        "Learn how to work with files in Python including reading, writing, and managing files.",
      topics: [
        "Opening Text File",
        "Working with a File in Python",
        "The open Function",
        "File Modes",
        "File Object Attributes",
        "close() Method",
        "write() Method",
        "read() Method",
        "Files: Input",
        "Files: Output",
        "Reading Files",
        "Renaming & Deleting Files",
        "Writing into a File",
        "remove() Method",
      ],
    },
    {
      title: "Module 11: Python GUI",
      objective:
        "Build graphical user interface applications using Tkinter.",
      topics: [
        "Basic Operations using Tkinter",
        "Buttons and Textbox",
        "Menu Bar",
        "Message Box and Radio Button",
        "Checkbox and Event Creating",
        "Creating Application in GUI",
      ],
    },
    {
      title: "Module 12: SQL and Python",
      objective:
        "Learn how to integrate Python with databases using SQLite.",
      topics: [
        "Overview of SQLite",
        "Integrating Python with SQLite",
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
                        fontFamily: " system-ui",
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
                    style={{ backgroundColor: theme.lightOrangeBg , fontFamily: " system-ui",}}
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

                    <p className="mb-5 text-[15px] md:text-[17px] leading-relaxed" style={{  fontFamily: " system-ui", }}>
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

export default PythonCurriculum;
