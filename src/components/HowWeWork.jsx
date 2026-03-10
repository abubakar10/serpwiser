import { Link } from "react-router-dom";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const steps = [
  {
    num: "01",
    gradient: "from-sky-500 to-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Strategy",
    description: "We analyze your business and craft a customized plan with clear goals and KPIs.",
  },
  {
    num: "02",
    gradient: "from-cyan-500 to-teal-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Execution",
    description: "Our team implements campaigns across SEO, content, social, and paid channels.",
  },
  {
    num: "03",
    gradient: "from-violet-500 to-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Optimization",
    description: "We continuously test and refine to maximize your return on investment.",
  },
  {
    num: "04",
    gradient: "from-amber-500 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Reporting",
    description: "Transparent, regular reports so you always know how your investment is performing.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,rgba(14,165,233,0.05),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Our Approach</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">Our Approach to Delivering Results</h2>
        <p className="text-slate-600 text-lg max-w-2xl mb-12 leading-relaxed">
          We follow a proven process that combines research, strategy, and execution to deliver measurable growth for your business.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-200 text-sm mb-14 shadow-lg shadow-slate-900/20"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="group">
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-slate-200/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {/* Colored top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`} />

                    {/* One gradient circle with icon only */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-xl shadow-slate-900/10`}>
                      <span className="text-white [&_svg]:stroke-current">{step.icon}</span>
                    </div>

                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Step {step.num}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-1">{step.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                    >
                      Read More
                      <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
