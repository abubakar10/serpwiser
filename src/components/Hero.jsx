import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChartCard = ({ label, type }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 flex flex-col">
    <p className="text-xs font-medium text-slate-500 mb-2">{label}</p>
    <div className="flex-1 min-h-[80px] flex items-end">
      {type === "line" && (
        <svg viewBox="0 0 120 40" className="w-full h-10 text-blue-500">
          <path d="M0 35 Q30 25 60 20 T120 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {type === "donut" && (
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent transform -rotate-45" />
      )}
      {type === "wave" && (
        <svg viewBox="0 0 120 40" className="w-full h-10 text-sky-500">
          <path d="M0 20 Q20 5 40 20 T80 20 T120 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {type === "bar" && (
        <div className="flex items-end gap-1 h-10">
          {[4, 7, 5, 9, 6].map((h, i) => (
            <div key={i} className="w-3 bg-blue-400 rounded-t" style={{ height: `${h * 4}px` }} />
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
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-sky-300" />
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-sky-200" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-sky-300" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-sky-200" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sky-500 font-medium text-sm mb-4">Top Marketing Agency</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight tracking-tight">
              Digital marketing that drives
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="text"
                placeholder="Enter your website URL..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleStart()}
                className="flex-1 px-5 py-3.5 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
              />
              <button
                type="button"
                onClick={handleStart}
                className="px-8 py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow-md shrink-0"
              >
                Start
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="space-y-4 transform lg:translate-x-4">
              <ChartCard label="SEO Performance" type="line" />
              <ChartCard label="Conversion Rate" type="donut" />
            </div>
            <div className="space-y-4 transform lg:-translate-x-4 mt-8">
              <ChartCard label="Traffic Growth" type="wave" />
              <ChartCard label="Engagement" type="bar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
