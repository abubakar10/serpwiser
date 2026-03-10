import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import ServicePage from "./pages/ServicePage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
