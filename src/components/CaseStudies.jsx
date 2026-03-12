import { useState } from "react";
import { Link } from "react-router-dom";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const cases = [
  {
    title: "SEO Campaign",
    subtitle: "E-commerce Growth",
    description: "How we increased organic traffic by 180% and conversion rate by 45% for an online retailer.",
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    shadow: "shadow-[0_25px_60px_-15px_rgba(6,182,212,0.35)]",
  },
  {
    title: "PPC Campaign",
    subtitle: "Brand Visibility",
    description: "A content and SEO strategy that tripled brand searches and established thought leadership.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    shadow: "shadow-[0_25px_60px_-15px_rgba(139,92,246,0.35)]",
  },
  {
    title: "Social Media",
    subtitle: "Local SEO Success",
    description: "Dominating local search results and driving qualified leads for a service business.",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    shadow: "shadow-[0_25px_60px_-15px_rgba(14,165,233,0.35)]",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section id="case-studies" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30" aria-labelledby="case-studies-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_30%,rgba(14,165,233,0.05),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Case Studies</SectionLabel>
        <h2 id="case-studies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Explore our success stories and see how we&apos;ve helped businesses grow.
        </h2>
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div
                key={c.title}
                className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-card hover:shadow-card-hover ${
                  active === i
                    ? "border-slate-900 scale-[1.02] " + c.shadow
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
                onMouseEnter={() => setActive(i)}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${c.gradient} flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-4 shadow-section">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="relative text-white font-bold text-lg">{c.title}</h3>
                  <p className="relative text-white/90 text-sm mt-1">{c.subtitle}</p>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-slate-600 text-[15px] leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {cases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  active === i ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`View case ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-200 shadow-section hover:-translate-y-0.5"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
