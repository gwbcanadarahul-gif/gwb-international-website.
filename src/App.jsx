import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Menu, X, ArrowUpRight } from "lucide-react";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import IndustriesPage from "@/pages/IndustriesPage";
import CoveragePage from "@/pages/CoveragePage";
import ContactPage from "@/pages/ContactPage";
import DealsForYouPage from "@/pages/DealsForYouPage";
import OurBrandPage from "@/pages/OurBrandPage";
import IndustrialBearingsPage from "@/pages/IndustrialBearingsPage";
import VBeltsPage from "@/pages/VBeltsPage";
import LubricantsGreasesPage from "@/pages/LubricantsGreasesPage";
import LubricantsPage from "@/pages/LubricantsPage";
import GreasePage from "@/pages/GreasePage";
import "@/App.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/coverage", label: "Coverage" },
  { to: "/deals-for-you", label: "Deals For You" },
  { to: "/our-brand", label: "Our Brand" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP_URL =
  "https://wa.me/16472395675?text=Hello%20GWB%20International%2C%20I%20want%20to%20inquire%20about%20your%20products.";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/70 border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" data-testid="brand-logo-link" className="flex items-center gap-3 group">
          <img
            src="/images/gwb-int-logo.jpg"
            alt="GWB International logo"
            className="w-10 h-10 object-cover border border-white/20"
          />
          <div className="leading-tight">
            <div className="font-heading font-black uppercase tracking-tight text-white text-base">GWB International</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">Industrial & Automotive Supply Canada</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                  isActive ? "text-[#C0002F]" : "text-zinc-300 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          data-testid="header-quote-cta"
          className="hidden lg:inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-5 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
        >
          Request a Quote <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </Link>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open ? (
        <div data-testid="mobile-menu" className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="container-x py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-2 py-3 text-sm font-semibold tracking-[0.2em] uppercase border-b border-white/5 ${
                    isActive ? "text-[#C0002F]" : "text-zinc-200"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              data-testid="mobile-quote-cta"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-5 py-4 text-xs font-bold tracking-[0.2em] uppercase"
            >
              Request a Quote <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 bg-black mt-32">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/gwb-int-logo.jpg"
              alt="GWB International logo"
              className="w-10 h-10 object-cover border border-white/20"
            />
            <div className="font-heading font-black uppercase tracking-tight text-white text-lg">GWB International</div>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            A Canadian company specializing in industrial and automotive components, V-belts, lubricants, and greases for customers across North and South America.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="label-eyebrow mb-5">Navigate</div>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} data-testid={`footer-nav-${l.label.toLowerCase()}`} className="text-sm text-zinc-300 hover:text-[#C0002F] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="label-eyebrow mb-5">Headquarters</div>
          <address className="not-italic text-sm text-zinc-300 leading-relaxed space-y-2">
            <div>143 Hurst Drive</div>
            <div>Ajax, Ontario, Canada</div>
            <div className="pt-3">
              <a href="mailto:sales@gwbinternational.com" data-testid="footer-email-sales" className="hover:text-[#C0002F]">
                sales@gwbinternational.com
              </a>
            </div>
            <div>
              <a href="tel:+16472395675" data-testid="footer-phone" className="hover:text-[#C0002F]">
                +1 (647) 239-5675
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs tracking-[0.2em] uppercase text-zinc-500">©{new Date().getFullYear()} GWB International — All rights reserved.</div>
          <div className="text-xs tracking-[0.2em] uppercase text-zinc-600">Products · Reliability · Performance · Value</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      data-testid="floating-whatsapp-button"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-4 py-3 text-xs font-bold tracking-[0.18em] uppercase shadow-[0_8px_28px_rgba(192,0,47,0.45)] transition-colors"
    >
      <img src="/images/gwb-whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
      WhatsApp
    </a>
  );
}

function Layout({ children }) {
  return (
    <div className="App min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "#121212",
            border: "1px solid #27272A",
            color: "#fff",
            borderRadius: 0,
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/industries" element={<Layout><IndustriesPage /></Layout>} />
        <Route path="/coverage" element={<Layout><CoveragePage /></Layout>} />
        <Route path="/products/industrial-bearings" element={<Layout><IndustrialBearingsPage /></Layout>} />
        <Route path="/products/v-belts" element={<Layout><VBeltsPage /></Layout>} />
        <Route path="/products/lubricants-greases" element={<Layout><LubricantsGreasesPage /></Layout>} />
        <Route path="/products/lubricants" element={<Layout><LubricantsPage /></Layout>} />
        <Route path="/products/grease" element={<Layout><GreasePage /></Layout>} />
        <Route path="/deals-for-you" element={<Layout><DealsForYouPage /></Layout>} />
        <Route path="/our-brand" element={<Layout><OurBrandPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}