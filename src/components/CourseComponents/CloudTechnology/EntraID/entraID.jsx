import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import EntraIDCurriculum from "./entraIDCurriculum";
import EntraIDHero from "./entraIDHero";
import WhyEntraID from "./whyEntraID";
import BannerImg from "/assets/banner_slider.png";

const EntraIDTraining = () => {

  useEffect(() => {

    // Page Title
    document.title =
      "Microsoft Entra ID Training in Bangalore | Entra ID Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join Microsoft Entra ID training in Bangalore with hands-on identity management, Azure AD integration, security policies, and certification guidance. Learn Entra ID administration with placement support."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "Microsoft Entra ID training, Entra ID course, Microsoft Entra ID certification, Entra ID certification course, Microsoft Entra ID online training, Entra ID administrator training, Azure Entra ID training, Entra ID identity management course, Entra ID classes, Entra ID course fees, Entra ID training institute, Entra ID course Bangalore"
      );
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Microsoft Entra ID Training in Bangalore | Entra ID Certification"
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Entra ID identity and access management training with real-time projects, flexible batches, and career support."
      );
    }

    // Open Graph Image
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", BannerImg);

    const ogType = document.querySelector("meta[property='og:type']");
    if (ogType) ogType.setAttribute("content", "website");

    // Canonical URL
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        "https://www.neeltechnologies.com/microsoft-entra-id-training-certification-course"
      );
    }

    // Structured Data Schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Microsoft Entra ID Training in Bangalore",
      "description":
        "Microsoft Entra ID certification training covering identity management, Azure integration, and security policies with placement support in Bangalore.",
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
      <EntraIDHero />
      <CommonKeyFeature />
      <WhyEntraID />
      <EntraIDCurriculum />
      <CommonBatchSchedule
        title="EntraID Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="EntraID" />
      <ContactUsPage courseName="EntraID Training Certification" />
      <Footer />
    </>
  );
};

export default EntraIDTraining;