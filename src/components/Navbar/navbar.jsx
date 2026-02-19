import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import NeelLogo from "/assets/head-logo.png";
import { Link } from "react-router-dom";

// Dropdown Component for About Us
const AboutDropdown = ({ theme, isOpen, onMouseEnter, onMouseLeave }) => {
  //   const aboutMenuItems = [
  //     "About Us",
  //     "Our Vision",
  //     "Our Mission",
  //     "Our Achievements",
  //     "Our Infrastructure",
  //     "Student Feedback",
  //     "Testimonials",
  //   ];
  const aboutMenuItems = [
    { label: "About Us", path: "/about" },
    { label: "Our Vision", path: "/about/vision" },
    { label: "Our Mission", path: "/about/mission" },
    { label: "Our Achievements", path: "/about/achievements" },
    // { label: "Our Infrastructure", path: "/about/infrastructure" },
    // { label: "Student Feedback", path: "/about/feedback" },
    { label: "Testimonials", path: "/about/testimonials" },
  ];

  return (
    <div
      className={`absolute top-full left-0 mt-1 w-72 rounded-md shadow-xl transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
      style={{
        backgroundColor: theme.white,
        border: `1px solid ${theme.lightGray}`,
        zIndex: 50,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-3">
        {aboutMenuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="block px-5 py-3 transition-all duration-200"
            style={{
              color: theme.darkBlueBg,
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 500,
              fontSize: "1.1rem",
              letterSpacing: "0.3px",
              borderBottom:
                idx < aboutMenuItems.length - 1
                  ? `1px solid ${theme.lightGray}`
                  : "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = theme.lightGray;
              e.target.style.color = theme.primaryBlue;
              e.target.style.fontWeight = "600";
              e.target.style.paddingLeft = "28px";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme.darkBlueBg;
              e.target.style.fontWeight = "500";
              e.target.style.paddingLeft = "20px";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Mega Menu Component for All Courses with dynamic padding based on item count
const AllCoursesMegaMenu = ({ theme, isOpen, onMouseEnter, onMouseLeave }) => {
  const [hoveredCategory, setHoveredCategory] = useState("All Courses");

  const categories = [
    {
      name: "All Courses",
      subItems: [
        "MCSE Training",
        "Linux Administrator",
        "CCNA",
        "Intune and o365",
        "Windows Powershell",
        "Python",
        "Microsoft Azure",
        "Entra ID",
        "AWS",
        "Google cloud",
        "Azure channel",
        "AWS Devops",
        "Azure Devops",
        "Ethical Hacking",
      ],
    },
    {
      name: "System Administrator",
      subItems: [
        "MCSE Training",
        "Linux Administrator",
        "CCNA",
        "Intune and o365",
      ],
    },
    {
      name: "Automation/Program",
      subItems: ["Windows Powershell", "Python"],
    },
    {
      name: "Cloud Technology",
      subItems: [
        "Microsoft Azure",
        "Entra ID",
        "AWS",
        "Google cloud",
        "Azure channel",
      ],
    },
    {
      name: "Devops",
      subItems: ["AWS Devops", "Azure Devops"],
    },
    {
      name: "Cyber Security",
      subItems: ["Ethical Hacking"],
    },
  ];

  // Set initial hovered category to "All Courses" when menu opens
  useEffect(() => {
    if (isOpen) {
      setHoveredCategory("All Courses");
    }
  }, [isOpen]);

  // Function to split array into chunks of 3 for grid layout
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const currentSubItems =
    categories.find((cat) => cat.name === hoveredCategory)?.subItems || [];
  const courseChunks = chunkArray(currentSubItems, 3);

  // Calculate dynamic values based on item count
  const itemCount = currentSubItems.length;
  const rowCount = Math.ceil(itemCount / 3);

  // Dynamic padding and spacing
  const containerPadding = itemCount <= 4 ? "p-3" : "p-4";
  const gapSize = itemCount <= 4 ? "gap-1" : "gap-2";
  const rowGap = itemCount <= 4 ? "mb-1" : "mb-2";
  const fontSize = itemCount <= 4 ? "1.1rem" : "1.05rem";

  // Dynamic height - smaller for few items
  const baseHeightPerRow = itemCount <= 4 ? 2 : 2.2;
  const dynamicHeight = Math.min(rowCount * baseHeightPerRow, 22) + "rem";

  return (
    <div
      className={`absolute top-full left-0 mt-1 w-[900px] rounded-md shadow-xl transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
      style={{
        backgroundColor: theme.white,
        border: `1px solid ${theme.lightGray}`,
        zIndex: 50,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex">
        {/* Categories Column - Left Sidebar */}
        <div
          className="w-1/4 border-r"
          style={{ borderColor: theme.lightGray, backgroundColor: "#FAFAFA" }}
        >
          <div className="py-3">
            {categories.map((category, idx) => {
              const categoryName = category.name;
              return (
                <div
                  key={idx}
                  className="px-4 py-2 transition-all duration-200 cursor-pointer text-sm"
                  style={{
                    color:
                      hoveredCategory === categoryName
                        ? theme.primaryBlue
                        : theme.darkBlueBg,
                    backgroundColor:
                      hoveredCategory === categoryName
                        ? theme.lightGray
                        : "transparent",
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                    fontWeight: hoveredCategory === categoryName ? 600 : 500,
                    borderLeft:
                      hoveredCategory === categoryName
                        ? `3px solid ${theme.primaryBlue}`
                        : "3px solid transparent",
                  }}
                  onMouseEnter={() => setHoveredCategory(categoryName)}
                >
                  {category.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Courses Display - Right Side with dynamic spacing */}
        <div className={`w-3/4 ${containerPadding}`}>
          <h3
            className="text-base font-semibold mb-2 pb-1 border-b"
            style={{
              color: theme.primaryBlue,
              borderColor: theme.lightGray,
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              letterSpacing: "0.3px",
            }}
          >
            {hoveredCategory}
          </h3>

          <div
            className="overflow-y-auto pr-1 custom-scrollbar"
            style={{ maxHeight: dynamicHeight }}
          >
            {courseChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className={`grid grid-cols-3 ${gapSize} ${rowGap}`}
              >
                {chunk.map((item, itemIndex) => (
                  <div
                    key={`${chunkIndex}-${itemIndex}`}
                    className="hover:text-blue-700 transition-all duration-200 cursor-pointer"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                      fontSize: fontSize,
                      lineHeight: itemCount <= 4 ? "1.3" : "1.4",
                      fontWeight: 500,
                      color: theme.darkBlueBg,
                      letterSpacing: "0.2px",
                      padding: itemCount <= 4 ? "1px 0" : "2px 0",
                      wordBreak: "break-word",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = theme.primaryBlue;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = theme.darkBlueBg;
                    }}
                  >
                    {item}
                  </div>
                ))}
                {/* Fill empty cells if chunk has less than 3 items */}
                {chunk.length < 3 &&
                  Array(3 - chunk.length)
                    .fill(0)
                    .map((_, i) => (
                      <div key={`empty-${i}`} className="invisible"></div>
                    ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${theme.lightGray};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${theme.primaryBlue};
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  // Color theme based on your specifications
  const theme = {
    primaryBlue: "#1C5D8F",
    accentOrange: "#F28C28",
    goldenAccent: "#D4AF37",
    darkBlueBg: "#0F3E57",
    lightGray: "#F5F7FA",
    white: "#FFFFFF",
    rgbBg: "rgb(14, 24, 89)",
    allCourse: "#0694d1",
    allCourseTxtClr: "rgb(255,255,255)",
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: theme.white,
        fontFamily:
          "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
      }}
    >
      {/* Top Bar with Contact & Chat */}
      <div
        className="px-4 md:px-[5%] py-3 flex justify-center items-center border-b"
        style={{
          backgroundColor: theme.rgbBg,
          borderBottomColor: theme.primaryBlue,
          fontFamily: "'Montserrat', 'Inter', sans-serif",
        }}
      >
        <div className="flex gap-8 md:gap-12 items-center">
          <span
            className="text-white font-medium flex items-center gap-2"
            style={{ fontSize: "1rem" }}
          >
            <span className="text-blue-200 text-sm uppercase tracking-wider">
              Chat Only
            </span>
            <span className="font-semibold">+91-984-072-2417</span>
          </span>
          <span
            className="text-white font-medium flex items-center gap-2"
            style={{ fontSize: "1rem" }}
          >
            <span className="text-blue-200 text-sm uppercase tracking-wider">
              Email
            </span>
            <span className="font-semibold">info@neeltechnologies.com</span>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className="px-4 md:px-[5%] py-3 flex justify-between items-center border-b relative"
        style={{ backgroundColor: theme.white, borderBottomColor: "#E2E8F0" }}
      >
        {/* Left side - Logo and All Courses button together */}
        <div className="flex items-center gap-6">
          {/* Logo Area */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img
                src={NeelLogo}
                alt="Neel Technologies Logo"
                className="h-10 md:h-10 w-auto object-contain mr-2"
              />
              <div className="flex flex-col">
                <span
                  className="text-2xl md:text-3xl font-bold tracking-tight"
                  style={{
                    color: theme.darkBlueBg,
                    fontFamily:
                      "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                  }}
                >
                  NEEL
                </span>
                <span
                  className="text-xs tracking-[0.2em] mt-[-4px] uppercase"
                  style={{
                    color: theme.primaryBlue,
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                  }}
                >
                  TECHNOLOGIES
                </span>
              </div>
            </div>
          </div>

          {/* All Courses Button with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("allCourses")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: theme.allCourse,
                color: theme.allCourseTxtClr,
                fontSize: "1.2rem",
                letterSpacing: "0.5px",
              }}
            >
              All Courses
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
                  openDropdown === "allCourses" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AllCoursesMegaMenu
              theme={theme}
              isOpen={openDropdown === "allCourses"}
              onMouseEnter={() => handleDropdownEnter("allCourses")}
              onMouseLeave={handleDropdownLeave}
            />
          </div>
        </div>

        {/* Desktop Navigation Links - Right side */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-5 xl:gap-6">
            {/* About Us with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 uppercase tracking-wide cursor-pointer"
                style={{
                  color:
                    openDropdown === "about"
                      ? theme.primaryBlue
                      : theme.darkBlueBg,
                  fontFamily: "'Montserrat', 'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.5px",
                }}
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
                    openDropdown === "about" ? "rotate-180" : ""
                  }`}
                  style={{
                    color:
                      openDropdown === "about"
                        ? theme.primaryBlue
                        : "currentColor",
                  }}
                />
              </button>

              <AboutDropdown
                theme={theme}
                isOpen={openDropdown === "about"}
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
              />
            </div>

            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
              style={{
                color: theme.darkBlueBg,
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => (e.target.style.color = theme.primaryBlue)}
              onMouseLeave={(e) => (e.target.style.color = theme.darkBlueBg)}
            >
              Training Options
              {/* <ChevronDown className="h-4 w-4" /> */}
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
              style={{
                color: theme.darkBlueBg,
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => (e.target.style.color = theme.primaryBlue)}
              onMouseLeave={(e) => (e.target.style.color = theme.darkBlueBg)}
            >
              Blogs
              {/* <ChevronDown className="h-4 w-4" /> */}
            </a>
          </div>

          {/* Search/Login Section */}
          <div className="flex items-center gap-4">
            <span
              className="text-sm font-medium"
              style={{
                color: theme.darkBlueBg,
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
              }}
            >
              {/* What do you want to learn?{" "} */}
              Success Stories
              {/* <ChevronDown
                className="inline h-4 w-4 ml-1"
                style={{ color: theme.primaryBlue }}
              /> */}
            </span>

            {/* Login Button */}
            <button
              className="px-5 py-1.5 rounded text-sm font-semibold transition-colors duration-200 border uppercase tracking-wide"
              style={{
                backgroundColor: "transparent",
                color: theme.primaryBlue,
                borderColor: theme.primaryBlue,
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.primaryBlue;
                e.target.style.color = theme.white;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = theme.primaryBlue;
              }}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ hover: { backgroundColor: theme.lightGray } }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: theme.darkBlueBg }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: theme.darkBlueBg }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: theme.white,
          borderBottom: `1px solid ${theme.lightGray}`,
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {/* Mobile All Courses Button */}
          <button
            className="flex items-center justify-between text-base font-semibold py-2 px-2 rounded-md transition-all duration-200 border-b uppercase tracking-wide w-full"
            style={{
              backgroundColor: theme.allCourse,
              color: theme.white,
              borderColor: theme.lightGray,
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              letterSpacing: "0.3px",
            }}
          >
            All Courses <ChevronDown className="h-4 w-4" />
          </button>

          {/* Mobile All Courses - Show all courses */}
          <div
            className="pl-4 pb-2 space-y-1 border-b"
            style={{ borderColor: theme.lightGray }}
          >
            <div
              className="text-sm font-semibold"
              style={{ color: theme.primaryBlue }}
            >
              All Courses
            </div>
            <div className="grid grid-cols-1 gap-0">
              {[
                "MCSE Training",
                "Linux Administrator",
                "CCNA",
                "Intune and o365",
                "Windows Powershell",
                "Python",
                "Microsoft Azure",
                "Entra ID",
                "AWS",
                "Google cloud",
                "Azure channel",
                "AWS Devops",
                "Azure Devops",
                "Ethical Hacking",
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="text-sm py-0"
                  style={{
                    color: theme.darkBlueBg,
                    fontFamily:
                      "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                    fontWeight: 500,
                    lineHeight: "1.4",
                  }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile About Us Section */}
          <div className="border-b" style={{ borderColor: theme.lightGray }}>
            <div
              className="flex items-center justify-between text-base font-semibold py-2 px-2 uppercase tracking-wide"
              style={{
                color: theme.darkBlueBg,
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              About Us <ChevronDown className="h-4 w-4" />
            </div>
            <div className="pl-4 pb-2 space-y-0">
              {[
                "Our Clientele",
                "Leadership",
                "Explore our V",
                "Happiness Guarantee",
                // "Student Feedback",
                "Testimonials",
                "Our Awards",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-sm py-0 transition-colors duration-200"
                  style={{
                    color: theme.darkBlueBg,
                    fontFamily:
                      "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="flex items-center justify-between text-base font-semibold py-2 px-2 rounded-md transition-colors duration-200 border-b uppercase tracking-wide"
            style={{
              color: theme.darkBlueBg,
              borderColor: theme.lightGray,
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              letterSpacing: "0.3px",
            }}
          >
            Training Options
            <ChevronDown className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex items-center justify-between text-base font-semibold py-2 px-2 rounded-md transition-colors duration-200 border-b uppercase tracking-wide"
            style={{
              color: theme.darkBlueBg,
              borderColor: theme.lightGray,
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              letterSpacing: "0.3px",
            }}
          >
            Blogs {/* <ChevronDown className="h-4 w-4" /> */}
          </a>

          {/* Mobile What to learn */}
          <div className="py-1 px-2">
            <span
              className="text-sm font-medium"
              style={{
                color: theme.darkBlueBg,
                fontFamily: "'Montserrat', 'Inter', sans-serif",
              }}
            >
              {/* What do you want to learn?{" "} */}
              Success Stories
              {/* <ChevronDown
                className="inline h-4 w-4 ml-1"
                style={{ color: theme.primaryBlue }}
              /> */}
            </span>
          </div>

          {/* Mobile Login Button */}
          <button
            className="w-full border px-5 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200 mt-0 uppercase tracking-wide"
            style={{
              backgroundColor: "transparent",
              color: theme.primaryBlue,
              borderColor: theme.primaryBlue,
              fontFamily: "'Montserrat', 'Inter', sans-serif",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = theme.primaryBlue;
              e.target.style.color = theme.white;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme.primaryBlue;
            }}
          >
            Contact
          </button>

          {/* Mobile Contact Info */}
          <div
            className="mt-2 pt-2 border-t"
            style={{ borderColor: theme.lightGray }}
          >
            <div className="flex flex-col gap-0 text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{
                    color: theme.primaryBlue,
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                  }}
                >
                  Chat Only:
                </span>
                <span
                  className="font-medium"
                  style={{
                    color: theme.darkBlueBg,
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                  }}
                >
                  +91-984-072-2417
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{
                    color: theme.primaryBlue,
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                  }}
                >
                  Email:
                </span>
                <span
                  className="font-medium"
                  style={{
                    color: theme.darkBlueBg,
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                  }}
                >
                  info@neeltechnologies.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
