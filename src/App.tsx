import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "@/screens/LandingPage";
import NotFoundPage from './components/common/WHNotFoundPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
