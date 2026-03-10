import { useEffect } from "react";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Contact Us</h1>
        <p className="text-slate-600 mt-2">Get in touch and we'll help you grow.</p>
      </div>
      <ContactSection />
    </main>
  );
}
