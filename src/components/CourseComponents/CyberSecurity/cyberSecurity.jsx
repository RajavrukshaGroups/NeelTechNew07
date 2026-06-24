import { useEffect } from "react";
import ContactUsPage from "../../contact/contact";
import Footer from "../../Home/Footer";
import CommonBatchSchedule from "../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../CommonFaq/commonFaq";
import CommonKeyFeature from "../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../CommonToggle/commonToggle";
import CyberSecurityHero from "./CyberSecurityHero";
import WhyCyberSecurity from "./whyCyberSecurity";
import CyberSecurityCurriculum from "./CyberSecurityCurriculum";
import BannerImg from "/assets/banner_slider.png";

const CyberSecurityTraining = () => {

  useEffect(() => {

    // Title Tag
    document.title =
      "Cyber Security Training in Bangalore | Cyber Security Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join the best Cyber Security training in Bangalore with ethical hacking, SOC, SIEM, and real-time security projects. Get Cyber Security certification with placement support."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "Cyber security course, Cyber security training, Cyber security certification, Cyber security certification course, Cyber security classes, Cyber security online training, Cyber security course fees, Cyber security training institute, Ethical hacking and cyber security course, Cyber security diploma course, Cyber security professional course, Cyber security bootcamp, Cyber security advanced training, Cyber security job oriented course, Cyber security course Bangalore, Cyber security training in Bangalore, Cyber security certification course in Bangalore, Best cyber security institute in Bangalore, Cyber security weekend classes, Cyber security beginner course"
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Cyber Security Training in Bangalore | Certification Course"
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Cyber Security certification training with ethical hacking, SOC analyst training, SIEM tools and career guidance."
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", BannerImg);

    const ogType = document.querySelector("meta[property='og:type']");
    if (ogType) ogType.setAttribute("content", "website");

    // Canonical URL
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        "https://www.neeltechnologies.com/cyber-security-training-certification-course"
      );
    }

    // Structured Data Schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Cyber Security Training in Bangalore",
      "description":
        "Cyber Security certification training covering ethical hacking, SOC, SIEM, penetration testing and real-time projects with placement support.",
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