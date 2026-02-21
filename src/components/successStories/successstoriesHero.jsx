import successstoryImg from "../../../public/assets/story_new.jpeg";

const SuccessStoriesHero = () => {
  return (
    <section className="w-full bg-[#f0faff] py-10 md:py-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1F2933] leading-snug mb-4">
            Inspiring Journeys. Real Success.
          </h1>

          <p className="text-base md:text-lg text-[#334155] leading-relaxed max-w-lg mx-auto lg:mx-0">
            Discover how our students transformed their careers with Neel
            Technologies — from beginners to industry-ready professionals.
          </p>
        </div>

        {/* Right Circular Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Decorative Ring */}
          <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border-3 border-[#1C5D8F]"></div>

          {/* Decorative Dots */}
          <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full top-4 left-8"></div>
          <div className="absolute w-3 h-3 bg-[#1C5D8F] rounded-full bottom-6 right-6"></div>

          {/* Image */}
          <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl relative z-10">
            <img
              src={successstoryImg}
              alt="Success Stories"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesHero;
