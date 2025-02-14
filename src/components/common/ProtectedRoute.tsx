import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("accessToken"); // Retrieve token from cookies

  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
