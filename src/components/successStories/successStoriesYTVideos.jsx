import { useState } from "react";
import { Play, Star, Quote } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Shabarish",
    video: "https://www.youtube.com/embed/Q_Bg25m8b68",
    quote:
      "The certification training was comprehensive and helped me clear my exams on first attempt.",
    role: "System Administrator",
    company: "SAP",
    rating: 5,
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
  },
];

const SuccessStoriesYTVideos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{fontFamily:"sans-serif"}}>
        {videoTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Video Section */}
            <div className="relative h-56 bg-black">
              {playingVideo === item.id ? (
                <iframe
                  src={`${item.video}?autoplay=1`}
                  className="w-full h-full"
                  title={item.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <button
                  onClick={() => setPlayingVideo(item.id)}
                  className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0F3E57] to-[#f28c28] text-white"
                >
                  <Play className="w-14 h-14" />
                </button>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <Quote className="w-8 h-8 text-[#f28c28]/30 mb-3" />

              <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                “{item.quote}”
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#f28c28] text-[#f28c28]"
                  />
                ))}
              </div>

              {/* Info */}
              <div className="border-t pt-3">
                <h4 className="font-semibold text-[#0F3E57]">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.role} at {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesYTVideos;
