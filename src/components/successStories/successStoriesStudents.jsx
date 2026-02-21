import AswiniFeedback from "../../../public/assets/feedback_ashwini.jpg";
import BhagyaFeedback from "../../../public/assets/feedback_bhagya.jpg";
import CelestianFeedback from "../../../public/assets/feedback_celestian.jpg";
import EricFeedback from "../../../public/assets/feedback_eric.jpg";
import MayuriFeedback from "../../../public/assets/feedback_mayuri.jpg";
import RashmiFeedback from "../../../public/assets/feedback_rashmi.jpg";
import RavishFeedback from "../../../public/assets/feedback_raveesh.jpg";
import ShrushtiFeedback from "../../../public/assets/feedback_shrushti.jpg";
import ShruthiFeedback from "../../../public/assets/feedback_shruthi.jpg";
import SowmyaFeedback from "../../../public/assets/feedback_sowmya.jpg";

const images = [
  AswiniFeedback,
  BhagyaFeedback,
  CelestianFeedback,
  EricFeedback,
  MayuriFeedback,
  RashmiFeedback,
  RavishFeedback,
  ShrushtiFeedback,
  ShruthiFeedback,
  SowmyaFeedback,
];

const SuccessStoriesStudents = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`Student Feedback ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesStudents;
