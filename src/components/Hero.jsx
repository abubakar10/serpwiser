import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StatCard = ({ label, value, sub }) => (
  <div className={`rounded-2xl border border-white/20 p-5 flex flex-col shadow-section bg-gradient-to-br from-cyan-500/90 to-sky-600/90 backdrop-blur-md`}>
    <p className="text-xs font-semibold text-white/90 mb-2">{label}</p>
    <p className="text-3xl font-bold text-white">{value}</p>
    {sub && <p className="text-xs text-white/70 mt-1">{sub}</p>}
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
    <header className="hero-banner relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/40 via-slate-900 to-cyan-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(6,182,212,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_40%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_15%_80%,rgba(14,165,233,0.12),transparent)]" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-5" aria-hidden="true">Local SEO & Google Maps Ranking</p>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Get Your Business Into Google Maps Top 3
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed">
              We specialize in Google Business Profile optimization and Map Pack ranking for local businesses. 70% of clicks go to the top 3. We get you there — done for you, month to month.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />No contracts — month to month</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />100% done for you</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />Results in 30 days</span>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg min-w-0">
              <input
                type="text"
                placeholder="Enter your business name or website..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleStart()}
                className="flex-1 min-w-0 px-5 py-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all shadow-glow-cyan"
              />
              <button
                type="button"
                onClick={handleStart}
                className="shrink-0 px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-glow-cyan hover:-translate-y-0.5"
                aria-label="Get started and go to contact"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="space-y-4 transform lg:translate-x-6">
              <StatCard label="Average Ranking Improvement" value="#1-3" sub="Google Maps position" />
              <StatCard label="Client Retention Rate" value="94%" sub="Stay because it works" />
            </div>
            <div className="space-y-4 transform lg:-translate-x-2 mt-10">
              <StatCard label="Map Pack Share" value="70%" sub="Of clicks go to top 3" />
              <StatCard label="Results Timeline" value="30 days" sub="To see ranking movement" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
