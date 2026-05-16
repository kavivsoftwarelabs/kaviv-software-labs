import { useState } from "react";
import { GraduationCap, UtensilsCrossed, Briefcase, ArrowRight, Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { SITE } from "../../lib/site";

const services = [
  {
    id: "education",
    icon: GraduationCap,
    badge: "Education",
    title: "Built for schools & academies.",
    short: "Alumni portals, library management, student dashboards, attendance & fees.",
    accent: "from-indigo-50 to-white border-indigo-100",
    iconBg: "bg-indigo-500",
    items: [
      "Alumni network portals with verification",
      "Library management with QR-based check-in/out",
      "Student dashboards (marks, attendance, fees)",
      "Admissions intake & document workflow",
      "Notice board with role-based delivery",
    ],
    cta: "Brief us on your institution",
  },
  {
    id: "hospitality",
    icon: UtensilsCrossed,
    badge: "Hospitality",
    title: "Tools your floor staff will love.",
    short: "QR-menus, inventory trackers, WhatsApp automation for orders & feedback.",
    accent: "from-amber-50 to-white border-amber-100",
    iconBg: "bg-amber-500",
    items: [
      "QR-menu with theme presets & live updates",
      "Inventory & wastage tracking",
      "WhatsApp Cloud API: bookings, feedback, OTPs",
      "Daily P&L sheets auto-emailed to owners",
      "Multi-outlet admin with role permissions",
    ],
    cta: "Tell us about your outlet",
  },
  {
    id: "business",
    icon: Briefcase,
    badge: "Business",
    title: "Operations software for local entrepreneurs.",
    short: "GST-ready invoicing, lightweight CRM, and custom internal tools.",
    accent: "from-emerald-50 to-white border-emerald-100",
    iconBg: "bg-emerald-500",
    items: [
      "GST-compliant invoicing with PDF + share",
      "CRM with leads, pipelines, and reminders",
      "Inventory + purchase order workflow",
      "Internal tools: HR, expenses, approvals",
      "Reporting dashboards (Sheets / PDF / web)",
    ],
    cta: "Describe your workflow",
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);
  const active = services.find((s) => s.id === open);
  const ActiveIcon = active?.icon;

  return (
    <section id="services" className="relative py-20 lg:py-28 border-t border-navy-100" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600">// 04 · what we build</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
              A practical <span className="text-indigo-600">service catalog</span>.
            </h2>
            <p className="mt-4 text-navy-600 text-base leading-relaxed">
              Three sectors. Real shipped tools. Click any card to see exactly what we build.
            </p>
          </div>
          <div className="font-mono text-xs text-navy-500 hidden md:block">
            {"// click a card to expand →"}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setOpen(s.id)}
                data-testid={`service-card-${s.id}`}
                className={`group text-left relative rounded-2xl bg-gradient-to-br ${s.accent} border p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(10,25,47,0.18)] animate-fade-up`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className={`size-12 rounded-xl ${s.iconBg} text-white grid place-items-center shadow-sm`}>
                    <Icon className="size-6" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-500">{s.badge}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900 leading-snug">{s.title}</h3>
                <p className="mt-2.5 text-sm text-navy-600 leading-relaxed">{s.short}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-indigo-600 transition-colors">
                  See what's inside
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl bg-offwhite border-navy-100 relative" data-testid="service-dialog">
          {active && (
            <>
              {/* Close button */}
              <button
                onClick={() => setOpen(null)}
                aria-label="Close service details"
                className="absolute top-4 right-4 inline-flex items-center justify-center size-9 rounded-full bg-white border border-navy-100 shadow-sm hover:bg-navy-50"
              >
                <X className="size-4 text-navy-600" />
              </button>

              <DialogHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className={`size-12 rounded-xl ${active.iconBg} text-white grid place-items-center shadow-sm`}>
                    {ActiveIcon && <ActiveIcon className="size-6" />}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-500">{active.badge}</span>
                    <DialogTitle className="block font-display text-2xl text-navy-900 leading-tight">{active.title}</DialogTitle>
                    <DialogDescription className="text-navy-600 pt-1 block">{active.short}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-navy-500 mb-3">
                  // included modules
                </div>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {active.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-lg border border-navy-100 bg-white p-3 text-sm text-navy-800"
                    >
                      <Check className="size-4 text-indigo-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={SITE.clientFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="service-dialog-cta"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-indigo-600 transition-colors text-offwhite px-5 py-2.5 text-sm font-medium"
                >
                  {active.cta}
                  <ArrowRight className="size-4" />
                </a>
                <button
                  onClick={() => setOpen(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white hover:border-navy-400 transition-colors text-navy-900 px-5 py-2.5 text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}