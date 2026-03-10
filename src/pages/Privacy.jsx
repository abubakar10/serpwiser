import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-slate-800 mb-6">Privacy Policy</h1>
        <p className="text-slate-600 mb-4">Last updated: 2026.</p>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
          <p>SERP Wiser ("we") respects your privacy. This policy describes how we collect, use, and protect your information when you use our website and services.</p>
          <p>We may collect information you provide (e.g. name, email, phone) when you contact us or submit forms. We use this to respond to inquiries and improve our services. We do not sell your data to third parties.</p>
          <p>We may use cookies and similar technologies for analytics and site functionality. You can manage cookie preferences in your browser.</p>
          <p>For questions, contact us at contact@serpwiser.com.</p>
        </div>
      </div>
    </main>
  );
}
