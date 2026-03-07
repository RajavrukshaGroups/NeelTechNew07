import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactUsPage = ({ courseName }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: courseName,
    platform: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        // "http://localhost:5000/api/contact",
        "https://api.neeltechnologies.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Your request has been submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: courseName,
        platform: "",
        message: "",
      });

    } catch (err) {
      setError(err.message || "Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request" className="w-full min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3E57] mb-4">
            Request for More Information
          </h2>

          <div className="flex justify-center gap-6 mt-6">

          {/* Email Button */}
          <a
            href="mailto:admin@neeltechnologies.net"
            className="flex items-center gap-2 border-2 border-blue-500 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            <Mail size={18} />
            Email
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916361866299"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-green-500 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-blue-200">
          <form onSubmit={submitHandler} className="space-y-8">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  readOnly
                  className="w-full border-2 border-blue-200 bg-gray-100 rounded-xl px-4 py-3"
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                How did you hear about us?
              </label>

              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Option</option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Friend/Referral</option>
                <option>YouTube</option>
              </select>
            </div>

            {/* ROW 4 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Tell us more about your Training Request
              </label>

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* SUCCESS / ERROR MESSAGE */}
            {success && (
              <p className="text-green-600 font-medium text-center">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-600 font-medium text-center">
                {error}
              </p>
            )}

            {/* SUBMIT */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-[#0F3E57] to-blue-600 text-white px-12 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;