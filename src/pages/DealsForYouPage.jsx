import { Clock3, Flame, Tag } from "lucide-react";

const UPCOMING_DEALS = [
  {
    title: "Bearings",
    desc: "Coming soon promotional packages for KYK bearings with competitive lead times and flexible order sizes.",
  },
  {
    title: "V Belts",
    desc: "Coming soon seasonal pricing and bulk quantity offers on KYK V-belts for industrial and automotive applications.",
  },
  {
    title: "Lubricant & Grease",
    desc: "Coming soon bundle deals on lubricants and grease designed for high-demand operating environments.",
  },
];

export default function DealsForYouPage() {
  return (
    <div data-testid="deals-for-you-page" className="bg-[#0A0A0A]">
      <section className="border-b border-white/10">
        <div className="container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Deals For You</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            Coming Soon Offers
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-300 leading-relaxed">
            Exclusive deals are on the way. Stay connected for special pricing opportunities and
            bundle offers across our core product categories.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_DEALS.map((deal) => (
            <article
              key={deal.title}
              className="border border-white/10 bg-[#121212] p-8 hover:border-[#C0002F] transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <Tag className="w-6 h-6 text-[#C0002F]" strokeWidth={2} />
                <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C0002F]">Coming Soon</span>
              </div>
              <h2 className="font-heading text-3xl font-black uppercase tracking-tighter mb-4">{deal.title}</h2>
              <p className="text-zinc-300 leading-relaxed">{deal.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-16 md:py-20 flex items-start gap-4">
          <Flame className="w-6 h-6 text-[#C0002F] mt-1" strokeWidth={2} />
          <div>
            <div className="label-eyebrow text-[#C0002F] mb-3">Deal Alerts</div>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
              Contact our team to get notified first when new deals launch for Bearings, V Belts,
              and Lubricant & Grease.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-zinc-400 text-sm">
              <Clock3 className="w-4 h-4" strokeWidth={2} />
              Updates published regularly.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
