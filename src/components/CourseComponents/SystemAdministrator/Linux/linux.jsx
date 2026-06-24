// import ContactUsPage from "../../../contact/contact";
// import Footer from "../../../Home/Footer";
// import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
// import CommonFAQ from "../../CommonFaq/commonFaq";
// import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
// import CommonCourseToggle from "../../CommonToggle/commonToggle";
// import LinuxCurriculum from "./linuxCurriculum";
// import LinuxHero from "./linuxHero";
// import WhyLinux from "./whyLinux";

// const LinuxTraining = () => {
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
//       <LinuxHero />
//       <CommonKeyFeature />
//       <WhyLinux />
//       <LinuxCurriculum />
//       <CommonBatchSchedule
//         title="Linux Training Certification"
//         selfPacedFeatures={selfPaced}
//         onlineFeatures={onlineClass}
//         batchDetails={batches}
//         corporateDetails={corporate}
//       />
//       <CommonFAQ courseName="LINUX" />
//       <ContactUsPage courseName="LINUX Training Certification" />
//       <Footer />
//     </>
//   );
// };

// export default LinuxTraining;

import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import LinuxCurriculum from "./linuxCurriculum";
import LinuxHero from "./linuxHero";
import WhyLinux from "./whyLinux";
import BannerImg from "/assets/banner_slider.png";

const LinuxTraining = () => {

  useEffect(() => {

    // Page Title
    document.title =
      "Linux Training in Bangalore | Red Hat Linux Certification & Admin Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join the best Linux training in Bangalore with Red Hat Linux certification preparation. Learn Linux administration, system administrator skills, hands-on labs, and placement support."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "linux courses, red hat linux certification, linux training, linux certification, linux administration course, linux system administrator course, linux administrator training, red hat linux training, linux admin courses, linux course near me"
      );
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Linux Training in Bangalore | Red Hat Certification Course"
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Linux administration training with Red Hat certification guidance, real-time labs, weekend batches, and placement support in Bangalore."
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
        "https://www.neeltechnologies.com/linux-training-certification-course"
      );
    }

    // Structured Data (Course Schema)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Linux Training in Bangalore",
      "description":
        "Linux system administrator course with Red Hat certification preparation and placement assistance in Bangalore.",
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
      <LinuxHero />
      <CommonKeyFeature />
      <WhyLinux />
      <LinuxCurriculum />
      <CommonBatchSchedule
        title="Linux Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="LINUX" />
      <ContactUsPage courseName="LINUX Training Certification" />
      <Footer />
    </>
  );
};

export default LinuxTraining;