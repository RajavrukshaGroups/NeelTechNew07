import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import AWSDevOpsHero from "./AWSDevOpsHero";
import WhyAWSDevOps from "./whyAWSDevOps";
import AWSDevOpsCurriculum from "./AWSDevOpsCurriculum";
import BannerImg from "/assets/banner_slider.png";

const AWSDevOpsTraining = () => {

  useEffect(() => {

    // Title Tag
    document.title =
      "AWS DevOps Training in Bangalore | AWS DevOps Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join AWS DevOps training in Bangalore with real-time CI/CD, Docker, Kubernetes & DevOps projects. Get AWS DevOps certification training with placement support."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "AWS DevOps training, AWS DevOps course, AWS DevOps certification course, AWS DevOps certification training, AWS DevOps online training, AWS DevOps course fees, AWS DevOps classes, AWS DevOps training institute, AWS DevOps course Bangalore, DevOps on AWS training"
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "AWS DevOps Training in Bangalore | AWS DevOps Certification"
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional AWS DevOps certification training with CI/CD pipelines, Docker, Kubernetes, Infrastructure as Code and career support."
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
        "https://www.neeltechnologies.com/aws-devops-training-certification-course"
      );
    }

    // Structured Data Schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "AWS DevOps Training in Bangalore",
      "description":
        "AWS DevOps certification training covering CI/CD, Docker, Kubernetes, Terraform and real-time DevOps projects with placement support.",
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
      <AWSDevOpsHero />
      <CommonKeyFeature />
      <WhyAWSDevOps />
      <AWSDevOpsCurriculum />
      <CommonBatchSchedule
        title="AWS DevOps Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="AWS DevOps" />
      <ContactUsPage courseName="AWS DevOps Training Certification" />
      <Footer />
    </>
  );
};

export default AWSDevOpsTraining;