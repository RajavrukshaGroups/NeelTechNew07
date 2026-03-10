// import onlineTraining from "../../../public/assets/onlinetraining2.jpg";

// const TrainingHero = () => {
//   return (
//     <section className="w-full bg-[#f0faff] py-14 md:py-16 relative overflow-hidden">
//       <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 items-center gap-8">
//         {/* LEFT CONTENT */}
//         <div>
//           <h1
//             className="text-3xl md:text-5xl font-semibold leading-snug text-[#2b2f33]"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             Master In-Demand Skills. <br />
//             Live Online. Anywhere.
//           </h1>

//           <p
//             className="mt-4 text-base md:text-lg text-[#091321] max-w-[480px] leading-relaxed"
//             style={{ fontFamily: "'Montserrat', sans-serif" }}
//           >
//             Learn from expert instructors with our 5,000+ course catalogue.
//             Upskill conveniently from the comfort of your own space.
//           </p>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="relative w-[240px] h-[240px] md:w-[330px] md:h-[330px] rounded-full border-4 border-blue-400 flex items-center justify-center">
//             <div className="absolute inset-0 rounded-full border border-blue-300 opacity-60"></div>

//             <img
//               src={onlineTraining}
//               alt="Online Training"
//               className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingHero;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// const TrainingHero = () => { 
//   // Denser Botanical Line Art Pattern for a dark theme
//   const leafPatternSvg = `data:image/svg+xml,%3Csvg width='250' height='250' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f2ede4' stroke-width='0.8' opacity='0.4'%3E%3C!-- Main Leaf --%3E%3Cpath d='M125 20c15 40 60 50 60 90 0 40-40 65-60 65s-60-25-60-65c0-40 45-50 60-90z'/%3E%3Cpath d='M125 20v135M125 55l40 25M125 90l50 30M125 125l40 20M125 55l-40 25M125 90l-50 30M125 125l-40 20'/%3E%3C!-- Side Leaf 1 --%3E%3Cpath d='M40 120c8 20 35 25 35 45 0 20-20 35-35 35s-35-15-35-35c0-20 27-25 35-45z'/%3E%3Cpath d='M40 120v75M40 140l20 15M40 160l25 18M40 140l-20 15'/%3E%3C!-- Side Leaf 2 --%3E%3Cpath d='M210 140c8 20 35 25 35 45 0 20-20 35-35 35s-35-15-35-35c0-20 27-25 35-45z'/%3E%3Cpath d='M210 140v75M210 160l20 15M210 180l25 18M210 160l-20 15'/%3E%3C!-- Extra Small Leaf 1 --%3E%3Cpath d='M180 50c5 10 20 12 20 22 0 10-10 18-20 18s-20-8-20-18c0-10 15-12 20-22z'/%3E%3C!-- Extra Small Leaf 2 --%3E%3Cpath d='M70 40c5 10 20 12 20 22 0 10-10 18-20 18s-20-8-20-18c0-10 15-12 20-22z'/%3E%3C/g%3E%3C/svg%3E`;

//   const onlineTraining = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop";

//   return (
//     <section 
//       className="w-full min-h-auto flex items-center relative overflow-hidden py-8"
//       style={{ 
//         backgroundColor: "#002b4d", // Dark brand blue background
//         backgroundImage: `url("${leafPatternSvg}")`,
//         backgroundRepeat: 'repeat',
//         backgroundSize: '350px 350px'
//       }}
//     >
//       {/* Dark Gradient Overlay for Readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e15] via-[#1a2e15]/80 to-transparent"></div>
      
//       {/* Decorative Brand Accents - Brighter for the dark theme */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f39221]/10 to-transparent pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f39221]/10 blur-3xl pointer-events-none"></div>

//       <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 items-center gap-16 relative z-10">
//         {/* LEFT CONTENT */}
//         <div className="text-left">
//           <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-900/20 text-[#f39221] text-sm font-bold mb-8 tracking-widest uppercase border border-white/10">
//             <span className="w-2 h-2 rounded-full font-bold text-base bg-[#f39221] animate-pulse"></span>
//             Premium Online Education
//           </div>
          
//           <h1
//             className="text-5xl md:text-4xl font-bold leading-[1.05] text-white font-serif mb-8"
//           >
//             Master <span className="text-[#f39221]">In-Demand</span> Skills. <br />
//             <span className="italic font-normal text-slate-300">Live Online.</span> Anywhere.
//           </h1>

//           <p
//             className="text-xl md:text-2xl text-slate-300 max-w-[580px] leading-relaxed font-sans mb-12 opacity-90"
//           >
//             Learn from expert instructors with our 5,000+ course catalogue.
//             Upskill conveniently from the comfort of your own space.
//           </p>
          
          
          
//           {/* Trust Indicators */}
         
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="relative">
//             {/* Decorative Elements */}
//             <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#005596]/5 rounded-full blur-3xl"></div>
//             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#005596]/5 rounded-full blur-3xl"></div>
            
