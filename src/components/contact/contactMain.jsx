// import Footer from "../Home/Footer"
// import ContactUsPage from "./contact"
// import ContactAddressMainPage from "./contactAddressMainPage"
// import ContactHero from "./contactHero"

// const ContactMainPage=()=>{
//     return(
//         <>
//         <ContactHero/>
//         {/* <ContactUsPage/> */}
//         <ContactAddressMainPage/>
//         <Footer/>
//         </>
//     )
// }

// export default ContactMainPage

import { useEffect } from "react";
import Footer from "../Home/Footer";
import ContactAddressMainPage from "./contactAddressMainPage";
import ContactHero from "./contactHero";
import BannerImg from "/assets/banner_slider.png";

const ContactMainPage = () => {
  useEffect(() => {
    // Optimized Title
    document.title =
      "Contact Neel Technologies | Best AWS & Cloud Training Institute in Bangalore";

    // Meta Description
    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Contact Neel Technologies, the best AWS and cloud training institute in Bangalore. Get details about AWS course fees, placement assistance, Google Cloud training, and certification programs.",
      );
    }

    // Keywords
    const keywordsMeta = document.querySelector("meta[name='keywords']");
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "aws training institute in bangalore, cloud training institute in bangalore, google cloud training institute in bangalore, best aws institute in bangalore, it training institute in bangalore, aws training near me, cloud computing institute near me, google cloud training near me, aws course fees in bangalore, cloud certification institute bangalore, aws coaching centre in bangalore, best cloud institute contact number",
      );
    }

    // Open Graph
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "AWS & Cloud Training Institute in Bangalore | Contact Us",
      );
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']",
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Get in touch with Neel Technologies for AWS, Google Cloud, and Cloud Computing certification training in Bangalore with placement support.",
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
      "https://www.neeltechnologies.com/contact-us",
    );

    // Local Business Schema (VERY IMPORTANT FOR GOOGLE MAP RANKING)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Neel Technologies",
      url: "https://www.neeltechnologies.com",
      logo: BannerImg,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-6361866299",
        contactType: "customer support",
      },
    });

    document.head.appendChild(script);
  }, []);

  return (
    <>
      <ContactHero />
      <ContactAddressMainPage />
      <Footer />
    </>
  );
};

export default ContactMainPage;
