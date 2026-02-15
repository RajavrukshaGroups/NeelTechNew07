import { useState } from "react";
import OurVision from "./aboutusOurVision";
import OurMission from "./aboutusOurMission";
import OurAchievements from "./aboutusacheievements";
import Testimonials from "./aboutusTestimonials";
import StudentFeedback from "./aboutusStudentFeedback";
import OurStory from "./aboutourstory";
import Overview from "./aboutusoverview";

const AboutUsToggle = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "story", label: "Our Story" },
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
    { id: "achievements", label: "Our Achievements" },
    // { id: "testimonials", label: "Testimonials" },
    { id: "feedback", label: "Student Feedback" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "story":
        return <OurStory />;
      case "vision":
        return <OurVision />;
      case "mission":
        return <OurMission />;
      case "achievements":
        return <OurAchievements />;
      case "testimonials":
        return <Testimonials />;
      case "feedback":
        return <StudentFeedback />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Elegant Pill Container */}
        <div className="w-full flex justify-center">
          <div
            className="flex items-center gap-6 px-6 py-3 max-w-full overflow-hidden"
            style={{
              border: "1px solid #0694D1",
              borderRadius: "50px",
              boxShadow: "0px 4px 8px 0px #DCF4FF",
              backgroundColor: "#FFFFFF",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === tab.id ? "#f28c28" : "transparent",
                  color: activeTab === tab.id ? "#FFFFFF" : "#0F3E57",
                  fontFamily: "Montserrat, serif",
                  fontSize: "17px",
                  fontWeight: 600,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-12">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AboutUsToggle;
