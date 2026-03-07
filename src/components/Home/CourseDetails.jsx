// import { useState } from "react";
// import { Clock, Users, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
// import { Link } from "react-router-dom";

// const CourseDetails = () => {
//   const [activeTab, setActiveTab] = useState("top");
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   // Theme colors from your navbar
//   const theme = {
//     primaryBlue: "#0694d1",
//     accentOrange: "#f28c28",
//     goldenAccent: "#D4AF37",
//     darkBlueBg: "#0F3E57",
//     lightGray: "#F5F7FA",
//     white: "#FFFFFF",
//     rgbBg: "rgb(14, 24, 89)",
//     allCourse: "#0694d1",
//     lightBg: "#f0faff",
//   };

//   // Updated courses with proper paths based on your routes
//   const allCourses = [
//     // System Administrator
//     {
//       title: "MCSE Training Certification Course",
//       duration: "40 Hrs",
//       category: "System Administrator",
//       enrolled: "12,345 enrolled",
//       path: "/mcse-training-certification-course",
//     },
//     {
//       title: "LINUX Training Certification Course",
//       duration: "40 Hrs",
//       category: "System Administrator",
//       enrolled: "10,234 enrolled",
//       path: "/linux-training-certification-course",
//     },
//     {
//       title: "The CCNA Training Certification Course",
//       duration: "40 Hrs",
//       category: "System Administrator",
//       enrolled: "15,678 enrolled",
//       path: "/ccna-training-certification-course",
//     },
//     {
//       title: "Intune Training Certification Course",
//       duration: "24 Hrs",
//       category: "System Administrator",
//       enrolled: "5,432 enrolled",
//       path: "/intune-training-certification-course",
//     },
//     {
//       title: "0365 Training Certification Course",
//       duration: "24 Hrs",
//       category: "System Administrator",
//       enrolled: "7,891 enrolled",
//       path: "/O365-training-certification-course",
//     },

//     // Automation/Program
//     {
//       title: "Windows Powershell Training Certification Course",
//       duration: "24 Hrs",
//       category: "Automation/Program",
//       enrolled: "6,543 enrolled",
//       path: "/powershell-training-certification-course",
//     },
//     {
//       title: "Python Training Certification Course",
//       duration: "40 Hrs",
//       category: "Automation/Program",
//       enrolled: "18,765 enrolled",
//       path: "/python-training-certification-course",
//     },

//     // Cloud Technology
//     {
//       title: "Microsoft Azure Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cloud Technology",
//       enrolled: "22,345 enrolled",
//       path: "/microsoft-azure-training-certification-course",
//     },
//     {
//       title: "Microsoft Entra ID Training Certification Course",
//       duration: "24 Hrs",
//       category: "Cloud Technology",
//       enrolled: "4,321 enrolled",
//       path: "/microsoft-entra-id-training-certification-course",
//     },
//     {
//       title: "AWS Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cloud Technology",
//       enrolled: "25,678 enrolled",
//       path: "/aws-training-certification-course",
//     },
//     {
//       title: "Google Cloud (GCP) Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cloud Technology",
//       enrolled: "8,901 enrolled",
//       path: "/google-cloud-gcp-training-certification-course",
//     },
//     {
//       title: "Azure Sentinel Training Certification Course",
//       duration: "24 Hrs",
//       category: "Cloud Technology",
//       enrolled: "3,456 enrolled",
//       path: "/azure-sentinel-training-certification-course",
//     },

//     // DevOps
//     {
//       title: "AWS DevOps Training Certification Course",
//       duration: "40 Hrs",
//       category: "DevOps",
//       enrolled: "9,876 enrolled",
//       path: "/aws-devops-training-certification-course",
//     },
//     {
//       title: "Azure DevOps Training Certification Course",
//       duration: "40 Hrs",
//       category: "DevOps",
//       enrolled: "8,765 enrolled",
//       path: "/azure-devops-training-certification-course",
//     },

//     // Cyber Security
//     {
//       title: "Cyber Security Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cyber Security",
//       enrolled: "14,567 enrolled",
//       path: "/cyber-security-training-certification-course",
//     },
//   ];

//   // Show only 9 courses initially, all when showAllCourses is true
//   const displayedCourses = showAllCourses ? allCourses : allCourses.slice(0, 9);

//   // Get unique categories for filtering
//   const categories = [
//     { id: "top", label: "Top Courses" },
//     { id: "system", label: "System Admin" },
//     { id: "automation", label: "Automation" },
//     { id: "cloud", label: "Cloud Tech" },
//     { id: "devops", label: "DevOps" },
//     { id: "security", label: "Cyber Security" },
//   ];

