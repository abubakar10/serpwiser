import { Link } from "react-router-dom";
import { expertiseServices } from "../data/services";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
    <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">{children}</p>
  </div>
);

/* New image sections: gradient cards with visuals + box shadows */
const ImageSectionCard = ({ gradient, title, subtitle, icon }) => (
  <div className={`rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-gradient-to-br ${gradient} border border-white/10`}>
    <div className="aspect-[4/3] p-6 flex flex-col justify-between relative">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex justify-end">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div className="relative mt-auto">
        <h3 className="text-white/90 font-bold text-lg">{title}</h3>
        <p className="text-white/90 text-sm mt-0.5">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function OurExpertise() {
  return (
    <section id="our-expertise" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-sky-50/30 via-white to-slate-50/50" aria-labelledby="our-expertise-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(99,102,241,0.05),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>About Us</SectionLabel>
        <h2 id="our-expertise-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 max-w-2xl leading-tight">
          We provide comprehensive digital marketing solutions that help businesses thrive.
        </h2>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="space-y-8">
            {expertiseServices.map((service) => (
              <div key={service.path} className="flex gap-5 group p-4 rounded-2xl hover:bg-white/80 transition-colors shadow-sm hover:shadow-card border border-transparent hover:border-slate-200/80">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-sky-500/25">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <Link to={service.path} className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                    {service.title}
                  </Link>
                  <p className="text-slate-600 text-[15px] mt-1.5 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* New image sections: 3 gradient visual cards */}
          <div className="grid grid-cols-1 gap-5">
            <ImageSectionCard
              gradient="from-cyan-500 via-sky-500 to-blue-600"
              title="SEO & Analytics"
              subtitle="Data-driven growth"
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
            <ImageSectionCard
              gradient="from-violet-500 via-purple-500 to-fuchsia-600"
              title="Content & Social"
              subtitle="Engage and convert"
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              }
            />
            <ImageSectionCard
              gradient="from-amber-500 via-orange-500 to-rose-500"
              title="Growth & ROI"
              subtitle="Measurable results"
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
