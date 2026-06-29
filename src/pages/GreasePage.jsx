import { CheckCircle2, ShieldCheck, Thermometer, Wrench } from "lucide-react";

const PRODUCTS = [
  "GWB Lithium MP Grease - NLGI 3",
  "GWB Precision Automotive Grease",
  "GWB High Temperature Calcium Sulfonate Complex Grease NLGI 2",
  "KYK BLU 200 Extreme Conditions Grease",
];

const SHOWCASE = [
  {
    title: "Lithium MP Grease",
    spec: "NLGI 2 & 3",
    desc: "Multipurpose grease for automotive and industrial equipment operating in all-weather conditions.",
  },
  {
    title: "High Temperature Grease",
    spec: "Calcium Sulfonate Complex",
    desc: "Formulated for elevated temperature performance, mechanical stability, and corrosion resistance.",
  },
  {
    title: "Extreme Conditions Grease",
    spec: "KYK BLU 200",
    desc: "Reliable grease solution for pressure, vibration, high-load, and severe-duty applications.",
  },
];

const FEATURES = [
  "Smooth performance",
  "Anti-wear characteristics",
  "Anti-rust and anti-oxidant protection",
  "Excellent mechanical stability",
  "Copper corrosion resistance",
  "High oxidation stability",
];

const APPLICATIONS = [
  "Automotive and industrial applications",
  "Suitable for plain and roller bearings",
  "Electric motors, pumps, and compressors",
  "Machine tools",
  "Operating temperature from -20 to +130 C",
];

export default function GreasePage() {
  return (
    <div data-testid="grease-page" className="bg-[#0A0A0A]">
      <section className="relative border-b border-white/10 overflow-hidden">
        <img src="/images/lubricant-grease-gwb.jpg" alt="Grease" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="relative container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Grease</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            Grease products for wear, pressure, and temperature control
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-200 leading-relaxed">
            Explore our grease range formulated with quality base stocks, thickeners, and additives for demanding automotive and industrial applications.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SHOWCASE.map((item) => (
            <article key={item.title} className="relative overflow-hidden border border-white/10 bg-black/30 min-h-[220px]">
              <img src="/images/lubricant-grease-gwb.jpg" alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="label-eyebrow text-[#C0002F] mb-3">{item.spec}</div>
                <h2 className="font-heading text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h2>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <article className="md:col-span-5 border border-white/10 bg-[#121212] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <Wrench className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Grease Products</span>
            </div>
            <div className="space-y-3">
              {PRODUCTS.map((item) => (
                <div key={item} className="border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-200">{item}</div>
              ))}
            </div>
          </article>

          <article className="md:col-span-4 border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <Thermometer className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Grease Features</span>
            </div>
            <ul className="space-y-4">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="md:col-span-3 border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <ShieldCheck className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Applications</span>
            </div>
            <ul className="space-y-4">
              {APPLICATIONS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
