import { useState } from "react";

const testimonials = [
  {
    name: "Jhon Doe",
    role: "CEO, Company",
    text: "SERP Wiser transformed our online presence. Within six months we saw a 150% increase in organic traffic and our leads have never been higher. Highly recommend their team.",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    text: "Professional, data-driven, and results-focused. They delivered exactly what they promised and our ROI has exceeded expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, TechStart",
    text: "From SEO to content and paid campaigns, SERP Wiser handles it all. Our brand visibility has grown significantly since we started working with them.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-sky-50/20">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-section border border-slate-200/80 p-8 md:p-12 relative">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-105 shadow-card"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-105 shadow-card"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-glow-sky">
            {t.name.charAt(0)}
          </div>
          <p className="text-slate-800 font-semibold text-lg mb-1">{t.name}</p>
          <p className="text-slate-500 text-sm mb-6">{t.role}</p>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-[15px]">"{t.text}"</p>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === i ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
