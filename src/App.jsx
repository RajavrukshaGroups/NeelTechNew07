import BackToTop from "./components/BackToTop/backToTop";
import PageLoader from "./components/Loader/pageLoader";
import Navbar from "./components/Navbar/navbar";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import SocialMediaIcons from "./components/SocialMediaIcons/socialMediaIcons";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <PageLoader />
      <ScrollToTop />
      <Navbar />
      <SocialMediaIcons />
      <AppRoutes />
      <BackToTop />
    </>
  );
}

export default App;
