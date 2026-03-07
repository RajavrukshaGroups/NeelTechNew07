// import blogImage from "../../../public/assets/videoportal.jpg";

// const BlogsHero = () => {
//   return (
//     <section className="w-full bg-[#f0faff] py-10 md:py-14 overflow-hidden">
//       <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
//         {/* Left Content */}
//         <div className="flex-1 text-center lg:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#0F3E57] leading-snug mb-4">
//             Insights, Trends & Tech Knowledge
//           </h1>

//           <p className="text-lg md:text-xl font-semibold text-[#051223] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4">
//             Explore expert-written articles on cloud computing, DevOps,
//             cybersecurity, system administration, certifications, career
//             guidance, and the latest IT industry trends.
//           </p>

//           <div className="mt-4 bg-gradient-to-r from-[#E6F4FA] to-white border border-[#1C5D8F]/20 px-5 py-4 rounded-lg shadow-md">
//             <p className="text-base md:text-lg text-[#051f2c] font-semibold">
//               🚀 Our blog section is currently being updated with valuable
//               content. Stay tuned — new articles will be published shortly!
//             </p>
//           </div>
//         </div>

//         {/* Right Circular Image */}
//         <div className="flex-1 flex justify-center relative">
//           {/* Decorative Ring */}
//           <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border-[3px] border-[#1C5D8F]"></div>

//           {/* Decorative Dots */}
//           <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full top-4 left-8"></div>
//           <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full bottom-6 right-6"></div>

//           {/* Image */}
//           <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl relative z-10">
//             <img
//               src={blogImage}
//               alt="Blogs"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogsHero;

// import { motion } from "framer-motion";

// const BlogsHero = () => {
//   // Using a high-quality placeholder image since the local asset is not available
//   const blogImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

//   return (
//     <section className="w-full bg-pattern py-16 md:py-24 overflow-hidden relative">
//       {/* Overlay to make text more readable if pattern is too busy */}
//       <div className="absolute inset-0 bg-blue-900 pointer-events-none"></div>
      
//       <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex-1 text-center lg:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
//             Insights, Trends & <br />
//             <span className="text-orange-400">Tech Knowledge</span>
//           </h1>

//           <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
//             Explore expert-written articles on cloud computing, DevOps,
//             cybersecurity, system administration, certifications, career
//             guidance, and the latest IT industry trends.
//           </p>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-2xl shadow-2xl inline-block"
//           >
//             <p className="text-base md:text-lg text-white font-semibold flex items-center gap-3">
//               <span className="text-2xl">🚀</span>
//               Our blog section is currently being updated. Stay tuned!
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Right Circular Image */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex-1 flex justify-center relative"
//         >
//           {/* Decorative Ring */}
//           <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-[4px] border-orange-400 animate-pulse"></div>
//           <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-[1px] border-white/10"></div>

//           {/* Decorative Dots */}
//           <div className="absolute w-4 h-4 bg-orange-400 rounded-full top-0 left-10 shadow-lg shadow-orange-400"></div>
//           <div className="absolute w-3 h-3 bg-white rounded-full bottom-10 right-0"></div>
//           <div className="absolute w-2 h-2 bg-white/50 rounded-full top-20 right-10"></div>

//           {/* Image Container */}
//           <div className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden shadow-2xl border-4 border-white/20 relative z-10 group">
//             <img
//               src={blogImage}
//               alt="Blogs"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               referrerPolicy="no-referrer"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </motion.div>
//       </div>
      
//       {/* Bottom Wave or subtle transition */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
//     </section>
//   );
// };

// export default BlogsHero;
import { motion } from "framer-motion";
import blogImage from "../../../public/assets/videoportal.jpg";

const BlogsHero = () => {
  // Using a high-quality placeholder image since the local asset is not available
  //const blogImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

  return (
    <section className="w-full bg-brand-pattern py-12 md:py-14 overflow-hidden relative">
      {/* Overlay to make text more readable if pattern is too busy */}
      <div className="absolute inset-0 bg-brand-[#005494] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Insights, Trends & <br />
            <span className="text-[#F39221]">Tech Knowledge</span>
          </h1>

          <p className="text-lg md:text-2xl font-medium text-white leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Explore expert-written articles on cloud computing, DevOps,
            cybersecurity, system administration, certifications, career
            guidance, and the latest IT industry trends.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-2xl shadow-2xl inline-block"
          >
            <p className="text-base md:text-lg text-white font-bold flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Our blog section is currently being updated. Stay tuned!
            </p>
          </motion.div>
        </motion.div>

        {/* Right Circular Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center relative"
        >
          {/* Decorative Ring */}
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-[4px] border-brand-[#F39221] animate-pulse"></div>
          <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-[1px] border-white/10"></div>

          {/* Decorative Dots */}
          <div className="absolute w-4 h-4 bg-[#F39221] rounded-full top-0 left-10 shadow-lg shadow-brand-[#F39221]"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full bottom-10 right-0"></div>
          <div className="absolute w-2 h-2 bg-white/50 rounded-full top-20 right-10"></div>

          {/* Image Container */}
          <div className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden shadow-2xl border-4 border-white/20 relative z-10 group">
            <img
              src={blogImage}
              alt="Blogs"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f39221] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Wave or subtle transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default BlogsHero;
