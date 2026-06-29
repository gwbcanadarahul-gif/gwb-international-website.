import { Award, CheckCircle2, PackageSearch, ShieldCheck, Wrench } from "lucide-react";

const BRAND_LINES = [
  {
    title: "KYK Bearings",
    items: [
      "Deep Groove Ball Bearings",
      "Ball Bearing Units and Inserts",
      "Needle Roller Bearings",
      "Tapered Roller Bearings",
      "Cylindrical Roller Bearings",
      "Spherical Roller Bearings",
      "Angular Contact Bearings",
      "One-Way Clutch Release Bearings",
      "Automotive and Stainless Steel Bearings",
      "Adapters and Plummer Blocks",
    ],
  },
  {
    title: "KYK Grease and Lubrication",
    items: [
      "Multi-Purpose Lithium Grease NLGI 3 (MP3)",
      "Drop Point above 190 C / 375 F",
      "ISO VG 150 mineral base stock",
      "Anti-wear, anti-rust, and water washout resistance",
      "Pack sizes from 0.25 Kg to 180 Kg",
      "Designed for automotive, agriculture, and industrial duty",
    ],
  },
  {
    title: "KYK V Belts",
    items: [
      "Classical V-Belts",
      "Narrow V-Belts",
      "Cogged V-Belts",
      "Wrapped V-Belts",
      "Agricultural V-Belts",
    ],
  },
];

const TECH_SUPPORT = [
  "Rolling bearing classifications",
  "Bearing tolerances and fits",
  "Internal clearance guidance",
  "Bearing lubrication guidance",
  "Vibration and noise reference",
];

export default function OurBrandPage() {
  return (
    <div data-testid="our-brand-page" className="bg-[#0A0A0A]">
      <section className="border-b border-white/10">
        <div className="container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Our Brand</div>
          <div className="mb-8 inline-flex border border-white/10 bg-black/40 p-4">
            <img src="/images/kyk-logo.png" alt="KYK Bearings logo" className="h-14 md:h-20 w-auto object-contain" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            KYK Product Portfolio
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-300 leading-relaxed">
            KYK is a long-established Japanese bearing manufacturer with roots in Osaka and a global
            supply footprint. We provide KYK product lines for industrial and automotive operations,
            focused on precision, durability, and dependable service life.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
            <div className="border border-white/10 bg-black/30 px-4 py-4">
              <div className="text-2xl font-heading font-black text-white">Since 1952</div>
              <div className="text-xs tracking-[0.18em] uppercase text-zinc-400 mt-1">Manufacturing Heritage</div>
            </div>
            <div className="border border-white/10 bg-black/30 px-4 py-4">
              <div className="text-2xl font-heading font-black text-white">50+ Countries</div>
              <div className="text-xs tracking-[0.18em] uppercase text-zinc-400 mt-1">Global Brand Reach</div>
            </div>
            <div className="border border-white/10 bg-black/30 px-4 py-4">
              <div className="text-2xl font-heading font-black text-white">Japanese Standards</div>
              <div className="text-xs tracking-[0.18em] uppercase text-zinc-400 mt-1">Precision and Quality Focus</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_LINES.map((line) => (
            <article
              key={line.title}
              className="border border-white/10 bg-[#121212] p-8 hover:border-[#C0002F] transition-colors"
            >
              <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
                <Award className="w-5 h-5" strokeWidth={2} />
                <span className="label-eyebrow">KYK</span>
              </div>
              <h2 className="font-heading text-3xl font-black uppercase tracking-tighter mb-6">{line.title}</h2>
              <ul className="space-y-3">
                {line.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C0002F] mt-1 shrink-0" strokeWidth={2} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <article className="border border-white/10 bg-[#101010] p-8 md:p-10">
          <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
            <Wrench className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">KYK Technical Support Coverage</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-3xl mb-6">
            Along with product supply, KYK technical references support correct bearing selection,
            installation, and maintenance practices for improved uptime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TECH_SUPPORT.map((topic) => (
              <div key={topic} className="border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-200">
                {topic}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-16 md:py-20">
          <div className="inline-flex items-center gap-3 text-[#C0002F] mb-4">
            <ShieldCheck className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">Precision Japanese Technology Since 1953</span>
          </div>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mb-8">
            KYK brand development emphasizes quality-conscious performance, consistency across applications,
            and dependable availability for customers in multiple engineering sectors.
          </p>
          <div className="inline-flex items-center gap-3 text-[#C0002F] mb-4">
            <PackageSearch className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">Need Specific KYK Products?</span>
          </div>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
            Tell us your required part number, quantity, and delivery location. Our team will prepare a
            tailored supply proposal for your operation.
          </p>
        </div>
      </section>
    </div>
  );
}
