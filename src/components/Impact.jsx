import { Link } from "react-router-dom";

const metrics = [
  { value: 90, label: "Client Retention", suffix: "%" },
  { value: 95, label: "Project Success", suffix: "%" },
  { value: 99, label: "ROI", suffix: "%" },
];

export default function Impact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Our Impact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
          We are passionate about helping businesses grow online.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${m.value * 2.83} 283`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-bold text-slate-800">
                  {m.value}{m.suffix}
                </span>
              </div>
              <p className="mt-4 font-semibold text-slate-700">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-sky-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-800 font-semibold text-lg">Ready to boost your digital presence?</p>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-md shrink-0"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
