import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ✨ Custom Easing Scroll Function
  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 900; // total animation time in ms
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div
      className={`fixed right-6 bottom-5 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 px-6 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
        style={{
          backgroundColor: "#E5E7EB",
          fontFamily: "'Montserrat', 'Inter', sans-serif",
          fontWeight: 600,
          color: "#111827",
        }}
      >
        <ArrowUp size={20} strokeWidth={2.5} />
        <span className="text-base">Back To Top</span>
      </button>
    </div>
  );
};

export default BackToTop;
