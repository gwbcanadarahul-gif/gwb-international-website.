import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;
const WHATSAPP_URL =
  "https://wa.me/16472395675?text=Hello%20GWB%20International%2C%20I%20want%20to%20inquire%20about%20your%20products.";

const INITIAL = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (!API) {
        toast.success("Preview mode: message captured locally.");
        setForm(INITIAL);
        return;
      }
      const payload = { ...form, phone: form.phone || null };
      await axios.post(`${API}/contact`, payload);
      toast.success("Message sent — our team will be in touch within 24 hours.");
      setForm(INITIAL);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="container-x py-28 md:py-40">
          <div className="label-eyebrow text-[#C0002F] mb-6">Contact GWB International</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl">
            Let&apos;s discuss your supply requirements.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-zinc-300 leading-relaxed">
            Bearings, V-belts, oil seals, lubricants, or complete maintenance supply solutions — our
            team is ready to assist.
          </p>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="container-x py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT — CONTACT INFO */}
        <aside className="lg:col-span-5 space-y-8">
          <div className="border border-white/10 p-8 md:p-10 bg-[#121212]">
            <div className="label-eyebrow text-[#C0002F] mb-6">Headquarters</div>
            <h2 className="font-heading text-3xl font-black uppercase tracking-tighter mb-6">GWB International</h2>

            <div className="space-y-5 text-sm">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={1.8} />
                <div>
                  <div className="label-eyebrow text-zinc-500 mb-1">Address</div>
                  <div className="text-zinc-200 leading-relaxed">
                    143 Hurst Drive
                    <br />
                    Ajax, Ontario, Canada
                  </div>
                </div>
              </div>

              <div className="hairline" />

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={1.8} />
                <div>
                  <div className="label-eyebrow text-zinc-500 mb-1">Sales Inquiries</div>
                  <a
                    href="mailto:sales@gwbinternational.com"
                    data-testid="contact-email-sales"
                    className="text-zinc-200 hover:text-[#C0002F] transition-colors break-all"
                  >
                    sales@gwbinternational.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={1.8} />
                <div>
                  <div className="label-eyebrow text-zinc-500 mb-1">Customer Care</div>
                  <a
                    href="mailto:customercare@gwbinternational.com"
                    data-testid="contact-email-care"
                    className="text-zinc-200 hover:text-[#C0002F] transition-colors break-all"
                  >
                    customercare@gwbinternational.com
                  </a>
                </div>
              </div>

              <div className="hairline" />

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={1.8} />
                <div>
                  <div className="label-eyebrow text-zinc-500 mb-1">Phone</div>
                  <a href="tel:+16472395675" data-testid="contact-phone-link" className="text-zinc-200 hover:text-[#C0002F] transition-colors">
                    +1 (647) 239-5675
                  </a>
                  <div className="mt-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-whatsapp-button"
                      className="inline-flex items-center gap-2 bg-[#C0002F] hover:bg-[#980025] text-white px-4 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={2} />
                      WhatsApp Message
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="w-5 h-5 text-[#C0002F] mt-0.5 shrink-0" strokeWidth={1.8} />
                <div>
                  <div className="label-eyebrow text-zinc-500 mb-1">Website</div>
                  <a
                    href="https://www.gwbinternational.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-website-link"
                    className="text-zinc-200 hover:text-[#C0002F] transition-colors"
                  >
                    www.gwbinternational.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 p-8 bg-black flex gap-5 items-start">
            <Clock className="w-7 h-7 text-[#C0002F] shrink-0" strokeWidth={1.5} />
            <div>
              <div className="label-eyebrow text-zinc-500 mb-2">Response Time</div>
              <p className="text-zinc-300 leading-relaxed text-sm">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, please
                call our sales team directly.
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT — FORM */}
        <div className="lg:col-span-7">
          <div className="border border-white/10 p-8 md:p-12 bg-[#0d0d0d]">
            <div className="label-eyebrow text-[#C0002F] mb-4">Quick Message</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              Send us your inquiry.
            </h2>

            <form data-testid="contact-form" onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Name *" required>
                  <input
                    data-testid="contact-input-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Your full name"
                    className="w-full bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#C0002F] focus:outline-none px-4 py-4 text-base"
                  />
                </Field>
                <Field label="Email *" required>
                  <input
                    data-testid="contact-input-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#C0002F] focus:outline-none px-4 py-4 text-base"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Phone (Optional)">
                  <input
                    data-testid="contact-input-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#C0002F] focus:outline-none px-4 py-4 text-base"
                  />
                </Field>
                <Field label="Subject *" required>
                  <input
                    data-testid="contact-input-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    required
                    placeholder="e.g. Bearings inquiry"
                    className="w-full bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#C0002F] focus:outline-none px-4 py-4 text-base"
                  />
                </Field>
              </div>

              <Field label="Message *" required>
                <textarea
                  data-testid="contact-input-message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  placeholder="Tell us about your requirements, quantities, brands of interest, and timelines..."
                  className="w-full bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#C0002F] focus:outline-none px-4 py-4 text-base resize-none"
                />
              </Field>

              <button
                type="submit"
                data-testid="contact-submit-button"
                disabled={submitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#C0002F] hover:bg-[#980025] disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-colors"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block label-eyebrow mb-2">{label}</span>
      {children}
    </label>
  );
}
