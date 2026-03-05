import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CommonFAQ = ({ courseName }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: `What types of training formats does the ${courseName} course offer?`,
      answer: `We provide flexible learning options including live instructor-led classes (both online and classroom), as well as self-paced training through our LMS platform with access to recorded videos and study materials.`,
    },
    {
      question: `Is it possible to upgrade from self-paced learning to live sessions midway?`,
      answer: `Yes, you can switch to live interactive sessions anytime by paying the fee difference. This allows you to customize your learning experience.`,
    },
    {
      question: `Who benefits most from the self-paced ${courseName} training?`,
      answer: `Self-paced learning suits learners who need flexibility due to personal schedules or those who prefer studying independently at their own pace.`,
    },
    {
      question: `After finishing the course, can I still get support if I have questions?`,
      answer: `Definitely! Our trainers remain available through WhatsApp to answer questions and clarify doubts even after course completion.`,
    },
    {
      question: `Will I receive an official certificate after completing the ${courseName} training?`,
      answer: `Yes, upon successful completion, you will receive a certificate validating your skills and accomplishments.`,
    },
    {
      question: `How are practical exercises handled during the training?`,
      answer: `Training is hands-on and interactive. You will perform live labs with instructor guidance and access remote lab environments for real-world practice.`,
    },
    {
      question: `What if I miss a live class session? Can I catch up later?`,
      answer: `All live sessions are recorded and uploaded to our LMS. You can review missed classes anytime and also attend the session in a future batch.`,
    },
    {
      question: `How long do I have access to the LMS materials?`,
      answer: `You retain access to the LMS content even after course completion, allowing you to revisit lectures and labs whenever needed.`,
    },
    {
      question: `How much does the ${courseName} certification exam cost, and what are the payment methods?`,
      answer: `Certification costs vary by region and testing center. We accept credit/debit cards, net banking, and UPI.`,
    },
    {
      question: `What kind of practical projects will I complete during this course?`,
      answer: `You will work on real-world projects relevant to ${courseName}, helping you gain practical experience and job-ready skills.`,
    },
  ];

  return (
    <section id="faq" className="w-full py-24 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#0F3E57]">Frequently</span>{" "}
            <span className="text-orange-500">Asked Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left px-8 py-6 flex justify-between items-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-blue-100 text-[#0F3E57]"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg md:text-xl font-bold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 bg-white text-[#032884] text-lg leading-relaxed"  style={{ fontFamily: "ui-sans-serif" }}> 
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonFAQ;
