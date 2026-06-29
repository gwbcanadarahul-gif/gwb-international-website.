import { Link } from "react-router-dom";
import { ArrowUpRight, Award, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "We deliver products and services our customers can depend on." },
  { icon: Award, title: "Quality", desc: "We partner with manufacturers committed to consistent quality and performance." },
  { icon: Sparkles, title: "Value", desc: "We help customers achieve the best return on their maintenance and procurement investments." },
  { icon: HeartHandshake, title: "Integrity", desc: "We conduct business with honesty, professionalism, and transparency." },
  { icon: Users, title: "Partnership", desc: "We focus on building long-term relationships based on mutual success." },
];

const BRANDS = ["KYK", "Dtec", "IMV", "BEARINGS", "V-BELTS", "GREASE", "LUBRICANT"];

export default function AboutPage() {
  return (
    <div data-testid="about-page" className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552656967-7a0991a13906?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400"
            alt="Engineering"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0A0A0A]" />
        </div>
        <div className="relative container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">About GWB International</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl">
            A trusted Canadian supplier of industrial and automotive components.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-zinc-300 leading-relaxed">
            Serving North America and South America with global sourcing, dependable products, and
            long-term partnerships built on trust.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="container-x py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="label-eyebrow text-[#C0002F] mb-4">Who We Are</div>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Built in Ontario.
            <br />Trusted across the Americas.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
          <p>
            GWB International is a Canadian company based in Ontario, specializing in the global
            sourcing and supply of industrial and automotive components.
          </p>
          <p>
            We work closely with leading manufacturers and trusted supply partners across international
            markets to provide customers with reliable products, competitive pricing, and dependable
            supply solutions.
          </p>
          <p>
            Our customers rely on us not only for products but also for practical recommendations that
            help improve operational efficiency, reduce downtime, and optimize maintenance budgets.
          </p>
          <p className="text-white">
            We believe successful business relationships are built on trust, transparency, reliability,
            and long-term commitment.
          </p>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="border-y border-white/10 bg-black overflow-hidden">
        <div className="py-10 flex items-center gap-8 whitespace-nowrap animate-marquee">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-heading font-bold uppercase text-3xl md:text-4xl tracking-[0.2em] text-zinc-500">{b}</span>
              <span className="w-2 h-2 bg-[#C0002F] rotate-45 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container-x py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-testid="mission-card" className="border border-white/10 p-10 md:p-12 hover:border-[#C0002F] transition-colors">
          <div className="label-eyebrow text-[#C0002F] mb-6">Our Mission</div>
          <p className="font-heading text-2xl md:text-3xl font-bold leading-snug tracking-tight">
            To provide industrial and automotive products that deliver the optimal balance of
            performance, reliability, and cost efficiency — enabling customers to maximize productivity
            and achieve long-term value.
          </p>
        </div>
        <div data-testid="vision-card" className="border border-white/10 p-10 md:p-12 bg-[#121212] hover:border-[#C0002F] transition-colors">
          <div className="label-eyebrow text-[#C0002F] mb-6">Our Vision</div>
          <p className="font-heading text-2xl md:text-3xl font-bold leading-snug tracking-tight">
            To become a trusted supply partner recognized for delivering quality products, dependable
            service, and innovative sourcing solutions to industries worldwide.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="label-eyebrow text-[#C0002F] mb-4">Core Values</div>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            The principles that guide everything we do.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-white/10">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                data-testid={`value-card-${v.title.toLowerCase()}`}
                className={`p-8 md:p-10 hover:bg-[#121212] transition-colors ${
                  i < VALUES.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } border-white/10`}
              >
                <div className="font-mono text-xs tracking-[0.3em] text-[#C0002F] mb-6">0{i + 1}</div>
                <Icon className="w-8 h-8 text-white mb-6" strokeWidth={1.5} />
                <h3 className="font-heading font-bold uppercase tracking-tight text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="container-x py-24 md:py-32 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
            Ready to partner with <span className="text-[#C0002F]">GWB</span>?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Contact our team to learn how we can support your industrial and automotive supply needs.
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-button"
            className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
