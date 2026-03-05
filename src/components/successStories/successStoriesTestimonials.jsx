import { useState } from "react";
import SuccessStoriesStudents from "./successStoriesStudents";
import SuccessStoriesYTVideos from "./successStoriesYTVideos";

const SuccessStoriesTestimonials = () => {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mb-4">
            The Neel Experience
          </h2>

          <p className="text-lg md:text-xl font-medium text-[#180303] mb-10">
            Hear firsthand from students who’ve experienced the Neel
            Technologies difference.
          </p>

          {/* Toggle */}
          <div className="flex justify-center">
            <div className="flex items-center bg-white border border-[#1C5D8F] rounded-full p-2 w-full max-w-[650px] shadow-sm">
              <button
                onClick={() => setActiveTab("students")}
                className={`flex-1 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "students"
                    ? "bg-[#1C5D8F] text-white shadow-md"
                    : "text-[#1F2933]"
                }`}
              >
                Students Testimonial
              </button>

              <button
                onClick={() => setActiveTab("videos")}
                className={`flex-1 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-[#1C5D8F] text-white shadow-md"
                    : "text-[#1F2933]"
                }`}
              >
                Student Testimonial Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Conditional Rendering Below */}
      {activeTab === "students" && <SuccessStoriesStudents />}

      {activeTab === "videos" && <SuccessStoriesYTVideos />}
    </>
  );
};

export default SuccessStoriesTestimonials;
