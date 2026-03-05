import { useEffect } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Navbar/navbar";
import AboutUsHero from "./aboutushero";
import AboutUsToggle from "./aboutustoggle";
import BannerImg from "/assets/banner_slider.png"; // optional if needed

const AboutUs = () => {

  useEffect(() => {
    // Page Title
    document.title =
      "Neel Technologies Bangalore | Leading IT Training Institute in Bangalore";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Neel Technologies Bangalore is a leading IT training institute offering professional software training, cloud & DevOps courses, AWS & Azure certification, cyber security, Python, networking, and 100% placement assistance."
      );
    }

    // Author
    const authorMeta = document.querySelector("meta[name='author']");
    if (authorMeta) {
      authorMeta.setAttribute("content", "Neel Technologies");
    }

    // Open Graph Title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Neel Technologies Bangalore | Trusted IT Education Provider"
      );
    }

    // Open Graph Description
    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Industry-focused IT certification training with real-time projects, experienced trainers, and career-focused programs in Bangalore."
      );
    }

    // Open Graph Type
    const ogType = document.querySelector("meta[property='og:type']");
    if (ogType) ogType.setAttribute("content", "website");

    // Open Graph Image (Optional)
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", BannerImg);

  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <AboutUsHero />
      <AboutUsToggle />
      <Footer />
    </div>
  );
};

export default AboutUs;