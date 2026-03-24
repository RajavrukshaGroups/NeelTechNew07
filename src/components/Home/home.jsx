import { useEffect } from "react";

import Navbar from "../Navbar/navbar";
import AdvancedTrainingLms from "./AdvancedTrainingLMS";
import CourseDetails from "./CourseDetails";
import Footer from "./Footer";
import Hero from "./Hero";
import LearningOptions from "./LearningOptions";
import StudentPlacements from "./StudentPlacements";
import UniqueOfferings from "./UniqueOfferings";
import UpcomingDemo from "./UpcomingDemo";
import WhyNeelTech from "./WhyNeelTech";
import BannerImg from "/assets/banner_slider.png";
import PricingDetails from "./PricingDetails";

const Home = () => {

  useEffect(() => {
    // Page title
    document.title = "Best IT Training Institute in Bangalore | Cloud, DevOps, AWS, Python | Neel Technologies";

    // Meta description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Neel Technologies is the best IT training institute in Bangalore offering Cloud Computing, DevOps, Cyber Security, Python, AWS, Azure, CCNA and job-oriented IT courses with placement assistance."
      );
    }

    // Meta keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "IT Training Institute in Bangalore, Best IT Training Institute in Bangalore, Software Training Institute in Bangalore, IT Courses with Placement in Bangalore, Professional IT Courses with Placement, Job-Oriented IT Courses Bangalore, Cloud Computing Training in Bangalore, Cloud Computing Training Institute, DevOps Training in Bangalore, Cyber Security Training in Bangalore, Python Training in Bangalore, AWS Training and Certification in Bangalore, Azure Training and Certification in Bangalore, CCNA Certification Course in Bangalore, Best Cloud & DevOps Training Institute, IT Certification Courses in Bangalore, Free IT Training and Certification Online"
      );
    }

    // Author meta
    const authorMeta = document.querySelector("meta[name='author']");
    if (authorMeta) {
      authorMeta.setAttribute("content", "Neel Technologies");
    }

    // Open Graph meta
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", "Best IT Training Institute in Bangalore | Neel Technologies");

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription)
      ogDescription.setAttribute(
        "content",
        "Join the best software training institute in Bangalore with placement support. Cloud, DevOps, AWS, Python, Cyber Security & more."
      );

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", BannerImg);

    const ogType = document.querySelector("meta[property='og:type']");
    if (ogType) ogType.setAttribute("content", "website");

  }, []);

  return (
    <div>
      <Hero />
      <CourseDetails />
      <PricingDetails />
      <UniqueOfferings />
      <WhyNeelTech />
      <LearningOptions />
      <UpcomingDemo />
      <StudentPlacements />
      <Footer />
      {/* <AdvancedTrainingLms /> */}
    </div>
  );
};

export default Home;