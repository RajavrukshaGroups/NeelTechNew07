import { useState } from "react";
import { Play, Star, Quote, ChevronLeft, ChevronRight, X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shabarish",
    video: "https://www.youtube.com/embed/Q_Bg25m8b68?si=0UY7Ei5j_AgSkLpv",
    quote:
      "The certification training was comprehensive and helped me clear my exams on first attempt.",
    role: "System Administrator",
    company: "SAP",
    rating: 5,
    type: "video",
  },
  {
    id: 2,
    name: "Mryutyunjay",
    video: "https://www.youtube.com/embed/Pc903yj3Odk",
    quote:
      "Neel Technologies helped me gain real-world skills that boosted my confidence and career growth.",
    role: "System Administrator",
    company: "Wipro",
    rating: 5,
    type: "video",
  },
  {
    id: 3,
    name: "Rakshitha",
    video: "https://www.youtube.com/embed/Y8EpzzMBg8Y",
    quote:
      "The practical training and mentorship made learning easy and industry-ready.",
    role: "DevOps Specialist",
    company: "Infosys",
    rating: 5,
    type: "video",
  },
  {
    id: 4,
    name: "Rolly Yadav",
    video: "https://www.youtube.com/embed/mDhiB1GRDnQ",
    quote:
      "Hands-on projects gave me the experience I needed to stand out in interviews.",
    role: "Security Analyst",
    company: "SecureNet",
    rating: 5,
    type: "video",
  },
  {
    id: 5,
    name: "Tejas",
    video: "https://www.youtube.com/embed/CcTkLfwzlyI",
    quote:
      "Support from trainers was amazing. I felt guided throughout my learning journey.",
    role: "AI Machine Learning",
    company: "Wipro",
    rating: 5,
    type: "video",
  },
  {
    id: 6,
    name: "Abhinav",
    video: "https://www.youtube.com/embed/9UWfDO6v-P0",
    quote:
      "Neel Technologies truly transformed my skills and prepared me for real industry challenges.",
    role: "System Administrator",
    company: "Infosys",
    rating: 5,
    type: "video",
  },
];

