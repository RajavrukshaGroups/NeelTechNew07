import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import NeelLogo from "/assets/head-logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import LeadPopup from "../LeadPopup/LeadPopup";

// Dropdown Component for About Us
const AboutDropdown = ({ theme, isOpen, onMouseEnter, onMouseLeave }) => {
  const aboutMenuItems = [
    { label: "About Us", path: "/about-us" },
    { label: "Our Vision", path: "/about-us/vision" },
    { label: "Our Mission", path: "/about-us/mission" },
    { label: "Our Achievements", path: "/about-us/achievements" },
    { label: "Testimonials", path: "/about-us/testimonials" },
  ];

  return (
    <div
      className={`absolute top-full left-0 mt-1 w-48 sm:w-56 md:w-64 rounded-md shadow-xl transition-all duration-300 ease-in-out ${
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
            className="block px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 text-xs sm:text-sm md:text-base font-medium"
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
              e.target.style.paddingLeft = "20px";
              e.target.style.fontWeight = "700";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme.darkBlueBg;
              e.target.style.paddingLeft = "12px";
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
      className={`absolute top-full left-0 mt-1 w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] rounded-md shadow-xl transition-all duration-300 ease-in-out ${
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
      <div className="flex flex-col sm:flex-row">
        {/* Categories Column */}
        <div
          className="w-full sm:w-1/4 border-b sm:border-b-0 sm:border-r"
          style={{ borderColor: theme.lightGray, backgroundColor: "#FAFAFA" }}
        >
          <div className="py-2 flex sm:block">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="px-2 sm:px-3 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer text-xs sm:text-sm xl:text-base font-semibold whitespace-nowrap sm:whitespace-normal"
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
        <div className="w-full sm:w-3/4 p-3 sm:p-4 md:p-5">
          <h3
            className="text-sm sm:text-base font-bold mb-3 sm:mb-4 pb-2 border-b"
            style={{
              color: theme.primaryBlue,
              borderColor: theme.lightGray,
            }}
          >
            {hoveredCategory}
          </h3>

          <div className=" max-h-[300px] sm:max-h-[400px] pr-2">
            {courseChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4"
              >
                {chunk.map((item, itemIndex) => (
                  <Link
                    key={`${chunkIndex}-${itemIndex}`}
                    to={item.path}
                    className="text-xs sm:text-sm md:text-base font-medium hover:text-blue-600 hover:font-semibold transition-all"
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
  const navigate = useNavigate();

const [showPopup, setShowPopup] = useState(false);
const [pendingRoute, setPendingRoute] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [openDropdown, setOpenDropdown] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

// const handleCourseClick = (route) => {

//   const leadSubmitted = localStorage.getItem("leadSubmitted");

//   // If form already submitted → go directly to course
//   if (leadSubmitted === "true") {
//     navigate(route);
//     return;
//   }

//   // Otherwise show popup
//   setPendingRoute(route);
//   setShowPopup(true);
// };

// const handleSuccess = () => {
//   navigate(pendingRoute);
// };
const handleCourseClick = (path) => {
  navigate(path);
};

const handleClose = () => {
  if (!localStorage.getItem("leadSubmitted")) {
    alert("Please submit the form to continue");
    return;
  }
  setOpen(false);
};

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
        className="px-2 sm:px-4 md:px-[5%] py-2 sm:py-3 flex justify-center items-center border-b"
        style={{
          backgroundColor: theme.rgbBg,
          fontFamily: "Poppins",
        }}
      >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-xs sm:text-sm md:text-base whitespace-nowrap">
          <span className="text-white font-medium">
            <span className="text-blue-200 mr-1 sm:mr-2 font-semibold">
              Call:
            </span>
            {/* <span className="font-bold">+91 6361866299</span> */}
            <a href="tel:+916361866299" className="hover:text-[#F28C28] transition-colors font-bold text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  +91 6361866299
                </a>
            , {" "}
             <a href="tel:+918310521980" className="hover:text-[#F28C28] transition-colors font-bold text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  +91 8310521980
                </a>
          </span>
          <span className="text-white font-medium">
          <span className="text-blue-200 mr-1 sm:mr-2 font-semibold">
            Email:
          </span>

  <a
    href="mailto:info@neeltechnologies.net"
    className="font-bold hover:text-[#F28C28] transition-colors"
  >
    info@neeltechnologies.net
  </a>
</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex justify-between items-center border-b relative"
        style={{ backgroundColor: theme.white }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={NeelLogo}
            alt="Neel Technologies"
            className="h-14 sm:h-9 md:h-12 lg:h-14 xl:h-20 w-auto"
            style={{ marginRight: "0.25rem" }}
          />
          <div className="flex flex-col ">
            <div>
              <span
                className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-extrabold tracking-tight"
                style={{ color: theme.neelBlue }}
              >
                NEEL
              </span>
              <span
                className="text-base sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-extrabold tracking-tight whitespace-nowrap ml-1"
                style={{ color: theme.technologiesOrange }}
              >
                TECHNOLOGIES
              </span>
            </div>
            <span className="test-xs gap-18 sm:text-xs md:text-lg font-medium ">
              Build Your Tech Future
            </span>
          </div>
        </Link>

        {/* All Courses Button - Desktop */}
        {/* <div className="hidden lg:flex items-center ml-2 xl:ml-4">
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("allCourses")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 px-3 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap"
              style={{
                backgroundColor: theme.allCourse,
                color: theme.allCourseTxtClr,
              }}
            >
              All Courses
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${
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
        </div> */}

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center gap-2 xl:gap-4 ml-auto"
          style={{ fontFamily: "Montserrat", zIndex: "100" }}
        >
          {/* Courses */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("courses")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap px-1 xl:px-2"
              style={{
                color:
                  openDropdown === "courses"
                    ? theme.primaryBlue
                    : theme.darkBlueBg,
              }}
            >
              Courses
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  openDropdown === "courses" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-64 rounded-lg shadow-2xl transition-all duration-300 ${
                openDropdown === "courses"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
              style={{
                backgroundColor: theme.white,
                border: `1px solid ${theme.lightGray}`,
                zIndex: 50,
              }}
            >
              {[
                {
                  name: "System Administrator",
                  subItems: [
                    {
                      label: "MCSE Training",
                      path: "/mcse-training-certification-course",
                    },
                    {
                      label: "Linux Administrator",
                      path: "/linux-training-certification-course",
                    },
                    {
                      label: "CCNA",
                      path: "/ccna-training-certification-course",
                    },
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
                    {
                      label: "Python",
                      path: "/python-training-certification-course",
                    },
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
                      label: "AWS",
                      path: "/aws-training-certification-course",
                    },
                    {
                      label: "Google Cloud",
                      path: "/google-cloud-gcp-training-certification-course",
                    },
                    {
                      label: "Entra ID",
                      path: "/microsoft-entra-id-training-certification-course",
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
              ].map((category, index) => (
                <div key={index} className="relative group">
                  <div
                    className="px-5 py-3 text-xs xl:text-sm font-bold cursor-pointer hover:bg-gray-100"
                    style={{ color: theme.darkBlueBg }}
                  >
                    {category.name}
                  </div>

                  <div
                    className="absolute top-0 left-full w-64 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    style={{
                      backgroundColor: theme.white,
                      border: `1px solid ${theme.lightGray}`,
                    }}
                  >
                   {category.subItems.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleCourseClick(item.path)}
                        className="block w-full text-left px-5 py-3 text-xs xl:text-sm font-bold hover:bg-gray-100"
                        style={{ color: theme.darkBlueBg }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("about")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap px-1 xl:px-2"
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
            to="/our-services"
            className="text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap px-1 xl:px-2"
            style={{ color: theme.darkBlueBg }}
          >
            Training Options
          </Link>

          <Link
            to="/blogs"
            className="text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap px-1 xl:px-2"
            style={{ color: theme.darkBlueBg }}
          >
            Blogs
          </Link>

          <Link
            to="/success-stories"
            className="text-xs xl:text-sm font-bold uppercase tracking-wide whitespace-nowrap px-1 xl:px-2"
            style={{ color: theme.darkBlueBg }}
          >
            Success Stories
          </Link>

          <Link
            to="/contact-us"
            className="px-2 xl:px-3 py-1 rounded text-xs xl:text-sm font-bold border-2 transition-colors whitespace-nowrap"
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

        {/* Mobile Menu Button - Visible on tablet and below */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-1.5 sm:p-2 ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className="h-5 w-5 sm:h-6 sm:w-6"
              style={{ color: theme.darkBlueBg }}
            />
          ) : (
            <Menu
              className="h-5 w-5 sm:h-6 sm:w-6"
              style={{ color: theme.darkBlueBg }}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu - Visible on tablet and below */}
      <div
        className={`lg:hidden overflow-hidden transition-all text-green-950 font-block duration-300 ${
          isMobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: theme.white }}
      >
        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-3 sm:space-y-4">
          {/* Mobile All Courses Button */}

          {/* Courses - Mobile Version */}
          <div className="lg:hidden w-full">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "courses" ? null : "courses")
              }
              className="flex justify-between items-center w-full px-1 py-3 text-lg font-bold "
              style={{ color: "black" }}
            >
              Courses
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  openDropdown === "courses" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Main Courses Dropdown */}
            {openDropdown === "courses" && (
              <div className="bg-white border-t">
                {[
                  {
                    name: "System Administrator",
                    subItems: [
                      {
                        label: "MCSE Training",
                        path: "/mcse-training-certification-course",
                      },
                      {
                        label: "Linux Administrator",
                        path: "/linux-training-certification-course",
                      },
                      {
                        label: "CCNA",
                        path: "/ccna-training-certification-course",
                      },
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
                      {
                        label: "Python",
                        path: "/python-training-certification-course",
                      },
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
                        label: "AWS",
                        path: "/aws-training-certification-course",
                      },
                      {
                        label: "Google Cloud",
                        path: "/google-cloud-gcp-training-certification-course",
                      },
                      {
                        label: "Entra ID",
                        path: "/microsoft-entra-id-training-certification-course",
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
                ].map((category, index) => (
                  <div key={index} className="border-b">
                    {/* Category Button */}
                    <button
                      onClick={() =>
                        setOpenCategory(openCategory === index ? null : index)
                      }
                      className="flex justify-between items-center w-full px-6 py-3  text-lg font-extrabold"
                    >
                      {category.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          openCategory === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Sub Items */}
                    {openCategory === index && (
                      <div className="bg-white">
                        {category.subItems.map((item, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              handleCourseClick(item.path);
                              setIsMobileMenuOpen(false);
                              setOpenDropdown(null);
                              setOpenCategory(null);
                            }}
                            className="block w-full text-left px-10 py-3 text-xs font-medium font-serif text-blue-900 hover:bg-blue-100 transition"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile About Links */}
          <div
            className="border-b pb-2 sm:pb-3"
            style={{ borderColor: theme.lightGray }}
          >
            <div
              className="font-bold text-base sm:text-base mb-2 sm:mb-3"
              style={{ color: "black" }}
            >
              About Us
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {aboutMenuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="text-xs sm:text-sm font-medium font-serif text-blue-900 py-1"
                  // style={{ color: theme.darkBlueBg }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Other Links */}
          <div className="space-y-2">
            <Link
              to="/our-services"
              className="block text-base sm:text-base font-extrabold py-1.5"
              style={{ color: "black" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Training Options
            </Link>

            <Link
              to="/blogs"
              className="block text-base sm:text-base font-extrabold py-1.5"
              style={{ color: "black" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>

            <Link
              to="/success-stories"
              className="block text-base sm:text-base font-extrabold py-1.5"
              style={{ color: "black" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Success Stories
            </Link>

            <Link
              to="/contact-us"
              className="block text-base sm:text-base font-extrabold py-1.5"
              style={{ color: "black" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div
            className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t text-xs sm:text-sm"
            style={{ borderColor: theme.lightGray }}
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div>
                <span
                  className="font-extrabold text-base"
                  style={{ color: "black" }}
                >
                  Call:
                </span>{" "}
                <span
                  className="font-bold font-serif text-sm text-blue-950"
                  // style={{ color: theme.darkBlueBg }}
                >
                  +91 6361866299
                </span>
               
              </div>
              <div>
                <span
                  className="font-extrabold text-base"
                  style={{ color: "black" }}
                >
                  Email:
                </span>{" "}
                <span
                  className="font-bold font-serif text-sm"
                  style={{ color: theme.darkBlueBg }}
                >
                  info@neeltechnologies.net
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* <LeadPopup
  open={showPopup}
  setOpen={setShowPopup}
  onSuccess={handleSuccess}
/> */}

    </div>
  );
};

// Add this at the bottom of the file
const aboutMenuItems = [
  { label: "About Us", path: "/about-us" },
  { label: "Our Vision", path: "/about-us/vision" },
  { label: "Our Mission", path: "/about-us/mission" },
  { label: "Our Achievements", path: "/about-us/achievements" },
  { label: "Testimonials", path: "/about-us/testimonials" },
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
