const logos = ["Sordis", "DroneJet", "TechFlow", "Nexus", "Vertex", "Apex"];

export default function Trust() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 text-center">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="px-6 py-3 rounded-xl bg-slate-100 text-slate-600 font-semibold text-lg hover:bg-slate-200 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
