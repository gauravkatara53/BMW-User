import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/common/WHNotFoundPage";
import { ToastContainer } from "react-toastify";
import { AboutPage, LandingPage } from "@/screens";

import ContactUs from "./screens/contact-us/ContactPage";
import Partner from "./screens/PartnerPage/PartnerPage";
import ArticlePage from "./screens/ArticlePage/Index";
import APage1 from "./screens/ArticlePage/DifferentArticles/APage1";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import CommingSoon from "./components/common/commingsoon";
import { SignUpScreen } from "./screens/AuthPage/SignUp/SignUp";
import { SignInScreen } from "./screens/AuthPage/SingIn/SignIn";
import { ProfilePage } from "./screens/ProfilePage";
import { Warehouse } from "./screens/Booking/Warehouse-details/Warehouse";
import { ProductBuyPage } from "./screens/Booking/Warehouse-details/ProductBuyPage";
import RentalOrder from "./screens/Order/RentalOrder/RentalOrder";
import { OrderDetail } from "./screens/Order/OrderProfile/OrderDetail";
import BuyOrder from "./screens/Order/BuyOrder/BuyOrder";
import ProtectedRoute from "./components/common/ProtectedRoute";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/article-page1" element={<APage1 />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="comming-soon" element={<CommingSoon />} />
          {/* auth screen */}
          <Route path="/signUp" element={<SignUpScreen />} />
          <Route path="/signIn" element={<SignInScreen />} />

          {/* proteted route */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/rental-Orders" element={<RentalOrder />} />
          <Route path="/order-info/:orderId" element={<OrderDetail />} />
          <Route path="/buy-Orders" element={<BuyOrder />} />
          <Route
            path="/warehouse-profile/:warehouseId/ProductBuyPage/:orderId"
            element={<ProductBuyPage />}
          />
          {/* Booking routes  */}
          <Route
            path="/warehouse-profile/:warehouseId"
            element={<Warehouse />}
          />
          <Route element={<ProtectedRoute />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
