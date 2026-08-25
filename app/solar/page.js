"use client";

import { useState } from "react";

const productImage = "https://alladin.pk/cdn/shop/files/itel.9087itel_1200x.png?v=1769242101";

const specs = [
  ["Output power", "500W"],
  ["Energy capacity", "1,000Wh / 1kWh"],
  ["Battery", "LiFePO₄"],
  ["Inverter", "Pure sine wave"],
  ["Solar controller", "400W MPPT"],
  ["UPS switching", "≤20ms"],
  ["Cycle life", "Up to 6,000 cycles*"],
  ["Noise", "Approx. 47dB*"],
];

const useCases = [
  ["🏠", "Home backup", "Keep essential lights, internet and small electronics running when the grid goes off."],
  ["💼", "Work from home", "Power a laptop, router and other essential work equipment without a noisy generator."],
  ["🏪", "Small business", "A practical backup option for POS, routers, laptops, lights and other essential devices."],
  ["🌤️", "Solar charging", "Connect compatible solar input for a cleaner way to replenish your stored energy."],
];

const plans = [
  { title: "Pay once", badge: "Best value", upfront: "₦420,000", detail: "Full product payment", note: "One payment and you're done." },
  { title: "3-month plan", badge: "Flexible", upfront: "₦210,000", detail: "+ ₦70,000 × 3 months", note: "50% upfront, balance spread across 3 months." },
  { title: "6-month plan", badge: "Easy start", upfront: "₦168,000", detail: "+ ₦50,400 × 5 months", note: "40% upfront, balance spread across 5 months." },
];

