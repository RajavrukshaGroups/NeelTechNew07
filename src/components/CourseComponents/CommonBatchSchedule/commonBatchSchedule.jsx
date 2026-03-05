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
                  <div key={i} className="flex items-center text-gray-900 font-medium gap-4">
                    <CheckCircle size={24} color={theme.accent} />
                    {item}
                  </div>
                ))}
              </div>

              {/* UPCOMING BATCHES */}
              {/* <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
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
                    className="grid grid-cols-4 p-6 border-b text-gray-900 font-medium last:border-0 text-lg"
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
              </div> */}

              <h4 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-3 tracking-wide">
  <Calendar size={30} color={theme.accent} />
  Upcoming Batches
</h4>

<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">

  {/* Desktop Header */}
  <div className="hidden md:grid grid-cols-4 bg-gray-100 p-6 border-b text-xl font-black text-gray-900">
    <div>Start Date</div>
    <div>Schedule</div>
    <div>Time</div>
    <div>Seats</div>
  </div>

  {batchDetails.map((batch, index) => (
    <div key={index} className="border-b last:border-0">

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-4 p-6 text-xl items-center">

        <div className="font-black text-blue-800 text-2xl">
          {batch.date}
        </div>

        <div className="font-black">
          {batch.schedule}
        </div>

        <div className="flex items-center gap-2 font-black">
          <Clock size={22} />
          {batch.time}
        </div>

        <div
          className={`font-black text-xl ${
            batch.seats < 10 ? "text-red-700" : "text-green-700"
          }`}
        >
          {batch.seats} Seats Left
        </div>

      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-5 space-y-4 text-lg">

        <div className="flex justify-between">
          <span className="font-black">Start Date</span>
          <span className="font-black text-blue-800 text-xl">
            {batch.date}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-black">Schedule</span>
          <span className="font-black">
            {batch.schedule}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-black">Time</span>
          <span className="flex items-center ml-6 gap-2 font-black">
            <Clock size={20} />
            {batch.time}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-black">Seats</span>
          <span
            className={`font-black ${
              batch.seats < 10 ? "text-red-700" : "text-green-700"
            }`}
          >
            {batch.seats} Seats Left
          </span>
        </div>

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
                onClick={() => window.open("https://wa.me/916361866299", "_blank")}
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

              <button className="w-full py-3 rounded-xl bg-white text-emerald-700 font-semibold" 
               onClick={() => window.open("https://wa.me/916361866299", "_blank")}>
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
