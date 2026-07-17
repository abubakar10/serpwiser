import { useState } from "react";
import { Link } from "react-router-dom";

const Check = () => (
  <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const niches = [
  { emoji: "🔧", name: "Plumbers", desc: "Emergency plumbing, drain cleaning, water heaters" },
  { emoji: "❄️", name: "HVAC", desc: "AC repair, heating, installation, maintenance" },
  { emoji: "⚡", name: "Electricians", desc: "Wiring, panels, EV chargers, emergency repairs" },
  { emoji: "🏠", name: "Roofers", desc: "Roof repair, replacement, inspections, gutters" },
  { emoji: "🌿", name: "Landscapers", desc: "Lawn care, tree service, irrigation, design" },
  { emoji: "🛡️", name: "Pest Control", desc: "Termites, rodents, bed bugs, preventive treatment" },
  { emoji: "🪟", name: "Window & Door", desc: "Installation, repair, replacement, sealing" },
  { emoji: "🏗️", name: "General Contractors", desc: "Remodeling, additions, renovations" },
];

const included = [
  "Full Google Business Profile audit before we touch anything",
  "Category optimization — primary and secondary categories set correctly for your trade",
  "Keyword-rich business description optimized for your services and city",
  "Services section — every trade service listed with detailed descriptions",
  "Photo optimization — job site photos, team, equipment, before and after work",
  "Weekly GBP posts — seasonal tips, promotions, completed job highlights",
  "Review generation strategy — how to ask every customer at the right moment",
  "Responding to every review within 24 hours in your brand voice",
  "Q&A setup — pre-answers to common questions homeowners ask",
  "Citation building across 50+ directories including Angie, HomeAdvisor, Houzz",
  "Monthly ranking report — your Maps position before vs. now with screenshots",
  "Direct WhatsApp access to your specialist",
];

const whyMatters = [
  { stat: "76%", label: "of people who search for a home service call or visit within 24 hours" },
  { stat: "70%", label: "of all Google Maps clicks go to the top 3 — everyone else is invisible" },
  { stat: "88%", label: "of consumers trust online reviews as much as personal recommendations" },
  { stat: "28%", label: "of local searches result in a purchase — these are buyers, not browsers" },
];

const faqs = [
  {
    q: "Which home service businesses benefit most from GBP optimization?",
    a: "Any trade business where customers search before calling — plumbers, HVAC companies, electricians, roofers, pest control, landscapers, and general contractors all see strong results. The higher the urgency of the service, the more critical your Maps ranking is. Customers in urgent situations call whoever shows up first.",
  },
  {
    q: "How long does it take to rank in the Google Maps top 3 for home services?",
    a: "Most home service clients see measurable ranking movement within 30 days. Home services responds well to GBP optimization because most businesses in the space have poorly maintained listings. Getting yours fully optimized often creates a fast competitive advantage. Highly saturated markets like plumbers in Dallas can take 60-90 days for top 3.",
  },
  {
    q: "Do I need a website to get started?",
    a: "No — GBP optimization works on your Google Maps listing, not your website. You do not need a website to start seeing results. That said, having a website does help your overall local authority and we recommend building one as a next step if you do not have one.",
  },
  {
    q: "What is the difference between GBP optimization and Google Local Service Ads?",
    a: "Google Local Service Ads (the Google Guaranteed badge) are paid ads — you pay per lead. GBP optimization improves your organic Map Pack ranking — no cost per click or per lead. Both are valuable, but organic Map Pack ranking builds long-term visibility that does not disappear when you stop paying.",
  },
  {
    q: "Can you help us get more 5-star reviews?",
    a: "Yes — review generation is included in the service. We build a simple, compliant strategy your team can use to ask every customer for a review at the right moment. This is one of the biggest ranking factors for home services specifically, and most trade businesses dramatically under-utilize it.",
  },
];

export default function HomeServices() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(14,165,233,0.1),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Home Services Local SEO</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Get Your Home Services Business Into Google Maps Top 3
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8 leading-relaxed">
            We specialize exclusively in home services businesses. Plumbers, HVAC companies, electricians, roofers — we know your trade, your customers, and exactly what it takes to rank you above local competitors on Google Maps.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300 mb-10">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />$400/month flat</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />No contracts</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />Results in 30 days</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />100% done for you</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 hover:-translate-y-0.5">
              Get a Free GBP Audit
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
            {whyMatters.map((s) => (
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
                When a pipe bursts at midnight, who gets the call?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Home service customers do not shop around. When their AC dies in July or their basement floods, they open Google Maps and call the first business they trust. That is the top 3.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                If you are ranking 6th or 8th, you do not exist to that customer. They are calling your competitor. Every single day without being in the top 3 is revenue walking out the door.
              </p>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
                {[
                  "High urgency searches convert faster — the customer is ready to hire now",
                  "Most home service GBP listings are neglected — a properly optimized listing stands out immediately",
                  "Reviews in home services carry more weight than almost any other industry",
                  "Seasonal spikes reward whoever ranks first — summer AC, winter heating, spring landscaping",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <Check />
                    <span className="text-slate-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <p className="text-cyan-400 font-semibold text-sm mb-5">Google Maps — "AC repair near Phoenix AZ"</p>
              <div className="space-y-3 mb-4">
                {[
                  { rank: "1", name: "Desert Air HVAC", rating: "4.9", reviews: "203" },
                  { rank: "2", name: "Cool Breeze Air Conditioning", rating: "4.7", reviews: "147" },
                  { rank: "3", name: "Premier HVAC Services", rating: "4.8", reviews: "91" },
                ].map((b) => (
                  <div key={b.rank} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 font-bold text-sm shrink-0">{b.rank}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{b.name}</p>
                      <p className="text-xs text-slate-400">⭐ {b.rating} ({b.reviews} reviews)</p>
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold shrink-0">Gets the call</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="bg-red-500/20 rounded-xl p-3 border border-red-400/30">
                  <p className="text-red-300 text-sm font-semibold">Your business — ranking #7</p>
                  <p className="text-red-300/70 text-xs mt-0.5">Customer already called someone else</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Who We Work With</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Home service trades we specialize in</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">We only work with local service businesses — so we understand your industry, your customers, and what drives calls.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {niches.map((n) => (
              <div key={n.name} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-cyan-200 hover:shadow-sm transition-all duration-200">
                <div className="text-3xl mb-3">{n.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-1">{n.name}</h3>
                <p className="text-slate-500 text-sm">{n.desc}</p>
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
                <p className="text-cyan-400 font-semibold text-sm mb-1">Home Services GBP Optimization</p>
                <p className="text-4xl font-bold text-white mb-1">$400<span className="text-xl text-slate-400">/month</span></p>
                <p className="text-slate-400 text-sm mb-6">Month to month — cancel any time</p>
                <Link to="/contact" className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200">
                  Get a Free Audit
                </Link>
                <p className="text-center text-slate-500 text-xs mt-3">No commitment — just a free look at your listing</p>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Why SERP Wiser</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">We only work with local service businesses</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "We know your niche", desc: "We only work with home services and law firms. We understand seasonal demand, emergency search behavior, and what makes a homeowner pick up the phone and call you instead of a competitor." },
              { title: "No generalist agency fluff", desc: "We do not do social media, paid ads, or brand strategy. We do one thing — get local businesses into the Google Maps top 3. That focus is exactly why we are better at it." },
              { title: "Month to month always", desc: "No 6-month contracts. No annual lock-ins. If it is working, you stay. If it is not, you walk. That is the only arrangement that keeps us accountable." },
              { title: "Real results in 30 days", desc: "Most home service clients see ranking movement within the first 30 days. We optimize the signals Google responds to fastest — categories, completeness, and review velocity." },
              { title: "Direct access to your specialist", desc: "Not a ticket system, not a support queue. You get direct WhatsApp access to the person actually working on your listing. Questions answered same day." },
              { title: "Transparent reporting", desc: "Every month you get a screenshot report showing your exact ranking position before we started vs. now. Real data, no spin." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-cyan-200 hover:shadow-sm transition-all duration-200">
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Questions from home service business owners</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === i ? "border-cyan-200 bg-cyan-50/30" : "border-slate-200 bg-white hover:border-slate-300"}`}>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to rank above your competitors on Google Maps?</h2>
          <p className="text-slate-300 text-lg mb-8">Free audit of your Google Business Profile. We will show you exactly what is missing and what it would take to get you into the top 3.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 hover:-translate-y-0.5">
            Get Your Free GBP Audit
          </Link>
          <p className="text-slate-400 text-sm mt-4">$400/month · No contract · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
