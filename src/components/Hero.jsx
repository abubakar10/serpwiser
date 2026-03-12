import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChartCard = ({ label, type, gradient }) => (
  <div className={`rounded-2xl border border-white/20 p-5 flex flex-col shadow-section bg-gradient-to-br ${gradient} backdrop-blur-md`}>
    <p className="text-xs font-semibold text-white/90 mb-3">{label}</p>
    <div className="flex-1 min-h-[72px] flex items-end">
      {type === "line" && (
        <svg viewBox="0 0 120 40" className="w-full h-9 text-white">
          <path d="M0 35 Q30 25 60 20 T120 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
      {type === "donut" && (
        <div className="w-11 h-11 rounded-full border-[3px] border-white/90 border-t-transparent transform -rotate-45" />
      )}
      {type === "wave" && (
        <svg viewBox="0 0 120 40" className="w-full h-9 text-white/90">
          <path d="M0 20 Q20 5 40 20 T80 20 T120 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
      {type === "bar" && (
        <div className="flex items-end gap-1.5 h-9">
          {[4, 7, 5, 9, 6].map((h, i) => (
            <div key={i} className="w-3 rounded-t bg-white/80" style={{ height: `${h * 4}px` }} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function Hero() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (inputValue.trim()) navigate("/contact?ref=hero");
    else navigate("/contact");
  };

  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900" aria-labelledby="hero-heading">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/40 via-slate-900 to-cyan-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_40%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_15%_80%,rgba(14,165,233,0.12),transparent)]" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-5" aria-hidden="true">SEO & Digital Marketing</p>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Digital marketing that drives
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed">
              We help brands grow with data-driven strategies across SEO, content marketing, and paid channels. Get more organic traffic, qualified leads, and revenue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="text"
                placeholder="Enter your website URL..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleStart()}
                className="flex-1 px-5 py-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all shadow-glow-cyan"
              />
              <button
                type="button"
                onClick={handleStart}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5 shrink-0"
                aria-label="Get started and go to contact"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="space-y-4 transform lg:translate-x-6">
              <ChartCard label="SEO Performance" type="line" gradient="from-cyan-500/90 to-sky-600/90" />
              <ChartCard label="Conversion Rate" type="donut" gradient="from-indigo-500/90 to-violet-600/90" />
            </div>
            <div className="space-y-4 transform lg:-translate-x-2 mt-10">
              <ChartCard label="Traffic Growth" type="wave" gradient="from-sky-500/90 to-cyan-600/90" />
              <ChartCard label="Engagement" type="bar" gradient="from-violet-500/90 to-purple-600/90" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
