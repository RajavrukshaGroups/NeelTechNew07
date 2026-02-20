import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500); // Small delay after reaching 100%
          return 100;
        }
        return prev + 1; // Increment by 1 for smooth progress
      });
    }, 20); // 20ms * 100 = 2 seconds to reach 100%

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0F3E57] via-[#1C5D8F] to-[#0694d1]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/5 rounded-full -bottom-48 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        {/* Logo Container with Glow Effect */}
        <div className="relative mb-12 group">
          {/* Glow rings */}
          <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0694d1] to-[#f28c28] rounded-full opacity-75 blur-2xl animate-pulse"></div>

          {/* Logo */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
            <div className="text-center">
              <h1
                className="text-7xl md:text-8xl font-black tracking-tight text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                NEEL
              </h1>
              <p
                className="text-xl md:text-2xl tracking-[0.3em] text-white/90 mt-2 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                TECHNOLOGIES
              </p>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mb-6">
          <p className="text-white/80 text-lg font-light tracking-wide">
            Preparing your learning experience
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/20 rounded-full h-4 mb-4 overflow-hidden backdrop-blur-sm border border-white/30">
          <div
            className="h-full rounded-full transition-all duration-200 ease-out relative"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #f28c28, #0694d1, #f28c28)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="flex items-center justify-between w-full">
          <span className="text-white/60 text-sm">Loading...</span>
          <span className="text-white font-bold text-2xl">{progress}%</span>
          <span className="text-white/60 text-sm">NEEL TECH</span>
        </div>

        {/* Decorative Dots */}
        <div className="flex gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
              style={{ animationDelay: `${dot * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="absolute bottom-6 text-white/40 text-sm">
        © 2026 Neel Technologies. All rights reserved.
      </p>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
