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

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
