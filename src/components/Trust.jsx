export default function Trust() {
  const tools = [
    "Google Business Profile",
    "Google Maps",
    "BrightLocal",
    "Semrush",
    "Moz Local",
    "Whitespark",
  ];

  return (
    <section id="trusted-by" className="py-12 bg-slate-50 border-t border-slate-200/80" aria-label="Tools and platforms we use">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
          Platforms and tools we use to get you ranked
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium text-sm shadow-sm hover:border-sky-200 hover:text-sky-600 transition-all duration-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
