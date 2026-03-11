import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("userLead");

  if (!user) {
    return <Navigate to="/lead-form" />;
  }

  return children;
};

export default ProtectedRoute;