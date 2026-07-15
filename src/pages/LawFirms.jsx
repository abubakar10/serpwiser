import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const practiceAreas = [
  { name: "Personal Injury", emoji: "⚖️" },
  { name: "Family Law", emoji: "👨‍👩‍👧" },
  { name: "Criminal Defense", emoji: "🛡️" },
  { name: "Immigration Law", emoji: "🌍" },
  { name: "Estate Planning", emoji: "📋" },
  { name: "Real Estate Law", emoji: "🏢" },
];

const included = [
  "Full Google Business Profile audit and optimization for law firms",
  "Practice area optimization — rank for your specific legal services",
  "Professional photo optimization and weekly posts",
  "Review generation strategy designed for attorney ethics compliance",
  "Monitoring and responding to all Google reviews",
  "Q&A section with key legal questions prospects ask",
  "Local citation cleanup and consistency across legal directories",
  "Monthly ranking report — your position vs. competing firms",
  "Direct WhatsApp/email access to your specialist",
];

export default function LawFirms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Law Firm Local SEO</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Get Your Law Firm Into Google Maps Top 3 — More Cases, Every Month
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We specialize in Google Business Profile optimization for law firms. When someone needs an attorney in your city, they search Google Maps. We make sure they find your firm first — and call you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5">
              Get a Free Firm Audit
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Practice Areas We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {practiceAreas.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-3 shadow-sm">
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-semibold text-slate-800">{p.name}</span>
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
                People searching for an attorney right now are calling your competitors
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                When someone needs a personal injury attorney after an accident or a criminal defense lawyer on a Sunday night, they open Google Maps. They call one of the top 3 firms they see — and that is it.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Even referrals Google your firm before they call. If a competing firm shows up higher than you, some of those referrals go elsewhere. We fix this.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <p className="text-cyan-400 font-semibold text-sm mb-4">Google Maps — "Personal injury attorney Houston TX"</p>
              <div className="space-y-3">
                {["#1 — Hicks & Hubris Law ⭐ 4.9 (203 reviews)", "#2 — The Texas Law Group ⭐ 4.7 (156 reviews)", "#3 — Warrior Law Firm ⭐ 4.8 (94 reviews)"].map((r, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 font-bold text-sm shrink-0">{i + 1}</span>
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="bg-red-500/20 rounded-xl p-3 border border-red-400/30">
                    <p className="text-red-300 text-sm font-medium">Your firm — ranking #9, missing high-intent prospects daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-sky-50 border-y border-sky-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Bar Association Compliant:</strong> Google Business Profile optimization is not advertising — it is your organic business listing appearing when someone searches locally. It falls entirely outside attorney advertising regulations in every state bar. We are familiar with the distinction and our approach is fully compliant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything Included — $400/month</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">No contracts. Month to month. Cancel any time. One flat fee covers everything.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to bring in more cases through Google?</h2>
          <p className="text-slate-300 text-lg mb-8">Free audit of your firm's Google Business Profile. No commitment required.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5">
            Get Your Free Firm Audit
          </Link>
          <p className="text-slate-400 text-sm mt-4">$400/month · No contract · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
