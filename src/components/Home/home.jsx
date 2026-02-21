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

const Home = () => {
  return (
    <div>
      <Hero />
      <CourseDetails />
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
