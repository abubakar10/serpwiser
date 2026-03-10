import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-slate-800 mb-6">Terms & Conditions</h1>
        <p className="text-slate-600 mb-4">Last updated: 2026.</p>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
          <p>By using the SERP Wiser website and services, you agree to these terms. Our services are provided "as is" and we do not guarantee specific results. You are responsible for the accuracy of information you provide.</p>
          <p>We retain the right to modify these terms. Continued use after changes constitutes acceptance. For questions, contact contact@serpwiser.com.</p>
        </div>
      </div>
    </main>
  );
}
