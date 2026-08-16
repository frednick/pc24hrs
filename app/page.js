"use client";

const services = [
  { icon: "⌁", title: "Remote IT Support", text: "Fast help with everyday computer, software and connectivity problems—without waiting for an onsite visit." },
  { icon: "▣", title: "Device Setup", text: "Set up laptops, desktops, printers, accounts and business software so your team can get to work." },
  { icon: "◉", title: "Microsoft 365", text: "Get practical help with Microsoft 365 setup, user access, email and common productivity issues." },
  { icon: "↗", title: "Business Technology", text: "Straightforward technology guidance for small teams that want reliable systems without a large IT department." },
  { icon: "◇", title: "Security & Backups", text: "Build better habits around updates, backups and basic security for your business devices." },
  { icon: "✓", title: "Computer Troubleshooting", text: "Diagnose slow PCs, software errors, device issues and other common technology headaches remotely." },
];

const steps = [
  ["01", "Tell us the problem", "Send a quick description of what is happening."],
  ["02", "Free 15-minute check", "We review the issue and explain the next step."],
  ["03", "Get it fixed", "We provide practical remote support and clear pricing."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="PC24hrs USA home">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0066CC] text-sm font-black text-white shadow-sm">PC</div>
            <div className="leading-none">
              <div className="text-[17px] font-extrabold tracking-tight text-[#0A2540]">PC24hrs</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0066CC]">USA</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-[#0066CC]">Services</a>
            <a href="#how-it-works" className="transition hover:text-[#0066CC]">How it works</a>
            <a href="#why-us" className="transition hover:text-[#0066CC]">Why PC24hrs</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#0066CC] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0055aa]">Get Help</a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,102,204,.38),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Remote support for small businesses
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable IT support without the big-company price tag.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              PC24hrs helps small businesses solve computer, software and technology problems remotely—quickly, clearly and affordably.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-extrabold text-[#0A2540] shadow-lg transition hover:bg-blue-50">Book a free 15-minute check</a>
              <a href="#services" className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-center text-sm font-extrabold text-white transition hover:bg-white/10">Explore services</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
              <span>✓ Remote-first</span><span>✓ Small-business focused</span><span>✓ Clear pricing</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-7 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0066CC]">Technology checkup</p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#0A2540]">Something not working?</h2>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-xl text-[#0066CC]">✓</div>
            </div>
            <div className="space-y-3">
              {["Computer is running slowly", "Software or email problem", "New device needs setup", "Wi-Fi / printer issue"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-50 text-xs font-black text-[#0066CC]">✓</span>{item}
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-6 block rounded-xl bg-[#0066CC] px-5 py-3.5 text-center text-sm font-extrabold text-white transition hover:bg-[#0055aa]">Tell us what you need →</a>
            <p className="mt-3 text-center text-xs text-slate-500">No pressure. Just a quick assessment.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <p className="text-sm font-bold text-[#0A2540]">Built for teams that need technology to simply work.</p>
          <p className="text-sm text-slate-500">Serving small businesses remotely across Indiana and beyond.</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0066CC]">What we do</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">Technology support for everyday business.</h2>
          <p className="mt-4 leading-7 text-slate-600">You don't need a full-time IT department to have dependable technology support. PC24hrs gives small teams a practical remote option.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-lg font-black text-[#0066CC]">{service.icon}</div>
              <h3 className="mt-5 text-lg font-extrabold text-[#0A2540]">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0066CC]">Simple process</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">Get help in three steps.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="text-sm font-black text-[#0066CC]">{number}</div>
                <h3 className="mt-4 text-xl font-extrabold text-[#0A2540]">{title}</h3>
                <p className="mt-2 leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0066CC]">Why PC24hrs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">A technology partner you can actually reach.</h2>
            <p className="mt-5 leading-7 text-slate-600">PC24hrs was built around a simple idea: small businesses deserve dependable technology help without complicated processes or unnecessary overhead.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Fast, remote-first assistance", "Practical solutions, not jargon", "Support designed for small teams", "Clear next steps before work begins"].map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-black text-[#0066CC]">✓</span>
                <div className="font-bold leading-6 text-[#0A2540]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0A2540] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-300">Start here</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Let's solve your technology problem.</h2>
            <p className="mt-4 max-w-lg leading-7 text-blue-100">Tell us what your business needs. We'll review it and get back to you with the best next step.</p>
            <div className="mt-7 space-y-3 text-sm text-blue-100">
              <div>✓ Free 15-minute initial assessment</div>
              <div>✓ Remote support for small businesses</div>
              <div>✓ No long-term commitment required to start</div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700">Your name<input required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-50" placeholder="John Smith" /></label>
              <label className="text-sm font-bold text-slate-700">Business name<input required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-50" placeholder="Your Company" /></label>
              <label className="text-sm font-bold text-slate-700">Email<input type="email" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-50" placeholder="you@company.com" /></label>
              <label className="text-sm font-bold text-slate-700">Phone (optional)<input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-50" placeholder="(317) 555-0123" /></label>
            </div>
            <label className="mt-4 block text-sm font-bold text-slate-700">What can we help with?<textarea required rows={4} className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-50" placeholder="Tell us briefly about the problem or service you need." /></label>
            <button type="submit" className="mt-5 w-full rounded-xl bg-[#0066CC] px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#0055aa]">Request my free technology check</button>
            <p className="mt-3 text-center text-xs text-slate-500">We'll use your details only to respond to your request.</p>
          </form>
        </div>
      </section>

      <footer className="bg-[#071a2d] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="font-extrabold">PC24hrs USA</div>
            <p className="mt-1 text-xs text-slate-400">Remote IT support for small businesses.</p>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} PC24hrs Group. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
