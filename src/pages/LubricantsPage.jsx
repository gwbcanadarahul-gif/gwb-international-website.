import { CheckCircle2, Droplets, ShieldCheck } from "lucide-react";

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

const SHOWCASE = [
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

const BENEFITS = [
  "Stable viscosity during service life",
  "Faster oil flow for quicker engine warm-up",
  "Good oxidation stability",
  "Minimum vibration and engine noise",
  "Excellent cleansing technology",
  "Provides enhanced fuel economy",
  "Low oil consumption for less frequent top-ups",
  "Extended drain interval",
];

export default function LubricantsPage() {
  return (
    <div data-testid="lubricants-page" className="bg-[#0A0A0A]">
      <section className="relative border-b border-white/10 overflow-hidden">
        <img src="/images/lubricant-grease-gwb.jpg" alt="Lubricants" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="relative container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Lubricants</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            Lubricant products for engine and hydraulic systems
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-200 leading-relaxed">
            Explore our lubricant oil range for automotive and industrial applications, engineered for wear protection, oxidation control, and reliable long-service performance.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SHOWCASE.map((item) => (
            <article key={item.title} className="relative overflow-hidden border border-white/10 bg-black/30 min-h-[240px]">
              <img src="/images/lubricant-grease-gwb.jpg" alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="label-eyebrow text-[#C0002F] mb-3">{item.spec}</div>
                <h2 className="font-heading text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h2>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <article className="md:col-span-7 border border-white/10 bg-[#121212] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <Droplets className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Lubricant Range</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LUBRICANTS.map((item) => (
                <div key={item} className="border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-200">{item}</div>
              ))}
            </div>
          </article>

          <article className="md:col-span-5 border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
              <ShieldCheck className="w-5 h-5" strokeWidth={2} />
              <span className="label-eyebrow">Application Benefits</span>
            </div>
            <ul className="space-y-4">
              {BENEFITS.map((item) => (
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
