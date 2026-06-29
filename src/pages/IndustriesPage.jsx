import { Link } from "react-router-dom";
import { ArrowUpRight, Factory, Hammer, Mountain, Cog, Car, Wheat } from "lucide-react";

const INDUSTRIES = [
  {
    no: "01",
    icon: Factory,
    title: "Steel Industry",
    desc: "Reliable products for rolling mills, conveyors, motors, and heavy-duty equipment.",
    image: "/images/steel-factory-gwb.jpg",
  },
  {
    no: "02",
    icon: Hammer,
    title: "Cement Industry",
    desc: "Bearings, belts, and lubricants designed for demanding operating conditions.",
    image: "/images/cement-factory-gwb.avif",
  },
  {
    no: "03",
    icon: Mountain,
    title: "Crusher & Mining",
    desc: "Products capable of handling heavy loads and harsh environments.",
    image: "/images/crusher-mining-gwb.jpg",
  },
  {
    no: "04",
    icon: Cog,
    title: "Manufacturing",
    desc: "Cost-effective solutions for production and maintenance operations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
  },
  {
    no: "05",
    icon: Car,
    title: "Automotive",
    desc: "Quality automotive bearings, belts, lubricants, and related products.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
  },
  {
    no: "06",
    icon: Wheat,
    title: "Agricultural",
    desc: "Products suitable for agricultural machinery and equipment.",
    image: "/images/agriculture-image-gwb.jpg",
  },
];

export default function IndustriesPage() {
  return (
    <div data-testid="industries-page" className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="container-x py-28 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <div className="label-eyebrow text-[#C0002F] mb-6">Industries We Serve</div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Trusted across <span className="text-[#C0002F]">six</span> demanding sectors.
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-zinc-400 leading-relaxed text-lg">
              Industrial and automotive solutions engineered for diverse sectors and applications —
              wherever uptime, performance, and reliability matter most.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.title}
                data-testid={`industry-card-${ind.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="group relative overflow-hidden border border-white/10 hover:border-[#C0002F] bg-[#121212] transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                  <div className="absolute top-5 left-5 font-mono text-xs tracking-[0.3em] text-[#C0002F]">{ind.no}</div>
                  <div className="absolute bottom-5 right-5 w-12 h-12 bg-black/70 border border-white/20 flex items-center justify-center group-hover:bg-[#C0002F] group-hover:border-[#C0002F] transition-colors">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-black uppercase tracking-tighter mb-3">{ind.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{ind.desc}</p>
                  <div className="flex items-center gap-2 label-eyebrow text-zinc-600 group-hover:text-[#C0002F] transition-colors">
                    <span>Explore Sector</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <div className="label-eyebrow text-[#C0002F] mb-4">Custom Sourcing Available</div>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Your industry. Your requirements. Our solutions.
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-2xl text-lg">
              Whether you operate in a specialized sector or require custom sourcing, our team is ready
              to support your industrial and automotive supply needs.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              data-testid="industries-cta-button"
              className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
