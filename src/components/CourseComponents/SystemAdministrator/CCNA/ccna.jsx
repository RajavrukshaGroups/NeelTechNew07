// import ContactUsPage from "../../../contact/contact";
// import Footer from "../../../Home/Footer";
// import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
// import CommonFAQ from "../../CommonFaq/commonFaq";
// import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
// import CommonCourseToggle from "../../CommonToggle/commonToggle";
// import CCNACurriculum from "./ccnaCurriculum";
// import CCNAHero from "./ccnaHero";
// import WhyCCNA from "./whyCCNA";

// const CCNATraining = () => {
//   const selfPaced = [
//     "2 Month e-learning Access",
//     "Live Recorded Lectures",
//     "Free Lifetime Updates",
//     "Practice Labs Included",
//   ];

//   const onlineClass = [
//     "Everything in self-paced",
//     "Free DEMO Lecture",
//     "2 Months Live Training",
//     "Hands-on Projects",
//     "WhatsApp Support",
//     "Career Guidance",
//   ];

//   const batches = [
//     {
//       date: "Mon, Apr 15",
//       schedule: "Weekdays (Mon-Thu)",
//       time: "8:00 PM - 10:00 PM IST",
//       seats: 12,
//     },
//     {
//       date: "Sat, Apr 20",
//       schedule: "Weekend (Sat-Sun)",
//       time: "10:00 AM - 2:00 PM IST",
//       seats: 8,
//     },
//   ];

//   const corporate = [
//     "Bulk Enrollment Discounts",
//     "Flexible Scheduling",
//     "Dedicated Account Manager",
//     "On-site & Online Delivery",
//   ];

//   return (
//     <>
//       <CommonCourseToggle />
//       <CCNAHero />
//       <CommonKeyFeature />
//       <WhyCCNA />
//       <CCNACurriculum />
//       <CommonBatchSchedule
//         title="CCNA Training Certification"
//         selfPacedFeatures={selfPaced}
//         onlineFeatures={onlineClass}
//         batchDetails={batches}
//         corporateDetails={corporate}
//       />
//       <CommonFAQ courseName="CCNA" />
//       <ContactUsPage courseName="CCNA Training Certification" />
//       <Footer />
//     </>
//   );
// };

// export default CCNATraining;


import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import CCNACurriculum from "./ccnaCurriculum";
import CCNAHero from "./ccnaHero";
import WhyCCNA from "./whyCCNA";
import BannerImg from "/assets/banner_slider.png";

const CCNATraining = () => {

  useEffect(() => {

    // Page Title
    document.title =
      "CCNA Training in Bangalore | Cisco CCNA 200-301 Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join the best CCNA training in Bangalore with Cisco CCNA 200-301 certification preparation. Learn networking fundamentals, hands-on labs, real-time projects, and placement assistance."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "ccna course, ccna certification, ccna training, ccna certification course, cisco ccna course, ccna course near me, ccna training institute, ccna certification training, ccna networking course, ccna 200-301, ccna course fees, best ccna training institute"
      );
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "CCNA Training in Bangalore | Cisco 200-301 Certification"
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional CCNA networking course with Cisco 200-301 exam preparation, weekend batches, affordable fees, and placement support."
      );
    }

    // Open Graph Image
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", BannerImg);

    // Open Graph Type
    const ogType = document.querySelector("meta[property='og:type']");
    if (ogType) ogType.setAttribute("content", "website");

    // Canonical URL
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        "https://www.neeltechnologies.com/ccna-training-bangalore"
      );
    }

    // Structured Data (Course Schema)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "CCNA Training in Bangalore",
      "description":
        "Cisco CCNA 200-301 certification course with hands-on networking labs and placement assistance in Bangalore.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Neel Technologies",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "India"
        }
      }
    });

    document.head.appendChild(script);

  }, []);

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
      <CCNAHero />
      <CommonKeyFeature />
      <WhyCCNA />
      <CCNACurriculum />
      <CommonBatchSchedule
        title="CCNA Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="CCNA" />
      <ContactUsPage courseName="CCNA Training Certification" />
      <Footer />
    </>
  );
};

export default CCNATraining;