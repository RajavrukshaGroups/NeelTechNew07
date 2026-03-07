// import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

// import demo1 from "../../../public/assets/hero1.jpeg";
// import demo2 from "../../../public/assets/hero5.jpeg";
// import demo3 from "../../../public/assets/hero6.jpeg";
// import demo4 from "../../../public/assets/hero4.jpeg";

// const demos = [
//   {
//     speaker: "Imran Ali MR",
//     title: "Mastering Automated Payment Program (APP) in SAP",
//     date: "18 Feb 2026 | 12:00 PM IST",
//     image: demo1,
//   },
//   {
//     speaker: "Neeraj Pathak",
//     title: "Thinking on Your Feet - Smart Decisions in Fast Environments",
//     date: "18 Feb 2026 | 01:00 PM IST",
//     image: demo2,
//   },
//   {
//     speaker: "Monika Ahlawat",
//     title: "Securing The Grid - Introduction to ICS/SCADA",
//     date: "18 Feb 2026 | 02:00 PM IST",
//     image: demo3,
//   },
//   {
//     speaker: "Rahul Sharma",
//     title: "DevOps Best Practices for Modern Enterprises",
//     date: "19 Feb 2026 | 11:00 AM IST",
//     image: demo4,
//   },
// ];

// const UpcomingDemo = () => {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-[1200px] mx-auto px-6">
//         {/* Title */}
//         <div className="text-center flex flex-col items-center mb-6">
//           <h2
//             className="text-3xl md:text-4xl font-bold text-[#0F3E57]"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             Upcoming Webinars
//           </h2>

//            <span 
//               className="  hidden md:block xl:block lg:block  left-1/2 transform -translate-x-1/2 w-24 h-1 mt-4 ml-[4rem] rounded-full"
//               style={{ backgroundColor: "#f28c28" , }}
//             ></span>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {demos.map((demo, index) => (
//             <div
//               key={index}
//               className="group bg-white border border-blue-200 rounded-xl hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col"
//             >
//               {/* Speaker Image */}
//               <div className="flex justify-center mb-3">
//                 <img
//                   src={demo.image}
//                   alt={demo.speaker}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-500 transition-all"
//                 />
//               </div>

//               {/* Speaker */}
//               <h4 className="text-base font-extrabold text-gray-700 text-center mb-2">
//                 {demo.speaker}
//               </h4>

//               {/* Title */}
//               <p className="text-[#031119] font-black text-lg leading-snug text-center mb-3 min-h-[40px]">
//                 {demo.title}
//               </p>

//               {/* Date */}
//               <div className="flex items-center justify-center gap-1 text-gray-700 text-md font-black mb-4">
//                 <Calendar size={14} className="text-blue-600" />
//                 <span>{demo.date}</span>
//               </div>

//               {/* Button */}
//               <button className="mt-auto border border-blue-600 text-blue-600 py-1.5 text-base rounded-full font-bold hover:bg-blue-600 hover:text-white transition">
//                 Register
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-4 mt-6">
//           <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
//             <ArrowLeft size={16} />
//           </button>

//           <span className="text-xl  font-black text-gray-700">1 / 4</span>

//           <button className="w-8 h-8 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {/* Show All */}
//         <div className="text-center mt-6">
//           <button className="bg-blue-600 text-white px-6 py-2 text-lg rounded-full font-bold hover:bg-blue-700 transition">
//             Show All Webinars
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingDemo;

import { Calendar, Clock, Users, ArrowLeft, ArrowRight, ChevronRight, MapPin, Bell } from "lucide-react";
import { useState } from "react";

import demo1 from "../../../public/assets/hero1.jpeg";
import demo2 from "../../../public/assets/hero5.jpeg";
import demo3 from "../../../public/assets/hero6.jpeg";
import demo4 from "../../../public/assets/hero4.jpeg";