//   // Filter courses based on active tab
//   const getFilteredCourses = () => {
//     const categoryMap = {
//       system: "System Administrator",
//       automation: "Automation/Program",
//       cloud: "Cloud Technology",
//       devops: "DevOps",
//       security: "Cyber Security",
//     };

//     if (activeTab === "top") {
//       return showAllCourses ? allCourses : allCourses.slice(0, 9);
//     }

//     return allCourses.filter(
//       (course) => course.category === categoryMap[activeTab],
//     );
//   };

//   const filteredCourses = getFilteredCourses();

//   return (
//     <section className="w-full py-14">
//       <div className="max-w-[1300px] mx-auto px-12">
//         {/* Title */}
//         <h2
//           className="text-center mb-10"
//           style={{
//             fontSize: "42px",
//             fontWeight: 700,
//             color: theme.darkBlueBg,
//             fontFamily: "'Cormorant Garamond', serif",
//           }}
//         >
//           Explore Our Courses
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
//           {categories.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="relative pb-2 transition-all duration-300 whitespace-nowrap"
//               style={{
//                 fontSize: "18px",
//                 fontWeight: 600,
//                 fontFamily: "'Montserrat', sans-serif",
//                 color: activeTab === tab.id ? theme.primaryBlue : "#6c7a89",
//               }}
//             >
//               {tab.label}
//               {activeTab === tab.id && (
//                 <span
//                   className="absolute left-0 bottom-0 w-8 h-[3px] rounded-full"
//                   style={{ backgroundColor: theme.accentOrange }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           className="w-full h-[1px] mb-10"
//           style={{ backgroundColor: theme.primaryBlue + "40" }}
//         />

//         {/* Course Cards - Reduced width with smaller gaps */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
//           {filteredCourses.map((course, index) => (
//             <Link
//               to={course.path}
//               key={index}
//               className="group relative rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
//               style={{
//                 backgroundColor: theme.lightBg,
//                 border: `1px solid ${theme.primaryBlue}`,
//               }}
//             >
//               {/* Accent Line with hover effect */}
//               <div
//                 className="absolute left-0 top-8 bottom-8 w-[4px] transition-all duration-300 group-hover:top-5 group-hover:bottom-5 group-hover:w-[6px]"
//                 style={{ backgroundColor: theme.accentOrange }}
//               />

//               {/* Content - Reduced padding */}
//               <div className="pl-5 pr-3 py-3">
//                 {/* Title - Smaller font */}
//                 <h3
//                   className="mb-2 font-medium line-clamp-2"
//                   style={{
//                     fontSize: "15px",
//                     fontFamily: "'Montserrat', sans-serif",
//                     color: theme.darkBlueBg,
//                     lineHeight: "1.4",
//                     minHeight: "42px",
//                   }}
//                   title={course.title}
//                 >
//                   {course.title}
//                 </h3>

//                 {/* Info Section - Smaller gaps and font */}
//                 <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
//                   <div className="flex items-center gap-1">
//                     <Clock size={13} color={theme.accentOrange} />
//                     <span style={{ color: theme.darkBlueBg }}>
//                       {course.duration}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <BookOpen size={13} color={theme.accentOrange} />
//                     <span style={{ color: theme.darkBlueBg }}>
//                       {course.category.split("/")[0]}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <Users size={13} color={theme.accentOrange} />
//                     <span style={{ color: theme.darkBlueBg }}>
//                       {course.enrolled}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Show More / Show Less Button */}
//         {activeTab === "top" && allCourses.length > 9 && (
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={() => setShowAllCourses(!showAllCourses)}
//               className="flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
//               style={{
//                 backgroundColor: theme.primaryBlue,
//                 color: theme.white,
//                 fontFamily: "'Montserrat', sans-serif",
//                 fontSize: "16px",
//                 fontWeight: 600,
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = theme.accentOrange;
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = theme.primaryBlue;
//               }}
//             >
//               <span>{showAllCourses ? "Show Less" : "Show More Courses"}</span>
//               {showAllCourses ? (
//                 <ChevronUp size={18} />
//               ) : (
//                 <ChevronDown size={18} />
//               )}
//             </button>
//           </div>
//         )}

//         {/* Course count */}
//         <div
//           className="text-center mt-6 text-sm"
//           style={{ color: theme.darkBlueBg + "80" }}
//         >
//           {activeTab === "top"
//             ? `Showing ${filteredCourses.length} of ${allCourses.length} courses`
//             : `Showing ${filteredCourses.length} courses`}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CourseDetails;


