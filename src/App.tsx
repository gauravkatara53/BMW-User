import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/common/WHNotFoundPage";
import { AboutPage,LandingPage } from "@/screens";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