//             {/* Main Image Container */}
//             <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px] md:mr-20 rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white group">
//               <img
//                 src={onlineTraining}
//                 alt="Online Training"
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#005596]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Floating Content on Image */}
//               <div className="absolute bottom-10 left-10 right-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                 <div className="bg-white/90 backdrop-blur-md md:p-4 p-2 hidden md:block rounded-3xl shadow-xl">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-[#005596] flex items-center justify-center text-white font-bold">
//                       NT
//                     </div>
//                     <div>
//                       <div className="text-[#005596] font-bold">NEEL</div>
//                       <div className="text-xs font-bold text-slate-900">TECHNOLOGIES</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Floating Badge */}
//             <div className="absolute top-10 -left-10 bg-white md:p-4 p-2 rounded-3xl shadow-2xl border border-slate-50 animate-bounce-slow z-20">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-[#f39221] flex items-center justify-center text-white">
//                   ★
//                 </div>
//                 <div>
//                   <div className="text-[#005596] font-bold">Certified</div>
//                   <div className="text-[10px] text-slate-900 font-bold uppercase tracking-widest">Excellence</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainingHero;



/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import onlineTraining from "../../../public/assets/onlinetraining2.jpg";
import NeelLogo from "../../../public/assets/head-logo.png";
const TrainingHero = () => {
  // Denser Botanical Line Art Pattern for a dark theme
  const leafPatternSvg = `data:image/svg+xml,%3Csvg width='250' height='250' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f2ede4' stroke-width='0.8' opacity='0.4'%3E%3C!-- Main Leaf --%3E%3Cpath d='M125 20c15 40 60 50 60 90 0 40-40 65-60 65s-60-25-60-65c0-40 45-50 60-90z'/%3E%3Cpath d='M125 20v135M125 55l40 25M125 90l50 30M125 125l40 20M125 55l-40 25M125 90l-50 30M125 125l-40 20'/%3E%3C!-- Side Leaf 1 --%3E%3Cpath d='M40 120c8 20 35 25 35 45 0 20-20 35-35 35s-35-15-35-35c0-20 27-25 35-45z'/%3E%3Cpath d='M40 120v75M40 140l20 15M40 160l25 18M40 140l-20 15'/%3E%3C!-- Side Leaf 2 --%3E%3Cpath d='M210 140c8 20 35 25 35 45 0 20-20 35-35 35s-35-15-35-35c0-20 27-25 35-45z'/%3E%3Cpath d='M210 140v75M210 160l20 15M210 180l25 18M210 160l-20 15'/%3E%3C!-- Extra Small Leaf 1 --%3E%3Cpath d='M180 50c5 10 20 12 20 22 0 10-10 18-20 18s-20-8-20-18c0-10 15-12 20-22z'/%3E%3C!-- Extra Small Leaf 2 --%3E%3Cpath d='M70 40c5 10 20 12 20 22 0 10-10 18-20 18s-20-8-20-18c0-10 15-12 20-22z'/%3E%3C/g%3E%3C/svg%3E`;

  //const onlineTraining = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop";

  return (
    <section 
      className="w-full min-h-auto flex mr-2 md:mr-20 items-center relative overflow-hidden py-8"
      style={{ 
        backgroundColor: "#002b4d", // Dark brand blue background
        backgroundImage: `url("${leafPatternSvg}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '350px 350px'
      }}
    >
      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002b4d] via-[#002b4d]/80 to-transparent"></div>
      
      {/* Decorative Brand Accents - Brighter for the dark theme */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f39221]/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f39221]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f39221] text-sm font-bold mb-8 tracking-widest uppercase border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#f39221] animate-pulse"></span>
            Premium Online Education
          </div>
          
          <h1
            className="text-3xl md:text-5xl font-bold leading-[1.05] text-white font-serif mb-8"
          >
            Master <span className="text-[#f39221]">In-Demand</span> Skills. <br />
            <span className="italic font-normal text-slate-300">Live Online.</span> Anywhere.
          </h1>

          <p
            className="text-lg md:text-xl text-slate-200 max-w-[580px] leading-relaxed font-sans mb-12 opacity-90"
          >
            Learn from expert instructors with our 5,000+ course catalogue.
            Upskill conveniently from the comfort of your own space.
          </p>
          
      
          
          {/* Trust Indicators */}
       
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f39221]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f39221]/5 rounded-full blur-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white group">
              <img
                src={onlineTraining}
                alt="Online Training"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005596]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Content on Image */}
              <div className="absolute bottom-10 left-10 right-10 hidden md:block translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full  bg-gray-200 flex items-center justify-center text-white font-bold">
                      {/* <span className="text-[#005596] font-bold">N</span>
                      <span className="text-[#f39221] font-bold">T</span> */}
                      <img src={NeelLogo} alt="Neel Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[#005596] font-bold">NEEL</div>
                      <div className="text-xs text-[#f39221] font-bold">TECHNOLOGIES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-10 -left-10 bg-white p-3 rounded-3xl shadow-2xl border border-slate-50 animate-bounce-slow z-20">
              <div className="flex items-center hidden md:block gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f39221] flex items-center justify-center text-white">
                  ★
                </div>
                <div>
                  <div className="text-[#f39221] text-base font-extrabold">Certified</div>
                  <div className="text-[10px] text-slate-600 font-extrabold uppercase tracking-widest">Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
