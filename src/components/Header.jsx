import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navServices } from "../data/services";

const LogoIcon = () => (
  <svg className="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 18h6v-2H3v2zm0-5h12v-2H3v2zm0-7v2h18V6H3z" />
    <path d="M9 14l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <LogoIcon />
            <span className="font-bold text-xl text-blue-600 tracking-tight">SERP WISER</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors text-sm font-medium"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                What we do
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-[min(90vw,720px)]">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-4 md:p-6">
                      {navServices.map((col) => (
                        <div key={col.title} className="py-2 md:py-0">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                            {col.title}
                          </p>
                          <ul className="space-y-1">
                            {col.items.map((item) => (
                              <li key={item.path}>
                                <Link
                                  to={item.path}
                                  onClick={() => setDropdownOpen(false)}
                                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-blue-600 transition-colors text-sm font-medium"
                                >
                                  <span className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                  </span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="md:col-span-1 flex flex-col justify-center bg-gradient-to-br from-sky-50 to-indigo-50 rounded-xl p-6 mt-2 md:mt-0">
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 shadow-sm">
                          <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-slate-800 font-bold text-sm leading-tight mb-3">
                          Contact For<br />More Details
                        </p>
                        <button
                          type="button"
                          onClick={() => { setDropdownOpen(false); navigate("/contact"); }}
                          className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors shrink-0"
                          aria-label="Contact"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/case-study"
              className="px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors text-sm font-medium"
            >
              Case Study
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
            >
              Get Started
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-1">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">
                Home
              </Link>
              <p className="px-4 pt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">What we do</p>
              {navServices.flatMap((col) => col.items).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/case-study" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">
                Case Study
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
