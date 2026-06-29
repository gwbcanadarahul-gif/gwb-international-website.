import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Droplets, ShieldCheck, Thermometer, Wrench } from "lucide-react";

const LUBRICANTS = [
  "KYK Motor Oil SAE 20W-50 API SL",
  "KYK Motor Oil SAE 10W-40 API SN",
  "KYK Motor Oil SAE 5W-30 API SN",
  "KYK Diesel Oil SAE HD40 API CC",
  "KYK Diesel Oil SAE 10W40 API CI-4",
  "KYK Diesel Oil SAE 15W40 API CI-4",
  "KYK Hydraulic Oil VG 46",
  "KYK Hydraulic Oil VG 68",
];

const LUBRICANT_SHOWCASE = [
  {
    title: "Motor Oil",
    spec: "SAE 20W-50 API SL",
    desc: "Advanced engine oil with wear protection, cleaning performance, and sludge control.",
  },
  {
    title: "Diesel Oil",
    spec: "15W40 API CI-4",
    desc: "Heavy-duty diesel lubrication built for durability, oxidation control, and long service cycles.",
  },
  {
    title: "Hydraulic Oil",
    spec: "VG 46 / VG 68",
    desc: "Stable hydraulic performance for industrial systems requiring dependable pressure transfer and protection.",
  },
];

const LUBRICANT_BENEFITS = [
  "Stable viscosity during service life",
  "Faster oil flow for quicker engine warm-up",
  "Good oxidation stability",
  "Minimum vibration and engine noise",
  "Excellent cleansing technology",
  "Provides enhanced fuel economy",
  "Low oil consumption for less frequent top-ups",
  "Extended drain interval",
];

const GREASE_PRODUCTS = [
  "GWB Lithium MP Grease - NLGI 3",
  "GWB Precision Automotive Grease",
  "GWB High Temperature Calcium Sulfonate Complex Grease NLGI 2",
  "KYK BLU 200 Extreme Conditions Grease",
];

const GREASE_SHOWCASE = [
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

const GREASE_FEATURES = [
  "Smooth performance",
  "Anti-wear characteristics",
  "Anti-rust and anti-oxidant protection",
  "Excellent mechanical stability",
  "Copper corrosion resistance",
  "High oxidation stability",
];

const GREASE_APPLICATIONS = [
  "Automotive and industrial applications",
  "Suitable for plain and roller bearings",
  "Electric motors, pumps, and compressors",
  "Machine tools",
  "Operating temperature from -20 to +130 C",
];

export default function LubricantsGreasesPage() {
  return (
    <div data-testid="lubricants-greases-page" className="bg-[#0A0A0A]">
      <section className="relative border-b border-white/10 overflow-hidden">
        <img src="/images/lubricant-grease-gwb.jpg" alt="Lubricants and Greases" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="relative container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Lubricants & Greases</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            Complete lubrication solutions
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-200 leading-relaxed">
            Explore our lubricant oils and grease range for automotive and industrial operations,
            formulated for wear protection, cleanliness, oxidation resistance, and dependable
            performance across demanding environments.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-8">
        <article className="md:col-span-7 border border-white/10 bg-[#121212] p-8 md:p-10">
          <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
            <Droplets className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">Lubricants</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Oil ranges for engine and hydraulic systems</h2>
          <p className="text-zinc-300 leading-relaxed mb-8 text-sm">
            Advanced lubricant oils developed for gasoline and diesel engines, hydraulic systems, and
            heavy-duty industrial service where viscosity control, cleanliness, and long operating life
            are critical.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {LUBRICANT_SHOWCASE.map((item) => (
              <article key={item.title} className="relative overflow-hidden border border-white/10 bg-black/30 min-h-[220px]">
                <img src="/images/lubricant-grease-gwb.jpg" alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
                <div className="relative h-full p-5 flex flex-col justify-end">
                  <div className="label-eyebrow text-[#C0002F] mb-3">{item.spec}</div>
                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LUBRICANTS.map((item) => (
              <div key={item} className="border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="md:col-span-5 border border-white/10 bg-[#111111] p-8 md:p-10">
          <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
            <ShieldCheck className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">Application Benefits</span>
          </div>
          <ul className="space-y-4">
            {LUBRICANT_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8">
          <article className="md:col-span-5 border border-white/10 bg-[#121212] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <Wrench className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Grease Products</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Grease for pressure, temperature, and wear control</h2>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {GREASE_SHOWCASE.map((item) => (
                <article key={item.title} className="relative overflow-hidden border border-white/10 bg-black/30 min-h-[180px]">
                  <img src="/images/lubricant-grease-gwb.jpg" alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
                  <div className="relative h-full p-5 flex flex-col justify-end">
                    <div className="label-eyebrow text-[#C0002F] mb-3">{item.spec}</div>
                    <h3 className="font-heading text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="space-y-3">
              {GREASE_PRODUCTS.map((item) => (
                <div key={item} className="border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="md:col-span-4 border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <Thermometer className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Grease Features</span>
            </div>
            <ul className="space-y-4">
              {GREASE_FEATURES.map((item) => (
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
              {GREASE_APPLICATIONS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 text-center max-w-4xl mx-auto">
        <div className="label-eyebrow text-[#C0002F] mb-4">Need Product Recommendations?</div>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          Request the right lubricant or grease for your operation.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Tell us your equipment type, operating conditions, and required grade. Our team will suggest
          suitable lubricant and grease products for your application.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products/lubricants"
            data-testid="lubricants-reference-link"
            className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
          >
            View Lubricants Reference <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
          <Link
            to="/products/grease"
            data-testid="grease-reference-link"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-8 py-5 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
          >
            View Grease Reference <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
