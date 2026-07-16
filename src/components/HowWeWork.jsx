import { Link } from "react-router-dom";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const steps = [
  {
    num: "01",
    gradient: "from-sky-500 to-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "GBP Audit",
    description: "We pull up your Google Business Profile and do a full audit — categories, description, photos, reviews, posts, ranking position. We find every gap holding you back before touching anything.",
  },
  {
    num: "02",
    gradient: "from-cyan-500 to-teal-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Full Optimization",
    description: "We rewrite and optimize every section of your GBP — primary and secondary categories, keyword-rich description, services, attributes, photos, and Q&A. Week 1 delivers a completely transformed listing.",
  },
  {
    num: "03",
    gradient: "from-violet-500 to-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Reviews + Authority",
    description: "We set up your review generation strategy and respond to every review within 24 hours. We also publish weekly GBP posts and build local citations — all the signals Google uses to decide who ranks in the top 3.",
  },
  {
    num: "04",
    gradient: "from-amber-500 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Monthly Report",
    description: "Every month you get a clear ranking report — where you were before we started, where you are now, with screenshots. Review count, impressions, calls from Google. Real numbers, no fluff.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50" aria-labelledby="how-we-work-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,rgba(14,165,233,0.05),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>How We Work</SectionLabel>
        <h2 id="how-we-work-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">How We Get You Into the Google Maps Top 3</h2>
        <p className="text-slate-600 text-lg max-w-2xl mb-12 leading-relaxed">
          A simple, proven 4-step process used for every client. No guesswork, no generic strategies — just the specific actions that move local businesses up the Google Maps rankings.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-200 text-sm mb-14 shadow-lg shadow-slate-900/20"
          aria-label="Get started with a free GBP audit"
        >
          Get a Free GBP Audit
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="group">
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-slate-200/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`} />
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-xl shadow-slate-900/10`}>
                  <span className="text-white [&_svg]:stroke-current">{step.icon}</span>
                </div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Step {step.num}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
