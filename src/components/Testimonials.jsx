import { useState } from "react";

const testimonials = [
  {
    name: "Marcus Webb",
    role: "Owner, Webb's Plumbing — Dallas TX",
    text: "Before SERP Wiser we were ranking number 9 on Google Maps. Nobody was calling us from Google at all. Within 6 weeks we were in the top 3 for plumbers in Dallas and our phone started ringing every single day. Best $400 I spend every month.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Diana Cortez",
    role: "Office Manager, Cortez Family Law — Houston TX",
    text: "We were skeptical at first because we tried another agency and got nothing. SERP Wiser is completely different — they actually optimized our Google listing properly, our reviews went from 12 to 47 in 3 months, and new case inquiries through Google have doubled.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Terrence Hall",
    role: "Owner, Hall's HVAC Services — Miami FL",
    text: "Month to month, no contracts, and they actually deliver. We jumped from position 8 to position 2 on Google Maps for HVAC companies in Miami. The summer rush this year was the busiest we have ever had — Google was sending us calls every day.",
    rating: 5,
    initial: "T",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-sky-50/20" aria-labelledby="testimonials-heading">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Client Results</p>
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
          What local businesses say about working with us
        </h2>
        <div className="bg-white rounded-2xl shadow-section border border-slate-200/80 p-8 md:p-12 relative">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-105 shadow-card"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-105 shadow-card"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-glow-sky">
            {t.initial}
          </div>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 italic">"{t.text}"</blockquote>
          <p className="text-slate-800 font-semibold text-lg mb-1">{t.name}</p>
          <p className="text-slate-500 text-sm">{t.role}</p>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-200 ${i === index ? "bg-sky-500 w-6" : "bg-slate-300 w-2"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
