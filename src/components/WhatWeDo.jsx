import { Link } from "react-router-dom";
import { homeServices, seoSubServices } from "../data/services";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const icons = {
  chart: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h6V3H3v10zm0 8h6v-6H3v6zm8-18v10h10V3H11zm0 18h10v-6H11v6z" />
    </svg>
  ),
  megaphone: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  target: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/30" aria-labelledby="what-we-do-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,165,233,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>What we do</SectionLabel>
        <h2 id="what-we-do-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 max-w-3xl leading-tight">
          Comprehensive Digital Marketing Services to Boost Your Business Growth
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mb-10 leading-relaxed">
          We offer a full suite of digital marketing solutions—including SEO, content marketing, PPC, and web design—designed to increase your online visibility, engage your audience, and drive measurable results.
        </p>
        <Link
          to="/services/seo"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-200 shadow-glow-sky hover:-translate-y-0.5 text-sm mb-14"
        >
          Our Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[14rem_1fr_1fr_1fr] gap-6 lg:gap-8">
          {/* SEO panel – first column on lg, no overlap */}
          <div className="hidden lg:block w-full min-w-0 rounded-2xl p-6 shadow-section bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 border border-slate-700/50 self-start">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-semibold text-slate-200">SEO Services</span>
              <button type="button" className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-200 text-slate-200 hover:text-white" aria-label="Close">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1 text-sm">
              {seoSubServices.map((item) => (
                <li key={item}>
                  <Link
                    to="/services/seo"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {homeServices.map((service, i) => {
            const gradients = [
              "from-sky-500 to-blue-600",
              "from-violet-500 to-purple-600",
              "from-cyan-500 to-teal-600",
            ];
            const gradient = gradients[i % gradients.length];
            return (
              <div
                key={service.path}
                className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 lg:p-8 overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg [&_svg]:stroke-white`}>
                  <span className="text-white">{icons[service.icon]}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 text-slate-800 hover:text-sky-600 hover:gap-3 underline-offset-4 hover:underline"
                  aria-label={`Read more about ${service.title}`}
                >
                  Read more about {service.title}
                  <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
