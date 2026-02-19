const OurMission = () => {
  return (
    <div className="px-6">
      {/* Heading Section */}
      {/* <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57]">
          Our Mission
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 bg-[#f28c28] rounded-full"></div>
      </div> */}

      {/* Main Mission Statement */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-xl md:text-2xl leading-relaxed text-[#0F3E57] font-medium">
          To become a{" "}
          <span className="font-bold text-[#f28c28]">
            globally trusted leader
          </span>{" "}
          in technical education by delivering{" "}
          <span className="font-bold text-[#f28c28]">
            innovative, flexible, and industry-relevant training
          </span>{" "}
          that empowers professionals and organizations to thrive in a rapidly
          evolving digital world.
        </p>
      </div>

      {/* Mission Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#1C5D8F] mb-4">
            Excellence in Education
          </h3>
          <p className="text-lg text-[#0F3E57] leading-relaxed">
            We are committed to delivering{" "}
            <span className="font-semibold text-[#f28c28]">
              high-quality, industry-relevant training
            </span>{" "}
            that drives real-world success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#1C5D8F] mb-4">
            Flexibility & Accessibility
          </h3>
          <p className="text-lg text-[#0F3E57] leading-relaxed">
            Learning should be available to{" "}
            <span className="font-semibold text-[#f28c28]">
              everyone, anytime and anywhere
            </span>
            . We offer diverse formats tailored to every learner’s needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#1C5D8F] mb-4">
            Expertise & Experience
          </h3>
          <p className="text-lg text-[#0F3E57] leading-relaxed">
            Backed by{" "}
            <span className="font-semibold text-[#f28c28]">
              20+ seasoned professionals
            </span>
            , we bring deep industry knowledge to every course we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
