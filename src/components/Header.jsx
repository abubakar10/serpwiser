import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogoIcon = () => (
  <svg className="w-7 h-7 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h6V3H3v10zm0 8h6v-6H3v6zm8-18v10h10V3H11zm0 18h10v-6H11v6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3 3 6-6" />
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4 text-slate-400 group-hover/link:text-sky-500 group-hover/link:translate-x-0.5 shrink-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const services = [
  { name: "GBP Optimization", path: "/gbp-optimization", desc: "Get into Google Maps top 3" },
  { name: "Local SEO", path: "/local-seo", desc: "Rank your website + Maps listing" },
];

const industries = [
  { name: "Home Services", path: "/home-services", desc: "Plumbers, HVAC, electricians, roofers" },
  { name: "Law Firms", path: "/law-firms", desc: "Personal injury, family law, criminal defense" },
  { name: "All Local Businesses", path: "/contact", desc: "Any business that serves a local area" },
];

function Dropdown({ label, items, accentColor }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = React.useRef(null);

  const onEnter = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const onLeave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        className="relative flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-[15px] transition-colors after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-px after:bg-slate-900 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
        aria-expanded={open}
      >
        {label}
        <ChevronDown open={open} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-[2px]" aria-hidden="true" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 z-50 pt-2 min-w-[280px]">
            <div className="rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/90 overflow-hidden bg-white ring-1 ring-slate-200/50">
              <div className={`h-1 bg-gradient-to-r ${accentColor}`} />
              <div className="p-3">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="group/link flex items-center justify-between gap-2 px-3 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                    <ArrowRight />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <LogoIcon />
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">SERP WISER</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className="relative px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-[15px] transition-colors after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-px after:bg-slate-900 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100">
              Home
            </Link>
            <Dropdown label="Our Services" items={services} accentColor="from-sky-500 to-cyan-500" />
            <Dropdown label="Industries" items={industries} accentColor="from-violet-500 to-purple-500" />
            <Link to="/contact" className="relative px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-[15px] transition-colors after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-px after:bg-slate-900 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100">
              Contact Us
            </Link>
            <Link to="/contact" className="ml-3 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/contact" className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 shadow-lg shadow-slate-900/20">
              Get Started
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/80">
            <div className="flex flex-col gap-0.5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">Home</Link>

              <button type="button" onClick={() => setMobileServices(!mobileServices)} className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-left">
                Our Services <ChevronDown open={mobileServices} />
              </button>
              {mobileServices && services.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="px-8 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm">
                  {item.name}
                </Link>
              ))}

              <button type="button" onClick={() => setMobileIndustries(!mobileIndustries)} className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-left">
                Industries <ChevronDown open={mobileIndustries} />
              </button>
              {mobileIndustries && industries.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="px-8 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm">
                  {item.name}
                </Link>
              ))}

              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
