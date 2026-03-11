// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
// import NeelLogo from "../../../public/assets/head-logo.png";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import LeadPopup from "../LeadPopup/LeadPopup";

// const Footer = () => {
//   const navigate = useNavigate();

// const [showPopup, setShowPopup] = useState(false);
// const [pendingRoute, setPendingRoute] = useState("");


//   // Social media links
//   const socialLinks = [
//     {
//       icon: Youtube,
//       href: "http://www.youtube.com/@NeelTechnologies",
//       label: "YouTube",
//     },
//     {
//       icon: Facebook,
//       href: "https://facebook.com/neeltechno",
//       label: "Facebook",
//     },
//     {
//       icon: Instagram,
//       href: "https://instagram.com/neeltechnologies",
//       label: "Instagram",
//     },
//     {
//       icon: Linkedin,
//       href: "https://linkedin.com/in/neel-technologies-1225a2239",
//       label: "LinkedIn",
//     },
//   ];

//   // Course links based on your routes
//   const courseLinks = [
//     { name: "AWS Cloud", path: "/aws-training-certification-course" },
//     {
//       name: "Azure Cloud",
//       path: "/microsoft-azure-training-certification-course",
//     },
//     { name: "MCSE", path: "/mcse-training-certification-course" },
//     { name: "Linux", path: "/linux-training-certification-course" },
//     {
//       name: "Windows Powershell",
//       path: "/powershell-training-certification-course",
//     },
//     { name: "Python", path: "/python-training-certification-course" },
//     {
//       name: "Google Cloud GCP",
//       path: "/google-cloud-gcp-training-certification-course",
//     },
//     { name: "AWS-Devops", path: "/aws-devops-training-certification-course" },
//     {
//       name: "AZURE-Devops",
//       path: "/azure-devops-training-certification-course",
//     },
//     {
//       name: "Ethical Hacking",
//       path: "/cyber-security-training-certification-course",
//     },
//     {
//       name: "Azure Sentinel",
//       path: "/azure-sentinel-training-certification-course",
//     },
//     { name: "CCNA", path: "/ccna-training-certification-course" },
//     { name: "Intune & O365", path: "/intune-training-certification-course" },
//     {
//       name: "Entra ID",
//       path: "/microsoft-entra-id-training-certification-course",
//     },
//   ];

//   // Quick links
//   const quickLinks = [
//     { name: "Our Services", path: "/services" },
//     { name: "Training", path: "/our-services" },
//     { name: "Batch Schedule", path: "/batch-schedule" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Success Stories", path: "/success-stories" },
//     { name: "Blog", path: "/blogs" },
//     { name: "Contact Us", path: "/contact-us" },
//     { name: "Placement", path: "/success-stories" }, // Placement also goes to success stories
//     { name: "Student Review", path: "/about-us/testimonials" },
//   ];


//  const handleCourseClick = (path) => {
//   // Always show the popup first
//   setPendingRoute(path);
//   setShowPopup(true);
// };

// const handleContinue = () => {
//   // Only now allow navigation after form submission
//   localStorage.setItem("leadSubmitted", "true"); // Optional, for future reference
//   setShowPopup(false);
//   if (pendingRoute) navigate(pendingRoute);
// };

//   return (
//     <footer className="w-full bg-[#0F3E57] text-white pt-16 pb-10">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12">
//         {/* ================= TOP NEWSLETTER SECTION ================= */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-blue-800">
//           <div className="w-full md:w-auto">
//             <h3 className="text-3xl font-semibold mb-4">
//               Subscribe to our Newsletter
//             </h3>

