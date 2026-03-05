import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import MicrosoftAzureHero from "./microsoftAzureHero";
import WhyMicrosoftAzure from "./whyMicrosoftAzure";
import MicrosoftAzureCurriculum from "./microsoftAzureCurriculum";
import BannerImg from "/assets/banner_slider.png";

const MicrosoftAzureTraining = () => {

  useEffect(() => {

    // Page Title
    document.title =
      "Microsoft Azure Training in Bangalore | Azure Cloud Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join Microsoft Azure training in Bangalore with hands-on cloud computing projects and certification guidance. Learn Azure cloud, DevOps, administration, and deployment with placement support."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "Azure course, Azure cloud certification, certification in Azure cloud, Azure training, Windows Azure training, Microsoft Azure certification courses, Azure cloud computing training, Microsoft Azure cloud certification, Azure DevOps training, Azure course fees, Azure classes online, Azure course Bangalore"
      );
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Microsoft Azure Training in Bangalore | Azure Certification"
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Azure cloud computing training with real-time projects, flexible batches, affordable fees, and placement assistance."
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
        "https://www.neeltechnologies.com/microsoft-azure-training-bangalore"
      );
    }

    // Structured Data Schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Microsoft Azure Training in Bangalore",
      "description":
        "Azure cloud computing certification training with DevOps, administration, deployment, and placement support in Bangalore.",
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
      <MicrosoftAzureHero />
      <CommonKeyFeature />
      <WhyMicrosoftAzure />
      <MicrosoftAzureCurriculum />
      <CommonBatchSchedule
        title="Microsoft Azure Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="Microsoft Azure" />
      <ContactUsPage courseName="Microsoft Azure Training Certification" />
      <Footer />
    </>
  );
};

export default MicrosoftAzureTraining;