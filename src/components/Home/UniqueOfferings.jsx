import {
  Users,
  Settings,
  BookOpenCheck,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import heroImage1 from "../../../public/assets/hero1.jpeg";
import heroImage2 from "../../../public/assets/hero6.jpeg";
import heroImage3 from "../../../public/assets/hero5.jpeg";
import heroImage4 from "../../../public/assets/hero4.jpeg";

const offerings = [
  {
    image: heroImage1,
    icon: Users,
    title: "1-on-1 Training",
    description:
      "Schedule personalized sessions based upon your availability and learning goals.",
  },
  {
    image: heroImage2,
    icon: Settings,
    title: "Customized Training",
    description:
      "Create custom courses that perfectly fit your needs, from blended topics to brand-new content.",
  },
  {
    image: heroImage3,
    icon: BookOpenCheck,
    title: "Pre-Requisite Session",
    description:
      "Join a free session to assess your knowledge and prepare confidently for the course ahead.",
  },
  {
    image: heroImage4,
    icon: MapPin,
    title: "Destination Training",
    description:
      "Immerse yourself in a focused learning environment where you can sharpen your skills distraction-free.",
  },
  {
    image: heroImage1,
    icon: GraduationCap,
    title: "Excellent Trainers",
    description:
      "Learn from certified industry experts with real-world experience and practical insights.",
  },
];

const UniqueOfferings = () => {
  return (
    <section className="w-full bg-[#cfe3ef] py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0F3E57",
            }}
          >
            Our Unique Offerings
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {offerings.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 p-5 text-center flex flex-col overflow-hidden"
              >
                {/* Blue Bottom Line */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

                {/* Image with Zoom */}
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[120px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title Badge - Single Line */}
                <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg mx-auto mb-3 whitespace-nowrap">
                  <Icon size={16} />
                  <span className="font-semibold text-sm">{item.title}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Learn More */}
                {/* <div className="mt-auto flex justify-center items-center gap-2 text-[#0F3E57] font-semibold cursor-pointer group-hover:text-blue-600 transition">
                  Learn More
                  <ArrowRight
                    size={16}
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

export default UniqueOfferings;
