import { Headphones, MessageCircleQuestion, BookOpen } from "lucide-react";
import contactUsImage from "../../../public/assets/onlinetraining3.jpg";

const ContactHero = () => {
  return (
    <div className="w-full bg-[#0694d140]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h1>

          <div className="space-y-6">
            {/* Customer Support */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                <Headphones size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                  Customer Support
                </h3>
                <p className="text-base md:text-lg text-gray-700">
                  info@neeltechnologies.com
                </p>
              </div>
            </div>

            {/* Ask HR */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                <MessageCircleQuestion size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                  Ask HR
                </h3>
                <p className="text-base md:text-lg text-gray-700">
                  info@neeltechnologies.com
                </p>
              </div>
            </div>

            {/* After Course Support */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                <BookOpen size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                  After Course Support Desk
                </h3>
                <p className="text-base md:text-lg text-gray-700">
                  info@neeltechnologies.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex justify-center">
          <div className="w-[280px] h-[280px] rounded-full border-2 border-blue-500 overflow-hidden">
            <img
              src={contactUsImage}
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
