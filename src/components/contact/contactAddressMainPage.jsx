// import { MapPin, Phone, Mail, Send } from "lucide-react";
// import { useState } from "react";

// const ContactAddressMainPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="w-full bg-white py-16 px-6 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57] mb-4">
//             Get In Touch With Us
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Have questions about our courses? We're here to help you with your
//             learning journey.
//           </p>
//           <div className="w-28 h-1 bg-blue-600 mx-auto mt-5"></div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* ================= LEFT SIDE - CONTACT FORM ================= */}
//           <div className="flex-1 bg-[#0694d140] p-10 rounded-2xl shadow-lg">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Row 1 */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name *"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                   className="w-full text-lg border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email *"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full text-lg border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
//                 />
//               </div>

//               {/* Row 2 */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full text-lg border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
//                 />

//                 {/* <select
//                   name="course"
//                   value={formData.course}
//                   onChange={handleChange}
//                   className="w-full text-lg border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
//                 >
//                   <option value="">Select Course Name</option>
//                   <option value="mcse">MCSE Training</option>
//                   <option value="linux">Linux Administrator</option>
//                   <option value="azure">Microsoft Azure</option>
//                   <option value="aws">AWS</option>
//                   <option value="python">Python</option>
//                   <option value="ccna">CCNA</option>
//                 </select> */}
//               </div>

//               {/* Textarea */}
//               <textarea
//                 name="message"
//                 rows="5"
//                 placeholder="Tell us more about your training requirements..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full text-lg border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white resize-none"
//               ></textarea>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white text-lg px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3"
//               >
//                 <Send size={20} />
//                 Submit Request
//               </button>
//             </form>

//             <p className="text-sm text-gray-600 mt-5">
//               *Your information is safe with us. We'll respond within 24 hours.
//             </p>
//           </div>

//           {/* ================= RIGHT SIDE - ADDRESS CARD ================= */}
//           <div className="lg:w-[400px]" style={{fontFamily:"Montserrat"}}>
//             <div className="bg-white p-10 rounded-2xl shadow-lg sticky top-24">
//               <h2 className="text-3xl font-bold text-[#0F3E57] mb-8">
//                 Visit Us
//               </h2>

//               <div className="space-y-8 text-lg">
//                 {/* Address */}
//                 <div className="flex gap-4">
//                   <MapPin size={22} className="text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-2 text-xl">
//                       Office Address
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Doddabele Kengeri
//                       <br />
//                       Bangalore - 560040
//                     </p>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="flex gap-4">
//                   <Phone size={22} className="text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-2 text-xl">Call Us</h3>
//                     <a
//                       href="tel:+916361866299"
//                       className="text-gray-700 hover:text-blue-600 transition"
//                     >
//                       +91 6361866299
//                     </a>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex gap-4">
//                   <Mail size={22} className="text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-2 text-xl">Email Us</h3>
//                     <a
//                       href="mailto:admin@neeltechnologies.net"
//                       className="text-gray-700 hover:text-blue-600 transition break-all"
//                     >
//                       admin@neeltechnologies.net
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactAddressMainPage;


import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";

const ContactUsPage = ({ courseName = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: courseName || "--Select Course--",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMessage("");
    setErrorMessage("");

    if (formData.course === "--Select Course--") {
      setErrorMessage("Please select a course.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(
          "✅ Email sent successfully! We will contact you within 24 hours."
        );

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "--Select Course--", // ✅ fixed
          message: "",
        });
      } else {
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to send email. Please check your connection.");
    } finally {
      setStatus("idle");
    }
  };

  const inputClasses =
    "w-full text-lg border-2 border-[#0F3E57] rounded-full px-8 py-4 outline-none focus:ring-2 focus:ring-blue-100 bg-white placeholder-gray-500 transition-all";

  const textareaClasses =
    "w-full text-lg border-2 border-[#0F3E57] rounded-[2rem] px-8 py-4 outline-none focus:ring-2 focus:ring-blue-100 bg-white resize-none placeholder-gray-500 transition-all";

  return (
    <div className="w-full bg-white py-16 px-6 md:px-10 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57] mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-gray-1000 font-semibold max-w-2xl mx-auto">
            Have questions about our courses? We're here to help you with your learning journey.
          </p>
          <div className="w-28 h-1 bg-blue-600 mx-auto mt-5"></div>
        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ================= LEFT SIDE - FORM ================= */}
          <div className="flex-1 bg-[#0694d115] p-10 rounded-2xl shadow-sm border border-blue-50">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="fullName"
                placeholder="Enter Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputClasses}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile no *"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClasses}
              />

              <div className="relative">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="--Select Course--">--Select Course--</option>
                  <option value="MCSE Training Certification Course">MCSE Training Certification Course</option>
                  <option value="LINUX Training Certification Course">LINUX Training Certification Course</option>
                  <option value="CCNA Training Certification Course">CCNA Training Certification Course</option>
                  <option value="POWERSHELL Training Certification Course">POWERSHELL Training Certification Course</option>
                  <option value="PYTHON Training Certification Course">PYTHON Training Certification Course</option>
                  <option value="AZURE Training Certification Course">AZURE Training Certification Course</option>
                  <option value="AWS Training Certification Course">AWS Training Certification Course</option>
                  <option value="GCP Training Certification Course">GCP Training Certification Course</option>
                  <option value="AWS-DEVOPS Training Certification Course">AWS-DEVOPS Training Certification Course</option>
                  <option value="AZURE-DEVOPS Training Certification Course">AZURE-DEVOPS Training Certification Course</option>
                  <option value="CYBER SECURITY Training Certification Course">CYBER SECURITY Training Certification Course</option>
                  <option value="Intune Training Certification Course">Intune Training Certification Course</option>
                  <option value="O365 Training Certification Course">O365 Training Certification Course</option>
                  <option value="Entra ID Training Certification Course">Entra ID Training Certification Course</option>
                  <option value="Azure Sentinel Training Certification Course">Azure Sentinel Training Certification Course</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={textareaClasses}
              ></textarea>

              {errorMessage && (
                <p className="text-red-600 font-medium">{errorMessage}</p>
              )}

              {responseMessage && (
                <p className="text-green-600 font-medium">{responseMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#0F3E57] text-white text-lg px-12 py-4 rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 flex items-center gap-3 disabled:opacity-70 shadow-md"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Request
                  </>
                )}
              </button>
            </form>

            <p className="text-base text-gray-1000 font-semibold mt-6 italic">
              *Your information is safe with us. We'll respond within 24 hours.
            </p>
          </div>

          {/* ================= RIGHT SIDE - ADDRESS CARD ================= */}
          <div className="lg:w-[400px]" style={{ fontFamily: "Montserrat" }}>
            <div className="bg-white p-10 rounded-2xl shadow-lg sticky top-24">
              <h2 className="text-3xl font-bold text-[#0F3E57] mb-8">
                Visit Us
              </h2>

              <div className="space-y-8 text-lg">

                <div className="flex gap-4">
                  <MapPin size={22} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-xl">
                      Office Address
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Doddabele Kengeri
                      <br />
                      Bangalore - 560040
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={22} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-xl">Call Us</h3>
                    <a
                      href="tel:+916361866299"
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      +91 6361866299
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={22} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-xl">Email Us</h3>
                    <a
                      href="mailto:info@neeltechnologies.net"
                      className="text-gray-700 hover:text-blue-600 transition break-all"
                    >
                      info@neeltechnologies.net
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;