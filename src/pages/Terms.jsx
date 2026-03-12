import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pt-24 pb-16" aria-labelledby="terms-heading">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 id="terms-heading" className="text-4xl font-bold text-slate-800 mb-2">Terms &amp; Conditions</h1>
        <p className="text-slate-600 mb-8">Last updated: 2026.</p>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Agreement to terms</h2>
            <p>By using the SERP Wiser website and services, you agree to these terms. Our services are provided &quot;as is&quot; and we do not guarantee specific results. You are responsible for the accuracy of information you provide.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Changes</h2>
            <p>We retain the right to modify these terms. Continued use after changes constitutes acceptance.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Contact</h2>
            <p>For questions about these terms, contact contact@serpwiser.com.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
