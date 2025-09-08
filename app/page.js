// app/page.js
"use client";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="bg-[#0A2540] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#0066CC] grid place-items-center font-bold">PC</div>
          <div>
            <div className="text-xs opacity-80">Welcome to</div>
            <div className="text-lg font-semibold">PC24hrs Marketplace</div>
          </div>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:underline">Marketplace</a>
          <a href="#" className="hover:underline">Repairs</a>
          <a href="#" className="hover:underline">Store</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">
          Buy • Repair • Boost — All in One Marketplace
        </h1>
        <p className="text-lg text-slate-600 mb-6 max-w-2xl">
          AI-powered shopping, repair bookings, and services — all on one platform.
        </p>

        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="🔍 Ask our AI (e.g., 'laptop under ₦200k with long battery')"
            className="w-full p-3 rounded-xl border shadow-sm"
          />
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-[#0A2540] mb-2">Marketplace</h3>
          <p className="text-sm text-slate-600">Discover products with smart recommendations and trusted sellers.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-[#0A2540] mb-2">Repairs</h3>
          <p className="text-sm text-slate-600">Book repairs with live AI troubleshooting and professional technicians.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-[#0A2540] mb-2">Store</h3>
          <p className="text-sm text-slate-600">Shop curated gadgets, accessories, and service bundles.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="rounded-2xl border p-6 bg-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-[#0A2540]">Get weekly tech picks</h4>
            <p className="text-sm text-slate-600">Subscribe to our newsletter for deals and guides.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="you@example.com" className="px-3 py-2 rounded-xl border w-full md:w-72" />
            <button className="px-4 py-2 rounded-xl bg-[#0066CC] text-white">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-white text-center py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-sm">© {new Date().getFullYear()} PC24hrs Group. All rights reserved.</div>
          <div className="text-xs opacity-80 mt-2">Affiliate Disclosure: PC24hrs may earn from qualifying purchases.</div>
        </div>
      </footer>
    </div>
  );
}
