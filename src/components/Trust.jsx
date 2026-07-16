export default function Trust() {
  const tools = [
    { name: "Ahrefs", domain: "ahrefs.com", bg: "bg-orange-50", border: "border-orange-100" },
    { name: "Semrush", domain: "semrush.com", bg: "bg-orange-50", border: "border-orange-100" },
    { name: "Screaming Frog", domain: "screamingfrog.co.uk", bg: "bg-green-50", border: "border-green-100" },
    { name: "BrightLocal", domain: "brightlocal.com", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "Moz", domain: "moz.com", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "Whitespark", domain: "whitespark.ca", bg: "bg-purple-50", border: "border-purple-100" },
  ];

  return (
    <section id="tools" className="py-16 bg-white border-t border-slate-100" aria-label="Tools we use">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Our Toolkit</p>
          <h2 className="text-2xl font-bold text-slate-900">Industry-leading tools behind every campaign</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
            We use the same tools the top local SEO agencies in the world use — so your rankings are backed by real data, not guesswork.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 text-center"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${tool.bg} border ${tool.border}`}>
                <img
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-slate-700 font-semibold text-sm leading-tight">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
