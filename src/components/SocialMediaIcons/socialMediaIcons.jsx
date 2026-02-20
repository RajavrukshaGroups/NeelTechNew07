import { useState } from "react";
import {
  Youtube,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const SocialMediaIcons = () => {
  const [isVisible, setIsVisible] = useState(true);

  const links = [
    {
      icon: <Youtube size={20} />,
      url: "http://www.youtube.com/@NeelTechnologies",
      bg: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: <Facebook size={20} />,
      url: "https://facebook.com/neeltechno",
      bg: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/neel-technologies-1225a2239",
      bg: "bg-[#0A66C2] hover:bg-[#004182]",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://instagram.com/neeltechnologies",
      bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
    {
      icon: <MessageCircle size={20} />,
      url: "https://wa.me/916361866299",
      bg: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:info@neeltechnologies.net",
      bg: "bg-gray-700 hover:bg-gray-800",
    },
  ];

  return (
    <div className="fixed right-0 top-[20%] z-50">
      <div className="flex flex-col items-end">
        {/* Social Icons */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          }`}
        >
          {links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center text-white shadow-lg ${item.bg}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Toggle Arrow */}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-12 h-12 flex items-center justify-center bg-[#0F3E57] text-white shadow-xl hover:bg-[#1C5D8F] transition-all duration-300"
        >
          {isVisible ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
        </button>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
