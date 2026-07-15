const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

const items = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Specialists, Not Generalists",
    description: "We only do local SEO and Google Business Profile optimization. Not websites, not social media, not ads. This laser focus is why we get results consistently.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Month to Month — Always",
    description: "No 6-month contracts. No annual lock-ins. You stay because it is working, not because you are stuck. Cancel any time with no questions asked.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "100% Done For You",
    description: "Once you approve our access, you never need to log in or post anything. We handle your listing every single week — not once a month and forget.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Transparent Monthly Reports",
    description: "Every month you get a ranking report showing exactly where you were and where you are now — with screenshots. Real numbers, no fluff, no vague updates.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-sky-50/20" aria-labelledby="why-choose-us-heading">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Why Choose Us</SectionLabel>
        <h2 id="why-choose-us-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-14">The agency built for local businesses that want to rank on Maps</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
