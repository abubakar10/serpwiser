import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const niches = [
  { name: "Plumbers", emoji: "🔧" },
  { name: "HVAC Companies", emoji: "❄️" },
  { name: "Electricians", emoji: "⚡" },
  { name: "Roofers", emoji: "🏠" },
  { name: "Landscapers", emoji: "🌿" },
  { name: "Pest Control", emoji: "🛡️" },
];

const included = [
  "Full Google Business Profile audit and optimization",
  "Categories, description, services, and attributes — all optimized",
  "Photo optimization and weekly new photo uploads",
  "Weekly GBP posts to keep your listing active",
  "Review generation strategy — simple system your team can use",
  "Responding to all reviews within 24 hours",
  "Q&A section setup and management",
  "Monthly ranking report with before vs. after screenshots",
  "Direct WhatsApp access to your specialist",
];

export default function HomeServices() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Home Services Local SEO</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Get Your Home Services Business Into Google Maps Top 3
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We specialize exclusively in home services businesses. Plumbers, HVAC companies, electricians, roofers — we know your niche and exactly what it takes to rank you above your local competitors on Google Maps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5">
              Get a Free GBP Audit
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Home Service Businesses We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {niches.map((n) => (
              <div key={n.name} className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-3 shadow-sm">
                <span className="text-2xl">{n.emoji}</span>
                <span className="font-semibold text-slate-800">{n.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Your competitors are getting the calls that should be yours
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                When someone's pipe bursts at 10pm or their HVAC dies in July, they search Google Maps and call one of the top 3 businesses. If you're not in that top 3, you don't exist to that customer.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                70% of all Google Maps clicks go to those 3 businesses. The other 7 on the page share what's left. We get you into that top 3.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <p className="text-cyan-400 font-semibold text-sm mb-4">Google Maps Search — "Plumber near Dallas TX"</p>
              <div className="space-y-3">
                {["#1 — Dallas Pro Plumbing ⭐ 4.8 (127 reviews)", "#2 — Metro Plumbing Services ⭐ 4.6 (89 reviews)", "#3 — Fast Fix Plumbing ⭐ 4.7 (64 reviews)"].map((r, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 font-bold text-sm shrink-0">{i + 1}</span>
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="bg-red-500/20 rounded-xl p-3 border border-red-400/30">
                    <p className="text-red-300 text-sm font-medium">Your business — ranking #8, invisible to most customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything Included — $400/month</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">No contracts. Month to month. Cancel any time. One flat fee covers everything.</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,182,212,0.2),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to rank above your competitors on Google Maps?</h2>
          <p className="text-slate-300 text-lg mb-8">Free audit of your Google Business Profile. No commitment required.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5">
            Get Your Free GBP Audit
          </Link>
          <p className="text-slate-400 text-sm mt-4">$400/month · No contract · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
