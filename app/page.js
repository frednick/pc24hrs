"use client";

import { useState } from "react";

const services = [
  { icon: "⌁", title: "Remote IT Support", text: "Get practical help with computers, software, Wi-Fi, printers, email and everyday technology problems." },
  { icon: "▣", title: "Device Setup", text: "Set up laptops, desktops, printers, accounts and business software so you can get productive faster." },
  { icon: "@", title: "Email & Microsoft 365", text: "Get help with Outlook, Teams, Microsoft 365, business email, access and common productivity issues." },
  { icon: "↗", title: "Small Business IT", text: "Build dependable technology systems without the cost of maintaining a full-time IT department." },
  { icon: "◇", title: "Security & Backups", text: "Improve updates, backups and everyday security habits that protect important devices and files." },
  { icon: "✓", title: "Computer Troubleshooting", text: "Diagnose slow PCs, software errors, startup problems and common technology headaches remotely." },
];

const steps = [
  ["01", "Tell us what is wrong", "Send a few details about the problem or service you need."],
  ["02", "Get a clear plan", "We review the issue and explain the most practical next step."],
  ["03", "Get back to work", "Move forward with straightforward support and clear expectations."],
];

const reasons = [
  "Friendly, human support",
  "Clear explanations without jargon",
  "Remote-first convenience",
  "Support for homes & small businesses",
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formId = process.env.NEXT_PUBLIC_FORM;
  const formEndpoint = formId ? `https://formspree.io/f/${formId}` : "/api/contact";

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <div className="bg-[#071a2d] px-5 py-2.5 text-center text-xs font-semibold text-blue-100 sm:text-sm">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
        Remote IT support for homes & small businesses across the USA
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3" aria-label="PC24hrs USA home">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0066CC] text-sm font-black text-white shadow-lg shadow-blue-500/20">PC</div>
            <div className="leading-none">
              <div className="text-[18px] font-black tracking-tight text-[#0A2540]">PC24hrs</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#0066CC]">USA</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex" aria-label="Main navigation">
            <a href="#services" className="transition hover:text-[#0066CC]">Services</a>
            <a href="#how-it-works" className="transition hover:text-[#0066CC]">How it works</a>
            <a href="#why-us" className="transition hover:text-[#0066CC]">Why PC24hrs</a>
            <a href="#contact" className="rounded-full bg-[#0066CC] px-5 py-2.5 text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-[#0055aa]">Get help</a>
          </nav>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#0A2540] md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[['#services', 'Services'], ['#how-it-works', 'How it works'], ['#why-us', 'Why PC24hrs']].map(([href, label]) => (
                <a key={href} href={href} onClick={closeMenu} className="rounded-xl px-4 py-3 font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0066CC]">{label}</a>
              ))}
              <a href="#contact" onClick={closeMenu} className="mt-2 rounded-xl bg-[#0066CC] px-4 py-3 text-center font-extrabold text-white">Get help now</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#071a2d]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-blue-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Professional remote IT support
            </div>
            <h1 className="max-w-3xl text-[2.65rem] font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
              Your technology should work <span className="text-blue-400">for you.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8 lg:text-xl">
              PC24hrs helps people and small businesses solve computer, software and technology problems remotely — quickly, clearly and affordably.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-black text-[#0A2540] shadow-xl transition hover:-translate-y-1 hover:bg-blue-50">Get your technology checked →</a>
              <a href="#services" className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white/10">Explore services</a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm font-semibold text-blue-100 sm:grid-cols-3">
              <div>✓ Remote-first</div>
              <div>✓ Clear next steps</div>
              <div>✓ Human support</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white p-5 shadow-2xl sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0066CC]">Need a hand?</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0A2540] sm:text-3xl">Start with the problem.</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">No technical jargon required.</p>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-xl font-black text-[#0066CC]">✓</div>
              </div>
              <div className="mt-7 space-y-3">
                {["Computer is slow or freezing", "Email or Microsoft 365 problem", "New laptop needs setup", "Wi-Fi, printer or software issue"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-bold text-slate-700">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-100 text-xs font-black text-[#0066CC]">✓</span>{item}
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 block rounded-xl bg-[#0066CC] px-5 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0055aa]">Request support</a>
              <p className="mt-3 text-center text-xs text-slate-500">Tell us what&apos;s happening. We&apos;ll guide the next step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 sm:px-8">
          <div><p className="text-2xl font-black text-[#0A2540]">Remote</p><p className="mt-1 text-xs font-semibold text-slate-500">Support-first experience</p></div>
          <div><p className="text-2xl font-black text-[#0A2540]">Simple</p><p className="mt-1 text-xs font-semibold text-slate-500">Clear explanations & next steps</p></div>
          <div><p className="text-2xl font-black text-[#0A2540]">Practical</p><p className="mt-1 text-xs font-semibold text-slate-500">Solutions built around your needs</p></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0066CC]">What we can help with</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0A2540] sm:text-4xl lg:text-[2.75rem]">Professional IT support without the jargon.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">You don&apos;t need a large IT department to have dependable technology support. PC24hrs gives you a practical remote option when technology gets in the way.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-lg font-black text-[#0066CC] transition group-hover:bg-[#0066CC] group-hover:text-white">{service.icon}</div>
              <h3 className="mt-5 text-lg font-black text-[#0A2540]">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0066CC]">A better support experience</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0A2540] sm:text-4xl">Getting help is simple.</h2>
            <p className="mt-4 leading-7 text-slate-600">Start with what you know. We&apos;ll help make sense of the rest.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-xs font-black tracking-[0.18em] text-[#0066CC]">{number}</div>
                <h3 className="mt-4 text-xl font-black text-[#0A2540]">{title}</h3>
                <p className="mt-2 leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0066CC]">Why PC24hrs</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0A2540] sm:text-4xl">A technology partner you can actually reach.</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">Technology support should make life easier, not more confusing. We listen first, explain clearly and focus on practical solutions that fit the problem.</p>
            <a href="#contact" className="mt-7 inline-flex rounded-xl bg-[#0A2540] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#12385a]">Talk to PC24hrs →</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-black text-[#0066CC]">✓</span>
                <div className="font-bold leading-6 text-[#0A2540]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#071a2d] px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Start here</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">Let&apos;s solve your technology problem.</h2>
            <p className="mt-5 max-w-lg leading-7 text-blue-100">Tell PC24hrs what you need help with. Give us the basics and we&apos;ll guide you toward the right next step.</p>
            <div className="mt-7 space-y-3 text-sm font-semibold text-blue-100">
              <div>✓ Free initial assessment</div>
              <div>✓ Remote support for homes & small businesses</div>
              <div>✓ Clear expectations before work begins</div>
            </div>
          </div>

          <form action={formEndpoint} method="POST" className="rounded-[1.75rem] bg-white p-5 shadow-2xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700">Your name<input name="name" required autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-100" placeholder="John Smith" /></label>
              <label className="text-sm font-bold text-slate-700">Business name<span className="font-normal text-slate-400"> (optional)</span><input name="business" autoComplete="organization" className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-100" placeholder="Your Company" /></label>
              <label className="text-sm font-bold text-slate-700">Email<input name="_replyto" type="email" required autoComplete="email" className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-100" placeholder="you@company.com" /></label>
              <label className="text-sm font-bold text-slate-700">Phone<span className="font-normal text-slate-400"> (optional)</span><input name="phone" type="tel" autoComplete="tel" className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-100" placeholder="(317) 555-0123" /></label>
            </div>
            <label className="mt-4 block text-sm font-bold text-slate-700">What can we help with?<textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-[#0066CC] focus:ring-4 focus:ring-blue-100" placeholder="Tell us briefly about the problem or service you need." /></label>
            <input type="hidden" name="_subject" value="New PC24hrs USA support request" />
            <input type="hidden" name="source" value="PC24hrs USA website" />
            <button type="submit" className="mt-5 min-h-12 w-full rounded-xl bg-[#0066CC] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0055aa] focus:outline-none focus:ring-4 focus:ring-blue-200">Request my technology check →</button>
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">Your details are used only to respond to your request.</p>
          </form>
        </div>
      </section>

      <footer className="bg-[#04111f] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0066CC] text-xs font-black">PC</div><div className="font-black">PC24hrs USA</div></div>
            <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">Professional remote IT support for homes and small businesses.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs font-bold text-slate-400"><a href="#services" className="hover:text-white">Services</a><a href="#why-us" className="hover:text-white">Why PC24hrs</a><a href="#contact" className="hover:text-white">Get help</a></div>
          <p className="text-xs text-slate-500">© 2026 PC24hrs Group. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
