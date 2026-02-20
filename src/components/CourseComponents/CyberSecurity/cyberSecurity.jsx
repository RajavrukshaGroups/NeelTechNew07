import ContactUsPage from "../../contact/contact";
import Footer from "../../Home/Footer";
import CommonBatchSchedule from "../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../CommonFaq/commonFaq";
import CommonKeyFeature from "../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../CommonToggle/commonToggle";
import CyberSecurityHero from "./CyberSecurityHero";
import WhyCyberSecurity from "./whyCyberSecurity";
import CyberSecurityCurriculum from "./CyberSecurityCurriculum";

const CyberSecurityTraining = () => {
  const selfPaced = [
    "2 Month e-learning Access",
    "Live Recorded Lectures",
    "Free Lifetime Updates",
    "Practice Labs Included",
  ];

  const onlineClass = [
    "Everything in self-paced",
    "Free DEMO Lecture",
    "2 Months Live Training",
    "Hands-on Projects",
    "WhatsApp Support",
    "Career Guidance",
  ];

  const batches = [
    {
      date: "Mon, Apr 15",
      schedule: "Weekdays (Mon-Thu)",
      time: "8:00 PM - 10:00 PM IST",
      seats: 12,
    },
    {
      date: "Sat, Apr 20",
      schedule: "Weekend (Sat-Sun)",
      time: "10:00 AM - 2:00 PM IST",
      seats: 8,
    },
  ];

  const corporate = [
    "Bulk Enrollment Discounts",
    "Flexible Scheduling",
    "Dedicated Account Manager",
    "On-site & Online Delivery",
  ];

  return (
    <>
      <CommonCourseToggle />
      <CyberSecurityHero />
      <CommonKeyFeature />
      <WhyCyberSecurity />
      <CyberSecurityCurriculum />
      <CommonBatchSchedule
        title="Cyber Security Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="Cyber Security" />
      <ContactUsPage courseName="Cyber Security Training Certification" />
      <Footer />
    </>
  );
};

export default CyberSecurityTraining;
