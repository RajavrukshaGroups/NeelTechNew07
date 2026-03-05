import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

import demo1 from "../../../public/assets/hero1.jpeg";
import demo2 from "../../../public/assets/hero5.jpeg";
import demo3 from "../../../public/assets/hero6.jpeg";
import demo4 from "../../../public/assets/hero4.jpeg";

const demos = [
  {
    speaker: "Imran Ali MR",
    title: "Mastering Automated Payment Program (APP) in SAP",
    date: "18 Feb 2026 | 12:00 PM IST",
    image: demo1,
  },
  {
    speaker: "Neeraj Pathak",
    title: "Thinking on Your Feet - Smart Decisions in Fast Environments",
    date: "18 Feb 2026 | 01:00 PM IST",
    image: demo2,
  },
  {
    speaker: "Monika Ahlawat",
    title: "Securing The Grid - Introduction to ICS/SCADA",
    date: "18 Feb 2026 | 02:00 PM IST",
    image: demo3,
  },
  {
    speaker: "Rahul Sharma",
    title: "DevOps Best Practices for Modern Enterprises",
    date: "19 Feb 2026 | 11:00 AM IST",
    image: demo4,
  },
];

const UpcomingDemo = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div className="text-center flex flex-col items-center mb-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F3E57]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Upcoming Webinars
          </h2>

           <span 
              className="  hidden md:block xl:block lg:block  left-1/2 transform -translate-x-1/2 w-24 h-1 mt-4 ml-[4rem] rounded-full"
              style={{ backgroundColor: "#f28c28" , }}
            ></span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group bg-white border border-blue-200 rounded-xl hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col"
            >
              {/* Speaker Image */}
              <div className="flex justify-center mb-3">
                <img
                  src={demo.image}
                  alt={demo.speaker}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-500 transition-all"
                />
              </div>

              {/* Speaker */}
              <h4 className="text-base font-extrabold text-gray-700 text-center mb-2">
                {demo.speaker}
              </h4>

              {/* Title */}
              <p className="text-[#031119] font-black text-lg leading-snug text-center mb-3 min-h-[40px]">
                {demo.title}
              </p>

              {/* Date */}
              <div className="flex items-center justify-center gap-1 text-gray-700 text-md font-black mb-4">
                <Calendar size={14} className="text-blue-600" />
                <span>{demo.date}</span>
              </div>

              {/* Button */}
              <button className="mt-auto border border-blue-600 text-blue-600 py-1.5 text-base rounded-full font-bold hover:bg-blue-600 hover:text-white transition">
                Register
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <ArrowLeft size={16} />
          </button>

          <span className="text-xl  font-black text-gray-700">1 / 4</span>

          <button className="w-8 h-8 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Show All */}
        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 text-lg rounded-full font-bold hover:bg-blue-700 transition">
            Show All Webinars
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingDemo;
