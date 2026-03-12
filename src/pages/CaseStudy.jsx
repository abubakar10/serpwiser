import { Link } from "react-router-dom";
import { useEffect } from "react";

const cases = [
  {
    title: "E-commerce Growth",
    description: "How we increased organic traffic by 180% and conversion rate by 45% for an online retailer.",
    gradient: "from-blue-500 to-sky-600",
    results: ["180% organic traffic", "45% conversion lift", "12-month engagement"],
  },
  {
    title: "Brand Visibility",
    description: "A content and SEO strategy that tripled brand searches and established thought leadership.",
    gradient: "from-indigo-500 to-purple-600",
    results: ["3x brand searches", "Thought leadership", "Content hub"],
  },
  {
    title: "Local SEO Success",
    description: "Dominating local search results and driving qualified leads for a service business.",
    gradient: "from-sky-500 to-blue-600",
    results: ["Top 3 local pack", "Qualified leads", "GMB optimization"],
  },
];

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16" aria-labelledby="case-studies-page-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2" aria-hidden="true">Our Case Studies</p>
        <h1 id="case-studies-page-heading" className="text-4xl font-bold text-slate-800 mb-6">
          Explore our success stories and see how we&apos;ve helped businesses grow.
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mb-10">Real results from SEO, content marketing, PPC, and digital strategy projects.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              <div className={`aspect-video bg-gradient-to-br ${c.gradient} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-2">{c.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{c.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {c.results.map((r) => (
                    <li key={r} className="text-xs font-medium text-blue-600 bg-sky-50 px-2 py-1 rounded">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
