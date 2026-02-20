import { useEffect, useState } from "react";
import logo from "../../../public/assets/head-logo.png";
import { Star } from "lucide-react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Expanded student reviews data with 20 unique reviews
  const reviews = [
    {
      id: 1,
      name: "Shabarish",
      quote:
        "The certification training was comprehensive and helped me clear my exams on first attempt.",
      role: "System Administrator",
      company: "SAP",
      rating: 5,
    },
    {
      id: 2,
      name: "Mryutyunjay",
      quote:
        "Neel Technologies helped me gain real-world skills that boosted my confidence and career growth.",
      role: "System Administrator",
      company: "Wipro",
      rating: 5,
    },
    {
      id: 3,
      name: "Rakshitha",
      quote:
        "The practical training and mentorship made learning easy and industry-ready.",
      role: "DevOps Specialist",
      company: "Infosys",
      rating: 5,
    },
    {
      id: 4,
      name: "Rolly Yadav",
      quote:
        "Hands-on projects gave me the experience I needed to stand out in interviews.",
      role: "Security Analyst",
      company: "SecureNet",
      rating: 5,
    },
    {
      id: 5,
      name: "Tejas",
      quote:
        "Support from trainers was amazing. I felt guided throughout my learning journey.",
      role: "AI Machine Learning",
      company: "Wipro",
      rating: 5,
    },
    {
      id: 6,
      name: "Abhinav",
      quote:
        "Neel Technologies truly transformed my skills and prepared me for real industry challenges.",
      role: "System Administrator",
      company: "Infosys",
      rating: 5,
    },
    {
      id: 7,
      name: "Priya Sharma",
      quote:
        "The Azure DevOps course was perfectly structured. I landed a job within 2 months of completion.",
      role: "DevOps Engineer",
      company: "Microsoft",
      rating: 5,
    },
    {
      id: 8,
      name: "Vikram Mehta",
      quote:
        "Excellent training on AWS. The hands-on labs were incredibly helpful for real-world scenarios.",
      role: "Cloud Architect",
      company: "Amazon",
      rating: 5,
    },
    {
      id: 9,
      name: "Neha Gupta",
      quote:
        "The Python course exceeded my expectations. Trainers are very knowledgeable and supportive.",
      role: "Data Scientist",
      company: "Google",
      rating: 5,
    },
    {
      id: 10,
      name: "Arjun Reddy",
      quote:
        "Cybersecurity training was top-notch. Now I'm working as a Security Analyst at a top firm.",
      role: "Security Analyst",
      company: "Cisco",
      rating: 5,
    },
    {
      id: 11,
      name: "Sneha Patil",
      quote:
        "The Linux training helped me master system administration. Highly recommended!",
      role: "Linux Administrator",
      company: "Red Hat",
      rating: 5,
    },
    {
      id: 12,
      name: "Karthik Nair",
      quote:
        "MCSE certification training was thorough and exam-focused. Passed on first attempt.",
      role: "System Engineer",
      company: "Dell",
      rating: 5,
    },
    {
      id: 13,
      name: "Divya Krishnan",
      quote:
        "The Power BI course was fantastic. Now I'm creating amazing dashboards for my organization.",
      role: "Data Analyst",
      company: "Accenture",
      rating: 5,
    },
    {
      id: 14,
      name: "Rahul Verma",
      quote:
        "Docker and Kubernetes training was practical and job-oriented. Got promoted within 3 months.",
      role: "DevOps Lead",
      company: "Oracle",
      rating: 5,
    },
    {
      id: 15,
      name: "Anjali Singh",
      quote:
        "The Full Stack Development course covered everything from frontend to backend. Worth every penny.",
      role: "Full Stack Developer",
      company: "Flipkart",
      rating: 5,
    },
    {
      id: 16,
      name: "Siddharth Joshi",
      quote:
        "Excel training was simple yet powerful. My productivity has increased tremendously.",
      role: "Business Analyst",
      company: "Deloitte",
      rating: 5,
    },
    {
      id: 17,
      name: "Kavya Iyer",
      quote:
        "The React JS course was excellent. Now I'm building modern web applications with confidence.",
      role: "Frontend Developer",
      company: "Zomato",
      rating: 5,
    },
    {
      id: 18,
      name: "Prakash Rao",
      quote:
        "Networking fundamentals course cleared all my concepts. CCNA certification was a breeze.",
      role: "Network Engineer",
      company: "Jio",
      rating: 5,
    },
    {
      id: 19,
      name: "Meera Nambiar",
      quote:
        "The Project Management training helped me get my PMP certification and a better role.",
      role: "Project Manager",
      company: "TCS",
      rating: 5,
    },
    {
      id: 20,
      name: "Vivek Anand",
      quote:
        "Blockchain course was futuristic and well-taught. Now I'm working on exciting Web3 projects.",
      role: "Blockchain Developer",
      company: "CoinDCX",
      rating: 5,
    },
  ];

  // Loading timer - 5 seconds total
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Stack reviews one by one every 250ms (to show more reviews in 5 seconds)
  useEffect(() => {
    if (!loading) return;

    // Add first review immediately
    setVisibleReviews([reviews[0]]);
    setCurrentIndex(1);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < reviews.length) {
          // Add next review
          setVisibleReviews((prevReviews) => [...prevReviews, reviews[prev]]);
          return prev + 1;
        }
        return prev;
      });
    }, 250); // 250ms × 20 = 5 seconds

    return () => clearInterval(interval);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden">
      {/* Background Pattern - Light gray dots */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #0F3E57 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Stacked Reviews - Covering the page */}
      <div className="absolute inset-0">
        {visibleReviews.map((review, index) => {
          // Calculate random positions for each review
          const randomTop = Math.random() * 80 + 10; // 10% to 90%
          const randomLeft = Math.random() * 80 + 10; // 10% to 90%
          const randomRotation = (Math.random() - 0.5) * 15; // -7.5deg to 7.5deg
          const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
          const randomOpacity = 0.85 + Math.random() * 0.15; // 0.85 to 1.0
          const randomDelay = index * 0.1;

          return (
            <div
              key={review.id}
              className="absolute transition-all duration-700 animate-float"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                transform: `translate(-50%, -50%) rotate(${randomRotation}deg) scale(${randomScale})`,
                opacity: randomOpacity,
                zIndex: index + 10,
                animationDelay: `${randomDelay}s`,
              }}
            >
              <div className="bg-white rounded-xl shadow-xl p-5 w-72 border-l-4 border-[#f28c28] hover:shadow-2xl border border-gray-100">
                <div className="flex items-start gap-3">
                  {/* Avatar with initial */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0F3E57] to-[#0694d1] flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#f28c28] text-[#f28c28]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-xs italic leading-relaxed line-clamp-3">
                      "{review.quote}"
                    </p>

                    {/* Student Info */}
                    <div className="mt-2">
                      <h4 className="font-bold text-[#0F3E57] text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {review.role} at {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Logo - Reduced size */}
      <div className="relative z-50 flex items-center justify-center">
        {/* Rotating rings - with blue and orange colors */}
        <div className="absolute w-48 h-48 rounded-full border-4 border-t-[#f28c28] border-r-[#0F3E57] border-b-transparent border-l-transparent animate-spin-slow"></div>
        <div className="absolute w-40 h-40 rounded-full border-4 border-t-transparent border-r-transparent border-b-[#f28c28] border-l-[#0F3E57] animate-spin-reverse"></div>

        {/* Logo with glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f28c28] to-[#0F3E57] rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="bg-white rounded-full p-3 shadow-2xl border border-gray-100">
            <img
              src={logo}
              alt="Neel Technologies"
              className="relative w-24 h-24 object-contain z-10"
            />
          </div>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <div className="w-2 h-2 bg-[#f28c28] rounded-full animate-pulse"></div>
          <span className="text-[#0F3E57] text-sm font-light tracking-wider">
            {/* Loading {visibleReviews.length} student experiences... */}
            Loading...
          </span>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 2.5s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
