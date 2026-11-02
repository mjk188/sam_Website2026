import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Attend from "./pages/Attend";
import Collaborate from "./pages/Collaborate";
import Sponsor from "./pages/Sponsor";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="get-involved/attend" element={<Attend />} />
        <Route path="get-involved/collaborate" element={<Collaborate />} />
        <Route path="get-involved/sponsor" element={<Sponsor />} />
        <Route path="get-involved/donate" element={<Navigate to="/get-involved/sponsor#contribute" replace />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="join" element={<Join />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
