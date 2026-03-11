// components/ProtectedRoute/ProtectedRoute.jsx
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LeadPopup from "../LeadPopup/LeadPopup";

const ProtectedRoute = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user has already submitted lead for this session
    const leadSubmitted = localStorage.getItem("leadSubmitted");
    const currentPath = location.pathname;
    
    // Store the intended path to redirect after popup
    if (!leadSubmitted) {
      sessionStorage.setItem("intendedPath", currentPath);
      setShowPopup(true);
    } else {
      setIsAuthenticated(true);
    }
  }, [location]);

  const handleSuccess = () => {
    setIsAuthenticated(true);
    setShowPopup(false);
    
    // Get the intended path or default to home
    const intendedPath = sessionStorage.getItem("intendedPath") || location.pathname;
    sessionStorage.removeItem("intendedPath");
    
    // Navigate to the intended path
    window.location.href = intendedPath;
  };

  // If authenticated, show the actual component
  if (isAuthenticated) {
    return children;
  }

  // Show popup if not authenticated
  return (
    <>
      {showPopup && (
        <LeadPopup 
          open={showPopup} 
          setOpen={setShowPopup} 
          onSuccess={handleSuccess}
        />
      )}
      {/* Show loading or nothing while checking */}
      {!showPopup && !isAuthenticated && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;