import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pt-24 pb-16" aria-labelledby="privacy-heading">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 id="privacy-heading" className="text-4xl font-bold text-slate-800 mb-2">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: 2026.</p>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Introduction</h2>
            <p>SERP Wiser (&quot;we&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our website and services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Information we collect</h2>
            <p>We may collect information you provide (e.g. name, email, phone) when you contact us or submit forms. We use this to respond to inquiries and improve our services. We do not sell your data to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Cookies and tracking</h2>
            <p>We may use cookies and similar technologies for analytics and site functionality. You can manage cookie preferences in your browser.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Contact us</h2>
            <p>For questions about this privacy policy, contact us at contact@serpwiser.com.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
