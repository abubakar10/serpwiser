import { Link } from "react-router-dom";
import { homeServices, seoSubServices } from "../data/services";

const icons = {
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  megaphone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  target: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">What we do</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 max-w-3xl">
          Comprehensive Digital Marketing Services to Boost Your Business Growth
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          We offer a full suite of digital marketing solutions designed to increase your online visibility, engage your audience, and drive measurable results.
        </p>
        <Link
          to="/services/seo"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-100 text-blue-600 font-semibold hover:bg-sky-200 transition-colors text-sm mb-12"
        >
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Service detail panel (SEO sub-services) - visible on larger screens as accent */}
          <div className="hidden lg:block absolute -left-4 top-0 w-56 bg-blue-800 text-white rounded-2xl p-5 shadow-xl z-10">
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm font-semibold">SEO Services</span>
              <button type="button" className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30" aria-label="Close">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-2 text-sm">
              {seoSubServices.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {homeServices.map((service) => (
            <div
              key={service.path}
              className="relative bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>
              <Link
                to={service.path}
                className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
