export default function CaseStudies() {
  const clients = [
    { name: "Stanley Steemer", type: "Home Services" },
    { name: "Advantage Air", type: "HVAC & Plumbing" },
    { name: "Double Time Garage Doors", type: "Home Services" },
    { name: "Hack's Plumbing", type: "Plumbing" },
    { name: "Setareh Law", type: "Personal Injury" },
    { name: "AirDoctor X", type: "HVAC" },
    { name: "Forte Series", type: "Home Services" },
    { name: "Classic Coating", type: "Home Services" },
    { name: "Lafata Law", type: "Law Firm" },
    { name: "Estate Planning Attorney", type: "Law Firm" },
  ];

  return (
    <section id="clients" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden" aria-labelledby="clients-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,182,212,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Trusted By</p>
          <h2 id="clients-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Local businesses that trust SERP Wiser
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From plumbers and HVAC companies to law firms — we have helped businesses across the US rank in the Google Maps top 3.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-5 text-center transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg">
                {client.name.charAt(0)}
              </div>
              <p className="text-white font-semibold text-sm leading-snug">{client.name}</p>
              <p className="text-slate-400 text-xs mt-1">{client.type}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-10">And many more local businesses across the United States</p>
      </div>
    </section>
  );
}
