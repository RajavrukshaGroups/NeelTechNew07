// import successstoryImg from "../../../public/assets/story_new.jpeg";

// const SuccessStoriesHero = () => {
//   return (
//     <section className="w-full bg-[#f0faff] py-10 md:py-14 overflow-hidden">
//       <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
//         {/* Left Content */}
//         <div className="flex-1 text-center lg:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#1F2933] leading-snug mb-4">
//             Inspiring Journeys. Real Success.
//           </h1>

//           <p className="text-lg md:text-xl font-medium text-[#000000] leading-relaxed max-w-lg mx-auto lg:mx-0">
//             Discover how our students transformed their careers with Neel
//             Technologies — from beginners to industry-ready professionals.
//           </p>
//         </div>

//         {/* Right Circular Image */}
//         <div className="flex-1 flex justify-center relative">
//           {/* Decorative Ring */}
//           <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border-3 border-[#1C5D8F]"></div>

//           {/* Decorative Dots */}
//           <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full top-4 left-8"></div>
//           <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full bottom-6 right-6"></div>

//           {/* Image */}
//           <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl relative z-10">
//             <img
//               src={successstoryImg}
//               alt="Success Stories"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStoriesHero;


// import { motion } from "framer-motion";
// import successstoryImg from "../../../public/assets/story_new.jpeg";

// const SuccessStoriesHero = () => {
//   // Using a high-quality placeholder for the success story image
//   //const successstoryImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
  
//   // The background pattern URL - using a similar leaf pattern from a public source
//   // If the exact image is required, it should be placed in the public folder.
//   // For now, I'll use a CSS pattern that mimics the look or a high-quality pattern image.
//   const backgroundPattern = "https://www.transparenttextures.com/patterns/leaf.png";

//   return (
//     <section 
//         id="success-stories-hero"
//         className="w-full py-10 md:py-12 overflow-hidden relative"
//         style={{
//           backgroundColor: "#1e40af",
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "20px 20px"
//         }}
//       >
//       {/* Hand-drawn Leaf Pattern Overlay */}
//       <div 
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
//           backgroundSize: '500px',
//           filter: 'brightness(0) saturate(100%) invert(24%) sepia(91%) saturate(1944%) hue-rotate(188deg) brightness(92%) contrast(101%)', // Tint the pattern to brand blue
//         }}
//       />

//       <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex-1 text-center lg:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2933] leading-tight mb-6 tracking-tight">
//             Inspiring Journeys.<br />
//             <span className="text-blue-800" style={{color:"#1659bdff"}}>Real Success.</span>
//           </h1>

//           <p className="text-xl md:text-2xl font-medium text-[#334155] leading-relaxed max-w-xl mx-auto lg:mx-0">
//             Discover how our students transformed their careers with Neel
//             Technologies — from beginners to industry-ready professionals.
//           </p>
          
//           {/* <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-10 px-8 py-4 bg-orange-400 text-white rounded-full font-semibold shadow-lg hover:bg-[#e68510] transition-colors"
//           >
//             Read Their Stories
//           </motion.button> */}
//         </motion.div>

//         {/* Right Circular Image */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//           animate={{ opacity: 1, scale: 1, rotate: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="flex-1 flex justify-center relative"
//         >
//           {/* Decorative Ring */}
//           <motion.div 
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-4 border-dashed border-blue-800 opacity-30"
//           />
          
//           <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border-2 border-orange-400 opacity-50" />

//           {/* Decorative Dots */}
//           <motion.div 
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="absolute w-4 h-4 bg-blue-800 rounded-full top-0 left-10 shadow-lg" 
//           />
//           <motion.div 
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
//             className="absolute w-4 h-4 bg-orange-400 rounded-full bottom-10 right-10 shadow-lg" 
//           />

//           {/* Image Container */}
//           <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl relative z-10 border-8 border-white">
//             <img
//               src={successstoryImg}
//               alt="Success Stories"
//               className="w-full h-full object-cover"
//               referrerPolicy="no-referrer"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStoriesHero;


import { motion } from "framer-motion";
import successstoryImg from "../../../public/assets/story_new.jpeg";

const SuccessStoriesHero = () => {
  return (
    <section
      id="success-stories-hero"
      className="w-full py-10 md:py-12 overflow-hidden relative"
      style={{
        backgroundColor: "#1e40af",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px"
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Inspiring Journeys.<br />
            <span className="text-orange-400">Real Success.</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-blue-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Discover how our students transformed their careers with Neel
            Technologies — from beginners to industry-ready professionals.
          </p>
        </motion.div>

        {/* Right Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center relative"
        >
          {/* Decorative Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-4 border-dashed border-white opacity-30"
          />

          {/* Second Ring */}
          <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border-2 border-orange-400 opacity-50" />

          {/* Floating Dots */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-4 h-4 bg-white rounded-full top-0 left-10 shadow-lg"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute w-4 h-4 bg-orange-400 rounded-full bottom-10 right-10 shadow-lg"
          />

          {/* Image */}
          <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <img
              src={successstoryImg}
              alt="Success Stories"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessStoriesHero;