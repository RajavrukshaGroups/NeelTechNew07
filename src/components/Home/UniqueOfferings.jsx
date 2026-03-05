// import {
//   Users,
//   Settings,
//   BookOpenCheck,
//   MapPin,
//   GraduationCap,
//   ArrowRight,
// } from "lucide-react";

// import heroImage1 from "../../../public/assets/hero1.jpeg";
// import heroImage2 from "../../../public/assets/hero6.jpeg";
// import heroImage3 from "../../../public/assets/hero5.jpeg";
// import heroImage4 from "../../../public/assets/hero4.jpeg";

// const offerings = [
//   {
//     image: heroImage1,
//     icon: Users,
//     title: "1-on-1 Training",
//     description:
//       "Schedule personalized sessions based upon your availability and learning goals.",
//   },
//   {
//     image: heroImage2,
//     icon: Settings,
//     title: "Customized Training",
//     description:
//       "Create custom courses that perfectly fit your needs, from blended topics to brand-new content.",
//   },
//   {
//     image: heroImage3,
//     icon: BookOpenCheck,
//     title: "Pre-Requisite Session",
//     description:
//       "Join a free session to assess your knowledge and prepare confidently for the course ahead.",
//   },
//   {
//     image: heroImage4,
//     icon: MapPin,
//     title: "Destination Training",
//     description:
//       "Immerse yourself in a focused learning environment where you can sharpen your skills distraction-free.",
//   },
//   {
//     image: heroImage1,
//     icon: GraduationCap,
//     title: "Excellent Trainers",
//     description:
//       "Learn from certified industry experts with real-world experience and practical insights.",
//   },
// ];

// const UniqueOfferings = () => {
//   return (
//     <section className="w-full bg-[#cfe3ef] py-16">
//       <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2
//             className="text-4xl md:text-5xl font-bold"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               color: "#0F3E57",
//             }}
//           >
//             Our Unique Offerings
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//           {offerings.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 p-5 text-center flex flex-col overflow-hidden"
//               >
//                 {/* Blue Bottom Line */}
//                 <span className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

//                 {/* Image with Zoom */}
//                 <div className="overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-[120px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* Title Badge - Single Line */}
//                 <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg mx-auto mb-3 whitespace-nowrap">
//                   <Icon size={16} />
//                   <span className="font-semibold text-sm">{item.title}</span>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                   {item.description}
//                 </p>

//                 {/* Learn More */}
//                 {/* <div className="mt-auto flex justify-center items-center gap-2 text-[#0F3E57] font-semibold cursor-pointer group-hover:text-blue-600 transition">
//                   Learn More
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </div> */}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UniqueOfferings;

// import {
//   Users,
//   Settings,
//   BookOpenCheck,
//   MapPin,
//   GraduationCap,
//   ChevronRight,
// } from "lucide-react";
// import { useState } from "react";

// import heroImage1 from "../../../public/assets/hero1.jpeg";
// import heroImage2 from "../../../public/assets/hero6.jpeg";
// import heroImage3 from "../../../public/assets/hero5.jpeg";
// import heroImage4 from "../../../public/assets/hero4.jpeg";

// const offerings = [
//   {
//     image: heroImage1,
//     icon: Users,
//     title: "1-on-1 Training",
//     description:
//       "Schedule personalized sessions based upon your availability and learning goals.",
//     highlights: ["Flexible timing", "Personalized attention", "Adaptive pace"],
//   },
//   {
//     image: heroImage2,
//     icon: Settings,
//     title: "Customized Training",
//     description:
//       "Create custom courses that perfectly fit your needs, from blended topics to brand-new content.",
//     highlights: ["Tailored curriculum", "Industry-specific", "Flexible modules"],
//   },
//   {
//     image: heroImage3,
//     icon: BookOpenCheck,
//     title: "Pre-Requisite Session",
//     description:
//       "Join a free session to assess your knowledge and prepare confidently for the course ahead.",
//     highlights: ["Free assessment", "Gap analysis", "Learning roadmap"],
//   },
//   {
//     image: heroImage4,
//     icon: MapPin,
//     title: "Destination Training",
//     description:
//       "Immerse yourself in a focused learning environment where you can sharpen your skills distraction-free.",
//     highlights: ["Immersive setup", "Networking", "Hands-on practice"],
//   },
//   {
//     image: heroImage1,
//     icon: GraduationCap,
//     title: "Excellent Trainers",
//     description:
//       "Learn from certified industry experts with real-world experience and practical insights.",
//     highlights: ["Industry experts", "Certified mentors", "Real-world insights"],
//   },
// ];

