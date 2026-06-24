import { useEffect } from "react";
import ContactUsPage from "../../../contact/contact";
import Footer from "../../../Home/Footer";
import CommonBatchSchedule from "../../CommonBatchSchedule/commonBatchSchedule";
import CommonFAQ from "../../CommonFaq/commonFaq";
import CommonKeyFeature from "../../CommonKeyFeature/commonKeyFeature";
import CommonCourseToggle from "../../CommonToggle/commonToggle";
import WindowsPowershellCurriculum from "./powershellCurriculum";
import WhyWindowsPowershell from "./whypowershell";
import WindowsPowershellHero from "./windowsPowershellHero";
import BannerImg from "/assets/banner_slider.png";

const WindowsPowershellTraining = () => {
  useEffect(() => {
    // Page Title
    document.title =
      "Windows PowerShell Training in Bangalore | PowerShell Certification Course";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join Windows PowerShell training in Bangalore with hands-on scripting, automation, administration tasks, and certification guidance. Learn PowerShell for system administrators with real-time projects and placement support.",
      );
    }

    // Meta Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "powershell training, windows powershell training, powershell course, powershell certification, powershell scripting course, powershell automation training, advanced powershell training, powershell for system administrators, powershell online training, powershell course fees, powershell training institute, powershell course near me",
      );
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Windows PowerShell Training in Bangalore | PowerShell Certification",
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']",
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional Windows PowerShell scripting and automation training with real-time projects, flexible batches, and career guidance.",
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
        // "https://www.neeltechnologies.com/windows-powershell-training-bangalore"
        "https://www.neeltechnologies.com/powershell-training-certification-course",
      );
    }

    // Structured Data (Course Schema)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Windows PowerShell Training in Bangalore",
      description:
        "Windows PowerShell scripting and automation training with certification guidance and placement support in Bangalore.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Neel Technologies",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "India",
        },
      },
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
      <WindowsPowershellHero />
      <CommonKeyFeature />
      <WhyWindowsPowershell />
      <WindowsPowershellCurriculum />
      <CommonBatchSchedule
        title="Windows PowerShell Training Certification"
        selfPacedFeatures={selfPaced}
        onlineFeatures={onlineClass}
        batchDetails={batches}
        corporateDetails={corporate}
      />
      <CommonFAQ courseName="Windows Powershell" />
      <ContactUsPage courseName="Windows Powershell Training Certification" />
      <Footer />
    </>
  );
};

export default WindowsPowershellTraining;
