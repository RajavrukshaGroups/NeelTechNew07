// import LMSImg from "/assets/LMS.png";

// import {
//   Clock,
//   Laptop,
//   BookOpen,
//   TrendingUp,
//   Globe,
//   Award,
// } from "lucide-react";

// const advantages = [
//   {
//     icon: Clock,
//     title: "24×7 Learning Access",
//     description:
//       "Learn anytime with uninterrupted access to course materials and recorded sessions.",
//   },
//   {
//     icon: Laptop,
//     title: "Live & Recorded Lectures",
//     description:
//       "Attend live sessions or revisit recorded lectures at your convenience.",
//   },
//   {
//     icon: BookOpen,
//     title: "Premium Course Content",
//     description:
//       "Structured, industry-relevant curriculum designed by certified experts.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Learn At Your Own Pace",
//     description:
//       "Flexible learning paths tailored to match your personal schedule.",
//   },
//   {
//     icon: Globe,
//     title: "Access From Anywhere",
//     description:
//       "Seamless learning experience across desktop, tablet, and mobile devices.",
//   },
//   {
//     icon: Award,
//     title: "Course Completion Certificate",
//     description:
//       "Earn industry-recognized certification upon successful completion.",
//   },
// ];

// const AdvancedTrainingLms = () => {
//   return (
//     <>
//       {/* ================= LMS SECTION ================= */}
//       <section className="w-full bg-white py-12 md:py-14">
//         <div className="max-w-[1300px] mx-auto px-6 md:px-10">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
//             {/* LEFT CONTENT */}
//             <div>
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-100">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                 COMPLIMENTARY ACCESS
//               </div>

//               <h2
//                 className="leading-tight"
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontWeight: 700,
//                   fontSize: "clamp(1.2rem, 3vw, 2.1rem)",
//                   color: "#0F3E57",
//                 }}
//               >
//                 Free Learning Management System
//                 <br/>
//                 <span
//                   className="block mt-2 relative inline-block"
//                   style={{
//                     fontFamily: "'Poppins', sans-serif",
//                     fontWeight: 600,
//                     fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
//                     color: "#2563EB",
//                   }}
//                 >
//                   Included With Training
//                   <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 -z-10"></span>
//                 </span>
//               </h2>

//               <p
//                 className="mt-5 text-gray-600 leading-relaxed"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "1.05rem",
//                 }}
//               >
//                 Every enrolled student receives complimentary access to our
//                 advanced Learning Management System designed to enhance
//                 knowledge retention, track progress, and support continuous
//                 improvement.
//               </p>

//               {/* Feature Highlights */}
//               <div className="grid grid-cols-2 gap-3 mt-6">
//                 {[
//                   "Interactive Dashboard",
//                   "Progress Tracking",
//                   "Mobile Optimized",
//                   "Certification",
//                 ].map((feature, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
//                       <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                     </div>
//                     <span className="text-base font-base text-gray-700" style={{ fontFamily: "'Poppins', sans-serif",}}>
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="flex justify-center relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
//               <img
//                 src={LMSImg}
//                 alt="Learning Management System"
//                 className="max-h-[420px] object-contain relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= ADVANTAGES SECTION ================= */}
//       <section className="w-full bg-gradient-to-b from-[#f4f9fd] to-white py-14 md:py-16">
//         <div className="max-w-[1300px] mx-auto px-6 md:px-10">
//           {/* Title */}
//           <div className="text-center flex flex-col items-center max-w-2xl mx-auto mb-10">
//             <h3
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontWeight: 700,
//                 fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
//                 color: "#0F3E57",
//               }}
//             >
//               Advantages of Our LMS
//             </h3>
//             <span 
//               className="  hidden md:block xl:block lg:block  left-1/2 transform -translate-x-1/2 w-24 h-1 mt-4 ml-[4rem] rounded-full"
//               style={{ backgroundColor: "#f28c28" , }}
//             ></span>
//             <p
//               className="text-gray-600 mt-3"
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//                 fontSize: "1rem",
//               }}
//             >
//               Built to deliver structured, flexible, and results-driven
//               learning.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {advantages.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
//                 >
//                   {/* Centered Content */}
//                   <div className="flex flex-col items-center text-center">
//                     {/* Icon */}
//                     <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-blue-50 mb-4 group-hover:bg-blue-600 transition-all duration-300">
//                       <Icon
//                         size={36}
//                         className="text-blue-600 group-hover:text-white transition-all duration-300"
//                       />
//                     </div>

