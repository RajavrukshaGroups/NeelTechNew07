import { useEffect } from "react";
import Footer from "../Home/Footer";
import TrainingCommonToggle from "./TrainingCommonToggle";
import TrainingHero from "./TrainingHero";
import BannerImg from "/assets/banner_slider.png";

const TrainingOption = () => {
  useEffect(() => {
    // Title (Highly Optimized)
    document.title =
      "AWS Certification Training in Bangalore | Cloud Computing Course with Placement";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Join the best AWS certification training in Bangalore with placement support. Learn AWS, Google Cloud (GCP), and complete cloud computing courses with real-time projects and certification guidance.",
      );
    }

    // Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "aws certification training in bangalore, google cloud training in bangalore, cloud computing course in bangalore, aws course with placement, best aws training institute in bangalore, google cloud certification training, cloud training institute in bangalore, aws certification cost, gcp certification course in bangalore, job oriented cloud computing course",
      );
    }

    // Open Graph
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "AWS & Google Cloud Training in Bangalore | Placement Assistance",
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']",
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Professional cloud computing training in Bangalore. AWS, GCP certification courses with hands-on labs and job placement support.",
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", BannerImg);

    const ogType = document.querySelector("meta[property='og:type']");
    if (ogType) ogType.setAttribute("content", "website");

    // Canonical URL
    // Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute(
      "href",
      "https://www.neeltechnologies.com/our-services",
    );

    // Structured Data (Very Important)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "AWS and Google Cloud Certification Training",
      description:
        "Cloud computing course in Bangalore covering AWS and Google Cloud certification with placement assistance.",
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

  return (
    <>
      <TrainingHero />
      <TrainingCommonToggle />
      <Footer />
    </>
  );
};

export default TrainingOption;
