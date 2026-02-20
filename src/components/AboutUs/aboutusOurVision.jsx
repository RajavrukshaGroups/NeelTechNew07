const OurVision = () => {
  return (
    <div className="relative mb-12">
      {/* Background Soft Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EAF2F7] to-white rounded-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Title */}
        {/* <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57] mb-6">
          Our Vision
        </h2> */}

        {/* Main Statement */}
        <p className="text-xl md:text-2xl leading-relaxed text-[#0F3E57] font-medium mb-8">
          To be a{" "}
          <span className="font-bold text-[#f28c28]">
            trusted and respected leader
          </span>{" "}
          in the IT education industry, producing{" "}
          <span className="font-bold text-[#f28c28]">
            competent and industry-ready professionals
          </span>{" "}
          who thrive in the ever-evolving world of technology.
        </p>

        {/* Supporting Statement */}
        <p className="text-lg md:text-xl leading-relaxed text-[#1C5D8F]">
          We aim to empower our students with{" "}
          <span className="font-semibold text-[#f28c28]">
            knowledge, confidence, and real-world expertise
          </span>{" "}
          to excel in their careers and actively contribute to the{" "}
          <span className="font-semibold text-[#f28c28]">
            digital revolution
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default OurVision;
