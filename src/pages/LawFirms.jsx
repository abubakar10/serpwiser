import { useState } from "react";
import { Link } from "react-router-dom";

const Check = () => (
  <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const practiceAreas = [
  { emoji: "⚖️", name: "Personal Injury", desc: "Car accidents, slip and fall, medical malpractice" },
  { emoji: "👨‍👩‍👧", name: "Family Law", desc: "Divorce, custody, adoption, domestic violence" },
  { emoji: "🛡️", name: "Criminal Defense", desc: "DUI, assault, drug charges, white collar crime" },
  { emoji: "🌍", name: "Immigration Law", desc: "Visas, green cards, citizenship, deportation defense" },
  { emoji: "📋", name: "Estate Planning", desc: "Wills, trusts, probate, power of attorney" },
  { emoji: "🏢", name: "Business Law", desc: "Contracts, disputes, formation, employment" },
  { emoji: "🏡", name: "Real Estate Law", desc: "Closings, disputes, landlord-tenant, zoning" },
  { emoji: "💼", name: "Employment Law", desc: "Wrongful termination, discrimination, wage claims" },
];

const included = [
  "Full GBP audit — every gap across your firm's listing identified",
  "Practice area category optimization — ensuring Google knows your specialties",
  "Authoritative firm description optimized for your practice areas and city",
  "Services section — every practice area listed with descriptions for Google",
  "Professional photo optimization — office, team, attorneys, reception",
  "Weekly GBP posts — legal tips, firm news, community involvement",
  "Review generation strategy designed for attorney ethics compliance",
  "Monitoring and responding to all reviews within 24 hours",
  "Q&A section with the questions potential clients actually search for",
  "Citation building across legal directories — Avvo, FindLaw, Justia, Martindale",
  "NAP consistency across all directories and legal listings",
  "Monthly ranking report — your position vs. competing firms with screenshots",
  "Direct WhatsApp access to your specialist",
];

const faqs = [
  {
    q: "Is Google Business Profile optimization compliant with bar association advertising rules?",
    a: "Yes — completely. Google Business Profile optimization is your organic business listing appearing when someone searches locally. It is not an advertisement, it is not a sponsored placement, and it does not involve making claims about case outcomes. It falls entirely outside attorney advertising regulations in every state bar. We are familiar with this distinction and every action we take complies fully.",
  },
  {
    q: "How does GBP optimization help law firms specifically?",
    a: "When someone needs a personal injury attorney after an accident or a divorce lawyer on a Sunday evening, the first thing they do is search Google Maps. They call one of the top 3 firms they see. If your firm is not in that top 3, you do not exist to that potential client. Law firm GBP optimization also builds review volume — which is one of the most trusted signals for legal consumers who have never heard of your firm.",
  },
  {
    q: "How long does it take to see results for law firms?",
    a: "Most law firm clients see measurable ranking movement within 30-60 days. Personal injury and criminal defense in major markets like Houston, LA, or New York are highly competitive and may take 60-90 days for top 3 positioning. Smaller markets and less competitive practice areas like estate planning or immigration often move faster.",
  },
  {
    q: "What about referrals — do law firms that rely on referrals need this?",
    a: "Absolutely. Here is what we see repeatedly: a client gets a referral for your firm, looks you up on Google, and if a competing firm shows up above you in Maps or has more reviews, some of those referrals go elsewhere before they ever call you. GBP optimization protects your referral pipeline as much as it generates new direct inquiries.",
  },
  {
    q: "Do you work with solo practitioners and small firms?",
    a: "Yes — in fact, smaller firms often see the fastest results because they are competing in a narrower local market. A solo personal injury attorney or a 3-person family law firm in a mid-size city can reach the top 3 significantly faster than the same practice area in a top-10 metro.",
  },
  {
    q: "What legal directories are included in citation building?",
    a: "We build and clean up citations across 50+ directories including Avvo, FindLaw, Justia, Martindale-Hubbell, Lawyers.com, Super Lawyers, Google Scholar, Yelp, and all major local business directories. Legal directories carry strong authority signals for law firm local rankings specifically.",
  },
];

export default function LawFirms() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(14,165,233,0.1),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Law Firm Local SEO</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Get Your Law Firm Into Google Maps Top 3 — More Cases, Every Month
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-6 leading-relaxed">
            We specialize in Google Business Profile optimization for law firms. When someone needs an attorney in your city right now, we make sure they find your firm first — and call you instead of a competitor.
          </p>
          <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl px-5 py-3 inline-flex items-start gap-3 mb-8">
            <svg className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-sky-200 text-sm leading-relaxed">
              <strong>Bar Association Compliant:</strong> GBP optimization is your organic business listing — not advertising. It falls entirely outside attorney advertising regulations in every state bar.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 hover:-translate-y-0.5">
              Get a Free Firm Audit
            </Link>
            <Link to="/gbp-optimization" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
              See What's Included
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-700">
            {[
              { stat: "70%", label: "Of Map Pack clicks go to the top 3 firms" },
              { stat: "$400/mo", label: "Flat — no hidden fees" },
              { stat: "30-60 days", label: "To see ranking movement" },
              { stat: "0", label: "Contracts — cancel any time" },
            ].map((s) => (
              <div key={s.label} className="px-5 py-5 text-center">
                <p className="text-2xl font-bold text-cyan-400">{s.stat}</p>
                <p className="text-slate-400 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">The Reality</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                People searching for an attorney right now are calling your competitors
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Legal searches have high intent and high urgency. Someone who just had an accident, received divorce papers, or got arrested is not browsing — they are ready to call immediately. They call one of the top 3 firms on Google Maps.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Even referrals Google your firm before they call. If a competing firm shows up higher than you on Maps or has significantly more reviews, some of those referrals go elsewhere before they ever reach you.
              </p>
              <div className="space-y-3">
                {[
                  "Legal consumers read reviews more carefully than almost any other industry",
                  "A personal injury client can be worth tens of thousands in fees — one new case covers months of this service",
                  "Most law firm GBP listings are poorly maintained and easy to outrank with proper optimization",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <Check />
                    <span className="text-slate-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <p className="text-cyan-400 font-semibold text-sm mb-5">Google Maps — "Personal injury attorney Houston TX"</p>
              <div className="space-y-3 mb-4">
                {[
                  { rank: "1", name: "Hicks & Hubris Law Group", rating: "4.9", reviews: "312" },
                  { rank: "2", name: "The Texas Law Firm", rating: "4.7", reviews: "198" },
                  { rank: "3", name: "Warrior Advocates PLLC", rating: "4.8", reviews: "156" },
                ].map((b) => (
                  <div key={b.rank} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 font-bold text-sm shrink-0">{b.rank}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{b.name}</p>
                      <p className="text-xs text-slate-400">⭐ {b.rating} ({b.reviews} reviews)</p>
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold shrink-0">Gets the case</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="bg-red-500/20 rounded-xl p-3 border border-red-400/30">
                  <p className="text-red-300 text-sm font-semibold">Your firm — ranking #9</p>
                  <p className="text-red-300/70 text-xs mt-0.5">Missing high-intent case inquiries every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Practice Areas</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Law firm specialties we work with</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">We work with law firms across all practice areas. The process is the same — we optimize your listing for the specific keywords your clients search for.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {practiceAreas.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-cyan-200 hover:shadow-sm transition-all duration-200">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-slate-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything at $400/month — nothing extra</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">One flat fee. No contracts. No add-ons. Everything below is included every month.</p>
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <p className="text-cyan-400 font-semibold text-sm mb-1">Law Firm GBP Optimization</p>
                <p className="text-4xl font-bold text-white mb-1">$400<span className="text-xl text-slate-400">/month</span></p>
                <p className="text-slate-400 text-sm mb-6">Month to month — cancel any time</p>
                <Link to="/contact" className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200">
                  Get a Free Firm Audit
                </Link>
                <p className="text-center text-slate-500 text-xs mt-3">No commitment — free look at your listing first</p>
              </div>
            </div>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <Check />
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Questions from law firm partners and administrators</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === i ? "border-cyan-200 bg-white" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                <button type="button" className="w-full text-left px-6 py-5 flex items-start justify-between gap-4" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-semibold text-slate-900 text-[15px] leading-snug">{faq.q}</span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5 ${open === i ? "bg-cyan-500 text-white rotate-45" : "bg-slate-100 text-slate-500"}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </button>
                {open === i && <div className="px-6 pb-6"><p className="text-slate-600 leading-relaxed text-[15px]">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,182,212,0.2),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to bring in more cases through Google?</h2>
          <p className="text-slate-300 text-lg mb-8">Free audit of your firm's Google Business Profile. We will show you exactly what is missing and what it would take to get into the top 3 for your practice area.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 hover:-translate-y-0.5">
            Get Your Free Firm Audit
          </Link>
          <p className="text-slate-400 text-sm mt-4">$400/month · No contract · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
