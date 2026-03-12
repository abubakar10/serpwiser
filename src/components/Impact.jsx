import { Link } from "react-router-dom";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-cyan-400 rounded-full" />
    <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const metrics = [
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 95, label: "Project Success", suffix: "%" },
  { value: 99, label: "ROI Growth", suffix: "%" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" aria-labelledby="impact-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,182,212,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_80%,rgba(99,102,241,0.1),transparent)]" />
      <div className="absolute inset-0 grain" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Our Results</SectionLabel>
        <h2 id="impact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-14 max-w-2xl leading-tight">
          We are passionate about helping businesses grow online.
        </h2>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-14">
          {metrics.map((m, idx) => (
            <div key={m.label} className="flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id={`impact-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={`url(#impact-grad-${idx})`}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${m.value * 2.64} 265`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white">
                  {m.value}{m.suffix}
                </span>
              </div>
              <p className="mt-5 font-semibold text-white/90 text-lg">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
          <p className="text-white font-semibold text-lg md:text-xl">Ready to Get Started?</p>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5 shrink-0"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