// import { useState } from "react";
// import { Clock, Users, BookOpen, ChevronDown, ChevronUp, Award, TrendingUp, Star } from "lucide-react";
// import { Link } from "react-router-dom";

// const CourseDetails = () => {
//   const [activeTab, setActiveTab] = useState("top");
//   const [showAllCourses, setShowAllCourses] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // Theme colors from your navbar
//   const theme = {
//     primaryBlue: "#0694d1",
//     accentOrange: "#f28c28",
//     goldenAccent: "#D4AF37",
//     darkBlueBg: "#0F3E57",
//     lightGray: "#F5F7FA",
//     white: "#FFFFFF",
//     rgbBg: "rgb(14, 24, 89)",
//     allCourse: "#0694d1",
//     lightBg: "#f0faff",
//   };

//   // Updated courses with proper paths based on your routes
//   const allCourses = [
//     // System Administrator
//     {
//       title: "MCSE Training Certification Course",
//       duration: "40 Hrs",
//       category: "System Administrator",
//       enrolled: "12,345 enrolled",
//       path: "/mcse-training-certification-course",
//       level: "Intermediate",
//       rating: 4.8,
//       students: 12345,
//     },
//     {
//       title: "LINUX Training Certification Course",
//       duration: "40 Hrs",
//       category: "System Administrator",
//       enrolled: "10,234 enrolled",
//       path: "/linux-training-certification-course",
//       level: "Beginner",
//       rating: 4.7,
//       students: 10234,
//     },
//     {
//       title: "The CCNA Training Certification Course",
//       duration: "40 Hrs",
//       category: "System Administrator",
//       enrolled: "15,678 enrolled",
//       path: "/ccna-training-certification-course",
//       level: "Advanced",
//       rating: 4.9,
//       students: 15678,
//     },
//     {
//       title: "Intune Training Certification Course",
//       duration: "24 Hrs",
//       category: "System Administrator",
//       enrolled: "5,432 enrolled",
//       path: "/intune-training-certification-course",
//       level: "Intermediate",
//       rating: 4.6,
//       students: 5432,
//     },
//     {
//       title: "0365 Training Certification Course",
//       duration: "24 Hrs",
//       category: "System Administrator",
//       enrolled: "7,891 enrolled",
//       path: "/O365-training-certification-course",
//       level: "Beginner",
//       rating: 4.7,
//       students: 7891,
//     },

//     // Automation/Program
//     {
//       title: "Windows Powershell Training Certification Course",
//       duration: "24 Hrs",
//       category: "Automation/Program",
//       enrolled: "6,543 enrolled",
//       path: "/powershell-training-certification-course",
//       level: "Intermediate",
//       rating: 4.8,
//       students: 6543,
//     },
//     {
//       title: "Python Training Certification Course",
//       duration: "40 Hrs",
//       category: "Automation/Program",
//       enrolled: "18,765 enrolled",
//       path: "/python-training-certification-course",
//       level: "Beginner",
//       rating: 4.9,
//       students: 18765,
//     },

//     // Cloud Technology
//     {
//       title: "Microsoft Azure Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cloud Technology",
//       enrolled: "22,345 enrolled",
//       path: "/microsoft-azure-training-certification-course",
//       level: "Advanced",
//       rating: 4.9,
//       students: 22345,
//     },
//     {
//       title: "Microsoft Entra ID Training Certification Course",
//       duration: "24 Hrs",
//       category: "Cloud Technology",
//       enrolled: "4,321 enrolled",
//       path: "/microsoft-entra-id-training-certification-course",
//       level: "Intermediate",
//       rating: 4.7,
//       students: 4321,
//     },
//     {
//       title: "AWS Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cloud Technology",
//       enrolled: "25,678 enrolled",
//       path: "/aws-training-certification-course",
//       level: "Advanced",
//       rating: 4.9,
//       students: 25678,
//     },
//     {
//       title: "Google Cloud (GCP) Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cloud Technology",
//       enrolled: "8,901 enrolled",
//       path: "/google-cloud-gcp-training-certification-course",
//       level: "Intermediate",
//       rating: 4.8,
//       students: 8901,
//     },
//     {
//       title: "Azure Sentinel Training Certification Course",
//       duration: "24 Hrs",
//       category: "Cloud Technology",
//       enrolled: "3,456 enrolled",
//       path: "/azure-sentinel-training-certification-course",
//       level: "Advanced",
//       rating: 4.7,
//       students: 3456,
//     },

