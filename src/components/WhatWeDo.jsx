import { Link } from "react-router-dom";
import { homeServices } from "../data/services";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const icons = {
  gbp: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  maps: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  reviews: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  seo: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

const gradients = [
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-teal-600",
  "from-amber-500 to-orange-500",
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/30" aria-labelledby="what-we-do-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,165,233,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>What We Do</SectionLabel>
        <h2 id="what-we-do-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 max-w-3xl leading-tight">
          Everything You Need to Dominate Google Maps in Your Area
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mb-10 leading-relaxed">
          From GBP optimization and review generation to full local SEO — we cover every ranking signal Google uses to decide who shows up in the top 3.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-200 shadow-glow-sky hover:-translate-y-0.5 text-sm mb-14"
        >
          See All Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServices.map((service, i) => (
            <div
              key={service.path}
              className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 lg:p-8 overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[i % gradients.length]}`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-5 shadow-lg [&_svg]:stroke-white`}>
                <span className="text-white">{icons[service.icon]}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-[14px] leading-relaxed mb-5">{service.description}</p>
              <Link
                to={service.path}
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 text-slate-800 hover:text-sky-600 hover:gap-3 underline-offset-4 hover:underline"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
