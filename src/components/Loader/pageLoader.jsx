import { useEffect, useState } from "react";
import logo from "../../../public/assets/head-logo.png";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400); // small delay before hiding
          return 100;
        }
        return prev + 2; // speed of progress
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="rounded-full p-4 shadow-lg">
          <img
            src={logo}
            alt="Neel Technologies"
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-[#0F3E57] text-sm font-semibold tracking-wider">
          Loading... {progress}%
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0F3E57] to-[#f28c28] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