//     // DevOps
//     {
//       title: "AWS DevOps Training Certification Course",
//       duration: "40 Hrs",
//       category: "DevOps",
//       enrolled: "9,876 enrolled",
//       path: "/aws-devops-training-certification-course",
//       level: "Intermediate",
//       rating: 4.8,
//       students: 9876,
//     },
//     {
//       title: "Azure DevOps Training Certification Course",
//       duration: "40 Hrs",
//       category: "DevOps",
//       enrolled: "8,765 enrolled",
//       path: "/azure-devops-training-certification-course",
//       level: "Intermediate",
//       rating: 4.8,
//       students: 8765,
//     },

//     // Cyber Security
//     {
//       title: "Cyber Security Training Certification Course",
//       duration: "40 Hrs",
//       category: "Cyber Security",
//       enrolled: "14,567 enrolled",
//       path: "/cyber-security-training-certification-course",
//       level: "Advanced",
//       rating: 4.9,
//       students: 14567,
//     },
//   ];

//   // Show only 9 courses initially, all when showAllCourses is true
//   const displayedCourses = showAllCourses ? allCourses : allCourses.slice(0, 9);

//   // Get unique categories for filtering
//   const categories = [
//     { id: "top", label: "Top Courses" },
//     { id: "system", label: "System Admin" },
//     { id: "automation", label: "Automation" },
//     { id: "cloud", label: "Cloud Tech" },
//     { id: "devops", label: "DevOps" },
//     { id: "security", label: "Cyber Security" },
//   ];

//   // Filter courses based on active tab
//   const getFilteredCourses = () => {
//     const categoryMap = {
//       system: "System Administrator",
//       automation: "Automation/Program",
//       cloud: "Cloud Technology",
//       devops: "DevOps",
//       security: "Cyber Security",
//     };

//     if (activeTab === "top") {
//       return showAllCourses ? allCourses : allCourses.slice(0, 9);
//     }

//     return allCourses.filter(
//       (course) => course.category === categoryMap[activeTab],
//     );
//   };

//   const filteredCourses = getFilteredCourses();

//   // Get level color
//   const getLevelColor = (level) => {
//     switch(level) {
//       case "Beginner": return "#4CAF50";
//       case "Intermediate": return "#FF9800";
//       case "Advanced": return "#F44336";
//       default: return theme.primaryBlue;
//     }
//   };

//   // Format student count
//   const formatStudentCount = (count) => {
//     if (count >= 1000) {
//       return `${(count / 1000).toFixed(1)}k+ students`;
//     }
//     return `${count} students`;
//   };

//   return (
//     <section className="w-full py-14">
//       <div className="max-w-[1300px] mx-auto px-12">
//         {/* Title */}
//         <h2
//           className="text-center mb-10"
//           style={{
//             fontSize: "42px",
//             fontWeight: 700,
//             color: theme.darkBlueBg,
//             fontFamily: "'Cormorant Garamond', serif",
//           }}
//         >
//           Explore Our Courses
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
//           {categories.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => {
//                 setActiveTab(tab.id);
//                 setShowAllCourses(false);
//               }}
//               className="relative pb-2 transition-all duration-300 whitespace-nowrap"
//               style={{
//                 fontSize: "18px",
//                 fontWeight: 600,
//                 fontFamily: "'Poppins', sans-serif",
//                 color: activeTab === tab.id ? theme.primaryBlue : "#0a1f26",
//                 transform: activeTab === tab.id ? "scale(1.05)" : "scale(1)",
//               }}
//             >
//               {tab.label}
//               {activeTab === tab.id && (
//                 <span
//                   className="absolute left-0 bottom-0 text-gray-700 w-8 h-[3px] rounded-full transition-all duration-300"
//                   style={{ 
//                     backgroundColor: theme.accentOrange,
//                     width: activeTab === tab.id ? "100%" : "2rem",
//                   }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           className="w-full h-[1px] mb-10"
//           style={{ backgroundColor: theme.primaryBlue + "40" }}
//         />