const demos = [
  // {
  //   speaker: "Imran Ali MR",
  //   title: "Mastering Automated Payment Program (APP) in SAP",
  //   date: "18 Feb 2026 | 12:00 PM IST",
  //   duration: "90 Minutes",
  //   category: "SAP",
  //   seats: 60,
  //   totalSeats: 100,
  //   image: demo1,
  //   description: "Complete APP configuration & execution with real-time scenarios.",
  //   // expertLevel: "Advanced",
  // },
  {
    speaker: "Neel",
    title: "Thinking on Your Feet - Smart Decisions",
    date: "15 Mar 2026 | 06:00 PM IST",
    duration: "60 Minutes",
    category: "Leadership",
    seats: 40,
    totalSeats: 100,
    image: demo2,
    description: "Improve fast decision-making using practical frameworks.",
    // expertLevel: "Intermediate",
  },
  // {
  //   speaker: "Monika Ahlawat",
  //   title: "Securing The Grid - ICS/SCADA Intro",
  //   date: "18 Feb 2026 | 02:00 PM IST",
  //   duration: "75 Minutes",
  //   category: "Cybersecurity",
  //   seats: 25,
  //   totalSeats: 100,
  //   image: demo3,
  //   description: "Industrial cybersecurity fundamentals explained clearly.",
  //   // expertLevel: "Beginner",
  // },
  // {
  //   speaker: "Rahul Sharma",
  //   title: "DevOps Best Practices for Enterprises",
  //   date: "19 Feb 2026 | 11:00 AM IST",
  //   duration: "90 Minutes",
  //   category: "DevOps",
  //   seats: 90,
  //   totalSeats: 100,
  //   image: demo4,
  //   description: "CI/CD pipelines & automation strategies overview.",
  //   // expertLevel: "Advanced",
  // },
];

