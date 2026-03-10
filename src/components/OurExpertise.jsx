import { Link } from "react-router-dom";
import { expertiseServices } from "../data/services";

export default function OurExpertise() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Our Expertise</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 max-w-2xl">
          We provide comprehensive digital marketing solutions that help businesses thrive.
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {expertiseServices.map((service) => (
              <div key={service.path} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <Link to={service.path} className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    {service.title}
                  </Link>
                  <p className="text-slate-600 text-sm mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-slate-900/20" />
                <div className="relative flex gap-2">
                  {[40, 60, 80].map((w, j) => (
                    <div key={j} className="bg-white/30 rounded h-16" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
