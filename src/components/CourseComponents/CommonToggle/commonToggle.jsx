import { useState, useEffect } from "react";

const CommonCourseToggle = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const theme = {
    darkBlue: "#0F3E57",
    accentOrange: "#F28C28",
    lightBg: "#f9fafb",
    borderGray: "#e5e7eb",
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "keyfeature", label: "Key Feature" },
    { id: "curriculum", label: "Curriculum" },
    { id: "batch", label: "Batch Schedule" },
    { id: "faq", label: "FAQ" },
    { id: "request", label: "Request More Info" },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const sections = tabs.map((tab) =>
      document.getElementById(tab.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleTabClick = (tabId) => {
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full py-3 border-b sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: theme.lightBg }}
    >
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className="relative w-full py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm"
                style={{
                  backgroundColor: isActive ? theme.darkBlue : "#ffffff",
                  border: `1px solid ${theme.borderGray}`,
                  color: isActive ? "#ffffff" : theme.darkBlue,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {tab.label}

                {/* Orange bottom accent */}
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full transition-all duration-300"
                  style={{
                    backgroundColor: theme.accentOrange,
                    opacity: isActive ? 1 : 0,
                  }}
                ></span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommonCourseToggle;
