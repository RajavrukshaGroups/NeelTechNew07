import BackToTop from "./components/BackToTop/backToTop";
import Navbar from "./components/Navbar/navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <BackToTop />
    </>
  );
}

export default App;