const UpcomingDemo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [notificationPref, setNotificationPref] = useState({});

  const handleNotifyMe = (index, e) => {
    e.stopPropagation();
    setNotificationPref(prev => ({ ...prev, [index]: true }));
    // Implement actual notification logic here
    setTimeout(() => {
      setNotificationPref(prev => ({ ...prev, [index]: false }));
    }, 2000);
  };

  const getSeatStatusColor = (percentage) => {
    if (percentage >= 80) return "bg-red-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getSeatTextColor = (percentage) => {
    if (percentage >= 80) return "text-red-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <section className="w-full flex justify-center items-center bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0F3E57] relative inline-block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Upcoming Webinars
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
          </div>
          <p className="text-gray-800 text-xl font-bold mt-4 max-w-2xl mx-auto">
            Join live sessions from industry experts and enhance your skills
          </p>
        </div>

        {/* Cards Grid */}
        <div className="md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {demos.map((demo, index) => {
            const seatPercentage = (demo.seats / demo.totalSeats) * 100;
            const isHovered = hoveredCard === index;
            const isNotified = notificationPref[index];

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container with layered hover effects */}
                <div
                  className={`relative bg-white border rounded-xl shadow-sm 
                    transition-all duration-500 ease-out flex flex-col p-5
                    ${isHovered 
                      ? 'border-blue-400 shadow-xl scale-105 -translate-y-2' 
                      : 'border-gray-200 hover:border-blue-300'
                    }`}
                  style={{
                    transform: isHovered ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
                  }}
                >
                  {/* Animated gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 
                      transition-opacity duration-500 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Category with hover animation */}
                  <div className="flex justify-between items-start mb-3 relative">
                    <span
                      className={`bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full 
                        transition-all duration-300 ${isHovered ? 'bg-blue-800 shadow-lg scale-105' : ''}`}
                    >
                      {demo.category}
                    </span>
                    
                    {/* Expert Level Badge - appears on hover */}
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600
                        transition-all duration-300 transform
                        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
                    >
                      {demo.expertLevel}
                    </span>
                  </div>

                  {/* Speaker Image with hover effects */}
                  <div className="flex flex-col items-center relative">
                    <div className="relative">
                      <img
                        src={demo.image}
                        alt={demo.speaker}
                        className={`w-16 h-16 rounded-full object-cover border-3 
                          transition-all duration-500 relative z-10
                          ${isHovered ? 'border-blue-500 scale-110 shadow-xl' : 'border-blue-300'}`}
                      />
                      
                      {/* Ripple effect on hover */}
                      {isHovered && (
                        <>
                          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping"></div>
                          <div className="absolute inset-0 rounded-full border border-blue-300 animate-pulse"></div>
                        </>
                      )}
                      
                      {/* Online indicator */}
                      <div className={`absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white
                        transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>

                    {/* Speaker name with hover underline effect */}
                    <h4 className="mt-3 text-xl font-extrabold text-gray-800 text-center relative">
                      {demo.speaker}
                      <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 
                        transition-all duration-300 ${isHovered ? 'w-12' : 'w-0'}`}></span>
                    </h4>

                    {/* Title with slide-up effect on hover */}
                    <p className={`text-[#0F172A] font-bold text-lg leading-snug text-center mt-2 
                      transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
                      {demo.title}
                    </p>

                    {/* Description appears on hover with fade-in */}
                    <p className={`text-base text-orange-900 font-bold  text-center mt-2 transition-all duration-500
                      ${isHovered ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      {demo.description}
                    </p>
                  </div>

                  {/* Info Section with animated entries */}
                  <div className="mt-4 space-y-2 text-base  font-bold text-gray-800 relative" >
                    {/* Date with hover slide */}
                    <div className={`flex items-center gap-2 justify-center transition-all duration-300 
                      ${isHovered ? 'translate-x-0' : ''}`}>
                      <Calendar size={16} className={`transition-all duration-300 
                        ${isHovered ? 'text-blue-600 rotate-12' : 'text-blue-600'}`} />
                      <span className=" " style={{fontFamily : "ui-sans-serif"}}>{demo.date}</span>
                    </div>

                    {/* Duration with hover slide */}
                    <div className={`flex items-center gap-2 justify-center transition-all duration-300 delay-75
                      ${isHovered ? 'translate-x-0' : ''}`}>
                      <Clock size={16} className={`transition-all duration-300 
                        ${isHovered ? 'text-green-600 rotate-12' : 'text-green-600'}`} />
                      {demo.duration}
                    </div>

                    {/* Seats with animated counter effect */}
                    <div className={`flex items-center gap-2 justify-center transition-all duration-300 delay-150
                      ${isHovered ? 'translate-x-0' : ''}`}>
                      <Users size={16} className={`transition-all duration-300 
                        ${isHovered ? 'text-red-600 rotate-12' : 'text-red-600'}`} />
                      <span className={`font-bold ${getSeatTextColor(seatPercentage)}`}>
                        {demo.seats} Seats Left
                      </span>
                    </div>

                    {/* Progress Bar with hover effect */}
                    <div className="relative pt-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">Available</span>
                        <span className={`font-bold ${getSeatTextColor(seatPercentage)}`}>
                          {demo.seats}/{demo.totalSeats}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`${getSeatStatusColor(seatPercentage)} h-2.5 rounded-full 
                            transition-all duration-700 ease-out relative
                            ${isHovered ? 'shadow-lg' : ''}`}
                          style={{ 
                            width: `${seatPercentage}%`,
                            transform: isHovered ? 'scaleX(1.02) translateX(-1%)' : 'scaleX(1)'
                          }}
                        >
                          {/* Animated shimmer effect on hover */}
                          {isHovered && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                              animate-shimmer"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button Section with hover effects */}
                  <div className="mt-5 space-y-2">
                    <button
                      disabled={demo.seats === 0}
                      onClick={() => window.open("https://wa.me/916361866299", "_blank")}
                      className={`relative w-full py-2.5 rounded-full text-base font-bold 
                        transition-all duration-300 overflow-hidden group/btn
                        ${demo.seats === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg transform hover:scale-105"
                        }`}
                    >
                      {/* Button shine effect on hover */}
                      {demo.seats > 0 && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      )}
                      <span className=" test-base z-10">
                        {demo.seats === 0 ? "Fully Booked" : "Register Now"}
                      </span>
                    </button>

                    {/* Notify Me button - appears on hover */}
                    <div className={`flex justify-center transition-all duration-300
                      ${isHovered && demo.seats > 0 ? 'opacity-100 max-h-8' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      <button
                        onClick={(e) => handleNotifyMe(index, e)}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                      >
                        <Bell size={12} className={isNotified ? 'animate-bounce' : ''} />
                        {isNotified ? 'Notification Set!' : 'Notify me for next session'}
                      </button>
                    </div>
                  </div>

                  {/* Corner accent on hover */}
                  <div className={`absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-blue-400 
                    rounded-tr-xl transition-all duration-500 pointer-events-none
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-blue-400 
                    rounded-bl-xl transition-all duration-500 pointer-events-none
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Pagination with hover effects */}
        {/* <div className="flex items-center justify-center gap-4 mt-12">
          <button className="group w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center 
            hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300
            hover:shadow-lg transform hover:scale-110">
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex gap-2">
            {[1, 2, 3, 4].map(page => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300
                  ${page === 1 
                    ? 'bg-blue-700 text-white shadow-md' 
                    : 'border border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700 hover:scale-110'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="group w-10 h-10 rounded-full border border-blue-700 text-blue-700 
            flex items-center justify-center hover:bg-blue-700 hover:text-white 
            transition-all duration-300 hover:shadow-lg transform hover:scale-110">
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div> */}

        {/* Show All with enhanced animation */}
        {/* <div className="text-center mt-10">
          <button className="group relative bg-blue-700 text-white px-10 py-3 rounded-full 
            font-bold overflow-hidden transition-all duration-300 hover:shadow-xl 
            transform hover:scale-105 inline-flex items-center gap-2">
            <span className="relative z-10">Show All Webinars</span>
            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div> */}
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default UpcomingDemo;