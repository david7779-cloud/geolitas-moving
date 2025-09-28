import React from "react";

// =============================
// QUICK SETTINGS (edit these)
// =============================
const SETTINGS = {
  businessName: "Value Movers",
  tagline: "Affordable, careful local movers",
  phone: "(617) 555-0142",
  email: "hello@geolitasmoving.com",
  city: "Waltham",
  serviceArea: [
    "Waltham",
    "Newton",
    "Watertown",
    "Belmont",
    "Boston",
    "Cambridge",
    "Somerville",
    "Brookline",
  ],
  hours: "Mon–Sun 7:00 AM – 8:00 PM",
  addressLine1: "123 Main St",
  addressLine2: "Waltham, MA 02451",
  dotNumber: "USDOT #######",
  mcNumber: "MC #######",
};

// Utility: phone link w/ spaces removed
const telHref = `tel:${SETTINGS.phone.replace(/[^+\d]/g, "")}`;

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* SEO & Structured Data */}
   

      {/* Header / Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 py-8 md:py-12">
          <div className="flex items-center justify-between">
           <h1 className="text-6xl font-extrabold text-blue-600">
  {SETTINGS.businessName}
</h1>

            <a href={telHref} className="rounded-xl px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 shadow">
              Call {SETTINGS.phone}
            </a>
          </div>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                {SETTINGS.tagline} in {SETTINGS.city} & Greater Boston
              </h1>
              <p className="mt-4 text-slate-600 md:text-lg">
                Apartment, home, and office moves done right. Friendly crews, careful packing, and
                transparent pricing. Same‑day availability when possible.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#quote" className="rounded-xl px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 shadow">
                  Get a fast quote
                </a>
                <a href={telHref} className="rounded-xl px-5 py-3 bg-white border border-slate-200 hover:border-slate-300">
                  Call {SETTINGS.phone}
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">Open {SETTINGS.hours}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {[
                  'Licensed & insured',
                  'Floor & furniture protection',
                  'Clean, newer trucks',
                  'Furniture assembly',
                  'Packing supplies available',
                  'No hidden fees',
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
                <p>
                  {SETTINGS.dotNumber} · {SETTINGS.mcNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600">Everything you need for a smooth move.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Local Moves',
              desc: 'Apartments, condos, and homes within Greater Boston & MetroWest.',
            },
            {
              title: 'Packing & Unpacking',
              desc: 'Full‑service packing or help with just the tricky items. Materials available.',
            },
            {
              title: 'Labor‑Only',
              desc: 'Load/unload your rental truck, storage unit, or PODS. Two‑hour minimum.',
            },
            {
              title: 'Office Moves',
              desc: 'Small office relocations with after‑hours options to minimize downtime.',
            },
            {
              title: 'In‑Home Moves',
              desc: 'Room‑to‑room rearranging, staging, or single‑item moves.',
            },
            {
              title: 'Junk Removal',
              desc: 'Light haul‑away of packing debris and unwanted items (add‑on).',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Simple Pricing</h2>
          <p className="mt-2 text-slate-600">Transparent hourly rates. No surprise fees.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              name: '2 Movers + Truck',
              price: '$139/hr',
              features: ['2‑hour minimum', 'Travel time applies', 'Best for studios & 1BR'],
            },{
              name: '3 Movers + Truck',
              price: '$179/hr',
              features: ['3‑hour minimum', 'Travel time applies', 'Best for 2–3BR'],
              highlight: true,
            },{
              name: 'Labor‑Only (No Truck)',
              price: '$109/hr',
              features: ['2‑hour minimum', 'Load/unload help', 'Great for PODS & storage'],
            }].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-6 shadow-sm ${plan.highlight ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'}`}>
                <h3 className="font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-3xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((f) => (<li key={f} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"/> {f}</li>))}
                </ul>
                <a href="#quote" className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Book this</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Rates are examples—edit to your actual pricing. Stairs, long carries, pianos, and special items may add fees.</p>
        </div>
      </section>

      {/* Service Area */}
      <section id="area" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Service Area</h2>
        <p className="mt-2 text-slate-600">We serve {SETTINGS.city} and nearby communities:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SETTINGS.serviceArea.map((c) => (
            <span key={c} className="rounded-full border border-slate-200 px-3 py-1 text-sm">{c}</span>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Happy Customers</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["On time, friendly, and they wrapped everything—zero scratches.", "Great price and super quick. Booking was easy.", "They handled our 3rd‑floor walk‑up like pros."]
              .map((quote, i) => (
              <figure key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <blockquote className="text-slate-700">“{quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">— Local customer</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get a Fast Quote</h2>
          <p className="mt-2 text-slate-700">Tell us about your move and we’ll reply quickly.</p>
          <form className="mt-6 grid gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-200 p-3" placeholder="Full name" required />
              <input className="rounded-xl border border-slate-200 p-3" type="tel" placeholder="Phone" required />
              <input className="rounded-xl border border-slate-200 p-3 md:col-span-2" type="email" placeholder="Email" required />
              <input className="rounded-xl border border-slate-200 p-3" placeholder="From address / floor" />
              <input className="rounded-xl border border-slate-200 p-3" placeholder="To address / floor" />
              <select className="rounded-xl border border-slate-200 p-3">
                <option>Apartment / Condo</option>
                <option>House</option>
                <option>Office</option>
                <option>Storage / PODS</option>
              </select>
              <select className="rounded-xl border border-slate-200 p-3">
                <option>Studio</option>
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>3+ Bedrooms</option>
              </select>
            </div>
            <textarea className="rounded-xl border border-slate-200 p-3" rows={4} placeholder="Move date, stairs, elevators, special items (piano, safe, treadmill), parking info…" />
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Request quote</button>
              <a href={telHref} className="rounded-xl bg-white px-5 py-3 border border-slate-200 hover:border-slate-300">Or call {SETTINGS.phone}</a>
            </div>
            <p className="text-xs text-slate-500">Submitting sends your details to {SETTINGS.email}. You can also email us directly.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-semibold">{SETTINGS.businessName}</p>
              <p className="mt-2 text-sm text-slate-600">{SETTINGS.tagline}</p>
            </div>
            <div>
              <p className="font-semibold">Contact</p>
              <p className="mt-2 text-sm text-slate-600">{SETTINGS.addressLine1}</p>
              <p className="text-sm text-slate-600">{SETTINGS.addressLine2}</p>
              <p className="mt-2 text-sm text-slate-600">{SETTINGS.hours}</p>
              <p className="mt-2 text-sm"><a href={telHref} className="text-blue-700 hover:underline">{SETTINGS.phone}</a></p>
              <p className="text-sm"><a href={`mailto:${SETTINGS.email}`} className="text-blue-700 hover:underline">{SETTINGS.email}</a></p>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#area" className="hover:underline">Service Area</a></li>
                <li><a href="#reviews" className="hover:underline">Reviews</a></li>
                <li><a href="#quote" className="hover:underline">Get a Quote</a></li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">{SETTINGS.dotNumber} · {SETTINGS.mcNumber}</p>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} {SETTINGS.businessName}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
