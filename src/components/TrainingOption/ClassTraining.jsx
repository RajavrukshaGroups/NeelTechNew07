import NeelClass1 from "../../../public/assets/neelClass1.png";
import NeelClass2 from "../../../public/assets/neelClass2.png";
import NeelClass3 from "../../../public/assets/neelClass3.png";
import NeelClass4 from "../../../public/assets/neelClass4.png";

import { Monitor, School, Laptop, MessageCircle } from "lucide-react";

const ClassRoomTraining = () => {
  const features = [
    { icon: School, text: "State Of Art Infrastructure" },
    { icon: Monitor, text: "High End Labs" },
    { icon: Laptop, text: "Online Learning Portal" },
    { icon: MessageCircle, text: "Trainer Support on WhatsApp" },
  ];

  return (
    <section className="w-full py-14 bg-gradient-to-br from-[#fff4e6] via-[#eef7ff] to-[#e0f2fe]">
      <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={NeelClass1}
            alt="Classroom 1"
            className="rounded-lg shadow-md object-cover h-[200px] w-full"
          />
          <img
            src={NeelClass2}
            alt="Classroom 2"
            className="rounded-lg shadow-md object-cover h-[200px] w-full"
          />
          <img
            src={NeelClass3}
            alt="Classroom 3"
            className="rounded-lg shadow-md object-cover h-[200px] w-full"
          />
          <img
            src={NeelClass4}
            alt="Classroom 4"
            className="rounded-lg shadow-md object-cover h-[200px] w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#0F3E57] leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowered Learning with{" "}
            <span className="text-orange-500">
              Top-Class Facilities & Guidance
            </span>
          </h2>

          <p
            className="mt-4 text-base text-gray-700 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Neel Technologies offers a supportive environment backed by modern
            infrastructure and expert instructors. With well-equipped classrooms
            and a team of passionate educators, we ensure that every learner
            receives the tools, guidance, and attention needed to grow both
            theoretically and practically.
          </p>

          {/* Feature Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Icon size={20} className="text-blue-600" />
                  </div>

                  <p className="text-sm font-medium text-[#0F3E57] leading-snug" style={{fontFamily:"Montserrat, sans-serif"}}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassRoomTraining;
