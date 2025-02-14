import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("accessToken"); // Retrieve token from cookies
  console.log("token:", token);
  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
