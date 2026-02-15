import story from "../../../public/assets/overview.jpeg";

const AboutUsOverview = () => {
  return (
    <div className="mt-16 space-y-20">
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT IMAGE CARD */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#EAF2F7] rounded-3xl p-6 shadow-md">
            <img
              src={story}
              alt="Overview"
              className="w-full h-[350px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#EAF2F7] rounded-3xl p-8 md:p-10 shadow-md">
            <p className="text-lg md:text-xl leading-relaxed text-[#0F3E57] font-medium mb-6">
              <span className="font-bold text-[#f28c28]">
                Neel Technologies
              </span>{" "}
              has established itself as a trusted name in IT training in
              Bangalore. With a strong focus on
              <span className="font-bold text-[#f28c28]">
                {" "}
                practical, hands-on learning
              </span>
              , we have successfully trained over
              <span className="font-bold text-[#f28c28]">
                {" "}
                200+ candidates
              </span>{" "}
              who are now working with top IT companies like Wipro, TCS,
              Infosys, Accenture, and Capgemini.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-[#0F3E57] font-medium">
              Our commitment to quality training and real-time project exposure
              has made us a preferred choice for IT aspirants.
            </p>
          </div>
        </div>
      </div>

      {/* ===== HIGHLIGHTS SECTION ===== */}
      <div className="bg-[#EAF2F7] rounded-3xl py-12 px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#1C5D8F]">200+</h3>
            <p className="mt-2 text-lg text-[#0F3E57]">Professionals Trained</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#1C5D8F]">Top MNCs</h3>
            <p className="mt-2 text-lg text-[#0F3E57]">Alumni Placement</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#1C5D8F]">100%</h3>
            <p className="mt-2 text-lg text-[#0F3E57]">Practical Lab Access</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#1C5D8F]">Expert</h3>
            <p className="mt-2 text-lg text-[#0F3E57]">Industry Trainers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#1C5D8F]">Updated</h3>
            <p className="mt-2 text-lg text-[#0F3E57]">Industry Curriculum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsOverview;
