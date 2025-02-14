import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiService } from "../APIService/ApiService";
import ClipLoader from "react-spinners/ClipLoader";

const ProtectedRoute = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiService.get("/user/verify"); // ✅ Use API service

        setIsAuthenticated(true);
        console.log("✅ User is authenticated:", response);
      } catch (error) {
        setIsAuthenticated(false);
        console.log("❌ User is not authenticated:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, []);

  if (isChecking)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color="#6d52ef" size={50} />
      </div>
    );

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
