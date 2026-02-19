import {
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const CommonBatchSchedule = ({
  title,
  selfPacedFeatures = [],
  onlineFeatures = [],
  batchDetails = [],
  corporateDetails = [],
}) => {
  const theme = {
    primary: "#0F3E57",
    accent: "#1E90FF",
  };

  return (
    <section
      id="batch"
      className="w-full py-28"
      style={{
        background: "linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%)",
      }}
    >
      <div className="max-w-[1250px] mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span style={{ color: theme.primary }}>{title}</span>{" "}
            {/* <span style={{ color: theme.accent }}></span> */}
            <span className="text-orange-500">Batch Schedule</span>
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            Choose the learning format that suits your schedule and career
            growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-16">
            {/* SELF PACED */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold mb-8">Self Paced Training</h3>

              <div className="grid md:grid-cols-2 gap-6 text-xl">
                {selfPacedFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle size={24} color={theme.accent} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ONLINE CLASS */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                Online Class
                <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-xl mb-10">
                {onlineFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle size={24} color={theme.accent} />
                    {item}
                  </div>
                ))}
              </div>

              {/* UPCOMING BATCHES */}
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Calendar size={26} color={theme.accent} />
                Upcoming Batches
              </h4>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-4 bg-gray-50 p-6 font-semibold text-lg border-b">
                  <div>Start Date</div>
                  <div>Schedule</div>
                  <div>Time</div>
                  <div>Seats</div>
                </div>

                {batchDetails.map((batch, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 p-6 border-b last:border-0 text-lg"
                  >
                    <div className="font-semibold">{batch.date}</div>
                    <div>{batch.schedule}</div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      {batch.time}
                    </div>
                    <div
                      className={`font-semibold ${
                        batch.seats < 10 ? "text-orange-500" : "text-green-600"
                      }`}
                    >
                      {batch.seats} seats left
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-24 h-fit space-y-10">
            {/* OFFER CARD */}
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-3xl py-8 text-center mb-8">
                <div className="text-6xl font-extrabold">10% OFF</div>
                <p className="text-lg">Limited Time Offer</p>
              </div>

              <button
                className="w-full py-4 rounded-2xl text-white text-xl font-semibold"
                style={{ backgroundColor: theme.accent }}
              >
                Book a Free Demo
              </button>
            </div>

            {/* CORPORATE TRAINING */}
            <div className="bg-emerald-700 rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users size={28} />
                Corporate Training
              </h3>

              <div className="space-y-4 text-lg mb-6">
                {corporateDetails.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Award size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-xl bg-white text-emerald-700 font-semibold">
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBatchSchedule;
