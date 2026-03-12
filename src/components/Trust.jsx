const SectionLabel = ({ children }) => (
  <div className="flex items-center justify-center gap-3 mb-8">
    <span className="h-px w-8 bg-slate-400 rounded-full" />
    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{children}</p>
    <span className="h-px w-8 bg-slate-400 rounded-full" />
  </div>
);

const logos = ["Sordis", "DroneJet", "TechFlow", "Nexus", "Vertex", "Apex"];

export default function Trust() {
  return (
    <section id="trusted-by" className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200/80" aria-labelledby="trusted-by-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="trusted-by-heading" className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-slate-400 rounded-full" />
          Trusted by Industry Leaders
          <span className="h-px w-8 bg-slate-400 rounded-full" />
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {logos.map((name) => (
            <div
              key={name}
              className="px-8 py-4 rounded-2xl bg-white border border-slate-200/80 text-slate-500 font-semibold text-lg shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