// const UniqueOfferings = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [expandedCard, setExpandedCard] = useState(null);

//   // Theme colors
//   const theme = {
//     primaryBlue: "#0694d1",
//     accentOrange: "#f28c28",
//     darkBlueBg: "#0F3E57",
//     lightBlue: "#cfe3ef",
//     white: "#FFFFFF",
//   };

//   const handleCardClick = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };

//   return (
//     <section className="w-full py-20 relative overflow-hidden">
//       {/* Background with subtle pattern */}
//       <div 
//         className="absolute inset-0"
//         style={{ 
//           background: `linear-gradient(135deg, ${theme.lightBlue} 0%, #e2f0f7 100%)`,
//         }}
//       >
//         {/* Decorative circles */}
//         <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
//         {/* Title with decorative elements */}
//         <div className="text-center mb-16 relative">
//           {/* <span 
//             className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
//             style={{ 
//               backgroundColor: theme.primaryBlue + '15',
//               color: theme.primaryBlue,
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             Why Choose Us
//           </span> */}
          
//           <h2
//             className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: 600,
//               color: theme.darkBlueBg,
//             }}
//           >
//             Our Unique Offerings
//             {/* Decorative underline */}
            
//           </h2>
//           <span 
//               className="absolute   -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1  rounded-full"
//               style={{ backgroundColor: theme.accentOrange ,}}
//             ></span>

