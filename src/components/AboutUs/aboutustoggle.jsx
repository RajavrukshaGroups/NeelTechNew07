import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import OurVision from "./aboutusOurVision";
import OurMission from "./aboutusOurMission";
import OurAchievements from "./aboutusacheievements";
import Testimonials from "./aboutusTestimonials";
import OurStory from "./aboutourstory";
import Overview from "./aboutusoverview";

const AboutUsToggle = () => {
  const sectionRef = useRef(null);
  const { tab } = useParams();
  const navigate = useNavigate();

  const validTabs = [
    "overview",
    "story",
    "vision",
    "mission",
    "achievements",
    "testimonials",
  ];

  const activeTab = validTabs.includes(tab) ? tab : "overview";
  // Scroll to section when URL changes
  useEffect(() => {
    if (tab && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [tab]);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "story", label: "Our Story" },
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
    { id: "achievements", label: "Our Achievements" },
    { id: "testimonials", label: "Testimonials" },
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
      default:
        return <Overview />;
    }
  };

  return (
    <div ref={sectionRef} className="w-full scroll-mt-20">
      {/* Sticky Navigation Container */}
      <div
        className="sticky top-0 z-50 w-full bg-white py-4 transition-all duration-300"
        style={{
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full flex justify-center">
            <div
              className="flex items-center gap-6 px-6 py-3 max-w-full overflow-x-auto hide-scrollbar"
              style={{
                border: "1px solid #0694D1",
                borderRadius: "50px",
                boxShadow: "0px 4px 8px 0px #DCF4FF",
                backgroundColor: "#FFFFFF",
              }}
            >
              {tabs.map((tabItem) => (
                <button
                  key={tabItem.id}
                  onClick={() => navigate(`/about-us/${tabItem.id}`)}
                  className="px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 flex-shrink-0 cursor-pointer"
                  style={{
                    backgroundColor:
                      activeTab === tabItem.id ? "#f28c28" : "transparent",
                    color: activeTab === tabItem.id ? "#FFFFFF" : "#0F3E57",
                    fontFamily: "Montserrat, serif",
                    fontSize: "17px",
                    fontWeight: 600,
                  }}
                >
                  {tabItem.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-12">{renderContent()}</div>

      {/* Hide scrollbar for horizontal scrolling on mobile */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutUsToggle;
