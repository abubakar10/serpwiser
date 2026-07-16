import { useState } from "react";

const faqs = [
  {
    q: "What is Google Business Profile optimization and why does it matter?",
    a: "Your Google Business Profile is the listing that appears on Google Maps and in the Map Pack — the box of 3 businesses that shows up at the top when someone searches for a local service. Optimizing it means making sure every field, photo, category, and signal is set up correctly so Google ranks you in those top 3 spots. 70% of all clicks go to those 3 businesses. If you are not there, you are invisible to most people searching right now.",
  },
  {
    q: "How is GBP optimization different from regular SEO?",
    a: "Regular SEO focuses on your website — getting pages to rank in Google's blue link results. GBP optimization focuses specifically on Google Maps and the local Map Pack. They are two separate ranking systems. Most agencies focus on website SEO and largely ignore the Maps listing, which is actually where most local buying intent lives. We specialize exclusively in the Maps side — that is our entire focus.",
  },
  {
    q: "How long does it take to see results on Google Maps?",
    a: "Most clients see measurable ranking movement within 30 days. The Map Pack responds faster than organic website rankings because the signals we optimize — profile completeness, review velocity, post frequency, category accuracy — are evaluated by Google continuously. Competitive markets like personal injury attorneys in Houston can take 60 to 90 days for top 3 positioning.",
  },
  {
    q: "Do you guarantee a top 3 ranking on Google Maps?",
    a: "No — and you should be suspicious of any agency that does. Google controls rankings, not agencies. What we commit to is applying every proven optimization signal correctly, consistently, and in full compliance with Google's guidelines. Our track record shows strong ranking improvement for the vast majority of clients. And because we are month to month, if you are not seeing progress, you are not locked in.",
  },
  {
    q: "How much does it cost and is there a long term contract?",
    a: "Our GBP Optimization service is $400 per month. No contracts, no annual commitments — completely month to month. You stay because it is working, not because you are stuck. Our full Local SEO package which includes website SEO alongside GBP starts at $1,200 per month.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just two things. Access to your Google Business Profile — we send a Manager access request and you click approve, no password needed. And a completed intake form with your business details. After that we handle everything. You do not need to log in, post anything, or manage anything. 100% done for you.",
  },
  {
    q: "Do you work with businesses outside of home services and law firms?",
    a: "Yes — we work with any local business that needs to rank on Google Maps. Dentists, restaurants, auto repair shops, chiropractors, real estate agents, and more. Home services and law firms are our primary focus right now but we welcome any local business looking to dominate their local Map Pack.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Common Questions About Local SEO and GBP
          </h2>
          <p className="text-slate-600 text-lg">Everything you need to know before getting started.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-sky-200 bg-sky-50/50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-slate-900 text-[15px] leading-snug">{faq.q}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5 ${
                    open === i ? "bg-sky-500 text-white rotate-45" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed text-[15px]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
