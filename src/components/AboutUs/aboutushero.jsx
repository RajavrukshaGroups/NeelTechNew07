const AboutUsHero = () => {
  const theme = {
    primaryBlue: "#1C5D8F",
    darkBlueBg: "#0F3E57",
    lightBg: "#f0faff",
    white: "#FFFFFF",
    goldenAccent: "#F28C28",
  };

  return (
    <section
      className="w-full min-h-[85vh] flex items-center"
      style={{ backgroundColor: theme.lightBg }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Stronger Gold Accent Line */}
            <div
              className="absolute -left-6 top-4 h-20 w-1.5 rounded-full hidden lg:block"
              style={{ backgroundColor: theme.goldenAccent }}
            />

            {/* Heading */}
            <h1
              className="text-5xl sm:text-6xl font-extrabold mb-8 tracking-tight"
              style={{ color: theme.darkBlueBg }}
            >
              About Us
            </h1>

            {/* Paragraph 1 */}
            <p
              className="text-xl leading-relaxed mb-6 font-medium"
              style={{ color: theme.darkBlueBg }}
            >
              Founded in{" "}
              <span
                className="font-extrabold"
                style={{ color: theme.goldenAccent }}
              >
                2020
              </span>{" "}
              and headquartered in{" "}
              <span
                className="font-extrabold"
                style={{ color: theme.goldenAccent }}
              >
                Bangalore, India
              </span>
              , Neel Technologies delivers{" "}
              <span
                className="font-extrabold"
                style={{ color: theme.primaryBlue }}
              >
                high-quality, job-oriented training
              </span>
              .
            </p>

            {/* Paragraph 2 */}
            <p
              className="text-xl leading-relaxed mb-6 font-medium"
              style={{ color: theme.darkBlueBg }}
            >
              Backed by{" "}
              <span
                className="font-extrabold"
                style={{ color: theme.goldenAccent }}
              >
                20+ industry experts
              </span>
              , we provide{" "}
              <span
                className="font-extrabold"
                style={{ color: theme.primaryBlue }}
              >
                career-focused technical programs
              </span>{" "}
              designed for today’s competitive market.
            </p>

            {/* Paragraph 3 */}
            <p
              className="text-xl leading-relaxed font-medium"
              style={{ color: theme.darkBlueBg }}
            >
              Learn through flexible formats:
              <span
                className="font-extrabold"
                style={{ color: theme.primaryBlue }}
              >
                {" "}
                Live Online
              </span>
              ,
              <span
                className="font-extrabold"
                style={{ color: theme.primaryBlue }}
              >
                {" "}
                In-Person
              </span>
              , and
              <span
                className="font-extrabold"
                style={{ color: theme.primaryBlue }}
              >
                {" "}
                Corporate Workshops
              </span>
              .
            </p>
          </div>

          {/* RIGHT SIDE - YOUTUBE EMBED */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-black transition-transform duration-500 hover:scale-[1.02]">
              {/* Soft Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `0 20px 40px rgba(0,0,0,0.25)`,
                }}
              />

              <div className="relative w-full" style={{ paddingTop: "63%" }}>
                <iframe
                  src="https://www.youtube.com/embed/dZf8gh-oWsA"
                  title="Company Overview"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