//                     {/* Title */}
//                     <h4
//                       className="mb-2"
//                       style={{
//                         fontFamily: "'Poppins', sans-serif",
//                         fontWeight: 600,
//                         fontSize: "1.1rem",
//                         color: "#0F3E57",
//                       }}
//                     >
//                       {item.title}
//                     </h4>

//                     {/* Description */}
//                     <p
//                       className="text-gray-600"
//                       style={{
//                         fontFamily: "'Inter', sans-serif",
//                         fontSize: "0.9rem",
//                         lineHeight: "1.5",
//                       }}
//                     >
//                       {item.description}
//                     </p>

//                     {/* Bottom Accent */}
//                     <div className="mt-4 h-1 w-10 bg-blue-200 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500 rounded-full"></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AdvancedTrainingLms;


import LMSImg from "/assets/LMS.png";

import {
  Clock,
  Laptop,
  BookOpen,
  TrendingUp,
  Globe,
  Award,
  ExternalLink,
} from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "24×7 Learning Access",
    description:
      "Learn anytime with uninterrupted access to course materials and recorded sessions.",
  },
  {
    icon: Laptop,
    title: "Live & Recorded Lectures",
    description:
      "Attend live sessions or revisit recorded lectures at your convenience.",
  },
  {
    icon: BookOpen,
    title: "Premium Course Content",
    description:
      "Structured, industry-relevant curriculum designed by certified experts.",
  },
  {
    icon: TrendingUp,
    title: "Learn At Your Own Pace",
    description:
      "Flexible learning paths tailored to match your personal schedule.",
  },
  {
    icon: Globe,
    title: "Access From Anywhere",
    description:
      "Seamless learning experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: Award,
    title: "Course Completion Certificate",
    description:
      "Earn industry-recognized certification upon successful completion.",
  },
];

const AdvancedTrainingLms = () => {
  return (
    <>
      {/* ================= LMS SECTION ================= */}
      <section className="w-full bg-white py-12 md:py-14">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-100">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                COMPLIMENTARY ACCESS
              </div>

              <h2
                className="leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.2rem, 3vw, 2.1rem)",
                  color: "#0F3E57",
                }}
              >
                Free Learning Management System
                <br/>
                <span
                  className="block mt-2 relative "
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    color: "#2563EB",
                  }}
                >
                  Included With Training
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 -z-10"></span>
                </span>
              </h2>

              <p
                className="mt-5 text-gray-600 leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                }}
              >
                Every enrolled student receives complimentary access to our
                advanced Learning Management System designed to enhance
                knowledge retention, track progress, and support continuous
                improvement.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Interactive Dashboard",
                  "Progress Tracking",
                  "Mobile Optimized",
                  "Certification",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-base font-base text-gray-700" style={{ fontFamily: "'Poppins', sans-serif",}}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Video Portal Button - Added here at bottom left */}
              <div className="mt-8">
                <a
                  href="https://techskillsvideos.com/courses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0F3E57] to-[#1a5a7a] text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="font-semibold text-base">Visit Video Portal</span>
                  <ExternalLink 
                    size={18} 
                    className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
              <img
                src={LMSImg}
                alt="Learning Management System"
                className="max-h-[420px] object-contain relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES SECTION ================= */}
      <section className="w-full bg-gradient-to-b from-[#f4f9fd] to-white py-14 md:py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          {/* Title */}
          <div className="text-center flex flex-col items-center max-w-2xl mx-auto mb-10">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                color: "#0F3E57",
              }}
            >
              Advantages of Our LMS
            </h3>
            <span 
              className="hidden md:block xl:block lg:block left-1/2 transform -translate-x-1/2 w-24 h-1 mt-4 ml-[4rem] rounded-full"
              style={{ backgroundColor: "#f28c28" }}
            ></span>
            <p
              className="text-gray-600 text-lg font-medium mt-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
              }}
            >
              Built to deliver structured, flexible, and results-driven
              learning.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Centered Content */}
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-blue-50 mb-4 group-hover:bg-blue-600 transition-all duration-300">
                      <Icon
                        size={36}
                        className="text-blue-600 group-hover:text-white transition-all duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h4
                      className="mb-2 font-medium"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.3rem",
                        color: "#0F3E57",
                      }}
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-gray-1000 font-medium text-base"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-4 h-1 w-10 bg-blue-200 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedTrainingLms;