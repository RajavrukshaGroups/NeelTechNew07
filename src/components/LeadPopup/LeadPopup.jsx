import { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, User, Mail, Phone, ArrowRight } from "lucide-react";

const LeadPopup = ({ open, setOpen, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (!open) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  /* ================= RESET FORM ================= */
  useEffect(() => {
    if (!open) {
      setForm({ name: "", email: "", phone: "" });
      setErrors({});
      setTouched({});
      setSubmitStatus(null);
      setTimeLeft(300);
    }
  }, [open]);

  if (!open) return null;

  /* ================= TIME FORMAT ================= */
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  /* ================= VALIDATION ================= */
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email address"
          : "";
      case "phone":
        return !/^[\d\s\-+()]{10,}$/.test(value)
          ? "Invalid phone number"
          : "";
      default:
        return "";
    }
  };

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, phone: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
       //const response = await fetch("http://localhost:5000/api/contact", {
      const response = await fetch("https://api.neeltechnologies.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          course: "Course Enquiry",
          message: "Lead from popup form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      localStorage.setItem("leadSubmitted", "true");

      setSubmitStatus("success");

      setTimeout(() => {
        setOpen(false);

        if (onSuccess) {
          onSuccess();
        }
      }, 1500);

    } catch (error) {
      console.error("Popup submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= INPUT STYLE ================= */
  const getInputClassName = (field) => {
    const base =
      "w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300";

    if (touched[field] && errors[field]) {
      return `${base} border-red-300 focus:ring-red-200 bg-red-50`;
    }

    if (touched[field] && !errors[field] && form[field]) {
      return `${base} border-green-300 focus:ring-green-200 bg-green-50`;
    }

    return `${base} border-gray-300 focus:ring-blue-200 focus:border-blue-400`;
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">

      <div className="bg-white w-full max-w-md rounded-2xl relative shadow-2xl">

        {/* ================= HEADER ================= */}

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">

          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-white/80 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-bold bg-white/20 px-3 py-1 rounded-full">
              ⚡ Limited Time Offer
            </span>

            <span className="font-mono font-bold">
              {formatTime(timeLeft)}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-1">
            Unlock Your Course Details 🚀
          </h2>

          <p className="text-blue-100 font-medium">
            Join thousands of students accelerating their careers
          </p>
        </div>

        {/* ================= BENEFITS ================= */}

        <div className="px-6 pt-4 pb-2 bg-gray-50 border-b">

          <div className="flex items-center text-base text-gray-800">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            Free access to premium content
          </div>

          <div className="flex items-center text-base text-gray-800 mt-1">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            Get 20% discount on enrollment
          </div>

        </div>

        {/* ================= FORM ================= */}

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          {/* NAME */}
          <div className="relative">
            <User size={18} className="absolute left-3 top-3.5 text-gray-400" />

            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("name")}
              disabled={isSubmitting}
            />

            {touched.name && errors.name && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle size={12} className="mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("email")}
              disabled={isSubmitting}
            />

            {touched.email && errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle size={12} className="mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone size={18} className="absolute left-3 top-3.5 text-gray-400" />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("phone")}
              disabled={isSubmitting}
            />

            {touched.phone && errors.phone && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle size={12} className="mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* SUCCESS MESSAGE */}
          {submitStatus === "success" && (
            <div className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center">
              <CheckCircle size={20} className="mr-2" />
              Success! Redirecting...
            </div>
          )}

          {/* ERROR MESSAGE */}
          {submitStatus === "error" && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center">
              <AlertCircle size={20} className="mr-2" />
              Something went wrong
            </div>
          )}

          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex justify-center items-center"
          >
            {isSubmitting ? (
              "Processing..."
            ) : (
              <>
                Continue
                <ArrowRight size={18} className="ml-2" />
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
};

export default LeadPopup;