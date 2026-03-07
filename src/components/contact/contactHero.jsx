// import { Headphones, MessageCircleQuestion, BookOpen } from "lucide-react";
 import contactUsImage from "../../../public/assets/onlinetraining3.jpg";

// const ContactHero = () => {
//   return (
//     <div className="w-full bg-[#0694d140]">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8">
//         {/* LEFT SECTION */}
//         <div className="flex-1">
//           <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
//             Contact Us
//           </h1>

//           <div className="space-y-6">
//             {/* Customer Support */}
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
//                 <Headphones size={28} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
//                   Customer Support
//                 </h3>
//                 <p className="text-lg md:text-lg font-semibold text-gray-1000">
//                   info@neeltechnologies.net
//                 </p>
//               </div>
//             </div>

//             {/* Ask HR */}
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
//                 <MessageCircleQuestion size={28} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
//                   Ask HR
//                 </h3>
//                 <p className="text-lg md:text-lg font-semibold text-gray-1000">
//                   info@neeltechnologies.net
//                 </p>
//               </div>
//             </div>

//             {/* After Course Support */}
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
//                 <BookOpen size={28} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
//                   After Course Support Desk
//                 </h3>
//                 <p className="text-lg md:text-lg font-semibold text-gray-1000">
//                   info@neeltechnologies.net
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex-1 flex justify-center">
//           <div className="w-[280px] h-[280px] rounded-full border-2 border-blue-500 overflow-hidden">
//             <img
//               src={contactUsImage}
//               alt="Contact Us"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactHero;


import { Headphones, MessageCircleQuestion, BookOpen, Send, Mail, Phone, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <div className="w-full bg-white relative overflow-hidden border-b border-slate-100">
      {/* Geometric Pattern Overlay - Mimicking the user's requested banner */}
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230694d1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-6 md:py-8 relative z-10">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0694d115] text-[#0694d1] text-xl font-bold border border-[#0694d120]">
            <Headphones size={16} />
            <span>24/7 Support Available</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
            How can we <span className="text-[#0694d1]">help you?</span>
          </h1>
          <p className="text-xl font-bold text-slate-800 max-w-lg leading-relaxed">
            Have questions about our training programs or need technical assistance? 
            Our team is here to provide the support you need to succeed.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 flex-1 min-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-[#0694d115] flex items-center justify-center text-[#0694d1]">
                <MessageCircleQuestion size={25} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">FAQs</p>
                <p className="text-xl font-bold text-blue-800">Quick answers</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 flex-1 min-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <BookOpen size={25} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Docs</p>
                <p className="text-xl font-bold text-blue-800">Guides & tutorials</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute -inset-4 bg-[#0694d110] rounded-full blur-3xl -z-10"></div>
          <div className="w-[220px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-8 border-white shadow-2xl overflow-hidden relative group">
            <img
              src={contactUsImage}
              alt="Customer Support Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0694d130] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero