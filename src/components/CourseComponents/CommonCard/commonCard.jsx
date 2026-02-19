const CommonCard = ({
  items,
  variant = "primary", // "primary" | "feature"
  borderColor = "#1a8ad4",
}) => {
  const isFeature = variant === "feature";

  return (
    <div
      className={`
        rounded-2xl
        bg-white
        border
        shadow-[0_6px_18px_rgba(6,148,209,0.08)]
        ${isFeature ? "p-6" : "p-8"}
      `}
      style={{ borderColor }}
    >
      <div
        className={`${
          isFeature
            ? "grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10"
            : "space-y-7"
        }`}
        style={{
          fontFamily: "'Inter', 'Poppins', sans-serif",
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center gap-4">
              {/* PRIMARY CARD */}
              {!isFeature && (
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0b7fb8] flex items-center justify-center">
                  <Icon className="text-white" size={20} />
                </div>
              )}

              {/* FEATURE CARD */}
              {isFeature && (
                <div className="flex-shrink-0 w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-[#0b7fb8] flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
              )}

              <span
                className={`${
                  isFeature
                    ? "text-[15px] font-semibold leading-snug"
                    : "text-[18px] font-semibold"
                } text-[#0F3E57]`}
                style={{ fontFamily: "Montserrat" }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonCard;
