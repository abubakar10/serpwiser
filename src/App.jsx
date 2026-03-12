import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteSEO from "./components/RouteSEO";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

function PageFallback() {
  return <div className="min-h-[60vh]" aria-hidden="true" />;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteSEO />
        <div className="min-h-screen flex flex-col bg-white text-slate-800">
          <Header />
          <main id="main-content" className="flex-1">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-study" element={<CaseStudy />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
