import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import McseCurriculum from "./mcseCurriculum";
import McseHero from "./mcseHero";
import WhyMCSE from "./whyMCSE";
import BannerImg from "/assets/banner_slider.png";

const MCSETraining = () => {

  useEffect(() => {

    // Page Title
    document.title =
      "MCSE Training in Bangalore | Microsoft MCSE Certification Course with Placement";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join the best MCSE training in Bangalore with placement assistance. Learn Microsoft MCSE certification course with hands-on labs, weekend batches, affordable fees, and real-time projects."
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "mcse training in bangalore, mcse certification training, mcse course in bangalore, mcse institute in bangalore, microsoft mcse certification course, mcse course fees in bangalore, best mcse training institute, mcse certification cost, mcse training near me, mcse certification training with placement, affordable mcse course in bangalore, weekend mcse training in bangalore"
      );
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "MCSE Training in Bangalore | Microsoft Certification Course"
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional MCSE certification training in Bangalore with weekend batches, affordable fees, and placement support."
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
        "https://www.neeltechnologies.com/mcse-training-bangalore"
      );
    }

    // Structured Data (Course Schema)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "MCSE Training in Bangalore",
      "description":
        "Microsoft MCSE certification course with placement assistance in Bangalore.",
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
      <McseHero />
      <CommonKeyFeature />
      <WhyMCSE />
      <McseCurriculum />
      <CommonBatchSchedule
        title="MCSE Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="MCSE" />
      <ContactUsPage courseName="MCSE Training Certification" />
      <Footer />
    </>
  );
};

export default MCSETraining;