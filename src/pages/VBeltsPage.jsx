import { ArrowUpRight, CheckCircle2, Gauge, Ruler, Wrench } from "lucide-react";

const BELT_TYPES = [
  "Classical V-Belt",
  "Raw Edge Laminated",
  "Wedge / Narrow V-Belt",
  "Raw Edge Plain",
  "Double Angle V-Belt",
  "Ribbed V-Belt",
  "Raw Edge Cogged",
  "Raw Edge Cogged Variable Speed",
];

const RANGE_DATA = [
  { section: "M", width: "10 mm", thickness: "5.5 mm", angle: "40", length: '33" - 50"' },
  { section: "FM", width: "10 mm", thickness: "8 mm", angle: "40", length: '24" - 120"' },
  { section: "A", width: "12.5 mm", thickness: "9 mm", angle: "40", length: '22" - 800"' },
  { section: "B", width: "16.5 mm", thickness: "11 mm", angle: "40", length: '23" - 800"' },
  { section: "BC", width: "20 mm", thickness: "14 mm", angle: "40", length: '60" - 400"' },
  { section: "C", width: "22 mm", thickness: "14 mm", angle: "40", length: '40" - 800"' },
  { section: "CD", width: "25 mm", thickness: "16.5 mm", angle: "40", length: '60" - 400"' },
  { section: "D", width: "31.5 mm", thickness: "19 mm", angle: "40", length: '80" - 800"' },
  { section: "E", width: "38 mm", thickness: "24 mm", angle: "40", length: '110" - 800"' },
  { section: "ZX 9.5", width: "10 mm", thickness: "6 mm", angle: "38", length: "On Request" },
  { section: "AX 13", width: "13 mm", thickness: "8 mm", angle: "38", length: "On Request" },
  { section: "BX 17", width: "17 mm", thickness: "11 mm", angle: "38", length: "On Request" },
  { section: "CX 22", width: "22 mm", thickness: "14 mm", angle: "38", length: "On Request" },
  { section: "PK", width: "3.6 mm", thickness: "4.5 mm", angle: "40", length: "On Request" },
];

const APPLICATIONS = [
  "Industrial Machinery",
  "Compressors",
  "Pumps",
  "Crushers",
  "Manufacturing Equipment",
  "Automotive Power Transmission",
];

export default function VBeltsPage() {
  return (
    <div data-testid="v-belts-page" className="bg-[#0A0A0A]">
      <section className="relative border-b border-white/10 overflow-hidden">
        <img src="/images/v-belt-gwb.jpg" alt="V-Belts" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="relative container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">V-Belts</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
            Complete V-Belts Range
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-zinc-200 leading-relaxed">
            GWB offers V-Belts for automotive and industrial applications with dependable power
            transmission performance, strong cord construction, and configurations suitable for a wide
            range of machinery requirements.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="mb-10">
          <div className="label-eyebrow text-[#C0002F] mb-4">Available Types</div>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            V-Belt configurations for every drive system.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {BELT_TYPES.map((type) => (
            <article key={type} className="border border-white/10 bg-[#121212] p-6 hover:border-[#C0002F] transition-colors">
              <div className="w-12 h-12 mb-5 border border-white/10 bg-black/40 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-[#C0002F]" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-2xl font-black uppercase tracking-tight mb-3">{type}</h3>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C0002F]" strokeWidth={2} />
                Industrial and automotive applications
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="container-x py-20 md:py-24">
          <div className="flex items-center gap-3 text-[#C0002F] mb-5">
            <Ruler className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">Range & Dimension</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Cross section and size availability</h2>
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-black/40 text-left">
                  <th className="px-5 py-4 text-xs uppercase tracking-[0.2em] text-zinc-400">Cross Section</th>
                  <th className="px-5 py-4 text-xs uppercase tracking-[0.2em] text-zinc-400">Top Width</th>
                  <th className="px-5 py-4 text-xs uppercase tracking-[0.2em] text-zinc-400">Thickness</th>
                  <th className="px-5 py-4 text-xs uppercase tracking-[0.2em] text-zinc-400">Angle</th>
                  <th className="px-5 py-4 text-xs uppercase tracking-[0.2em] text-zinc-400">Length Range</th>
                </tr>
              </thead>
              <tbody>
                {RANGE_DATA.map((row, index) => (
                  <tr key={row.section} className={index % 2 === 0 ? "bg-[#111111]" : "bg-[#0d0d0d]"}>
                    <td className="px-5 py-4 border-t border-white/10 font-semibold text-white">{row.section}</td>
                    <td className="px-5 py-4 border-t border-white/10 text-zinc-300">{row.width}</td>
                    <td className="px-5 py-4 border-t border-white/10 text-zinc-300">{row.thickness}</td>
                    <td className="px-5 py-4 border-t border-white/10 text-zinc-300">{row.angle}</td>
                    <td className="px-5 py-4 border-t border-white/10 text-zinc-300">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="label-eyebrow text-[#C0002F] mb-4">Applications</div>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            Reliable power transmission
            <br />for demanding operations.
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm">
            Our V-Belts are selected for heat resistance, dimensional stability, tensile strength, and
            long operational life across industrial and automotive drive systems.
          </p>
        </div>
        <div className="md:col-span-7 border border-white/10 bg-[#121212] p-8 md:p-10">
          <div className="inline-flex items-center gap-2 text-[#C0002F] mb-5">
            <Gauge className="w-5 h-5" strokeWidth={2} />
            <span className="label-eyebrow">Where They Are Used</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {APPLICATIONS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 text-center max-w-4xl mx-auto">
        <div className="label-eyebrow text-[#C0002F] mb-4">Need Full V-Belts Data?</div>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          Request specifications, sizes, and availability.
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Tell us your belt profile, section, quantity, and application. Our team will recommend the
          right V-Belt range for your machinery and operating conditions.
        </p>
        <a
          href="https://gwbrg.com/products/v-belts/#"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="v-belts-reference-link"
          className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-8 py-5 text-xs font-bold tracking-[0.22em] uppercase transition-colors"
        >
          View Reference Catalog <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
        </a>
      </section>
    </div>
  );
}
