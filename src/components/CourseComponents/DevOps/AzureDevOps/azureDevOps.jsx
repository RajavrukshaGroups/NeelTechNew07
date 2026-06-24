import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import AzureDevOpsHero from "./AzureDevOpsHero";
import WhyAzureDevOps from "./whyAzureDevOps";
import AzureDevOpsCurriculum from "./AzureDevOpsCurriculum";
import BannerImg from "/assets/banner_slider.png";

const AzureDevOpsTraining = () => {

  useEffect(() => {

    // Title Tag
    document.title =
      "Azure DevOps Training in Bangalore | Azure DevOps Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join Azure DevOps training in Bangalore with real-time CI/CD, Azure Pipelines, Repos, Boards and DevOps projects. Get Microsoft Azure DevOps certification training with placement support."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "Azure DevOps training, Azure DevOps course, Azure DevOps certification, Azure DevOps certification course, Microsoft Azure DevOps training, Azure DevOps certification training, Azure DevOps online training, Azure DevOps course fees, Azure DevOps classes, Azure DevOps training institute, Azure DevOps engineer training, Microsoft DevOps certification course, Azure DevOps professional certification, Azure DevOps course Bangalore, Azure DevOps training in Bangalore"
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Azure DevOps Training in Bangalore | Certification Course"
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Azure DevOps certification training with CI/CD pipelines, Infrastructure as Code, Azure Repos and real-time projects."
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
        "https://www.neeltechnologies.com/azure-devops-training-certification-course"
      );
    }

    // Structured Data Schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Azure DevOps Training in Bangalore",
      "description":
        "Microsoft Azure DevOps certification training covering CI/CD, Azure Pipelines, Boards, Repos and DevOps engineering practices with placement support.",
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
      <AzureDevOpsHero />
      <CommonKeyFeature />
      <WhyAzureDevOps />
      <AzureDevOpsCurriculum />
      <CommonBatchSchedule
        title="Azure DevOps Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="Azure DevOps" />
      <ContactUsPage courseName="Azure DevOps Training Certification" />
      <Footer />
    </>
  );
};

export default AzureDevOpsTraining;