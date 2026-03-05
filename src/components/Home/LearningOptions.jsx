import { Monitor, Video, Laptop, ArrowRight } from "lucide-react";

import learningOption1 from "../../../public/assets/classroomtraining.jpg";
import learningOption2 from "../../../public/assets/videoportal.jpg";
import learningOption3 from "../../../public/assets/onlinetraining.jpg";

const learningOptions = [
  {
    image: learningOption1,
    icon: Monitor,
    title: "Classroom Training",
    description:
      "Interactive instructor-led sessions in a structured classroom environment with hands-on practical learning.",
  },
  {
    image: learningOption2,
    icon: Video,
    title: "Video Learning Portal",
    description:
      "Access recorded lectures, structured modules, and learning resources anytime through our dedicated LMS portal.",
  },
  {
    image: learningOption3,
    icon: Laptop,
    title: "Online Live Training",
    description:
      "Join live instructor-led virtual classes from anywhere with real-time interaction and doubt resolution.",
  },
];

const LearningOptions = () => {
  return (
    <section className="w-full bg-[#f4f9fd] py-12 md:py-14">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0F3E57",
            }}
          >
            Flexible Learning Options
          </h2>
             <span 
              className="  hidden md:block xl:block lg:block  left-1/2 transform -translate-x-1/2 w-24 h-1 mt-4 ml-[4rem] rounded-full"
              style={{ backgroundColor: "#f28c28" , }}
            ></span>
          <p
            className="mt-2 text-gray-600 mt-8 text-sm md:text-base"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Choose the learning format that best suits your schedule and goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[140px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title Badge */}
                <div className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md mx-auto mb-3">
                  <Icon size={16} />
                  <span
                    className="font-semibold text-xs md:text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-4 text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>

                {/* CTA */}
                {/* <div className="mt-auto flex justify-center items-center gap-2 text-[#0F3E57] text-sm font-semibold cursor-pointer group-hover:text-blue-600 transition">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
