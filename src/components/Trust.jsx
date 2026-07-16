export default function Trust() {
  const tools = [
    {
      name: "Ahrefs",
      domain: "ahrefs.com",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Semrush",
      domain: "semrush.com",
      color: "from-orange-400 to-amber-500",
    },
    {
      name: "Screaming Frog",
      domain: "screamingfrog.co.uk",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "BrightLocal",
      domain: "brightlocal.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Moz Local",
      domain: "moz.com",
      color: "from-sky-500 to-cyan-600",
    },
    {
      name: "Whitespark",
      domain: "whitespark.ca",
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section id="tools" className="py-16 bg-white border-t border-slate-100" aria-label="Tools we use">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Our Toolkit</p>
          <h2 className="text-2xl font-bold text-slate-900">Industry-leading tools behind every campaign</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">We use the same tools the top local SEO agencies in the world use — so your rankings are backed by real data, not guesswork.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 text-center"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100">
                <img
                  src={`https://logo.clearbit.com/${tool.domain}`}
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} hidden items-center justify-center text-white font-bold text-sm`}
                >
                  {tool.name.charAt(0)}
                </div>
              </div>
              <p className="text-slate-700 font-semibold text-sm leading-tight">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
