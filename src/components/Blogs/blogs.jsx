// import Footer from "../Home/Footer";
// import BlogsHero from "./blogshero";

// const Blogs = () => {
//   return (
//     <>
//       <BlogsHero />
//       <Footer />
//     </>
//   );
// };

// export default Blogs;

import { useEffect } from "react";
import Footer from "../Home/Footer";
import BlogsHero from "./blogshero";
import BannerImg from "/assets/banner_slider.png";

const Blogs = () => {

  useEffect(() => {

    // Optimized Title
    document.title =
      "Cloud Computing & AWS Blogs | Career Guides, Roadmaps & Tutorials";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Explore AWS tutorials, cloud computing guides, certification roadmaps, interview questions, career paths, and AWS vs GCP comparisons. Learn cloud computing step by step."
      );
    }

    // Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "what is aws, what is cloud computing, aws vs gcp, aws certification roadmap, how to become cloud engineer, aws course syllabus, cloud computing career path, benefits of cloud computing, aws services list, cloud computing interview questions, aws projects for beginners, google cloud certification path"
      );
    }

    // Open Graph
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "AWS & Cloud Computing Blogs | Career & Certification Guides"
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Read expert blogs on AWS, Google Cloud, cloud engineering career paths, certification roadmaps, and interview preparation."
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
        "https://www.neeltechnologies.com/blogs"
      );
    }

    // Structured Data for Blog
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Cloud Computing & AWS Blogs",
      "description":
        "Educational blogs about AWS, Google Cloud, cloud engineering career paths and certification roadmaps.",
      "publisher": {
        "@type": "Organization",
        "name": "Neel Technologies"
      }
    });

    document.head.appendChild(script);

  }, []);

  return (
    <>
      <BlogsHero />
      <Footer />
    </>
  );
};

export default Blogs;