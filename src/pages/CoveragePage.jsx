import { Link } from "react-router-dom";
import { ArrowUpRight, Globe2, MapPin, Ship, Truck } from "lucide-react";

const REGIONS = [
  {
    title: "North America",
    countries: [
      "Antigua and Barbuda",
      "Bahamas",
      "Barbados",
      "Belize",
      "Canada",
      "Costa Rica",
      "Cuba",
      "Dominica",
      "Dominican Republic",
      "El Salvador",
      "Grenada",
      "Guatemala",
      "Haiti",
      "Honduras",
      "Jamaica",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Trinidad and Tobago",
      "United States",
    ],
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
  },
  {
    title: "South America",
    countries: [
      "Argentina",
      "Bolivia",
      "Brazil",
      "Chile",
      "Colombia",
      "Ecuador",
      "Guyana",
      "Paraguay",
      "Peru",
      "Suriname",
      "Uruguay",
      "Venezuela",
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
  },
];

const GLOBAL_REACH = ["Europe", "Middle East", "Africa", "Asia Pacific"];

export default function CoveragePage() {
  return (
    <div data-testid="coverage-page" className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Global Coverage</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl">
            Operational in the Americas.
            <br />Connected to the world.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-zinc-300 leading-relaxed">
            We actively support customers across North and South America, backed by a global sourcing
            and logistics network that enables supply solutions for operations worldwide.
          </p>
        </div>
      </section>

      {/* GLOBAL REACH HIGHLIGHT */}
      <section className="container-x py-14 md:py-16">
        <div className="relative overflow-hidden border border-white/15 bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#111111]">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_rgba(255,79,0,0.22),_transparent_62%)]" />
          <div className="relative px-8 py-10 md:px-12 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
                <Globe2 className="w-5 h-5" strokeWidth={2} />
                <span className="label-eyebrow">Global Reach</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                Beyond the Americas,
                <br />we deliver globally.
              </h2>
              <p className="mt-5 text-zinc-300 leading-relaxed max-w-2xl">
                The Americas are our core service regions, but our partnerships and export capabilities
                allow us to source and supply critical components across international markets.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {GLOBAL_REACH.map((region) => (
                  <div
                    key={region}
                    className="border border-white/15 bg-black/35 px-4 py-4 text-center text-sm font-semibold tracking-[0.08em] uppercase text-zinc-100"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISTRIBUTION NETWORK */}
      <section className="container-x py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="label-eyebrow text-[#C0002F] mb-4">Distribution Network</div>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            Primary coverage in
            <br />the Americas.
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            GWB International serves customers across North America and South America, and also supports
            international requirements through trusted global manufacturing and logistics partners.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REGIONS.map((r) => (
            <article
              key={r.title}
              data-testid={`region-card-${r.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative overflow-hidden border border-white/10 hover:border-[#C0002F] bg-[#121212] transition-colors group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-3xl font-black uppercase tracking-tighter mb-5">{r.title}</h3>
                <ul className="space-y-3">
                  {r.countries.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-zinc-300">
                      <MapPin className="w-4 h-4 text-[#C0002F]" strokeWidth={2} />
                      <span className="text-sm tracking-wide">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOURCING EXPERTISE */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="label-eyebrow text-[#C0002F] mb-4">Sourcing & Supply Expertise</div>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
              Global sourcing.
              <br />Local delivery.
            </h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-10">
              Our global sourcing capabilities enable us to support customers across diverse industries
              and geographical markets. While North and South America are our primary operating regions,
              we also coordinate international sourcing and export supply solutions for projects beyond
              the Americas.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-white/10 p-6">
                <Ship className="w-7 h-7 text-[#C0002F] mb-4" strokeWidth={1.5} />
                <div className="label-eyebrow text-zinc-500 mb-1">Ocean Freight</div>
                <div className="font-heading text-xl font-bold uppercase">International</div>
              </div>
              <div className="border border-white/10 p-6">
                <Truck className="w-7 h-7 text-[#C0002F] mb-4" strokeWidth={1.5} />
                <div className="label-eyebrow text-zinc-500 mb-1">Ground Logistics</div>
                <div className="font-heading text-xl font-bold uppercase">Door-to-Door</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600"
              alt="Logistics"
              className="w-full h-[520px] object-cover border border-white/10"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-[#C0002F] text-white p-6 max-w-[240px]">
              <div className="font-heading text-4xl font-black tracking-tighter leading-none">35</div>
              <div className="label-eyebrow text-white/90 mt-2">35 Countries in the Americas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24 md:py-32 text-center max-w-3xl mx-auto">
        <div className="label-eyebrow text-[#C0002F] mb-4">Expand Your Supply Chain</div>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          A global partner for industrial supply.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Tell us your target market and sourcing requirements - we can support regional delivery in
          the Americas and international fulfillment worldwide.
        </p>
        <Link
          to="/contact"
          data-testid="coverage-cta-button"
          className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
        >
          Request Information <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
        </Link>
      </section>
    </div>
  );
}
