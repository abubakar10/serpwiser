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

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? servicePages[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const gradient = service ? getServiceGradient(service.theme) : "from-sky-500 to-cyan-600";

  if (!service) {
    return (
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Service not found</h1>
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
      {/* Hero */}
      <section className={`relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br ${gradient}`} aria-labelledby="service-title">
        <div className="absolute inset-0 bg-slate-900/20" />
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
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* What we offer - card grid */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50/50" aria-labelledby="what-we-offer-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradient}`} />
              <h2 id="what-we-offer-heading" className="text-2xl md:text-3xl font-bold text-slate-900">What we offer</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.subServices.map((item, i) => (
                <div
                  key={item}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-90`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 text-white`}>
                    <CheckIcon />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 md:py-24 bg-white" aria-labelledby="service-benefits-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradient}`} />
              <h2 id="service-benefits-heading" className="text-2xl md:text-3xl font-bold text-slate-900">Why choose us</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {service.benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-200"
                >
                  <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shrink-0`}>
                    <CheckIcon />
                  </span>
                  <span className="font-semibold text-slate-800">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden" aria-labelledby="service-cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(6,182,212,0.15),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="service-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-slate-200 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals with {service.title}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-bold hover:opacity-95 transition-all duration-200 shadow-lg hover:-translate-y-0.5`}
            >
              Get in touch
              <ArrowIcon />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-all duration-200"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Related / Back to services */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#what-we-do"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            aria-label="Back to all services on homepage"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all services
          </Link>
        </div>
      </section>
    </main>
  );
}
