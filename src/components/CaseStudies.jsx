export default function CaseStudies() {
  const clients = [
    "Stanley Steemer",
    "Advantage Air",
    "Double Time Garage Doors",
    "Hack's Plumbing",
    "Setareh Law",
    "AirDoctor X",
    "Classic Coating",
    "Lafata Law",
    "Estate Planning Attorney",
  ];

  const all = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 bg-slate-900 relative overflow-hidden" aria-labelledby="clients-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,182,212,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Trusted By</p>
        <h2 id="clients-heading" className="text-2xl sm:text-3xl font-bold text-white">
          Local businesses that trust SERP Wiser
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {all.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 whitespace-nowrap"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                {name.charAt(0)}
              </div>
              <span className="text-white font-semibold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-slate-500 text-sm mt-8">And many more local businesses across the United States</p>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
