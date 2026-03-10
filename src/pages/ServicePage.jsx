import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { servicePages } from "../data/servicePages";

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? servicePages[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Service not found</h1>
          <Link to="/" className="text-blue-600 font-semibold hover:underline">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link to="/" className="text-slate-500 hover:text-blue-600 text-sm">Home</Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-800 font-medium">{service.title}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{service.title}</h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">{service.description}</p>

        {service.subServices && service.subServices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What we offer</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.subServices.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Benefits</h2>
            <div className="flex flex-wrap gap-3">
              {service.benefits.map((b) => (
                <span key={b} className="px-4 py-2 rounded-xl bg-sky-50 text-blue-700 font-medium text-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pt-8 border-t border-slate-200">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
