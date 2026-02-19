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

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F3E57] text-white pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* ================= TOP NEWSLETTER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-blue-800">
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>

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

          {/* Social Icons */}
          <div className="flex gap-5">
            {[Youtube, Facebook, Instagram, Linkedin].map((Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:bg-[#F28C28] transition cursor-pointer"
              >
                <Icon size={22} />
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN FOOTER CONTENT ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-14">
          {/* About Section */}
          <div>
            <img src={NeelLogo} alt="Neel Technologies" className="h-16 mb-6" />

            <p className="text-lg leading-relaxed text-gray-300">
              Neel Technologies boasts a team of highly experienced and
              qualified trainers who are deeply committed to student success.
              With a passion for teaching and real-world expertise, we empower
              learners to achieve their full potential.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-2xl font-semibold mb-5 text-[#F28C28]">
              Courses
            </h4>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>AWS Cloud</li>
              <li>Azure Cloud</li>
              <li>MCSE</li>
              <li>Linux</li>
              <li>Windows Powershell</li>
              <li>Python</li>
              <li>Google-Cloud GCP</li>
              <li>AWS-Devops</li>
              <li>AZURE-Devops</li>
              <li>Ethical-Hacking</li>
              <li>Azure Sentinel</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-5 text-[#F28C28]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>Our Services</li>
              <li>Training</li>
              <li>Batch Schedule</li>
              <li>About Us</li>
              <li>Success Stories</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Placement</li>
              <li>Student Review</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-5 text-[#F28C28]">
              Contact Us
            </h4>

            <div className="space-y-5 text-lg text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-[#F28C28]" />
                <span>Doddabele Kengeri, Bangalore - 560040</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#F28C28]" />
                <span>+91 6361866299</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} className="text-[#F28C28]" />
                <span>info@neeltechnologies.net</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM COPYRIGHT ================= */}
        <div className="border-t border-blue-800 pt-8 text-center text-lg text-gray-400">
          © 2026 All Rights Reserved by{" "}
          <span className="text-[#F28C28] font-semibold">
            Neel Technologies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
