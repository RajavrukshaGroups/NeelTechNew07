import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

import Hero1 from "../../../public/assets/hero1.jpeg";
import Hero2 from "../../../public/assets/hero2.jpeg";
import Hero3 from "../../../public/assets/hero3.jpeg";
import Hero4 from "../../../public/assets/hero4.jpeg";
import Hero5 from "../../../public/assets/hero5.jpeg";
import Hero6 from "../../../public/assets/hero6.jpeg";

const slides = [
  {
    image: Hero6,
    title: "Transform Your Career with",
    highlight: "Neel Technologies",
    description:
      "Master Cloud, DevOps, Linux, Networking & Automation with real-time projects and expert mentorship.",
    stats: ["1000+ Students Trained", "50+ Corporate Clients"],
    button1: "Explore Programs",
    button2: "Get Free Counseling",
  },
  {
    image: Hero5,
    title: "Become Job-Ready in",
    highlight: "Cloud & DevOps",
    bullets: [
      "AWS, Azure & Hybrid Cloud Training",
      "Hands-on Labs & Live Projects",
      "Certification-Focused Curriculum",
      "Interview & Resume Preparation",
    ],
    button1: "View Cloud Courses",
    button2: null,
  },
  {
    image: Hero3,
    title: "Advance Your Skills in",
    highlight: "Linux & Networking",
    bullets: [
      "Linux Administration & RHCSA",
      "CCNA & Enterprise Networking",
      "Server & Infrastructure Management",
      "Real-World Troubleshooting Practice",
    ],
    button1: "Explore IT Courses",
    button2: null,
  },
  {
    image: Hero4,
    title: "Corporate Training for",
    highlight: "Modern IT Teams",
    bullets: [
      "Customized Enterprise Programs",
      "Onsite & Online Delivery",
      "Cloud Migration & DevOps Workshops",
      "Upskill Your Workforce Efficiently",
    ],
    button1: "Corporate Solutions",
    button2: "Talk to Sales",
  },
  {
    image: Hero5,
    title: "Learn from Industry Experts",
    highlight: "Build Real Confidence",
    description:
      "Our instructors bring real-world experience to help you build practical expertise — not just theory.",
    stats: ["Live Instructor-Led Sessions", "Weekend & Fast-Track Batches"],
    button1: "Enroll Now",
    button2: null,
  },
  {
    image: Hero6,
    title: "Get Certified. Get Ahead.",
    highlight: "Future-Proof Your Career",
    bullets: [
      "Placement-Oriented Training",
      "Global Certification Preparation",
      "Career Mentorship & Guidance",
    ],
    button1: "Start Your Journey",
    button2: "Contact Us",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with subtle zoom */}
          <img
            src={slide.image}
            alt="Hero Slide"
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
              index === current ? "scale-105" : "scale-100"
            }`}
          />

          {/* Dark Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1350px] mx-auto px-6 w-full">
              <div className="max-w-2xl text-white space-y-8">
                {/* Heading */}
                <h1
                  className="leading-[1.1]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                    textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.title}
                  {slide.highlight && (
                    <>
                      <br />
                      <span
                        className="relative inline-block mt-2"
                        style={{
                          color: "#3B82F6",
                          fontWeight: 800,
                        }}
                      >
                        {slide.highlight}
                        <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-500/30 -z-10"></span>
                      </span>
                    </>
                  )}
                </h1>

                {/* Description */}
                {slide.description && (
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: "1.8",
                    }}
                  >
                    {slide.description}
                  </p>
                )}

                {/* Stats */}
                {slide.stats && (
                  <div
                    className="flex flex-wrap gap-8"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#E5E7EB",
                    }}
                  >
                    {slide.stats.map((stat, i) => (
                      <span key={i}>{stat}</span>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                {slide.bullets && (
                  <div className="space-y-4 mt-4">
                    {slide.bullets.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-blue-400" size={22} />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "1.1rem",
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-6 mt-8">
                  {slide.button1 && (
                    <button
                      className="px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #2563EB, #1E40AF)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {slide.button1}
                    </button>
                  )}

                  {slide.button2 && (
                    <button
                      className="px-10 py-4 rounded-xl text-lg font-semibold border-2 transition-all duration-300 hover:bg-white hover:text-black"
                      style={{
                        borderColor: "white",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {slide.button2}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-500 w-8" : "bg-gray-400 w-3"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
