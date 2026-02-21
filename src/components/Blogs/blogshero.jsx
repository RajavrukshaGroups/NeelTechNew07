import blogImage from "../../../public/assets/videoportal.jpg";

const BlogsHero = () => {
  return (
    <section className="w-full bg-[#f0faff] py-10 md:py-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F3E57] leading-snug mb-4">
            Insights, Trends & Tech Knowledge
          </h1>

          <p className="text-base md:text-lg text-[#334155] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4">
            Explore expert-written articles on cloud computing, DevOps,
            cybersecurity, system administration, certifications, career
            guidance, and the latest IT industry trends.
          </p>

          <div className="mt-4 bg-gradient-to-r from-[#E6F4FA] to-white border border-[#1C5D8F]/20 px-5 py-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-[#0F3E57] font-semibold">
              🚀 Our blog section is currently being updated with valuable
              content. Stay tuned — new articles will be published shortly!
            </p>
          </div>
        </div>

        {/* Right Circular Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Decorative Ring */}
          <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border-[3px] border-[#1C5D8F]"></div>

          {/* Decorative Dots */}
          <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full top-4 left-8"></div>
          <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full bottom-6 right-6"></div>

          {/* Image */}
          <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl relative z-10">
            <img
              src={blogImage}
              alt="Blogs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
