import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { servicePages, getServiceGradient } from "../data/servicePages";

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function ServicePage({ slug: propSlug }) {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const service = slug ? servicePages[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const gradient = service ? getServiceGradient(service.theme) : "from-sky-500 to-cyan-600";

  if (!service) {
    return (
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Page not found</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline">
            Back to SERP Wiser home
            <ArrowIcon />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-0 pb-0">
      <section className={`relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br ${gradient}`} aria-labelledby="service-title">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link to="/" className="text-white/90 hover:text-white text-sm font-medium transition-colors">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-white font-medium">{service.title}</span>
          </nav>
          <h1 id="service-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-10">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/80" />No contracts — month to month</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/80" />100% done for you</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/80" />Results in 30 days</span>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-white/90 transition-all duration-200 shadow-lg hover:-translate-y-0.5">
            Get a Free Audit
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {service.subServices && service.subServices.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50" aria-labelledby="what-we-offer-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradient}`} />
              <h2 id="what-we-offer-heading" className="text-2xl md:text-3xl font-bold text-slate-900">Everything included</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.subServices.map((item, i) => (
                <div key={i} className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 text-white`}>
                    <CheckIcon />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 md:py-24 bg-white" aria-labelledby="service-benefits-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradient}`} />
              <h2 id="service-benefits-heading" className="text-2xl md:text-3xl font-bold text-slate-900">Why choose SERP Wiser</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                  <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white shrink-0`}>
                    <CheckIcon />
                  </span>
                  <span className="font-semibold text-slate-800">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden" aria-labelledby="service-cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(6,182,212,0.15),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="service-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Get a free audit and find out exactly what is holding your rankings back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-bold hover:opacity-95 transition-all duration-200 shadow-lg hover:-translate-y-0.5`}>
              Get a Free Audit
              <ArrowIcon />
            </Link>
            <Link to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-all duration-200">
              View all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
