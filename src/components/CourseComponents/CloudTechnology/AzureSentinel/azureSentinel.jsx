import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import AzureSentinelHero from "./azureSentinelHero.jsx";
import WhyAzureSentinel from "./whyAzureSentinel.jsx";
import AzureSentinelCurriculum from "./azureSentinelCurriculum.jsx";
import BannerImg from "/assets/banner_slider.png";

const AzureSentinelTraining = () => {

  useEffect(() => {

    // Page Title
    document.title =
      "Azure Sentinel Training in Bangalore | Microsoft Sentinel Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join Azure Sentinel training in Bangalore with real-time SIEM & SOC projects. Get Microsoft Sentinel certification training with placement support and hands-on labs."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "Microsoft Sentinel training, Azure Sentinel training, Azure Sentinel course, Azure Sentinel certification course, Microsoft Sentinel certification, Azure Sentinel certification training, Azure Sentinel online training, Microsoft Sentinel SIEM training, Azure Sentinel SOC training, Azure Sentinel security training, Azure Sentinel course fees, Azure Sentinel training institute"
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Azure Sentinel Training in Bangalore | Microsoft Sentinel Certification"
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Microsoft Sentinel SIEM & SOC training with certification guidance, flexible batches, and career support."
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
        "https://www.neeltechnologies.com/azure-sentinel-training-certification-course"
      );
    }

    // Structured Data (Schema)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Azure Sentinel Training in Bangalore",
      "description":
        "Microsoft Sentinel SIEM and SOC certification training with real-time projects and placement support in Bangalore.",
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
      <AzureSentinelHero />
      <CommonKeyFeature />
      <WhyAzureSentinel />
      <AzureSentinelCurriculum />
      <CommonBatchSchedule
        title="Azure Sentinel Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="Azure Sentinel" />
      <ContactUsPage courseName="Azure Sentinel Training Certification" />
      <Footer />
    </>
  );
};

export default AzureSentinelTraining;