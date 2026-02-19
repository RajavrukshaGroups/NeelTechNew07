import { useState } from "react";
import { Clock, Users, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("top");
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Theme colors from your navbar
  const theme = {
    primaryBlue: "#0694d1",
    accentOrange: "#f28c28",
    goldenAccent: "#D4AF37",
    darkBlueBg: "#0F3E57",
    lightGray: "#F5F7FA",
    white: "#FFFFFF",
    rgbBg: "rgb(14, 24, 89)",
    allCourse: "#0694d1",
    lightBg: "#f0faff",
  };

  // Updated courses based on your list
  const allCourses = [
    // System Administrator
    {
      title: "MCSE Training Certification Course",
      duration: "40 Hrs",
      category: "System Administrator",
      enrolled: "12,345 enrolled",
    },
    {
      title: "LINUX Training Certification Course",
      duration: "40 Hrs",
      category: "System Administrator",
      enrolled: "10,234 enrolled",
    },
    {
      title: "The CCNA Training Certification Course",
      duration: "40 Hrs",
      category: "System Administrator",
      enrolled: "15,678 enrolled",
    },
    {
      title: "Intune Training Certification Course",
      duration: "24 Hrs",
      category: "System Administrator",
      enrolled: "5,432 enrolled",
    },
    {
      title: "0365 Training Certification Course",
      duration: "24 Hrs",
      category: "System Administrator",
      enrolled: "7,891 enrolled",
    },

    // Automation/Program
    {
      title: "Windows Powershell Training Certification Course",
      duration: "24 Hrs",
      category: "Automation/Program",
      enrolled: "6,543 enrolled",
    },
    {
      title: "Python Training Certification Course",
      duration: "40 Hrs",
      category: "Automation/Program",
      enrolled: "18,765 enrolled",
    },

    // Cloud Technology
    {
      title: "AZURE Training Certification Course",
      duration: "40 Hrs",
      category: "Cloud Technology",
      enrolled: "22,345 enrolled",
    },
    {
      title: "Entra ID Training Certification Course",
      duration: "24 Hrs",
      category: "Cloud Technology",
      enrolled: "4,321 enrolled",
    },
    {
      title: "AWS Training Certification Course",
      duration: "40 Hrs",
      category: "Cloud Technology",
      enrolled: "25,678 enrolled",
    },
    {
      title: "GCP Training Certification Course",
      duration: "40 Hrs",
      category: "Cloud Technology",
      enrolled: "8,901 enrolled",
    },
    {
      title: "Azure Sentinel Training Certification Course",
      duration: "24 Hrs",
      category: "Cloud Technology",
      enrolled: "3,456 enrolled",
    },

    // DevOps
    {
      title: "AWS-DEVOPS Training Certification Course",
      duration: "40 Hrs",
      category: "DevOps",
      enrolled: "9,876 enrolled",
    },
    {
      title: "AZURE-DEVOPS Training Certification Course",
      duration: "40 Hrs",
      category: "DevOps",
      enrolled: "8,765 enrolled",
    },

    // Cyber Security
    {
      title: "CYBER SECURITY Training Certification Course",
      duration: "40 Hrs",
      category: "Cyber Security",
      enrolled: "14,567 enrolled",
    },
  ];

  // Show only 9 courses initially, all when showAllCourses is true
  const displayedCourses = showAllCourses ? allCourses : allCourses.slice(0, 9);

  // Get unique categories for filtering
  const categories = [
    { id: "top", label: "Top Courses" },
    { id: "system", label: "System Admin" },
    { id: "automation", label: "Automation" },
    { id: "cloud", label: "Cloud Tech" },
    { id: "devops", label: "DevOps" },
    { id: "security", label: "Cyber Security" },
  ];

  // Filter courses based on active tab
  const getFilteredCourses = () => {
    const categoryMap = {
      system: "System Administrator",
      automation: "Automation/Program",
      cloud: "Cloud Technology",
      devops: "DevOps",
      security: "Cyber Security",
    };

    if (activeTab === "top") {
      return showAllCourses ? allCourses : allCourses.slice(0, 9);
    }

    return allCourses.filter(
      (course) => course.category === categoryMap[activeTab],
    );
  };

  const filteredCourses = getFilteredCourses();

  return (
    <section className="w-full py-14">
      <div className="max-w-[1300px] mx-auto px-12">
        {/* Title */}
        <h2
          className="text-center mb-10"
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: theme.darkBlueBg,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Explore Our Courses
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-2 transition-all duration-300 whitespace-nowrap"
              style={{
                fontSize: "18px",
                fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
                color: activeTab === tab.id ? theme.primaryBlue : "#6c7a89",
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute left-0 bottom-0 w-8 h-[3px] rounded-full"
                  style={{ backgroundColor: theme.accentOrange }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-[1px] mb-10"
          style={{ backgroundColor: theme.primaryBlue + "40" }}
        />

        {/* Course Cards - Reduced width with smaller gaps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group relative rounded-lg hover:shadow-md transition-all duration-300"
              style={{
                backgroundColor: theme.lightBg,
                border: `1px solid ${theme.primaryBlue}`,
              }}
            >
              {/* Accent Line with hover effect */}
              <div
                className="absolute left-0 top-8 bottom-8 w-[4px] transition-all duration-300 group-hover:top-5 group-hover:bottom-5 group-hover:w-[6px]"
                style={{ backgroundColor: theme.accentOrange }}
              />

              {/* Content - Reduced padding */}
              <div className="pl-5 pr-3 py-3">
                {/* Title - Smaller font */}
                <h3
                  className="mb-2 font-medium line-clamp-2"
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Montserrat', sans-serif",
                    color: theme.darkBlueBg,
                    lineHeight: "1.4",
                    minHeight: "42px", // 👈 guarantees 2 lines height
                  }}
                  title={course.title}
                >
                  {course.title}
                </h3>

                {/* Info Section - Smaller gaps and font */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <div className="flex items-center gap-1">
                    <Clock size={13} color={theme.accentOrange} />
                    <span style={{ color: theme.darkBlueBg }}>
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <BookOpen size={13} color={theme.accentOrange} />
                    <span style={{ color: theme.darkBlueBg }}>
                      {course.category.split("/")[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users size={13} color={theme.accentOrange} />
                    <span style={{ color: theme.darkBlueBg }}>
                      {course.enrolled}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {activeTab === "top" && allCourses.length > 9 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: theme.primaryBlue,
                color: theme.white,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.accentOrange;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme.primaryBlue;
              }}
            >
              <span>{showAllCourses ? "Show Less" : "Show More Courses"}</span>
              {showAllCourses ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
          </div>
        )}

        {/* Course count */}
        <div
          className="text-center mt-6 text-sm"
          style={{ color: theme.darkBlueBg + "80" }}
        >
          {activeTab === "top"
            ? `Showing ${filteredCourses.length} of ${allCourses.length} courses`
            : `Showing ${filteredCourses.length} courses`}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