// Text-only testimonials for "View All" section
const textTestimonials = [
  {
    id: 7,
    name: "Priya Sharma",
    quote:
      "Neel Technologies offers outstanding education. With expert instructors, modern facilities, and an up-to-date curriculum, it prepares students for success in the tech industry. Highly recommended for those pursuing computer science education.",
    role: "Software Developer",
    company: "Microsoft",
    rating: 5,
    type: "text",
    text: "The hands-on approach to learning and real-world projects helped me land my dream job at Microsoft. The instructors genuinely care about your success and go above and beyond to ensure you understand every concept.",
  },
  {
    id: 8,
    name: "Rahul Verma",
    quote:
      "The training methodology at Neel Technologies is exceptional. They focus on practical knowledge rather than just theory, which made all the difference in my career transition.",
    role: "Cloud Architect",
    company: "Amazon Web Services",
    rating: 5,
    type: "text",
    text: "I joined Neel Technologies with zero cloud experience. Within 6 months, I was not only certified but also placed at AWS. The mentorship and placement support are truly world-class.",
  },
  {
    id: 9,
    name: "Sneha Patel",
    quote:
      "What sets Neel Technologies apart is their commitment to student success. The flexible learning options and 24/7 support made it possible for me to upskill while working full-time.",
    role: "DevOps Engineer",
    company: "Google",
    rating: 5,
    type: "text",
    text: "The curriculum is constantly updated to match industry demands. I particularly appreciated the mock interviews and resume building workshops that prepared me for the hiring process at top tech companies.",
  },
  {
    id: 10,
    name: "Arjun Nair",
    quote:
      "The certification training was comprehensive and helped me clear my exams on first attempt. The study materials and practice tests were invaluable.",
    role: "Security Specialist",
    company: "Cisco",
    rating: 5,
    type: "text",
    text: "Neel Technologies doesn't just teach you to pass exams; they teach you to master the technology. The labs are state-of-the-art, and the trainers are industry veterans with years of real-world experience.",
  },
];

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  // Calculate pagination for video testimonials
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonials.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
    setCurrentPage(1);
  };

  // Format YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <section className="px-4 md:px-10 py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57] mb-4">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-1000 font-medium  max-w-3xl mx-auto" style={{ fontFamily: "ui-sans-serif" }}>
          Real experiences. Real transformations. Hear directly from our
          students who achieved success with Neel Technologies.
        </p>
      </div>

      {/* Video Testimonials Grid */}
      {!showAll && (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                {/* Video Container */}
                <div className="relative w-full h-56 bg-gray-900">
                  {playingVideo === item.id ? (
                    <iframe
                      className="w-full h-full"
                      src={`${getEmbedUrl(item.video)}?autoplay=1`}
                      title={item.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      {/* Video Thumbnail Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0F3E57]/90 to-[#f28c28]/80 flex items-center justify-center" style={{ fontFamily: "ui-sans-serif" }}>
                        <div className="text-white text-center p-4">
                          <p className="text-lg font-medium mb-2">
                            {item.name}
                          </p>
                          <p className="text-sm opacity-80">Click to watch</p>
                        </div>
                      </div>

                      {/* Play Button Overlay */}
                      <button
                        onClick={() => handlePlayVideo(item.id)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center group/play"
                      >
                        <div className="relative">
                          {/* Ripple Effect */}
                          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>

                          {/* Play Button */}
                          <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-[#f28c28]">
                            <Play className="w-8 h-8 text-[#0F3E57] ml-1 group-hover/play:text-white transition-colors" />
                          </div>
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-[#f28c28]/20 mb-3" />

                  {/* Quote Text */}
                  <p className="text-gray-1000 font-bold text-lg italic mb-4 line-clamp-3" >
                    “{item.quote}”
                  </p>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#f28c28] text-[#f28c28]"
                      />
                    ))}
                  </div>

                  {/* Student Info */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-[#09334a] text-base" style={{ fontFamily: "ui-sans-serif" }}>
                      {item.name}
                    </h4>
                    <p className="text-lg font-medium text-gray-900">
                      {item.role} at {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center font-medium text-base items-center gap-4 mt-12" style={{ fontFamily: "ui-sans-serif" }}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-800 cursor-not-allowed"
                    : "bg-[#0F3E57] text-white hover:bg-[#f28c28] hover:scale-110"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-gray-900">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#0F3E57] text-white hover:bg-[#f28c28] hover:scale-110"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      )}

      {/* Text Testimonials Grid - Shown when "View All" is clicked */}
      {showAll && (
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold text-[#0F3E57]">
              More Success Stories
            </h3>
            <button
              onClick={handleViewLess}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-lg font-bold text-[#0F3E57] rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              <X className="w-4 h-4" />
              <span className="font-bold">View Less</span>
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {textTestimonials.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-[#f28c28]/20 mb-4" />

                  {/* Main Quote */}
                  <p className="text-gray-1000 font-medium text-lg italic mb-4" style={{ fontFamily: "ui-sans-serif" }}>
                    “{item.quote}”
                  </p>

                  {/* Detailed Review */}
                  <div className="bg-gray-50 rounded-xl p-5 mb-4 border-l-4 border-[#f28c28]">
                    <p className="text-gray-600 text-lg font-bold leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#f28c28] text-[#f28c28]"
                      />
                    ))}
                  </div>

                  {/* Student Info */}
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-[#0F3E57] text-xl">
                      {item.name}
                    </h4>
                    <p className="text-lg font-medium text-gray-800">
                      {item.role} at {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional text testimonials can be added here */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 font-bold text-lg italic">
              And many more success stories from our students across the globe.
            </p>
          </div>
        </div>
      )}

      {/* View All / View Less Button */}
      <div className="text-center mt-12">
        {!showAll ? (
          <button
            onClick={handleViewAll}
            className="group inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#0F3E57] text-[#0F3E57] rounded-full font-semibold hover:bg-[#0F3E57] hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>View All Success Stories</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            onClick={handleViewLess}
            className="group inline-flex items-center gap-2 px-8 py-3 bg-[#0F3E57] text-white rounded-full text-lg font-bold hover:bg-[#f28c28] transition-all duration-300 hover:scale-105"
          >
            <span>Show Video Testimonials</span>
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