export default function SolarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const formId = process.env.NEXT_PUBLIC_FORM;
  const formEndpoint = formId ? `https://formspree.io/f/${formId}` : null;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!formEndpoint) {
      setSent(true);
      return;
    }

    const response = await fetch(formEndpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setSent(true);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9f6] text-slate-900">
      <div className="bg-[#0d2016] px-5 py-2.5 text-center text-xs font-bold text-white sm:text-sm">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#d9ff48]" />
        PC24hrs Solar • Affordable backup power for everyday Nigerians
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f9f6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="PC24hrs Solar home">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0d2016] text-lg font-black text-[#d9ff48]">☀</div>
            <div className="leading-none">
              <div className="text-[18px] font-black tracking-tight text-[#0d2016]">PC24hrs</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-emerald-700">Solar</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href="#features" className="hover:text-emerald-700">Why this Power Tank</a>
            <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
            <a href="#uses" className="hover:text-emerald-700">Use cases</a>
            <a href="#specs" className="hover:text-emerald-700">Specifications</a>
            <a href="#quote" className="rounded-full bg-[#0d2016] px-5 py-2.5 text-white transition hover:-translate-y-0.5">Get started</a>
          </nav>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#0d2016] md:hidden" aria-label="Toggle menu">
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              <a href="#features" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-bold">Why this Power Tank</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-bold">Pricing</a>
              <a href="#uses" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-bold">Use cases</a>
              <a href="#specs" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-bold">Specifications</a>
              <a href="#quote" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-[#0d2016] px-4 py-3 text-center font-black text-white">Get started</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#0d2016]">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-lime-200">
              <span className="h-2 w-2 rounded-full bg-[#d9ff48]" /> itel Energy • Power Tank
            </div>
            <h1 className="max-w-3xl text-[2.7rem] font-black leading-[1.01] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              500W of backup power. <span className="text-[#d9ff48]">1,000Wh of energy.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50/80 sm:text-lg sm:leading-8">
              Meet the itel Power Tank — an all-in-one backup power solution built around a 1kWh LiFePO₄ battery, pure sine-wave inverter and solar charging support.
            </p>
            <div className="mt-7 flex flex-wrap items-end gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.18em] text-lime-200/70">Starting at</div>
                <div className="mt-1 text-4xl font-black tracking-tight text-[#d9ff48] sm:text-5xl">₦420,000</div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-emerald-50/80">Installment available</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="rounded-2xl bg-[#d9ff48] px-7 py-4 text-center text-sm font-black text-[#0d2016] shadow-xl shadow-lime-950/20 transition hover:-translate-y-1">See payment plans →</a>
              <a href="#specs" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white/10">View specifications</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-emerald-50/75">
              <span>✓ LiFePO₄ battery</span>
              <span>✓ 400W MPPT</span>
              <span>✓ Pure sine wave</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-[#d9ff48]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white p-5 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-[#eff9df] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-800">All-in-one ESS</div>
                <div className="text-xs font-bold text-slate-400">IESS-05K10N</div>
              </div>
              <div className="mt-4 flex min-h-[360px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-50 to-[#edf3eb] p-6">
                <img src={productImage} alt="itel Power Tank 500W 1000Wh" className="max-h-[340px] w-auto object-contain drop-shadow-2xl" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-slate-50 px-2 py-3"><div className="text-lg font-black text-[#0d2016]">500W</div><div className="text-[10px] font-bold text-slate-500">Output</div></div>
                <div className="rounded-xl bg-slate-50 px-2 py-3"><div className="text-lg font-black text-[#0d2016]">1kWh</div><div className="text-[10px] font-bold text-slate-500">Capacity</div></div>
                <div className="rounded-xl bg-slate-50 px-2 py-3"><div className="text-lg font-black text-[#0d2016]">LiFePO₄</div><div className="text-[10px] font-bold text-slate-500">Battery</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-slate-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Affordable ownership</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#0d2016] sm:text-4xl">Get the Power Tank for ₦420,000.</h2>
            <p className="mt-4 leading-7 text-slate-600">Choose a one-time payment or spread the same ₦420,000 product price across a simple installment plan.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article key={plan.title} className={`relative rounded-3xl border p-6 shadow-sm ${index === 0 ? "border-emerald-300 bg-[#eff9df]" : "border-slate-200 bg-white"}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-[#0d2016]">{plan.title}</h3>
                  <span className="rounded-full bg-[#0d2016] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#d9ff48]">{plan.badge}</span>
                </div>
                <div className="mt-7 text-3xl font-black tracking-tight text-[#0d2016]">{plan.upfront}</div>
                <div className="mt-2 text-sm font-black text-emerald-700">{plan.detail}</div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{plan.note}</p>
                <a href="#quote" className="mt-7 block rounded-xl bg-[#0d2016] px-5 py-3.5 text-center text-sm font-black text-[#d9ff48] transition hover:-translate-y-0.5">Choose this plan →</a>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center text-xs leading-5 text-amber-900">
            Installment plans are subject to approval and agreed payment terms. The ₦420,000 advertised price is for the Power Tank product; delivery, installation or additional solar panels may be charged separately where applicable.
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 lg:px-8">
          <div><p className="text-2xl font-black text-[#0d2016]">3-in-1</p><p className="mt-1 text-xs font-semibold text-slate-500">Inverter + battery + solar controller</p></div>
          <div><p className="text-2xl font-black text-[#0d2016]">Portable</p><p className="mt-1 text-xs font-semibold text-slate-500">A compact alternative to a fuel generator</p></div>
          <div><p className="text-2xl font-black text-[#0d2016]">Quiet</p><p className="mt-1 text-xs font-semibold text-slate-500">Designed for everyday indoor-friendly use</p></div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Built for practical power</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#0d2016] sm:text-4xl">Power the things that matter.</h2>
          <p className="mt-5 leading-7 text-slate-600">Instead of thinking about a full solar installation on day one, start with stored power for your essential devices and grow your setup as your needs grow.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Long-life LiFePO₄", "A lithium iron phosphate battery chemistry designed for durability and repeated cycling."],
            ["02", "Pure sine wave", "Cleaner AC output for compatible electronics and everyday appliances within the rated load."],
            ["03", "Solar-ready", "A built-in MPPT controller supports solar charging for more flexible energy replenishment."],
            ["04", "UPS-style backup", "Fast transfer helps reduce interruption to essential connected equipment when mains power drops."],
          ].map(([n, title, text]) => (
            <article key={n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-xs font-black tracking-[0.18em] text-emerald-700">{n}</div>
              <h3 className="mt-4 text-lg font-black text-[#0d2016]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="uses" className="bg-[#edf3eb] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Where it fits</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#0d2016] sm:text-4xl">One Power Tank. Many everyday jobs.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map(([icon, title, text]) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-5 text-lg font-black text-[#0d2016]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Product details</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#0d2016] sm:text-4xl">Know what you&apos;re buying.</h2>
            <p className="mt-5 leading-7 text-slate-600">The numbers matter. We&apos;ll also help you match the Power Tank to the devices you actually need to run, rather than selling you more capacity than necessary.</p>
            <div className="mt-7 rounded-2xl border border-emerald-200 bg-[#eff9df] p-5 text-sm leading-6 text-emerald-950">
              <strong>Important:</strong> Actual runtime depends on the connected load, battery condition, conversion losses and operating conditions. Ask us for a load check before ordering.
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-slate-500"><span>Specification</span><span>Value</span></div>
            {specs.map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b border-slate-100 px-5 py-4 text-sm last:border-0"><span className="font-bold text-slate-600">{label}</span><span className="font-black text-[#0d2016]">{value}</span></div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-400">*Specifications shown are based on currently available product information and listings. Confirm final configuration, warranty and regional specifications before purchase.</p>
      </section>

      <section id="quote" className="bg-[#0d2016] px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d9ff48]">Ready to reduce generator stress?</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">Tell us what you need to power.</h2>
            <p className="mt-5 max-w-xl leading-7 text-emerald-50/75">Send your details and the devices you want to run. We&apos;ll help you check suitability, availability and the payment plan before you commit.</p>
            <div className="mt-7 space-y-3 text-sm font-bold text-emerald-50/80">
              <div>✓ ₦420,000 product price</div>
              <div>✓ 3-month and 6-month plans</div>
              <div>✓ Load suitability guidance</div>
              <div>✓ Solar setup options</div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#eff9df] text-2xl">✓</div>
                <h3 className="mt-5 text-2xl font-black text-[#0d2016]">Request received.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">Thanks. We&apos;ll review your request and follow up with the next step.</p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-[#0d2016]">Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="product" value="itel Power Tank 500W + 1000Wh" />
                <input type="hidden" name="price" value="NGN 420,000" />
                <input type="hidden" name="source" value="PC24hrs Solar landing page" />
                <div><label htmlFor="name" className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">Name</label><input id="name" name="name" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-emerald-600" placeholder="Your name" /></div>
                <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="phone" className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">Phone / WhatsApp</label><input id="phone" name="phone" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-emerald-600" placeholder="080..." /></div><div><label htmlFor="location" className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">Location</label><input id="location" name="location" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-emerald-600" placeholder="City / State" /></div></div>
                <div><label htmlFor="plan" className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">Preferred payment plan</label><select id="plan" name="plan" required className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-emerald-600"><option value="pay-once">Pay once — ₦420,000</option><option value="3-month">3 months — ₦210,000 upfront + ₦70,000 × 3</option><option value="6-month">6 months — ₦168,000 upfront + ₦50,400 × 5</option></select></div>
                <div><label htmlFor="load" className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">What do you want to power?</label><textarea id="load" name="load" required rows="4" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-emerald-600" placeholder="e.g. router, laptop, TV, lights, POS..." /></div>
                <button type="submit" className="w-full rounded-xl bg-[#0d2016] px-5 py-4 text-sm font-black text-[#d9ff48] transition hover:-translate-y-0.5 hover:bg-[#163824]">Request this Power Tank →</button>
                <p className="text-center text-xs leading-5 text-slate-400">No payment is taken here. Installment requests are confirmed after review and agreement on terms.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#07140d] px-5 py-8 text-center text-xs font-semibold text-emerald-50/50">
        <div className="mx-auto max-w-7xl">© 2026 PC24hrs Solar. Product names and trademarks belong to their respective owners.</div>
      </footer>
    </main>
  );
}
