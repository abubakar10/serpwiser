import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navServices } from "../data/services";

const LogoIcon = () => (
  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h6V3H3v10zm0 8h6v-6H3v6zm8-18v10h10V3H11zm0 18h10v-6H11v6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3 3 6-6" />
  </svg>
);

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="relative px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-[15px] transition-colors duration-200 after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-px after:bg-slate-900 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
    {...props}
  >
    {children}
  </Link>
);

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <LogoIcon />
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">SERP WISER</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/">Home</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="relative flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-[15px] transition-colors after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-px after:bg-slate-900 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 data-[open]:after:scale-x-100"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                data-open={dropdownOpen || undefined}
              >
                What we do
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(92vw,780px)]">
                  <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200/90 overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-violet-500" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                      {navServices.map((col, colIndex) => {
                        const accent = colIndex === 0 ? "sky" : colIndex === 1 ? "violet" : "amber";
                        const accentBg = accent === "sky" ? "from-sky-500 to-cyan-500" : accent === "violet" ? "from-violet-500 to-purple-500" : "from-amber-500 to-orange-500";
                        return (
                          <div key={col.title} className="p-5 md:py-6 md:px-6 md:border-r border-slate-100 last:border-r-0">
                            <div className="flex items-center gap-2 mb-4">
                              <span className={`h-1 w-6 rounded-full bg-gradient-to-r ${accentBg}`} />
                              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                {col.title}
                              </p>
                            </div>
                            <ul className="space-y-1">
                              {col.items.map((item) => (
                                <li key={item.path}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setDropdownOpen(false)}
                                    className="group/link flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 text-sm font-medium"
                                  >
                                    <span>{item.name}</span>
                                    <svg className="w-4 h-4 text-slate-400 group-hover/link:text-sky-500 group-hover/link:translate-x-0.5 shrink-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                      <div className="md:col-span-1 flex flex-col justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-800">
                        <p className="text-white font-bold text-base leading-snug mb-2">
                          Need help choosing?
                        </p>
                        <p className="text-slate-300 text-sm mb-5">
                          Get a free consultation and custom plan.
                        </p>
                        <button
                          type="button"
                          onClick={() => { setDropdownOpen(false); navigate("/contact"); }}
                          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/30"
                          aria-label="Contact"
                        >
                          Contact us
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/case-study">Case Study</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <Link
              to="/contact"
              className="ml-3 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 shadow-lg shadow-slate-900/20"
            >
              Get Started
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/80">
            <div className="flex flex-col gap-0.5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">
                Home
              </Link>
              <p className="px-4 pt-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">What we do</p>
              {navServices.flatMap((col) => col.items).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/case-study" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">
                Case Study
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
