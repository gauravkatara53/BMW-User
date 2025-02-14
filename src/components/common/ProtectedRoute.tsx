import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = Cookies.get("accessToken"); // ✅ Read token from cookies
    setIsAuthenticated(!!token); // Convert token presence to boolean
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>; // Prevent flicker

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
