import { useState, useEffect } from "react";
import OnlineTraining from "./OnlineTraining";
import ClassRoomTraining from "./ClassTraining";
import LMSVideoPortal from "./LmsTraining";

const TrainingCommonToggle = () => {
  const [active, setActive] = useState("Online Training");
  const [hideSticky, setHideSticky] = useState(false);

  const options = [
    "Online Training",
    "Class Room Training",
    "LMS Video Portal",
  ];

  // 🔥 Hide sticky when footer appears
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideSticky(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // 🔥 Scroll to top when tab changes
  const handleClick = (item) => {
    setActive(item);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };

  return (
    <>
      {/* 🔥 Sticky Toggle */}
      <section
        className={`w-full bg-white sticky top-0 z-50 shadow-md py-4 transition-all duration-300
        ${hideSticky ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Title */}
          <h2
            className="text-center text-2xl md:text-3xl font-semibold text-[#2b2f33] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Learning Options for You
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center">
            <div
              className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3
              border border-blue-400 rounded-full px-4 py-2 bg-white"
            >
              {options.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className={`px-5 py-1.5 rounded-full text-sm md:text-base font-medium transition-all duration-300
                  ${
                    active === item
                      ? "bg-blue-500 text-white shadow"
                      : "text-[#2b2f33] hover:text-blue-500"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Dynamic Section Rendering */}
      {active === "Online Training" && <OnlineTraining />}
      {active === "Class Room Training" && <ClassRoomTraining />}
      {active === "LMS Video Portal" && <LMSVideoPortal />}
    </>
  );
};

export default TrainingCommonToggle;
