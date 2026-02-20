import Footer from "../Home/Footer"
import ContactUsPage from "./contact"
import ContactAddressMainPage from "./contactAddressMainPage"
import ContactHero from "./contactHero"

const ContactMainPage=()=>{
    return(
        <>
        <ContactHero/>
        {/* <ContactUsPage/> */}
        <ContactAddressMainPage/>
        <Footer/>
        </>
    )
}

export default ContactMainPage