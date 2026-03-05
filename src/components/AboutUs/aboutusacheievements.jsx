const OurAchievements = () => {
  return (
    <div className="mt-20 mb-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57]">
          Our Achievements
        </h2> */}
        {/* <div className="w-24 h-1 mx-auto mt-4 bg-[#f28c28] rounded-full"></div> */}
      </div>

      {/* Intro Content */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-xl md:text-2xl leading-relaxed text-[#0F3E57] font-medium">
          <span className="font-bold text-[#f28c28]">Neel Technologies</span>{" "}
          has established itself as a trusted name in IT training in Bangalore.
          With a strong focus on{" "}
          <span className="font-bold text-[#f28c28]">
            practical, hands-on learning
          </span>
          , we have successfully trained{" "}
          <span className="font-bold text-[#f28c28]">200+ candidates</span> now
          working in top IT companies like Wipro, TCS, Infosys, Accenture, and
          Capgemini.
        </p>
      </div>

      {/* Achievement Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto" style={{ fontFamily: "ui-sans-serif" }}>
        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-[#1C5D8F] mb-4">200+</h3>
          <p className="text-lg text-[#000000] font-medium" style={{ fontFamily: "ui-sans-serif" }}>
            Professionals trained with successful career transitions.
          </p>
        </div>

        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-[#1C5D8F] mb-4">
            Leading MNC Placements
          </h3>
          <p className="text-lg text-[#04151e] font-medium">
            Alumni placed across India in reputed IT companies.
          </p>
        </div>

        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-[#1C5D8F] mb-4">
            High-End Infrastructure
          </h3>
          <p className="text-lg text-[#05161f] font-medium">
            Advanced lab facilities with real-time practical access.
          </p>
        </div>

        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-[#1C5D8F] mb-4">
            Industry Experts
          </h3>
          <p className="text-lg text-[#01070a] font-medium">
            Experienced trainers with hands-on project knowledge.
          </p>
        </div>

        <div className="bg-[#EAF2F7] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-[#1C5D8F] mb-4">
            Updated Curriculum
          </h3>
          <p className="text-lg text-[#041722] font-medium">
            Programs aligned with current industry requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
