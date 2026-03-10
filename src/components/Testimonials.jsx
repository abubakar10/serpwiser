import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO of Company X",
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10 relative">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="w-16 h-16 rounded-full bg-sky-100 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-slate-600">
            {t.name.charAt(0)}
          </div>
          <p className="text-slate-700 font-medium mb-1">{t.name}, {t.role}</p>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed">"{t.text}"</p>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === i ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
