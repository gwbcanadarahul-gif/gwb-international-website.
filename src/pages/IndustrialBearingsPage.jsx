import { ArrowUpRight, CircleDot, Cog, Gauge, PackageSearch, ShieldCheck } from "lucide-react";

const HERO_IMAGE = "/images/bearing-gwb.avif";

const BEARING_TYPES = [
  {
    title: "Ball Bearings",
    image: "/images/bearing-gwb.avif",
    overview: "Designed for high-speed rotation, low friction, and smooth operation in motors and precision assemblies.",
    items: [
      "Deep Groove Ball Bearings",
      "Angular Contact Ball Bearings",
      "Self-Aligning Ball Bearings",
      "Thrust Ball Bearings",
    ],
  },
  {
    title: "Roller Bearings",
    image: "/images/steel-factory-gwb.jpg",
    overview: "Built for heavy radial and combined loads in industrial lines that operate under high stress.",
    items: [
      "Cylindrical Roller Bearings",
      "Needle Roller Bearings",
      "Spherical Roller Bearings",
      "Tapered Roller Bearings",
    ],
  },
  {
    title: "Mounted & Specialty Bearings",
    image: "/images/cement-factory-gwb.avif",
    overview: "Easy-install bearing solutions with robust housings for conveyor, shaft support, and tracking systems.",
    items: [
      "Pillow Block Bearings",
      "Insert Bearings",
      "Cam Followers",
      "Track Rollers",
    ],
  },
];

const INDUSTRIAL_USES = [
  "Steel Mills and Metal Processing",
  "Cement and Material Handling",
  "Crusher and Mining Plants",
  "Industrial Gearboxes and Motors",
  "Automotive and General Manufacturing",
  "Agricultural Machinery",
];

export default function IndustrialBearingsPage() {
  return (
    <div data-testid="industrial-bearings-page" className="bg-[#0A0A0A]">
      <section className="relative border-b border-white/10 overflow-hidden">
        <img src={HERO_IMAGE} alt="Industrial Bearings" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="relative container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Industrial Bearings</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            Complete Bearings Product Range
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-200 leading-relaxed">
            Discover our complete industrial bearings range, including ball bearings, cylindrical roller
            bearings, needle roller bearings, spherical roller bearings, tapered roller bearings, and
            mounted solutions for heavy-duty industrial operations.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 border border-white/20 bg-black/40 px-5 py-3">
            <PackageSearch className="w-5 h-5 text-[#C0002F]" strokeWidth={2} />
            <span className="text-sm text-zinc-200 tracking-wide uppercase">Product Families: 3</span>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BEARING_TYPES.map((group) => (
            <article key={group.title} className="border border-white/10 bg-[#121212] hover:border-[#C0002F] transition-colors overflow-hidden">
              <div className="relative h-44">
                <img src={group.image} alt={group.title} className="absolute inset-0 w-full h-full object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
              </div>
              <div className="p-8">
              <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
                <Cog className="w-5 h-5" strokeWidth={2} />
                <span className="label-eyebrow">Product Group</span>
              </div>
              <h2 className="font-heading text-3xl font-black uppercase tracking-tighter mb-6">{group.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{group.overview}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <CircleDot className="w-4 h-4 text-[#C0002F] mt-1 shrink-0" strokeWidth={2} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="label-eyebrow text-[#C0002F] mb-4">Performance & Reliability</div>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
              Engineered for
              <br />industrial uptime.
            </h2>
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
              <p>
                Our bearing products are selected for load capacity, rotational performance, operating
                temperature tolerance, and long service life in demanding environments.
              </p>
              <p>
                Solutions are available for high-speed, heavy-load, and precision applications across
                multiple industries.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border border-white/10 bg-black/40 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
                <Gauge className="w-5 h-5" strokeWidth={2} />
                <span className="label-eyebrow">Applications</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INDUSTRIAL_USES.map((use) => (
                  <li key={use} className="flex items-start gap-3 text-zinc-200 text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 text-center max-w-4xl mx-auto">
        <div className="label-eyebrow text-[#C0002F] mb-4">Need Full Product Data?</div>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          Request full bearings specifications and availability.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Share your bearing type, size, quantity, and operating conditions. Our team will provide a
          complete product recommendation and quotation.
        </p>
        <a
          href="https://wa.me/16472395675?text=Hello%20GWB%20International%2C%20I%20want%20to%20request%20the%20bearings%20catalog."
          target="_blank"
          rel="noopener noreferrer"
          data-testid="bearings-request-catalog-link"
          className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
        >
          Request Catalog <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
        </a>
      </section>
    </div>
  );
}