//             <div className="flex w-full max-w-xl">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-5 py-4 rounded-l-md text-lg text-black outline-none"
//               />
//               <button className="bg-[#F28C28] hover:bg-orange-600 px-8 py-4 text-lg rounded-r-md font-semibold transition">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Social Icons with Links */}
//           <div className="flex gap-5">
//             {socialLinks.map((social, index) => {
//               const Icon = social.icon;
//               return (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:bg-[#F28C28] transition cursor-pointer group"
//                   aria-label={social.label}
//                 >
//                   <Icon
//                     size={22}
//                     className="group-hover:scale-110 transition-transform"
//                   />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* ================= MAIN FOOTER CONTENT ================= */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-14">
//           {/* About Section */}
//           <div>
//             <Link to="/">
//               <img
//                 src={NeelLogo}
//                 alt="Neel Technologies"
//                 className="h-28 mb-6"
//               />
//             </Link>

//             <p className="text-lg font-medium leading-relaxed text-gray-100 "
            
//               style={{ fontFamily: "'Poppins', sans-serif" }}>
//               Highly experienced trainers committed to student success.
//             </p>
//           </div>

//           {/* Courses */}
//           <div>
//             <h4 className="text-3xl font-semibold mb-5 text-[#F28C28]">
//               Courses
//             </h4>
//             <ul className="space-y-3 text-gray-100 text-base font-normal">
//               {courseLinks.map((course, index) => (
//                 <li key={index}>
//                   <button
//                     onClick={() => handleCourseClick(course.path)}
//                     className="hover:text-[#F28C28] transition-colors text-left"
//                   >
//                     {course.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-3xl font-semibold mb-5 text-[#F28C28]">
//               Quick Links
//             </h4>
//             <ul className="space-y-3 text-gray-100 text-base font-normal">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     to={link.path}
//                     className="hover:text-[#F28C28] transition-colors"
//                     style={{ fontFamily: "'Poppins', sans-serif"}}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h4 className="text-3xl font-semibold mb-5 text-[#F28C28]">
//               Contact Us
//             </h4>

//             <div className="space-y-5 text-lg text-gray-300">
//               <div className="flex items-start gap-4">
//                 <MapPin
//                   size={20}
//                   className="mt-1 text-[#F28C28] flex-shrink-0 "
//                 />
//                 <span className=" text-sm" style={{ fontFamily: "'Poppins', sans-serif"}}>Doddabele Kengeri, Bangalore - 560040</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Phone size={20} className="text-[#F28C28] flex-shrink-0" />
//                 <a
//                   href="tel:+916361866299"
//                   className="hover:text-[#F28C28] transition-colors text-sm"
//                   style={{ fontFamily: "'Poppins', sans-serif"}}
//                 >
//                   +91 6361866299
//                 </a>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Mail size={20} className="text-[#F28C28] flex-shrink-0" />
//                 <a
//                   href="mailto:info@neeltechnologies.net"
//                   className="hover:text-[#F28C28] transition-colors break-all text-sm"
//                   style={{fontFamily: "'Poppins', sans-serif"}}
//                 >
//                   info@neeltechnologies.net
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= BOTTOM COPYRIGHT ================= */}
//         <div className="border-t border-blue-800 pt-8 text-center text-lg text-gray-300">
//           © 2026 All Rights Reserved by{" "}
//           <Link to="/" className="text-[#F28C28] font-semibold hover:underline">
//             Neel Technologies
//           </Link>
//         </div>
//       </div>
//      <LeadPopup
//   open={showPopup}
//   setOpen={(value) => {
//     setShowPopup(value);
//     // Remove automatic navigation here!
//     // Navigation happens only on handleContinue
//   }}
//   onContinue={handleContinue}
// />
//     </footer>
//   );
// };

// export default Footer;


import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import NeelLogo from "../../../public/assets/head-logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeadPopup from "../LeadPopup/LeadPopup";

