import { Link } from "react-router-dom";
import { ShieldCheck, ExternalLink, Mail, MapPin } from "lucide-react";
import { SITE } from "../../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-navy-900 text-offwhite overflow-hidden" data-testid="site-footer">
      <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center size-10 rounded-md bg-offwhite text-navy-900 font-mono text-sm">
                {"{K}"}
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-[17px]">Kaviv Software Labs</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-navy-300 font-mono">
                  software · sdlc · sustained
                </div>
              </div>
            </div>
            <p className="mt-5 text-navy-200 text-sm leading-relaxed max-w-md">
              A Sole Proprietorship venture based in {SITE.location.split(",")[0]}, building digital foundations for
              schools, restaurants, and local businesses — while training the next disciplined batch of engineers.
            </p>

            {/* Trust badge */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-navy-700 bg-navy-800/50 px-4 py-3">
              <div className="size-10 rounded-lg bg-indigo-500/20 border border-indigo-500/40 grid place-items-center">
                <ShieldCheck className="size-5 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm font-semibold">Udyam · MSME</div>
                <div className="font-mono text-[11px] text-navy-300 mt-0.5" data-testid="footer-udyam">
                  {SITE.udyam}
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300 mb-4">// services</div>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li><a href="#services" className="hover:text-offwhite transition-colors">Education</a></li>
              <li><a href="#services" className="hover:text-offwhite transition-colors">Hospitality</a></li>
              <li><a href="#services" className="hover:text-offwhite transition-colors">Business</a></li>
              <li><a href="#process" className="hover:text-offwhite transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300 mb-4">// the lab</div>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li><a href="#lab" className="hover:text-offwhite transition-colors">Internship</a></li>
              <li>
                <Link to="/verify" data-testid="footer-link-verify" className="hover:text-offwhite transition-colors">
                  Verification
                </Link>
              </li>
              <li><a href="#mission" className="hover:text-offwhite transition-colors">Why us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300 mb-4">// connect</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  data-testid="footer-email"
                  className="inline-flex items-center gap-2 text-navy-200 hover:text-offwhite transition-colors"
                >
                  <Mail className="size-4 text-indigo-300" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-linkedin"
                  className="inline-flex items-center gap-2 text-navy-200 hover:text-offwhite transition-colors"
                >
                  <ExternalLink className="size-4 text-indigo-300" />
                  LinkedIn Company Page
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-navy-200">
                <MapPin className="size-4 text-indigo-300" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-navy-300">
          <div>© {year} Kaviv Software Labs · A Sole Proprietorship venture</div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}