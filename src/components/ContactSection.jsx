import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/maqpelry";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checks = [
    "Free GBP audit — we review your listing before you commit to anything",
    "Results in 30 days — most clients see ranking movement in the first month",
    "No contracts — month to month, cancel any time",
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(14,165,233,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Ready to rank in the Google Maps top 3?
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed">
              Tell us about your business and we will audit your Google Business Profile for free. No commitment — just a clear picture of where you stand and what it would take to get you into the top 3.
            </p>
            <ul className="space-y-4">
              {checks.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium text-[15px] leading-snug pt-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-section border border-slate-200/80 p-6 md:p-8 relative">
            <div className="absolute -top-5 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center shadow-glow-sky">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                <input
                  id="phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Tell us about your business</label>
                <textarea
                  id="message" name="message" rows={4} required
                  value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 outline-none transition-all resize-none"
                  placeholder="What type of business do you have? Which city are you in? What are you trying to rank for on Google Maps?"
                />
              </div>
              {status === "success" && (
                <p className="text-emerald-600 font-semibold text-center py-2">
                  Thanks! We will be in touch within 24 hours with your free audit.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold text-center py-2">
                  Something went wrong. Please try again or email us at info@serpwiser.com
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-900 font-bold hover:from-cyan-400 hover:to-sky-400 transition-all duration-200 shadow-section disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                aria-label={status === "submitting" ? "Sending message" : "Get your free GBP audit"}
              >
                {status === "submitting" ? "Sending..." : "Get My Free GBP Audit"}
              </button>
              <p className="text-center text-slate-400 text-xs">No commitment required. We will respond within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