//         {/* Course Cards - Reduced width with smaller gaps */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
//           {filteredCourses.map((course, index) => (
//             <Link
//               to={course.path}
//               key={index}
//               className="group relative rounded-lg transition-all duration-500 cursor-pointer overflow-hidden"
//               style={{
//                 backgroundColor: theme.white,
//                 border: `1px solid ${hoveredCard === index ? theme.accentOrange : theme.primaryBlue + '40'}`,
//                 boxShadow: hoveredCard === index ? `0 10px 25px -5px ${theme.primaryBlue}30` : '0 2px 8px rgba(0,0,0,0.05)',
//                 transform: hoveredCard === index ? 'translateY(-4px)' : 'translateY(0)',
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Animated gradient overlay on hover */}
//               <div 
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 style={{
//                   background: `linear-gradient(135deg, ${theme.primaryBlue}08 0%, ${theme.accentOrange}08 100%)`,
//                 }}
//               />

//               {/* Accent Line with hover effect */}
//               <div
//                 className="absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-500"
//                 style={{ 
//                   backgroundColor: hoveredCard === index ? theme.accentOrange : theme.primaryBlue,
//                   boxShadow: hoveredCard === index ? `0 0 10px ${theme.accentOrange}` : 'none',
//                 }}
//               />

//               {/* Content - Reduced padding */}
//               <div className="pl-5 pr-3 py-3 relative">
//                 {/* Title - Smaller font */}
//                 <h3
//                   className="mb-2 font-semibold line-clamp-2 transition-all duration-300"
//                   style={{
//                     fontSize: "16px",
//                     fontFamily: "'Poppins', sans-serif",
//                     color: hoveredCard === index ? theme.primaryBlue : theme.darkBlueBg,
//                     lineHeight: "1.4",
//                     minHeight: "45px",
//                   }}
//                   title={course.title}
//                 >
//                   {course.title}
//                 </h3>

//                 {/* Rating Section */}
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="flex items-center">
//                     <Star size={14} color={theme.goldenAccent} fill={theme.goldenAccent} />
//                     <span 
//                       className="ml-1 text-sm font-semibold"
//                       style={{ color: theme.darkBlueBg }}
//                     >
//                       {course.rating}
//                     </span>
//                   </div>
//                   <span 
//                     className="text-xs text-gray-500"
//                     // style={{ color: theme.darkBlueBg + '900' }}
//                   >
//                     ({formatStudentCount(course.students)})
//                   </span>
//                 </div>

//                 {/* Info Section - Smaller gaps and font */}
//                 <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-2">
//                   <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
//                     <Clock size={13} color={theme.accentOrange} />
//                     <span style={{ color: theme.darkBlueBg }}>
//                       {course.duration}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
//                     <BookOpen size={13} color={theme.accentOrange} />
//                     <span style={{ color: theme.darkBlueBg }}>
//                       {course.category.split("/")[0]}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
//                     <Users size={13} color={theme.accentOrange} />
//                     <span style={{ color: theme.darkBlueBg }}>
//                       {course.enrolled}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Level Badge */}
//                 <div className="flex justify-between items-center mt-2">
//                   <span 
//                     className="text-[10px] px-2 py-1 rounded-full font-medium"
//                     style={{
//                       backgroundColor: getLevelColor(course.level) + '20',
//                       color: getLevelColor(course.level),
//                       border: `1px solid ${getLevelColor(course.level)}40`,
//                     }}
//                   >
//                     {course.level}
//                   </span>
                  
//                   {/* Animated arrow on hover */}
//                   <span 
//                     className="text-xs font-medium transition-all duration-300 flex items-center gap-1"
//                     style={{
//                       color: hoveredCard === index ? theme.accentOrange : 'transparent',
//                       opacity: hoveredCard === index ? 1 : 0,
//                       transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-10px)',
//                     }}
//                   >
//                     View Course 
//                     <span className="text-lg">→</span>
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Show More / Show Less Button */}
//         {activeTab === "top" && allCourses.length > 9 && (
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={() => setShowAllCourses(!showAllCourses)}
//               className="flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
//               style={{
//                 backgroundColor: theme.primaryBlue,
//                 color: theme.white,
//                 fontFamily: "'Poppins', sans-serif",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 border: `2px solid ${theme.primaryBlue}`,
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = theme.accentOrange;
//                 e.target.style.borderColor = theme.accentOrange;
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = theme.primaryBlue;
//                 e.target.style.borderColor = theme.primaryBlue;
//               }}
//             >
//               <span>{showAllCourses ? "Show Less" : "Show More Courses"}</span>
//               <span className="group-hover:animate-bounce">
//                 {showAllCourses ? (
//                   <ChevronUp size={18} />
//                 ) : (
//                   <ChevronDown size={18} />
//                 )}
//               </span>
//             </button>
//           </div>
//         )}

//         {/* Course count */}
//         <div
//           className="text-center mt-6 text-sm text-gray-600 transition-all duration-300"
//           style={{  fontFamily: "'Poppins', sans-serif" }}
//         >
//           {activeTab === "top"
//             ? `Showing ${filteredCourses.length} of ${allCourses.length} courses`
//             : `Showing ${filteredCourses.length} courses`}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CourseDetails;


import { useState } from "react";
import { Clock, Users, BookOpen, ChevronDown, ChevronUp, Award, TrendingUp, Star, Target, Zap, Shield, Cloud, Code, Server, Wifi, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("top");
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Theme colors from your navbar
  const theme = {
    primaryBlue: "#0694d1",
    accentOrange: "#f28c28",
    goldenAccent: "#D4AF37",
    darkBlueBg: "#0F3E57",
    lightGray: "#F5F7FA",
    white: "#FFFFFF",
    rgbBg: "rgb(14, 24, 89)",
    allCourse: "#0694d1",
    lightBg: "#f0faff",
  };

  // Updated courses with proper paths based on your routes
  const allCourses = [
    // System Administrator
    {
      title: "MCSE Training Certification Course",
      image: "/assets/mcse.png",
      duration: "40 Hrs",
      category: "System Administrator",
      enrolled: "12,345 enrolled",
      path: "/mcse-training-certification-course",
      badge: "Microsoft Certified",
      badgeIcon: "award",
      rating: 4.8,
      students: 12345,
    },
    {
      title: "LINUX Training Certification Course",
      duration: "40 Hrs",
      category: "System Administrator",
      enrolled: "10,234 enrolled",
      path: "/linux-training-certification-course",
      badge: "Linux Professional",
      badgeIcon: "server",
      rating: 4.7,
      students: 10234,
    },
    {
      title: "The CCNA Training Certification Course",
      duration: "40 Hrs",
      category: "System Administrator",
      enrolled: "15,678 enrolled",
      path: "/ccna-training-certification-course",
      badge: "Cisco Certified",
      badgeIcon: "wifi",
      rating: 4.9,
      students: 15678,
    },
    {
      title: "Intune Training Certification Course",
      duration: "24 Hrs",
      category: "System Administrator",
      enrolled: "5,432 enrolled",
      path: "/intune-training-certification-course",
      badge: "Endpoint Admin",
      badgeIcon: "shield",
      rating: 4.6,
      students: 5432,
    },
    {
      title: "0365 Training Certification Course",
      duration: "24 Hrs",
      category: "System Administrator",
      enrolled: "7,891 enrolled",
      path: "/O365-training-certification-course",
      badge: "Exchange Online",
      badgeIcon: "cloud",
      rating: 4.7,
      students: 7891,
    },

    // Automation/Program
    {
      title: "Windows Powershell Training Certification Course",
      duration: "24 Hrs",
      category: "Automation/Program",
      enrolled: "6,543 enrolled",
      path: "/powershell-training-certification-course",
      badge: "Scripting Expert",
      badgeIcon: "code",
      rating: 4.8,
      students: 6543,
    },
    {
      title: "Python Training Certification Course",
      duration: "40 Hrs",
      category: "Automation/Program",
      enrolled: "18,765 enrolled",
      path: "/python-training-certification-course",
      badge: "Python Developer",
      badgeIcon: "code",
      rating: 4.9,
      students: 18765,
    },

    // Cloud Technology
    {
      title: "Microsoft Azure Training Certification Course",
      duration: "40 Hrs",
      category: "Cloud Technology",
      enrolled: "22,345 enrolled",
      path: "/microsoft-azure-training-certification-course",
      badge: "Azure Architect",
      badgeIcon: "cloud",
      rating: 4.9,
      students: 22345,
    },
    {
      title: "Microsoft Entra ID Training Certification Course",
      duration: "24 Hrs",
      category: "Cloud Technology",
      enrolled: "4,321 enrolled",
      path: "/microsoft-entra-id-training-certification-course",
      badge: "Identity Expert",
      badgeIcon: "shield",
      rating: 4.7,
      students: 4321,
    },
    {
      title: "AWS Training Certification Course",
      duration: "40 Hrs",
      category: "Cloud Technology",
      enrolled: "25,678 enrolled",
      path: "/aws-training-certification-course",
      badge: "AWS Certified",
      badgeIcon: "cloud",
      rating: 4.9,
      students: 25678,
    },
    {
      title: "Google Cloud (GCP) Training Certification Course",
      duration: "40 Hrs",
      category: "Cloud Technology",
      enrolled: "8,901 enrolled",
      path: "/google-cloud-gcp-training-certification-course",
      badge: "GCP Professional",
      badgeIcon: "cloud",
      rating: 4.8,
      students: 8901,
    },
    {
      title: "Azure Sentinel Training Certification Course",
      duration: "24 Hrs",
      category: "Cloud Technology",
      enrolled: "3,456 enrolled",
      path: "/azure-sentinel-training-certification-course",
      badge: "Security Analyst",
      badgeIcon: "shield",
      rating: 4.7,
      students: 3456,
    },

    // DevOps
    {
      title: "AWS DevOps Training Certification Course",
      duration: "40 Hrs",
      category: "DevOps",
      enrolled: "9,876 enrolled",
      path: "/aws-devops-training-certification-course",
      badge: "DevOps Engineer",
      badgeIcon: "zap",
      rating: 4.8,
      students: 9876,
    },
    {
      title: "Azure DevOps Training Certification Course",
      duration: "40 Hrs",
      category: "DevOps",
      enrolled: "8,765 enrolled",
      path: "/azure-devops-training-certification-course",
      badge: "DevOps Expert",
      badgeIcon: "zap",
      rating: 4.8,
      students: 8765,
    },

    // Cyber Security
    {
      title: "Cyber Security Training Certification Course",
      duration: "40 Hrs",
      category: "Cyber Security",
      enrolled: "14,567 enrolled",
      path: "/cyber-security-training-certification-course",
      badge: "Security Specialist",
      badgeIcon: "lock",
      rating: 4.9,
      students: 14567,
    },
  ];

  // Show only 9 courses initially, all when showAllCourses is true
  const displayedCourses = showAllCourses ? allCourses : allCourses.slice(0, 9);

  // Get unique categories for filtering
  const categories = [
    { id: "top", label: "Top Courses" },
    { id: "system", label: "System Admin" },
    { id: "automation", label: "Automation" },
    { id: "cloud", label: "Cloud Tech" },
    { id: "devops", label: "DevOps" },
    { id: "security", label: "Cyber Security" },
  ];

  // Filter courses based on active tab
  const getFilteredCourses = () => {
    const categoryMap = {
      system: "System Administrator",
      automation: "Automation/Program",
      cloud: "Cloud Technology",
      devops: "DevOps",
      security: "Cyber Security",
    };

    if (activeTab === "top") {
      return showAllCourses ? allCourses : allCourses.slice(0, 9);
    }

    return allCourses.filter(
      (course) => course.category === categoryMap[activeTab],
    );
  };

  const filteredCourses = getFilteredCourses();

  // Get badge color based on badge type
  const getBadgeColor = (badge) => {
    const colorMap = {
      "Microsoft Certified": "#2563EB",
      "Linux Professional": "#16A34A",
      "Cisco Certified": "#DC2626",
      "Endpoint Admin": "#7C3AED",
      "Exchange Online": "#2563EB",
      "Scripting Expert": "#CA8A04",
      "Python Developer": "#F97316",
      "Azure Architect": "#2563EB",
      "Identity Expert": "#7C3AED",
      "AWS Certified": "#F59E0B",
      "GCP Professional": "#0F9D58",
      "Security Analyst": "#DC2626",
      "DevOps Engineer": "#8B5CF6",
      "DevOps Expert": "#8B5CF6",
      "Security Specialist": "#DC2626",
    };
    return colorMap[badge] || theme.primaryBlue;
  };

  // Get badge icon component
  const getBadgeIcon = (iconName, color) => {
    const iconProps = { size: 12, color: color };
    switch(iconName) {
      case "award": return <Award {...iconProps} />;
      case "server": return <Server {...iconProps} />;
      case "wifi": return <Wifi {...iconProps} />;
      case "shield": return <Shield {...iconProps} />;
      case "cloud": return <Cloud {...iconProps} />;
      case "code": return <Code {...iconProps} />;
      case "zap": return <Zap {...iconProps} />;
      case "lock": return <Lock {...iconProps} />;
      default: return <Award {...iconProps} />;
    }
  };

  // Format student count
  const formatStudentCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k+ students`;
    }
    return `${count} students`;
  };

  return (
    <section className="w-full py-14">
      <div className="max-w-[1300px] mx-auto px-12">
        <div></div>
        {/* Title */}
        <h2
          className="text-center mb-10"
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: theme.darkBlueBg,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Explore Our Courses
           <span 
              className="absolute hidden md:block xl:block lg:block bottom-[-17.5rem] left-1/2 transform -translate-x-1/2 w-24 h-1  rounded-full"
              style={{ backgroundColor: "#f28c28" , }}
            ></span> 
        </h2>

         {/* <span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
              style={{ backgroundColor: theme.accentOrange }}
            ></span> */}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowAllCourses(false);
              }}
              className="relative pb-2 transition-all duration-300 whitespace-nowrap"
              style={{
                fontSize: "18px",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                color: activeTab === tab.id ? theme.primaryBlue : "#0a1f26",
                transform: activeTab === tab.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute left-0 bottom-0 text-gray-700 w-8 h-[3px] rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: theme.accentOrange,
                    width: activeTab === tab.id ? "100%" : "2rem",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-[1px] mb-10"
          style={{ backgroundColor: theme.primaryBlue + "40" }}
        />

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
          {filteredCourses.map((course, index) => {
            const badgeColor = getBadgeColor(course.badge);
            
            return (
              <Link
                to={course.path}
                key={index}
                className="group relative rounded-lg transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: theme.white,
                  border: `1px solid ${hoveredCard === index ? theme.accentOrange : theme.primaryBlue + '40'}`,
                  boxShadow: hoveredCard === index ? `0 10px 25px -5px ${theme.primaryBlue}30` : '0 2px 8px rgba(0,0,0,0.05)',
                  transform: hoveredCard === index ? 'translateY(-4px)' : 'translateY(0)',
                  fontFamily: "'Poppins', sans-serif",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryBlue}08 0%, ${theme.accentOrange}08 100%)`,
                  }}
                />

                {/* Accent Line with hover effect */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-500"
                  style={{ 
                    backgroundColor: hoveredCard === index ? theme.accentOrange : theme.primaryBlue,
                    boxShadow: hoveredCard === index ? `0 0 10px ${theme.accentOrange}` : 'none',
                  }}
                />

                {/* Content */}
                <div className="pl-5 pr-3 py-3 relative">
                  {/* Title */}
                  <h3
                    className="mb-2 font-semibold line-clamp-2 transition-all duration-300"
                    style={{
                      fontSize: "16px",
                      fontFamily: "'Poppins', sans-serif",
                      color: hoveredCard === index ? theme.primaryBlue : theme.darkBlueBg,
                      lineHeight: "1.4",
                      minHeight: "45px",
                    }}
                    title={course.title}
                  >
                    {course.title}
                  </h3>

                  {/* Rating Section */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star size={14} color={theme.goldenAccent} fill={theme.goldenAccent} />
                      <span 
                        className="ml-1 text-sm font-semibold"
                        style={{ color: theme.darkBlueBg }}
                      >
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      ({formatStudentCount(course.students)})
                    </span>
                  </div>

                  {/* Info Section */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-2">
                    <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                      <Clock size={13} color={theme.accentOrange} />
                      <span style={{ color: theme.darkBlueBg }}>
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                      <BookOpen size={13} color={theme.accentOrange} />
                      <span style={{ color: theme.darkBlueBg }}>
                        {course.category.split("/")[0]}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                      <Users size={13} color={theme.accentOrange} />
                      <span style={{ color: theme.darkBlueBg }}>
                        {course.enrolled}
                      </span>
                    </div>
                  </div>

                  {/* Professional Badge - Replaces level */}
                  <div className="flex justify-between items-center mt-2">
                    <div 
                      className="flex items-center gap-1.5 px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: badgeColor + '10',
                        border: `1px solid ${badgeColor}30`,
                      }}
                    >
                      {getBadgeIcon(course.badgeIcon, badgeColor)}
                      <span 
                        className="text-[10px] font-medium"
                        style={{ color: badgeColor }}
                      >
                        {course.badge}
                      </span>
                    </div>
                    
                    {/* Animated arrow on hover */}
                    <span 
                      className="text-xs font-medium transition-all duration-300 flex items-center gap-1"
                      style={{
                        color: hoveredCard === index ? theme.accentOrange : 'transparent',
                        opacity: hoveredCard === index ? 1 : 0,
                        transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-10px)',
                      }}
                    >
                      View Course 
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
       {activeTab === "top" && allCourses.length > 9 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              style={{
                backgroundColor: theme.primaryBlue,
                color: theme.white,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                border: `2px solid ${theme.primaryBlue}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accentOrange;
                e.currentTarget.style.borderColor = theme.accentOrange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.primaryBlue;
                e.currentTarget.style.borderColor = theme.primaryBlue;
              }}
            >
              <span>
                {showAllCourses ? "Show Less" : "Show More Courses"}
              </span>

              <span className="group-hover:animate-bounce">
                {showAllCourses ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </span>
            </button>
          </div>
        )}
        {/* Course count */}
        <div
          className="text-center mt-6 text-sm text-gray-600 transition-all duration-300"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {activeTab === "top"
            ? `Showing ${filteredCourses.length} of ${allCourses.length} courses`
            : `Showing ${filteredCourses.length} courses`}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;