import React, { useState } from 'react';

const PricingDetails = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const originalPrice = 19999;
  const coursePrice = 9999;
  const savings = originalPrice - coursePrice;
  const savingsPercentage = Math.round((savings / originalPrice) * 100);

  // Format price with Indian rupee symbol
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleEnroll = () => {
    window.location.href = 'tel:+916361866299';
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold text-[#195A92] sm:text-2xl md:text-5xl tracking-tight">
            Master <span className="text-[#F78E22]">Cloud, DevOps & Security</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Get instant access to our premium individual course. Expert-led training with hands-on labs and certification.
          </p>
        </div>
                          {/* grid grid-cols-1 lg:grid-cols-3    */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 items-start">
          {/* Left Column: Main Pricing & Comparison */}
          <div className="lg:col-span-1 space-y-16">
            {/* 01: Full Feature Pricing Card */}
            <div>
              {/* <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-[#195A92] text-white p-1 rounded">01</span>
                Full Feature Pricing
              </h2> */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#195A92] to-[#0f3f64] px-6 py-4 text-center">
                  <h3 className="text-white font-bold text-lg md:text-xl flex items-center justify-center gap-2">
                    <span></span> LIMITED TIME OFFER <span></span>
                  </h3>
                </div>

                <div className="p-6 md:p-8">
                   
                <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm mb-2">Individual Course Access</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="text-3xl text-gray-400 line-through font-medium">{formatPrice(originalPrice)}</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-[#F78E22]">{formatPrice(coursePrice)}</span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold">
                    <span>💸</span> Save {formatPrice(savings)} ({savingsPercentage}% OFF)
                    </div>
                </div>
        
        
                <div className="border-t border-b border-gray-100 py-4 mb-5">
                    <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Original Course Price</span>
                    <span className="text-gray-500 line-through">{formatPrice(originalPrice)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Limited Time Discount</span>
                    <span className="text-[#F78E22] font-semibold">- {formatPrice(savings)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 pt-3 mt-1 border-t border-gray-100">
                    <span className="font-bold text-[#195A92]">Final Course Price</span>
                    <span className="text-2xl font-bold text-[#F78E22]">{formatPrice(coursePrice)}</span>
                    </div>
                </div>
                            

            
                    
                  <button
                    onClick={handleEnroll}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`w-full py-3.5 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                      isHovered ? 'scale-[1.02] shadow-lg' : 'shadow-md'
                    } bg-[#F78E22] text-gray-800 hover:bg-[#e07c1a] cursor-pointer`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>🎓</span> Enroll Now at {formatPrice(coursePrice)} <span>→</span>
                    </span>
                  </button>

                  <div className="mt-4 text-center">
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 text-center">
                        {/* <span>✅ 7-Day Money Back Guarantee</span> */}
                        <span>🛡️ Secure Payment</span>
                        <span>🎓 Certified Courses</span>
                        <span>📈 Career Growth Focused</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 02: Price Comparison Card */}
            {/* <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-[#195A92] text-white p-1 rounded">02</span>
                Price Comparison
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-gray-50 rounded-xl p-5 text-center border-2 border-gray-200">
                  <p className="text-gray-500 text-sm mb-2">Regular Price</p>
                  <p className="text-2xl text-gray-400 line-through font-semibold">{formatPrice(originalPrice)}</p>
                  <p className="text-xs text-gray-400 mt-2">per course separately</p>
                </div>
                <div className="bg-gradient-to-br from-[#195A92]/5 to-[#F78E22]/5 rounded-xl p-5 text-center border-2 border-[#F78E22] relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F78E22] text-white text-xs px-3 py-0.5 rounded-full">BEST VALUE</div>
                  <p className="text-[#195A92] font-semibold text-sm mb-2">Current Offer</p>
                  <p className="text-3xl font-extrabold text-[#F78E22]">{formatPrice(coursePrice)}</p>
                  <p className="text-xs text-green-600 font-medium mt-1">Save {formatPrice(savings)}</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column: Minimal & Summary */}
          {/* <div className="space-y-12"> */}
                  {/* <div className="mb-6">
                            <p className="text-2xl text-gray-800 mb-3 flex items-center gap-4">
                            <span className="text-[#F78E22]">●</span> What's included:
                            </p>
                            <ul className="space-y-2 text-lg">
                            <li className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#195A92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Access to <strong>Full Course Content</strong> (Video lectures, Labs & Quizzes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#195A92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Full access with regular updates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#195A92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Industry-recognized certificates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#195A92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>24/7 support & doubt resolution</span>
                            </li>
                            </ul>
                        </div> */}

            {/* 03: Minimal View */}
            {/* <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-[#195A92] text-white p-1 rounded">03</span>
                Minimal View
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="text-center mb-4">
                  <span className="text-xs bg-[#F78E22]/10 text-[#F78E22] px-3 py-1 rounded-full font-semibold">LIMITED TIME</span>
                  <div className="mt-3">
                    <span className="text-gray-400 line-through text-lg">{formatPrice(originalPrice)}</span>
                    <span className="text-3xl font-extrabold text-[#F78E22] ml-2">{formatPrice(coursePrice)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Single Course • Instant Access</p>
                </div>
                <button onClick={handleEnroll} className="w-full bg-[#F78E22] text-gray-800 font-bold py-2.5 rounded-lg hover:bg-[#e07c1a] transition-colors cursor-pointer">
                  Enroll Now – Save {formatPrice(savings)}
                </button>
                <div className="flex justify-center gap-3 mt-3 text-xs text-gray-500">
                  <span>✅ Instant access</span>
                  <span>🛡️ Secure payment</span>
                </div>
              </div>
            </div> */}

            {/* 04: Order Summary */}
            {/* <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-[#195A92] text-white p-1 rounded">04</span>
                Order Summary
              </h2>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-[#195A92] mb-3 text-sm">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Individual Course</span>
                    <span className="font-medium">{formatPrice(coursePrice)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>- {formatPrice(savings)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-[#F78E22] text-lg">{formatPrice(coursePrice)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 text-center pt-2">Inclusive of all taxes</p>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="space-y-6">

  {/* TITLE */}
  <div>
    <p className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
      {/* <span className="text-[#F78E22] text-3xl">●</span> */}
      What's Included in This Course
    </p>
    <p className="text-gray-600 mt-2  text-medium">
      Everything you need to master skills & get job-ready
    </p>
  </div>

  {/* MAIN FEATURES */}
  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4">

    {/* LEARNING */}
    <div>
      <h3 className="text-lg font-semibold text-[#195A92] mb-3"> Learning Content</h3>
      <ul className="space-y-3 text-base">
        {[
          "Full Course Access (HD Video Lectures, Labs & Quizzes)",
          "Real-time Projects & Case Studies",
        //   "Assignments with Solutions",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* ACCESS */}
    {/* <div>
      <h3 className="text-lg font-semibold text-[#195A92] mb-3">🔓 Access & Updates</h3>
      <ul className="space-y-3 text-base">
        {[
          "Free Course Updates (No extra cost)",
          "Mobile, Tablet & Desktop Access",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div> */}

    {/* SUPPORT */}
    <div>
      <h3 className="text-lg font-semibold text-[#195A92] mb-3"> Support & Guidance</h3>
      <ul className="space-y-3 text-base">
        {[
          "24/7 Doubt Support & Mentorship",
          "Live Q&A Sessions with Experts",
         // "Dedicated Student Community",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* CAREER */}
    <div>
      <h3 className="text-lg font-semibold text-[#195A92] mb-3"> Career Benefits</h3>
      <ul className="space-y-3 text-base">
        {[
          "Industry-Recognized Certificate",
          "Resume Building & Interview Preparation",
          "Job Assistance & Placement Support",
          
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>

  {/* BONUS SECTION */}
  {/* <div className="bg-gradient-to-r from-[#195A92] to-[#0f3f64] text-white rounded-2xl p-6 shadow-md">
    <h3 className="text-lg font-semibold mb-3">🎁 Exclusive Bonuses</h3>
    <ul className="space-y-2 text-sm">
      <li>🔥 Free DevOps & Cloud Interview Questions Pack</li>
      <li>🔥 Resume Templates & Career Guide</li>
      <li>🔥 Access to Private Job Updates Group</li>
    </ul>
  </div> */}

  {/* TRUST SECTION */}
  {/* <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 text-center">
    <span>✅ 7-Day Money Back Guarantee</span>
    <span>🛡️ Secure Payment</span>
    <span>🎓 Certified Courses</span>
    <span>📈 Career Growth Focused</span>
  </div> */}

</div>
        </div>

        
      </div>
    </div>
  );
};

export default PricingDetails;
