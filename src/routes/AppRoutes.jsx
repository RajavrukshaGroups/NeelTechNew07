import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/home";
import About from "../components/AboutUs/aboutus";
import MCSETraining from "../components/CourseComponents/SystemAdministrator/MCSE/mcse";
import LinuxTraining from "../components/CourseComponents/SystemAdministrator/Linux/linux";
import CCNATraining from "../components/CourseComponents/SystemAdministrator/CCNA/ccna";
import IntuneTraining from "../components/CourseComponents/SystemAdministrator/Intune/intune";
import O365Training from "../components/CourseComponents/SystemAdministrator/O365/0365Training";
import TrainingOption from "../components/TrainingOption/TrainingOption";
import WindowsPowershellTrianing from "../components/CourseComponents/Automation/WindowsPowershell/windowsPowershell";
import PythonTraining from "../components/CourseComponents/Automation/Python/python";
import MicrosoftAzureTraining from "../components/CourseComponents/CloudTechnology/MicrosoftAzure/microsoftAzure";
import MicrosoftEntraIdTraining from "../components/CourseComponents/CloudTechnology/EntraID/entraID";
import AWSTraining from "../components/CourseComponents/CloudTechnology/AWS/AWS";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/:tab" element={<About />} />
      <Route
        path="/mcse-training-certification-course"
        element={<MCSETraining />}
      />
      <Route
        path="/linux-training-certification-course"
        element={<LinuxTraining />}
      />
      <Route
        path="/ccna-training-certification-course"
        element={<CCNATraining />}
      />
      <Route
        path="/intune-training-certification-course"
        element={<IntuneTraining />}
      />
      <Route
        path="/O365-training-certification-course"
        element={<O365Training />}
      />
      <Route
        path="/powershell-training-certification-course"
        element={<WindowsPowershellTrianing />}
      />
      <Route
        path="/python-training-certification-course"
        element={<PythonTraining />}
      />
      <Route
        path="/microsoft-azure-training-certification-course"
        element={<MicrosoftAzureTraining />}
      />
      <Route
        path="/microsoft-entra-id-training-certification-course"
        element={<MicrosoftEntraIdTraining />}
      />
      <Route
        path="/aws-training-certification-course"
        element={<AWSTraining />}
      />
      <Route path="/training-option" element={<TrainingOption />} />
    </Routes>
  );
};

export default AppRoutes;
