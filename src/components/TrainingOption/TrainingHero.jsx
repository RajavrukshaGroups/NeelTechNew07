import onlineTraining from "../../../public/assets/onlinetraining2.jpg";

const TrainingHero = () => {
  return (
    <section className="w-full bg-[#f0faff] py-14 md:py-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 items-center gap-8">
        {/* LEFT CONTENT */}
        <div>
          <h1
            className="text-3xl md:text-5xl font-semibold leading-snug text-[#2b2f33]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Master In-Demand Skills. <br />
            Live Online. Anywhere.
          </h1>

          <p
            className="mt-4 text-base md:text-lg text-[#091321] max-w-[480px] leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Learn from expert instructors with our 5,000+ course catalogue.
            Upskill conveniently from the comfort of your own space.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[240px] h-[240px] md:w-[330px] md:h-[330px] rounded-full border-4 border-blue-400 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-blue-300 opacity-60"></div>

            <img
              src={onlineTraining}
              alt="Online Training"
              className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
