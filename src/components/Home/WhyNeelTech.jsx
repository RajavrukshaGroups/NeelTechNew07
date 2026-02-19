import AdvancedTrainingLms from "./AdvancedTrainingLMS";

const stats = [
  { value: "22+", label: "Sessions" },
  { value: "4+", label: "Years of Training" },
  { value: "3000+", label: "Candidates Trained" },
  { value: "155+", label: "Working in Top MNCs" },
  { value: "4.5", label: "Google Rating" },
  { value: "4.6", label: "Facebook Rating" },
];

const WhyNeelTech = () => {
  return (
    <>
      <section className="w-full py-14 md:py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          
          {/* Title */}
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0F3E57",
              }}
            >
              Why Neel Technologies
            </h2>
          </div>

          {/* Stats Container */}
          <div className="bg-[#d9e9f4] rounded-3xl shadow-md px-4 md:px-6 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 text-center">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  
                  {/* Value */}
                  <h3
                    className="text-2xl md:text-3xl font-bold text-blue-700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.value}
                  </h3>

                  {/* Label */}
                  <p
                    className="mt-1 text-gray-800 text-xs md:text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LMS Section */}
        <div className="mt-12">
          <AdvancedTrainingLms />
        </div>
      </section>
    </>
  );
};

export default WhyNeelTech;
