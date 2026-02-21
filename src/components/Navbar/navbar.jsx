import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import NeelLogo from "/assets/head-logo.png";
import { Link } from "react-router-dom";

// Dropdown Component for About Us
const AboutDropdown = ({ theme, isOpen, onMouseEnter, onMouseLeave }) => {
  const aboutMenuItems = [
    { label: "About Us", path: "/about" },
    { label: "Our Vision", path: "/about/vision" },
    { label: "Our Mission", path: "/about/mission" },
    { label: "Our Achievements", path: "/about/achievements" },
    { label: "Testimonials", path: "/about/testimonials" },
  ];

  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 rounded-md shadow-xl transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
      style={{
        backgroundColor: theme.white,
        border: `1px solid ${theme.lightGray}`,
        zIndex: 50,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-2">
        {aboutMenuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="block px-4 py-2 transition-all duration-200 text-base font-medium"
            style={{
              color: theme.darkBlueBg,
              fontFamily: "'Inter', sans-serif",
              borderBottom:
                idx < aboutMenuItems.length - 1
                  ? `1px solid ${theme.lightGray}`
                  : "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = theme.lightGray;
              e.target.style.color = theme.primaryBlue;
              e.target.style.paddingLeft = "24px";
              e.target.style.fontWeight = "700";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme.darkBlueBg;
              e.target.style.paddingLeft = "16px";
              e.target.style.fontWeight = "500";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Mega Menu Component for All Courses
const AllCoursesMegaMenu = ({ theme, isOpen, onMouseEnter, onMouseLeave }) => {
  const [hoveredCategory, setHoveredCategory] = useState("All Courses");

  const categories = [
    {
      name: "All Courses",
      subItems: [
        { label: "MCSE Training", path: "/mcse-training-certification-course" },
        {
          label: "Linux Administrator",
          path: "/linux-training-certification-course",
        },
        { label: "CCNA", path: "/ccna-training-certification-course" },
        {
          label: "Intune & O365",
          path: "/intune-training-certification-course",
        },
        {
          label: "Windows Powershell",
          path: "/powershell-training-certification-course",
        },
        { label: "Python", path: "/python-training-certification-course" },
        {
          label: "Microsoft Azure",
          path: "/microsoft-azure-training-certification-course",
        },
        {
          label: "Entra ID",
          path: "/microsoft-entra-id-training-certification-course",
        },
        { label: "AWS", path: "/aws-training-certification-course" },
        {
          label: "Google Cloud",
          path: "/google-cloud-gcp-training-certification-course",
        },
        {
          label: "Azure Sentinel",
          path: "/azure-sentinel-training-certification-course",
        },
        {
          label: "AWS DevOps",
          path: "/aws-devops-training-certification-course",
        },
        {
          label: "Azure DevOps",
          path: "/azure-devops-training-certification-course",
        },
        {
          label: "Ethical Hacking",
          path: "/cyber-security-training-certification-course",
        },
      ],
    },
    {
      name: "System Administrator",
      subItems: [
        { label: "MCSE Training", path: "/mcse-training-certification-course" },
        {
          label: "Linux Administrator",
          path: "/linux-training-certification-course",
        },
        { label: "CCNA", path: "/ccna-training-certification-course" },
        {
          label: "Intune & O365",
          path: "/intune-training-certification-course",
        },
      ],
    },
    {
      name: "Automation",
      subItems: [
        {
          label: "Windows Powershell",
          path: "/powershell-training-certification-course",
        },
        { label: "Python", path: "/python-training-certification-course" },
      ],
    },
    {
      name: "Cloud Technology",
      subItems: [
        {
          label: "Microsoft Azure",
          path: "/microsoft-azure-training-certification-course",
        },
        {
          label: "Entra ID",
          path: "/microsoft-entra-id-training-certification-course",
        },
        { label: "AWS", path: "/aws-training-certification-course" },
        {
          label: "Google Cloud",
          path: "/google-cloud-gcp-training-certification-course",
        },
        {
          label: "Azure Sentinel",
          path: "/azure-sentinel-training-certification-course",
        },
      ],
    },
    {
      name: "DevOps",
      subItems: [
        {
          label: "AWS DevOps",
          path: "/aws-devops-training-certification-course",
        },
        {
          label: "Azure DevOps",
          path: "/azure-devops-training-certification-course",
        },
      ],
    },
    {
      name: "Cyber Security",
      subItems: [
        {
          label: "Ethical Hacking",
          path: "/cyber-security-training-certification-course",
        },
      ],
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setHoveredCategory("All Courses");
    }
  }, [isOpen]);

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

  return (
    <div
      className={`absolute top-full left-0 mt-1 w-[95vw] max-w-[900px] rounded-md shadow-xl transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
      style={{
        backgroundColor: theme.white,
        border: `1px solid ${theme.lightGray}`,
        zIndex: 100,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex">
        {/* Categories Column */}
        <div
          className="w-1/4 border-r"
          style={{ borderColor: theme.lightGray, backgroundColor: "#FAFAFA" }}
        >
          <div className="py-2">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="px-3 py-2.5 transition-all duration-200 cursor-pointer text-sm xl:text-base font-semibold"
                style={{
                  color:
                    hoveredCategory === category.name
                      ? theme.primaryBlue
                      : theme.darkBlueBg,
                  backgroundColor:
                    hoveredCategory === category.name
                      ? theme.lightGray
                      : "transparent",
                  fontWeight: hoveredCategory === category.name ? 700 : 600,
                  borderLeft:
                    hoveredCategory === category.name
                      ? `3px solid ${theme.primaryBlue}`
                      : "3px solid transparent",
                }}
                onMouseEnter={() => setHoveredCategory(category.name)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>

        {/* Courses Display */}
        <div className="w-3/4 p-5">
          <h3
            className="text-base font-bold mb-4 pb-2 border-b"
            style={{
              color: theme.primaryBlue,
              borderColor: theme.lightGray,
            }}
          >
            {hoveredCategory}
          </h3>

          <div className="overflow-y-auto max-h-[400px] pr-2">
            {courseChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="grid grid-cols-3 gap-4 mb-4">
                {chunk.map((item, itemIndex) => (
                  <Link
                    key={`${chunkIndex}-${itemIndex}`}
                    to={item.path}
                    className="text-base font-medium hover:text-blue-600 hover:font-semibold transition-all"
                    style={{
                      color: theme.darkBlueBg,
                      textDecoration: "none",
                    }}
                    onClick={() => onMouseLeave()}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
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

  const theme = {
    primaryBlue: "#1C5D8F",
    darkBlueBg: "#0F3E57",
    lightGray: "#F5F7FA",
    white: "#FFFFFF",
    rgbBg: "rgb(14, 24, 89)",
    allCourse: "#0694d1",
    allCourseTxtClr: "#FFFFFF",
    neelBlue: "#0F3E57",
    technologiesOrange: "#f28c28",
  };

  return (
    <div className="w-full" style={{ backgroundColor: theme.white }}>
      {/* Top Bar */}
      <div
        className="px-4 md:px-[5%] py-3 flex justify-center items-center border-b"
        style={{
          backgroundColor: theme.rgbBg,
          fontFamily: "Poppins",
        }}
      >
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base whitespace-nowrap">
          <span className="text-white font-medium">
            <span className="text-blue-200 mr-2 font-semibold">Chat Only:</span>
            <span className="font-bold">+91-636-186-6299</span>
          </span>
          <span className="text-white font-medium">
            <span className="text-blue-200 mr-2 font-semibold">Email:</span>
            <span className="font-bold">info@neeltechnologies.com</span>
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className="pl-2 pr-4 md:pl-6 md:pr-6 py-4 flex justify-between items-center border-b relative"
        style={{ backgroundColor: theme.white }}
      >
        {/* Logo - Moved to extreme left */}
        <Link to="/" className="flex items-center flex-shrink-0 ml-0">
          {" "}
          <img
            src={NeelLogo}
            alt="Neel Technologies"
            className="h-10 md:h-12 w-auto"
            style={{ height: "3.5rem", marginRight: "0.5rem" }}
          />
          <div className="flex items-center">
            <span
              className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight"
              style={{ color: theme.neelBlue }}
            >
              NEEL&nbsp;
            </span>
            <span
              className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight whitespace-nowrap"
              style={{ color: theme.technologiesOrange }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* All Courses Button - Now separate from logo */}
        <div className="flex items-center ml-2 lg:ml-4">
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => handleDropdownEnter("allCourses")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
              style={{
                backgroundColor: theme.allCourse,
                color: theme.allCourseTxtClr,
              }}
            >
              All Courses
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
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

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center gap-3 xl:gap-6 ml-auto"
          style={{ fontFamily: "Montserrat", zIndex: "100" }}
        >
          {/* About Us */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("about")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap"
              style={{
                color:
                  openDropdown === "about"
                    ? theme.primaryBlue
                    : theme.darkBlueBg,
              }}
            >
              About Us
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${
                  openDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AboutDropdown
              theme={theme}
              isOpen={openDropdown === "about"}
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            />
          </div>

          <Link
            to="/training-option"
            className="text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap"
            style={{ color: theme.darkBlueBg }}
          >
            Training Options
          </Link>

          <Link
            to="/blogs"
            className="text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap"
            style={{ color: theme.darkBlueBg }}
          >
            Blogs
          </Link>

          <Link
            to="/success-stories"
            className="text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap"
            style={{ color: theme.darkBlueBg }}
          >
            Success Stories
          </Link>

          <Link
            to="/contact"
            className="px-4 py-1.5 rounded text-xs xl:text-sm font-bold border-2 transition-colors whitespace-nowrap"
            style={{
              color: theme.primaryBlue,
              borderColor: theme.primaryBlue,
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
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" style={{ color: theme.darkBlueBg }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: theme.darkBlueBg }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: theme.white }}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Mobile All Courses */}
          <div
            className="border-b pb-3"
            style={{ borderColor: theme.lightGray }}
          >
            <div
              className="font-bold text-base mb-3"
              style={{ color: theme.primaryBlue }}
            >
              All Courses
            </div>
            <div className="grid grid-cols-2 gap-3">
              {categories[0].subItems.map((course, idx) => (
                <Link
                  key={idx}
                  to={course.path}
                  className="text-sm font-medium py-1"
                  style={{ color: theme.darkBlueBg }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {course.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile About Links */}
          <div
            className="border-b pb-3"
            style={{ borderColor: theme.lightGray }}
          >
            <div
              className="font-bold text-base mb-3"
              style={{ color: theme.primaryBlue }}
            >
              About Us
            </div>
            <div className="space-y-2">
              {aboutMenuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block text-sm font-medium py-1"
                  style={{ color: theme.darkBlueBg }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Other Links */}
          <Link
            to="/training-option"
            className="block text-base font-bold py-2"
            style={{ color: theme.darkBlueBg }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Training Options
          </Link>

          <Link
            to="/blogs"
            className="block text-base font-bold py-2"
            style={{ color: theme.darkBlueBg }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>

          <Link
            to="/success-stories"
            className="block text-base font-bold py-2"
            style={{ color: theme.darkBlueBg }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Success Stories
          </Link>

          <Link
            to="/contact"
            className="block text-base font-bold py-2"
            style={{ color: theme.primaryBlue }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Contact Info */}
          <div
            className="pt-4 mt-2 border-t text-sm"
            style={{ borderColor: theme.lightGray }}
          >
            <div className="space-y-2">
              <div>
                <span
                  className="font-bold"
                  style={{ color: theme.primaryBlue }}
                >
                  Chat Only:
                </span>{" "}
                <span
                  className="font-medium"
                  style={{ color: theme.darkBlueBg }}
                >
                  +91-984-072-2417
                </span>
              </div>
              <div>
                <span
                  className="font-bold"
                  style={{ color: theme.primaryBlue }}
                >
                  Email:
                </span>{" "}
                <span
                  className="font-medium"
                  style={{ color: theme.darkBlueBg }}
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

// Add this at the bottom of the file
const aboutMenuItems = [
  { label: "About Us", path: "/about" },
  { label: "Our Vision", path: "/about/vision" },
  { label: "Our Mission", path: "/about/mission" },
  { label: "Our Achievements", path: "/about/achievements" },
  { label: "Testimonials", path: "/about/testimonials" },
];

const categories = [
  {
    name: "All Courses",
    subItems: [
      { label: "MCSE Training", path: "/mcse-training-certification-course" },
      {
        label: "Linux Administrator",
        path: "/linux-training-certification-course",
      },
      { label: "CCNA", path: "/ccna-training-certification-course" },
      { label: "Intune & O365", path: "/intune-training-certification-course" },
      {
        label: "Windows Powershell",
        path: "/powershell-training-certification-course",
      },
      { label: "Python", path: "/python-training-certification-course" },
      {
        label: "Microsoft Azure",
        path: "/microsoft-azure-training-certification-course",
      },
      {
        label: "Entra ID",
        path: "/microsoft-entra-id-training-certification-course",
      },
      { label: "AWS", path: "/aws-training-certification-course" },
      {
        label: "Google Cloud",
        path: "/google-cloud-gcp-training-certification-course",
      },
      {
        label: "Azure Sentinel",
        path: "/azure-sentinel-training-certification-course",
      },
      {
        label: "AWS DevOps",
        path: "/aws-devops-training-certification-course",
      },
      {
        label: "Azure DevOps",
        path: "/azure-devops-training-certification-course",
      },
      {
        label: "Ethical Hacking",
        path: "/cyber-security-training-certification-course",
      },
    ],
  },
];

export default Navbar;