const Footer = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [pendingRoute, setPendingRoute] = useState("");

  const socialLinks = [
    { icon: Youtube, href: "http://www.youtube.com/@NeelTechnologies", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/neeltechno", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/neeltechnologies", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/neel-technologies-1225a2239", label: "LinkedIn" },
  ];

  const courseLinks = [
    { name: "AWS Cloud", path: "/aws-training-certification-course" },
    { name: "Azure Cloud", path: "/microsoft-azure-training-certification-course" },
    { name: "MCSE", path: "/mcse-training-certification-course" },
    { name: "Linux", path: "/linux-training-certification-course" },
    { name: "Windows Powershell", path: "/powershell-training-certification-course" },
    { name: "Python", path: "/python-training-certification-course" },
    { name: "Google Cloud GCP", path: "/google-cloud-gcp-training-certification-course" },
    { name: "AWS-Devops", path: "/aws-devops-training-certification-course" },
    { name: "AZURE-Devops", path: "/azure-devops-training-certification-course" },
    { name: "Ethical Hacking", path: "/cyber-security-training-certification-course" },
    { name: "Azure Sentinel", path: "/azure-sentinel-training-certification-course" },
    { name: "CCNA", path: "/ccna-training-certification-course" },
    { name: "Intune & O365", path: "/intune-training-certification-course" },
    { name: "Entra ID", path: "/microsoft-entra-id-training-certification-course" },
  ];

  const quickLinks = [
    { name: "Our Services", path: "/services" },
    { name: "Training", path: "/our-services" },
    { name: "Batch Schedule", path: "/batch-schedule" },
    { name: "About Us", path: "/about-us" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Placement", path: "/success-stories" },
    { name: "Student Review", path: "/about-us/testimonials" },
  ];

 const handleCourseClick = (path) => {

  const leadSubmitted = localStorage.getItem("leadSubmitted");

  // If form already submitted → go directly
  if (leadSubmitted === "true") {
    navigate(path);
    return;
  }

  // Otherwise show popup
  setPendingRoute(path);
  setShowPopup(true);
};

const handleSuccess = () => {
  setShowPopup(false);

  if (pendingRoute) {
    navigate(pendingRoute);
  }
};

  return (
    <footer className="w-full bg-[#0F3E57] text-white pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Newsletter + Social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-blue-800">
          <div className="w-full md:w-auto">
            <h3 className="text-3xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <div className="flex w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-l-md text-lg text-black outline-none"
              />
              <button className="bg-[#F28C28] hover:bg-orange-600 px-8 py-4 text-lg rounded-r-md font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:bg-[#F28C28] transition cursor-pointer group"
                  aria-label={social.label}
                >
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-14">
          <div>
            <Link to="/"><img src={NeelLogo} alt="Neel Technologies" className="h-28 mb-6" /></Link>
            <p className="text-lg font-medium leading-relaxed text-gray-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Highly experienced trainers committed to student success.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-semibold mb-5 text-[#F28C28]">Courses</h4>
            <ul className="space-y-3 text-gray-100 text-base font-normal">
              {courseLinks.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCourseClick(course.path)}
                    className="hover:text-[#F28C28] transition-colors text-left"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-semibold mb-5 text-[#F28C28]">Quick Links</h4>
            <ul className="space-y-3 text-gray-100 text-base font-normal">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-[#F28C28] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif"}}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-semibold mb-5 text-[#F28C28]">Contact Us</h4>
            <div className="space-y-5 text-lg text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-[#F28C28] flex-shrink-0" />
                <span className="text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Doddabele Kengeri, Bangalore - 560040
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#F28C28] flex-shrink-0" />
                <a href="tel:+916361866299" className="hover:text-[#F28C28] transition-colors text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  +91 6361866299
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-[#F28C28] flex-shrink-0" />
                <a href="mailto:info@neeltechnologies.net" className="hover:text-[#F28C28] transition-colors break-all text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  info@neeltechnologies.net
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-lg text-gray-300">
          © 2026 All Rights Reserved by{" "}
          <Link to="/" className="text-[#F28C28] font-semibold hover:underline">Neel Technologies</Link>
        </div>
      </div>

      <LeadPopup
  open={showPopup}
  setOpen={setShowPopup}
  onSuccess={handleSuccess}
/>
    </footer>
  );
};

export default Footer;