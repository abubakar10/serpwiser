import { useState } from "react";
import { Link } from "react-router-dom";

const Check = () => (
  <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const deliverables = [
  {
    category: "Technical SEO",
    color: "from-cyan-500 to-sky-600",
    items: ["Full technical audit", "Site speed optimization", "Mobile optimization", "Core Web Vitals fixes", "Schema markup", "Crawlability and indexation fixes"],
  },
  {
    category: "On-Page SEO",
    color: "from-sky-500 to-blue-600",
    items: ["Keyword research for your market", "Page title and meta description optimization", "Header structure optimization", "Content optimization", "Internal linking strategy"],
  },
  {
    category: "Local Service Pages",
    color: "from-violet-500 to-purple-600",
    items: ["Dedicated page per service", "Dedicated page per target city", "Service + city combination pages", "Location-specific content writing", "Local schema markup on every page"],
  },
  {
    category: "Content Writing",
    color: "from-amber-500 to-orange-500",
    items: ["SEO-optimized service page content", "Location page content", "Blog posts targeting local keywords", "FAQ content for featured snippets", "AEO-optimized content for AI search"],
  },
  {
    category: "Off-Page SEO",
    color: "from-emerald-500 to-teal-600",
    items: ["Local citation building (50+ directories)", "NAP consistency cleanup", "Local backlink building", "Google Business Profile optimization", "Review generation strategy"],
  },
  {
    category: "Reporting",
    color: "from-slate-600 to-slate-700",
    items: ["Monthly keyword ranking report", "Organic traffic report", "GBP performance report", "Competitor ranking comparison", "Next month action plan"],
  },
];

const faqs = [
  {
    q: "What is the difference between GBP optimization and Full Local SEO?",
    a: "GBP optimization targets your Google Maps listing — it gets you into the Map Pack top 3. Full Local SEO targets your website AND your Maps listing — it ranks you in both the Map Pack and Google's organic search results. GBP optimization is included inside the Full Local SEO package.",
  },
  {
    q: "How long does Local SEO take to show results?",
    a: "Local SEO is a 3-6 month process, not a 30-day fix. Month 1 focuses on auditing and technical foundations. Months 2-3 involve building on-page and content. Months 4-6 is when you start seeing significant ranking improvements. Anyone promising results in 30 days with full Local SEO is not being honest with you. GBP optimization can show faster results — but full website SEO takes longer. We tell you this upfront because we want long-term clients, not disappointed ones.",
  },
  {
    q: "Do I need a website for Local SEO?",
    a: "Yes — Full Local SEO requires an existing website to optimize. If you do not have a website yet, start with GBP Optimization ($400/month) first. Once you have a website, we can layer on Full Local SEO to maximize your search presence.",
  },
  {
    q: "Is GBP optimization included in the Local SEO package?",
    a: "Yes — completely. Your Google Business Profile is optimized and maintained as part of the full package. You do not need to purchase it separately.",
  },
  {
    q: "What makes your Local SEO different from other agencies?",
    a: "Three things. First, we specialize only in local businesses — we do not do ecommerce SEO, national SEO, or paid ads. Second, we create actual local service pages targeting your specific service and city combinations, not generic website copy. Third, we are month to month — no 12-month contracts. You stay because results are coming, not because you are stuck.",
  },
];

export default function LocalSEO() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-white">

      <section className="bg-slate-900 relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(14,165,233,0.1),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">Full Local SEO Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Rank Your Business on Google Maps AND in Search Results
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-6 leading-relaxed">
            Our complete local SEO package covers everything — your Google Business Profile, your website, your content, and your local authority. Built for local businesses that want to dominate their entire local search presence, not just the Map Pack.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-3 inline-flex items-start gap-3 mb-8">
            <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-amber-200 text-sm leading-relaxed">
              <strong>Honest timeline:</strong> Full Local SEO takes 3-6 months to show significant results. If you want faster Map Pack wins, start with our GBP Optimization ($400/month).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5">
              Get a Free SEO Audit
            </Link>
            <Link to="/gbp-optimization" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
              Start with GBP ($400/mo)
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-700">
            {[
              { stat: "From $1,200", label: "Per month, month to month" },
              { stat: "3-6 months", label: "To see significant results" },
              { stat: "GBP included", label: "No extra charge" },
              { stat: "0", label: "Long-term contracts" },
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
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Know The Difference</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">GBP Optimization vs Full Local SEO</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">They work together but they are not the same thing. Here is exactly what each one does.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">GBP Optimization</h3>
                  <p className="text-cyan-600 font-semibold text-sm">$400/month</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Targets your <strong>Google Maps listing only</strong>. Gets you into the Map Pack top 3. Does not touch your website. Results visible in 30 days.</p>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Best for:</p>
              <p className="text-slate-600 text-sm">Businesses starting out who want quick Map Pack wins and more inbound calls without a large monthly investment.</p>
              <Link to="/gbp-optimization" className="inline-flex items-center gap-2 mt-5 text-cyan-600 font-semibold text-sm hover:text-cyan-700">
                Learn more about GBP Optimization →
              </Link>
            </div>
            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Full Local SEO</h3>
                  <p className="text-cyan-400 font-semibold text-sm">From $1,200/month</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">Targets your <strong className="text-white">Maps listing AND your website</strong>. Ranks you in both the Map Pack and organic search results. GBP optimization included. Results in 3-6 months.</p>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Best for:</p>
              <p className="text-slate-300 text-sm">Businesses ready to dominate all of local search — both the Map Pack and the organic results — for every service and city they target.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">What's Included</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything covered — nothing extra</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">Every deliverable below is part of your monthly package. We do not sell add-ons.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d) => (
              <div key={d.category} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.color}`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-4`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{d.category}</h3>
                <ul className="space-y-1.5">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">Honest Timeline</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What to expect, month by month</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">We will never tell you Local SEO works in 30 days. Here is the real picture.</p>
          </div>
          <div className="space-y-4">
            {[
              { month: "Month 1", color: "from-cyan-500 to-sky-600", title: "Foundation", desc: "Full SEO audit completed. Technical fixes implemented. GBP fully optimized. Keyword research done. On-page optimization begins. You start seeing GBP ranking improvements." },
              { month: "Months 2-3", color: "from-sky-500 to-blue-600", title: "Building", desc: "Local service pages created for each service and city. Content writing underway. Citation building continues. Off-page SEO begins. Organic keywords start appearing in rankings." },
              { month: "Months 4-6", color: "from-violet-500 to-purple-600", title: "Results", desc: "Significant keyword ranking improvements visible. Organic traffic increasing. Map Pack position solidified. Service pages ranking for target city and service keywords. Monthly reports showing clear upward trend." },
              { month: "Month 6+", color: "from-amber-500 to-orange-500", title: "Growth", desc: "Compounding results. More keywords ranking. More inbound leads from organic search. Reviews growing steadily. Authority building continuously. This is where Local SEO pays for itself many times over." },
            ].map((t) => (
              <div key={t.month} className="flex gap-5 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 bg-white">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0 text-white font-bold text-[10px] text-center leading-tight p-1`}>
                  {t.month}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Common questions about Local SEO</h2>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to dominate local search completely?</h2>
          <p className="text-slate-300 text-lg mb-8">Free audit of your current SEO and GBP. We will show you exactly what is holding you back and what a realistic plan looks like.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 hover:-translate-y-0.5">
            Get Your Free SEO Audit
          </Link>
          <p className="text-slate-400 text-sm mt-4">From $1,200/month · No contract · Cancel any time</p>
        </div>
      </section>
    </div>
  );
}
