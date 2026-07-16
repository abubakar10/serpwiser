import { useState } from "react";
import { Link } from "react-router-dom";

const Check = () => (
  <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const included = [
  "Full GBP audit before we touch anything — every gap documented",
  "Primary and secondary category optimization",
  "Keyword-rich business description (750 characters, fully optimized)",
  "Services section — every service listed with keyword-rich descriptions",
  "Attributes setup — payment methods, accessibility, amenities",
  "Photo optimization — interior, exterior, team, and work photos uploaded weekly",
  "Weekly GBP posts — updates, offers, photos, and seasonal content",
  "Review generation strategy — simple system your team can use every day",
  "Responding to every single review within 24 hours",
  "Q&A section setup and management",
  "Citation building — consistent NAP across 50+ top local directories",
  "Monthly ranking report — screenshots of where you were vs where you are now",
  "Direct WhatsApp access to your specialist — not a ticket system",
];

const faqs = [
  {
    q: "What exactly is Google Business Profile optimization?",
    a: "Your Google Business Profile is the listing that appears on Google Maps and in the local Map Pack — the box of 3 businesses at the top of search results. Optimizing it means setting up every field, category, photo, and signal correctly so Google ranks you in those top 3 spots. 70% of all clicks and calls go to those 3 businesses. If you are not there, you are invisible.",
  },
  {
    q: "Is GBP optimization the same as Google Maps ranking?",
    a: "Yes — they are the same thing. Optimizing your Google Business Profile is exactly how you rank on Google Maps. The Map Pack ranking is the outcome, GBP optimization is the work that gets you there.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable ranking movement within 30 days. Google continuously evaluates GBP signals — profile completeness, review velocity, post frequency, category accuracy — so improvements show faster than website SEO. Highly competitive markets like personal injury law in major cities can take 60 to 90 days for top 3 positioning.",
  },
  {
    q: "Do you guarantee a top 3 ranking?",
    a: "No — and be suspicious of any agency that does. Google controls rankings, not agencies. What we guarantee is applying every proven optimization signal correctly, consistently, and in full compliance with Google's guidelines. Our track record shows strong ranking improvement for the vast majority of clients. And because we are month to month, if you are not seeing progress, you are not locked in.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Two things. First, approve our GBP Manager access request — we send it to the Gmail linked to your listing, you click approve, takes 30 seconds, no password needed. Second, fill out a short intake form with your business details. After that we handle everything. You do not need to log in, post anything, or manage anything.",
  },
  {
    q: "What is the difference between GBP optimization and Local SEO?",
    a: "GBP optimization targets your Google Maps listing — it affects how you rank in the Map Pack. Local SEO targets your website — it affects how your website pages rank in Google's organic search results. They are separate systems that work together. We offer both. Most clients start with GBP optimization and add full Local SEO once they see results.",
  },
];

export default function GBPOptimization() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-white">

      <section className="bg-slate-900 relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(14,165,233,0.1),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Google Business Profile Optimization</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Get Into the Google Maps Top 3 — Done For You, Every Week
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed">
            We take over your Google Business Profile completely. Every category, photo, post, review, and citation — optimized and maintained every week so you rank above your competitors and customers call you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5">
              Get a Free GBP Audit
            </Link>
            <Link to="/local-seo" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
              View Full Local SEO Package
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-700">
            {[
              { stat: "70%", label: "Of Map Pack clicks go to top 3" },
              { stat: "$400/mo", label: "Flat — no hidden fees" },
              { stat: "30 days", label: "To see ranking movement" },
              { stat: "0", label: "Contracts — cancel any time" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-5 text-center">
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
              <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Your competitors are getting the calls that should be yours
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                When someone searches for your type of business on Google Maps, they see a box of 3 businesses at the top. Those 3 businesses get 70% of all clicks and calls. Everyone else is effectively invisible.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Getting into that top 3 is not about paying Google. It is about optimizing every signal Google evaluates — profile completeness, review velocity, category accuracy, post frequency, citation consistency. That is exactly what we do.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Most GBP listings are incomplete and never touched after setup",
                  "Competitors with fewer reviews can outrank you if their listing is better optimized",
                  "One missing category or wrong attribute can drop you several positions",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-600">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <p className="text-cyan-400 font-semibold text-sm mb-5">Google Maps — "Plumber near Dallas TX"</p>
              <div className="space-y-3 mb-4">
                {[
                  { rank: "1", name: "Dallas Pro Plumbing", rating: "4.8", reviews: "127" },
                  { rank: "2", name: "Metro Plumbing Services", rating: "4.6", reviews: "89" },
                  { rank: "3", name: "Fast Fix Plumbing", rating: "4.7", reviews: "64" },
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
                  <p className="text-red-300 text-sm font-semibold">Your business — ranking #8</p>
                  <p className="text-red-300/70 text-xs mt-0.5">Invisible to most customers searching right now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our 4-step GBP process</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">Used for every client, every month. No guesswork — just the specific actions that move Maps rankings.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", color: "from-cyan-500 to-sky-600", title: "Full Audit", desc: "We pull up your listing and document every gap — missing categories, weak description, photo gaps, zero posts, citation inconsistencies." },
              { step: "02", color: "from-sky-500 to-blue-600", title: "Full Optimization", desc: "We rewrite and optimize every field. Categories, description, services, attributes, photos — everything Google uses to rank you, done in Week 1." },
              { step: "03", color: "from-violet-500 to-purple-600", title: "Reviews + Authority", desc: "We set up your review generation strategy and respond to every review. Weekly posts and citation building keep your listing active and trusted." },
              { step: "04", color: "from-amber-500 to-orange-500", title: "Monthly Report", desc: "Every month you get a ranking report with screenshots — where you were, where you are now. Real numbers, no fluff." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-slate-200 p-6 relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 text-white font-bold text-sm`}>
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything included at $400/month</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">One flat monthly fee. No contracts. No add-ons. No surprises. Every item on this list is included every single month.</p>
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <p className="text-cyan-400 font-semibold text-sm mb-1">GBP Optimization</p>
                <p className="text-4xl font-bold text-white mb-1">$400<span className="text-xl text-slate-400">/month</span></p>
                <p className="text-slate-400 text-sm mb-6">Month to month — cancel any time</p>
                <Link to="/contact" className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200">
                  Get Started Today
                </Link>
                <p className="text-center text-slate-500 text-xs mt-3">Free GBP audit — no commitment required</p>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Who We Work With</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Built for local businesses that want more calls</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-12">If your customers search Google Maps before calling — this service is for you.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "🔧", name: "Plumbers" },
              { emoji: "❄️", name: "HVAC" },
              { emoji: "⚖️", name: "Law Firms" },
              { emoji: "🦷", name: "Dentists" },
              { emoji: "🏠", name: "Roofers" },
              { emoji: "🚗", name: "Auto Repair" },
              { emoji: "⚡", name: "Electricians" },
              { emoji: "🌿", name: "Landscapers" },
              { emoji: "🏥", name: "Clinics" },
              { emoji: "🍽️", name: "Restaurants" },
              { emoji: "🏡", name: "Real Estate" },
              { emoji: "💆", name: "Chiropractors" },
            ].map((n) => (
              <div key={n.name} className="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:border-cyan-200 hover:shadow-sm transition-all duration-200">
                <div className="text-2xl mb-2">{n.emoji}</div>
                <p className="text-slate-700 font-semibold text-sm">{n.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Common questions about GBP optimization</h2>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to rank in the top 3 on Google Maps?</h2>
          <p className="text-slate-300 text-lg mb-8">Free audit of your Google Business Profile. No commitment required. We will show you exactly what is holding you back.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 hover:-translate-y-0.5">
            Get Your Free GBP Audit
          </Link>
          <p className="text-slate-400 text-sm mt-4">$400/month · No contract · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
