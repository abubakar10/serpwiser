import { useState } from "react";
import { Link } from "react-router-dom";

const cases = [
  {
    title: "E-commerce Growth",
    description: "How we increased organic traffic by 180% and conversion rate by 45% for an online retailer.",
    gradient: "from-blue-500 to-sky-600",
  },
  {
    title: "Brand Visibility",
    description: "A content and SEO strategy that tripled brand searches and established thought leadership.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Local SEO Success",
    description: "Dominating local search results and driving qualified leads for a service business.",
    gradient: "from-sky-500 to-blue-600",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Our Case Studies</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
          Explore our success stories and see how we've helped businesses grow.
        </h2>
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div
                key={c.title}
                className={`rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${
                  active === i ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => setActive(i)}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${c.gradient} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{c.title}</h3>
                  <p className="text-slate-600 text-sm">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  active === i ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`View case ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/case-study" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