//         </div>
//                   {/* <p 
//             className="text-lg mt-6 max-w-2xl mx-auto"
//             style={{ 
//               color: theme.darkBlueBg + 'cc', 
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             Discover what makes our training experience truly exceptional
//           </p> */}

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {offerings.map((item, index) => {
//             const Icon = item.icon;
//             const isHovered = hoveredCard === index;
//             const isExpanded = expandedCard === index;

//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden"
//                 style={{
//                   boxShadow: isHovered 
//                     ? `0 20px 30px -10px ${theme.primaryBlue}40` 
//                     : '0 10px 20px -5px rgba(0,0,0,0.05)',
//                   transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
//                   border: `1px solid ${isHovered ? theme.accentOrange : theme.primaryBlue + '20'}`,
//                   fontFamily: "'Poppins', sans-serif",
//                 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onClick={() => handleCardClick(index)}
//               >
//                 {/* Animated gradient overlay */}
//                 <div 
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//                   style={{
//                     background: `radial-gradient(circle at top right, ${theme.primaryBlue}10, transparent 70%)`,
//                   }}
//                 />

//                 {/* Top accent bar with animation */}
//                 <div 
//                   className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
//                   style={{
//                     background: `linear-gradient(90deg, ${theme.primaryBlue}, ${theme.accentOrange})`,
//                     width: isHovered ? '100%' : '0%',
//                   }}
//                 />

//                 {/* Image Container with Overlay */}
//                 <div className="relative overflow-hidden h-[140px]">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Image overlay on hover */}
//                   <div 
//                     className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
//                     style={{ background: `linear-gradient(to bottom, transparent, ${theme.primaryBlue})` }}
//                   />

//                   {/* Badge on image corner */}
//                   <div 
//                     className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12"
//                     style={{ 
//                       backgroundColor: theme.white,
//                       boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
//                     }}
//                   >
//                     <Icon size={16} color={theme.primaryBlue} />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 relative">
//                   {/* Title Badge - Enhanced */}
//                   <div 
//                     className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 transition-all duration-300"
//                     style={{
//                       backgroundColor: isHovered ? theme.accentOrange + '15' : theme.primaryBlue + '10',
//                       borderLeft: `3px solid ${isHovered ? theme.accentOrange : theme.primaryBlue}`,
//                     }}
//                   >
//                     <Icon size={16} color={isHovered ? theme.accentOrange : theme.primaryBlue} />
//                     <span 
//                       className="font-semibold text-sm"
//                       style={{ 
//                         color: isHovered ? theme.accentOrange : theme.primaryBlue,
//                         fontFamily: "'Poppins', sans-serif",
//                       }}
//                     >
//                       {item.title}
//                     </span>
//                   </div>

//                   {/* Description with animation */}
//                   <p 
//                     className="text-gray-600 text-sm leading-relaxed mb-3 transition-all duration-300"
//                     style={{
//                       transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
//                       fontFamily: "'Poppins', sans-serif",
//                       fontWeight: 400,
//                     }}
//                   >
//                     {item.description}
//                   </p>

//                   {/* Highlights - Animated on hover */}
//                   <div 
//                     className={`space-y-1.5 mb-3 transition-all duration-500 overflow-hidden`}
//                     style={{
//                       maxHeight: isExpanded ? '100px' : '0px',
//                       opacity: isExpanded ? 1 : 0,
//                     }}
//                   >
//                     {item.highlights.map((highlight, idx) => (
//                       <div key={idx} className="flex items-center gap-1.5 text-xs">
//                         <div 
//                           className="w-1 h-1 rounded-full"
//                           style={{ backgroundColor: theme.accentOrange }}
//                         ></div>
//                         <span style={{ 
//                           color: theme.darkBlueBg + 'cc',
//                           fontFamily: "'Poppins', sans-serif",
//                           fontWeight: 400,
//                         }}>
//                           {highlight}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Click indicator - Moved to center and more prominent */}
//                   <div className="flex items-center justify-center mt-3 pt-2 border-t border-gray-100">
//                     <span 
//                       className="text-xs font-medium transition-all duration-300 flex items-center gap-1.5"
//                       style={{
//                         color: isExpanded ? theme.accentOrange : theme.primaryBlue,
//                         fontFamily: "'Poppins', sans-serif",
//                         fontWeight: 500,
//                         backgroundColor: isExpanded ? theme.accentOrange + '10' : theme.primaryBlue + '08',
//                         padding: '6px 12px',
//                         borderRadius: '20px',
//                       }}
//                     >
//                       {isExpanded ? 'Show less details' : 'Click to see details'}
//                       <ChevronRight 
//                         size={14} 
//                         className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
//                       />
//                     </span>
//                   </div>
//                 </div>

//                 {/* Bottom shine effect */}
//                 <div 
//                   className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//                   style={{
//                     background: `linear-gradient(to top, ${theme.primaryBlue}10, transparent)`,
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Stats counter */}
//         {/* <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/30">
//           {[
//             { number: "5000+", label: "Students Trained" },
//             { number: "50+", label: "Expert Trainers" },
//             { number: "100+", label: "Custom Courses" },
//           ].map((stat, idx) => (
//             <div key={idx} className="text-center">
//               <div 
//                 className="text-2xl font-bold"
//                 style={{ 
//                   color: theme.darkBlueBg,
//                   fontFamily: "'Poppins', sans-serif",
//                   fontWeight: 600,
//                 }}
//               >
//                 {stat.number}
//               </div>
//               <div 
//                 className="text-sm"
//                 style={{ 
//                   color: theme.darkBlueBg + 'b3',
//                   fontFamily: "'Poppins', sans-serif",
//                   fontWeight: 400,
//                 }}
//               >
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default UniqueOfferings;

import {
  Users,
  Settings,
  BookOpenCheck,
  MapPin,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

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
    highlights: ["Flexible timing", "Personalized attention", "Adaptive pace"],
  },
  {
    image: heroImage2,
    icon: Settings,
    title: "Customized Training",
    description:
      "Create custom courses that perfectly fit your needs, from blended topics to brand-new content.",
    highlights: ["Tailored curriculum", "Industry-specific", "Flexible modules"],
  },
  {
    image: heroImage3,
    icon: BookOpenCheck,
    title: "Pre-Requisite Session",
    description:
      "Join a free session to assess your knowledge and prepare confidently for the course ahead.",
    highlights: ["Free assessment", "Gap analysis", "Learning roadmap"],
  },
  {
    image: heroImage4,
    icon: MapPin,
    title: "Destination Training",
    description:
      "Immerse yourself in a focused learning environment where you can sharpen your skills distraction-free.",
    highlights: ["Immersive setup", "Networking", "Hands-on practice"],
  },
  {
    image: heroImage1,
    icon: GraduationCap,
    title: "Excellent Trainers",
    description:
      "Learn from certified industry experts with real-world experience and practical insights.",
    highlights: ["Industry experts", "Certified mentors", "Real-world insights"],
  },
];

const UniqueOfferings = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  // Theme colors
  const theme = {
    primaryBlue: "#0694d1",
    accentOrange: "#f28c28",
    darkBlueBg: "#0F3E57",
    lightBlue: "#cfe3ef",
    white: "#FFFFFF",
  };

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(135deg, ${theme.lightBlue} 0%, #e2f0f7 100%)`,
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Title with decorative elements */}
        <div className="text-center mb-16 relative">
          {/* <span 
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ 
              backgroundColor: theme.primaryBlue + '15',
              color: theme.primaryBlue,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Why Choose Us
          </span>
           */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: theme.darkBlueBg,
           fontFamily: "'Playfair Display', serif" 
            }}
          >
            Our Unique Offerings
            {/* Decorative underline */}
           
          </h2>
           <span 
              className="absolute hidden lg:block md:block xl:block -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
              style={{ backgroundColor: theme.accentOrange }}
            ></span>
          {/* <p 
            className="text-lg mt-6 max-w-2xl mx-auto"
            style={{ 
              color: theme.darkBlueBg + 'cc', 
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
            }}
          >
            Discover what makes our training experience truly exceptional
          </p> */}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
                style={{
                  boxShadow: isHovered 
                    ? `0 20px 30px -10px ${theme.primaryBlue}40` 
                    : '0 10px 20px -5px rgba(0,0,0,0.05)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  border: `1px solid ${isHovered ? theme.accentOrange : theme.primaryBlue + '20'}`,
                  fontFamily: "'Poppins', sans-serif",
                  height: '100%',
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(index)}
              >
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at top right, ${theme.primaryBlue}10, transparent 70%)`,
                  }}
                />

                {/* Top accent bar with animation */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${theme.primaryBlue}, ${theme.accentOrange})`,
                    width: isHovered ? '100%' : '0%',
                  }}
                />

                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden h-[140px] flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to bottom, transparent, ${theme.primaryBlue})` }}
                  />

                  {/* Badge on image corner */}
                  <div 
                    className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12"
                    style={{ 
                      backgroundColor: theme.white,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Icon size={16} color={theme.primaryBlue} />
                  </div>
                </div>

                {/* Content - flex-grow to push footer down */}
                <div className="p-5 relative flex flex-col flex-grow">
                  {/* Title Badge - Enhanced */}
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 transition-all duration-300 self-start"
                    style={{
                      backgroundColor: isHovered ? theme.accentOrange + '15' : theme.primaryBlue + '10',
                      borderLeft: `3px solid ${isHovered ? theme.accentOrange : theme.primaryBlue}`,
                    }}
                  >
                    <Icon size={16} color={isHovered ? theme.accentOrange : theme.primaryBlue} />
                    <span 
                      className="font-semibold text-sm"
                      style={{ 
                        color: isHovered ? theme.accentOrange : theme.primaryBlue,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Description with animation */}
                  <p 
                    className="text-gray-600 text-sm leading-relaxed mb-3 transition-all duration-300"
                    style={{
                      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Highlights - Animated on hover */}
                  <div 
                    className={`space-y-1.5 mb-3 transition-all duration-500 overflow-hidden`}
                    style={{
                      maxHeight: isExpanded ? '100px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs">
                        <div 
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: theme.accentOrange }}
                        ></div>
                        <span style={{ 
                          color: theme.darkBlueBg + 'cc',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 400,
                        }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Spacer to push footer down */}
                  <div className="flex-grow"></div>

                  {/* Click indicator - Fixed alignment with consistent width */}
                  <div className="flex items-center justify-center mt-3 pt-2 border-t border-gray-100">
                    <span 
                      className="text-xs font-medium transition-all duration-300 flex items-center gap-1.5"
                      style={{
                        color: isExpanded ? theme.accentOrange : theme.primaryBlue,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        backgroundColor: isExpanded ? theme.accentOrange + '10' : theme.primaryBlue + '08',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '140px', // Fixed minimum width for consistency
                      }}
                    >
                      {isExpanded ? 'Show less details' : 'Click to see details'}
                      <ChevronRight 
                        size={14} 
                        className={`transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`}
                      />
                    </span>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${theme.primaryBlue}10, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Stats counter */}
        {/* <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/30">
          {[
            { number: "5000+", label: "Students Trained" },
            { number: "50+", label: "Expert Trainers" },
            { number: "100+", label: "Custom Courses" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div 
                className="text-2xl font-bold"
                style={{ 
                  color: theme.darkBlueBg,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                {stat.number}
              </div>
              <div 
                className="text-sm"
                style={{ 
                  color: theme.darkBlueBg + 'b3',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default UniqueOfferings;