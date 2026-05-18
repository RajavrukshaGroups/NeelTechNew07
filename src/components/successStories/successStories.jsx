// import Footer from "../Home/Footer";
// import SuccessStoriesHero from "./successstoriesHero";
// import SuccessStoriesTestimonials from "./successStoriesTestimonials";

// const SuccessStories = () => {
//   return (
//     <div>
//       <SuccessStoriesHero />
//       <SuccessStoriesTestimonials />
//       <Footer />
//     </div>
//   );
// };

// export default SuccessStories;

import { useEffect } from "react";
import Footer from "../Home/Footer";
import SuccessStoriesHero from "./successstoriesHero";
import SuccessStoriesTestimonials from "./successStoriesTestimonials";
import BannerImg from "/assets/banner_slider.png";

const SuccessStories = () => {
  useEffect(() => {
    // Optimized Title
    document.title =
      "AWS & Cloud Computing Course with Placement | Success Stories Bangalore";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Explore real success stories from students placed in top companies after completing AWS and cloud computing courses in Bangalore. 100% placement assistance with high salary packages.",
      );
    }

    // Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "aws course with placement, cloud computing course with placement, aws placement training in bangalore, best cloud training institute with placement, job-oriented cloud computing course, aws salary for freshers, cloud engineer salary in india, aws jobs in bangalore, google cloud training with placement, cloud computing jobs for freshers, best aws institute in bangalore with placements, gcp jobs in bangalore",
      );
    }

    // Open Graph
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Cloud Computing Placement Success Stories | AWS Training Bangalore",
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']",
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "See how our students secured AWS and cloud computing jobs in Bangalore with competitive salary packages.",
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
      "https://www.neeltechnologies.com/success-stories",
    );
    // Structured Data - Review Schema (VERY POWERFUL)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Neel Technologies",
      description:
        "AWS and Cloud Computing training institute in Bangalore with placement assistance.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "250",
      },
    });

    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <SuccessStoriesHero />
      <SuccessStoriesTestimonials />
      <Footer />
    </div>
  );
};

export default SuccessStories;
