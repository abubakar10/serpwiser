export default function CaseStudies() {
  const clients = [
    { name: "Stanley Steemer", file: "stanley-steemer.png", bg: "bg-yellow-50" },
    { name: "Advantage Air", file: "advantage-air.png", bg: "bg-white" },
    { name: "Double Time Garage Doors", file: "double-time.png", bg: "bg-white" },
    { name: "Hack's Plumbing", file: "hacks-plumbing.png", bg: "bg-white" },
    { name: "Setareh Law Group", file: "setareh-law.png", bg: "bg-white" },
    { name: "AirDoctor X", file: "airdoctor-x.png", bg: "bg-white" },
    { name: "Classic Coating", file: "classic-coating.png", bg: "bg-white" },
    { name: "Lafata Law", file: "lafata-law.png", bg: "bg-slate-800" },
    { name: "Estate Planning Attorney", file: "estate-planning.png", bg: "bg-white" },
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
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {all.map((client, i) => (
            <div
              key={i}
              className={`flex items-center justify-center px-6 py-3 rounded-xl ${client.bg} border border-white/10 whitespace-nowrap h-16 min-w-[160px]`}
            >
              <img
                src={`/${client.file}`}
                alt={`${client.name} logo`}
                className="h-10 max-w-[140px] object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `<span class="text-white font-semibold text-sm">${client.name}</span>`;
                }}
              />
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
