import { Link } from "react-router-dom";
import { ArrowUpRight, Cog, Gauge, Globe2, ShieldCheck, Wrench, Zap } from "lucide-react";

const BRANDS = ["KYK", "Dtec", "IMV", "BEARINGS", "V-BELTS", "GREASE", "LUBRICANT"];

const CATEGORIES = [
  {
    no: "01",
    title: "Bearings",
    desc: "Industrial and automotive bearings for a wide range of applications.",
    brands: ["KYK", "Dtec", "IMV", "BEARINGS"],
    image:
      "/images/bearing-gwb.avif",
    detailsPath: "/products/industrial-bearings",
    span: "md:col-span-8 md:row-span-2",
    height: "h-[420px] md:h-full",
  },
  {
    no: "02",
    title: "V-Belts",
    desc: "High-performance belts for machinery, compressors, pumps, crushers, and manufacturing equipment.",
    brands: ["KYK", "Dtec", "IMV", "V-BELTS"],
    image:
      "/images/v-belt-gwb.jpg",
    detailsPath: "/products/v-belts",
    span: "md:col-span-4",
    height: "h-[320px]",
  },
  {
    no: "03",
    title: "Lubricants & Greases",
    desc: "Industrial greases and lubricants engineered for demanding operating environments and extended equipment life.",
    brands: ["KYK", "Dtec", "IMV", "GREASE", "LUBRICANT"],
    image:
      "/images/lubricant-grease-gwb.jpg",
    detailsPath: "/products/lubricants-greases",
    span: "md:col-span-4",
    height: "h-[360px]",
  },
];

const WHY = [
  { icon: Globe2, title: "Global Sourcing Network", desc: "Trusted manufacturers and supply partners across international markets, enabling competitive pricing and dependable solutions." },
  { icon: ShieldCheck, title: "Quality Products", desc: "Internationally recognized brands and cost-effective alternatives tailored to specific customer requirements." },
  { icon: Wrench, title: "Industry Expertise", desc: "Practical recommendations from a team that understands maintenance, procurement, and engineering challenges." },
  { icon: Zap, title: "Reliable Service", desc: "Responsive, professional support from initial enquiry to on-time delivery — every order, every time." },
];

const STATS = [
  { value: "2", label: "Continents Served" },
  { value: "8+", label: "Global Brand Partners" },
  { value: "6", label: "Core Industries" },
  { value: "24h", label: "Quote Response" },
];

export default function HomePage() {
  return (
    <div data-testid="home-page" className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400"
            alt="Industrial machinery"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 grid-noise opacity-30" />
        </div>

        <div className="container-x relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <div className="w-12 h-px bg-[#C0002F]" />
              <span className="label-eyebrow text-[#C0002F]">GWB International · Ontario, Canada</span>
            </div>

            <h1
              data-testid="hero-heading"
              className="font-heading text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-white animate-fade-up"
            >
              Leading global brands.
              <br />
              <span className="text-[#C0002F]">Trusted</span> manufacturers.
              <br />
              Reliable solutions.
            </h1>

            <p className="mt-10 max-w-2xl text-lg text-zinc-300 leading-relaxed animate-fade-up">
              A Canadian company specializing in the supply of industrial and automotive components
              from leading global brands and trusted manufacturers to customers across North America and
              South America.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up">
              <Link
                to="/contact"
                data-testid="hero-quote-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
              >
                Request a Quote <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
              <Link
                to="/about"
                data-testid="hero-learn-more"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-white text-white px-8 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
              >
                Discover GWB
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 right-6 md:right-12 hidden md:flex flex-col items-end gap-2">
            <div className="label-eyebrow text-zinc-500">Scroll</div>
            <div className="w-px h-16 bg-gradient-to-b from-[#C0002F] to-transparent" />
          </div>
        </div>
      </section>

      {/* MARQUEE BRANDS */}
      <section className="border-y border-white/10 bg-black overflow-hidden">
        <div className="py-8 flex items-center gap-6 whitespace-nowrap animate-marquee">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="font-heading font-bold uppercase text-2xl md:text-3xl tracking-[0.2em] text-zinc-500">{b}</span>
              <span className="w-2 h-2 bg-[#C0002F] rotate-45" />
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="label-eyebrow text-[#C0002F] mb-4">Product Categories</div>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Engineered components
              <br />for extreme performance.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-zinc-400 leading-relaxed">
              We help customers achieve the optimal balance between performance, reliability, and cost
              efficiency. Whether you require premium international brands or value-engineered
              alternatives, our portfolio is built around demanding operational requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {CATEGORIES.map((c) => (
            <article
              key={c.no}
              data-testid={`product-card-${c.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={`${c.span} relative overflow-hidden group bg-[#121212] border border-zinc-800/70 hover:border-[#C0002F] transition-all duration-500 ${c.height}`}
            >
              {c.detailsPath ? (
                <Link
                  to={c.detailsPath}
                  data-testid="home-bearings-details-link"
                  aria-label={`${c.title} details`}
                  className="absolute inset-0 z-20"
                />
              ) : null}
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-[#C0002F]">{c.no}</span>
                  <Cog className="w-6 h-6 text-zinc-600 group-hover:text-[#C0002F] group-hover:rotate-90 transition-all duration-700" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3">{c.title}</h3>
                  <p className="text-sm text-zinc-300 max-w-md leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.brands.map((b) => (
                      <span key={b} className="text-[10px] tracking-[0.2em] uppercase border border-white/15 px-2.5 py-1 text-zinc-300">
                        {b}
                      </span>
                    ))}
                  </div>
                  {c.detailsPath ? (
                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#C0002F]">
                      {c.title === "Bearings" ? "View Full Bearings Range" : c.title === "V-Belts" ? "View Full V-Belts Range" : "View Lubricants & Greases Range"} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="label-eyebrow text-[#C0002F] mb-4">Quick Access</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/deals-for-you"
              data-testid="home-quick-deals"
              className="inline-flex items-center justify-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-7 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
            >
              Deals For You <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link
              to="/our-brand"
              data-testid="home-quick-brand"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white px-7 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
            >
              Our Brand <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`py-12 px-6 ${i !== 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} border-white/10`}>
              <div className="font-heading text-5xl md:text-6xl font-black tracking-tighter text-white">{s.value}</div>
              <div className="label-eyebrow mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="label-eyebrow text-[#C0002F] mb-4">Why GWB International</div>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Built on trust. Backed by precision.
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed max-w-2xl">
            Trusted supply solutions built on global sourcing, product quality, industry expertise, and
            reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
          {WHY.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                data-testid={`why-card-${i}`}
                className={`p-8 md:p-10 hover:bg-[#121212] transition-colors group ${
                  i < WHY.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } border-white/10`}
              >
                <Icon className="w-9 h-9 text-[#C0002F] mb-6" strokeWidth={1.5} />
                <h3 className="font-heading font-bold uppercase tracking-tight text-xl mb-3">{w.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{w.desc}</p>
                <div className="mt-6 flex items-center gap-2 label-eyebrow text-zinc-600 group-hover:text-[#C0002F] transition-colors">
                  <span>0{i + 1}</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400"
            alt="Factory floor"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>
        <div className="relative z-10 container-x py-24 md:py-32">
          <div className="max-w-3xl">
            <Gauge className="w-12 h-12 text-[#C0002F] mb-6" strokeWidth={1.5} />
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              Source the right components for your operations.
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-2xl">
              Speak with our team to source the right industrial and automotive components for your
              operations across North and South America.
            </p>
            <Link
              to="/contact"
              data-testid="home-bottom-cta"
              className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
            >
              Contact Our Team <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
