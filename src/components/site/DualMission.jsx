import { Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { SITE } from "../../lib/site";

export default function DualMission() {
  return (
    <section id="mission" className="relative py-20 lg:py-28 border-t border-navy-100" data-testid="dual-mission">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600">// 02 · who we are</div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
            Two audiences. <span className="text-indigo-600">One disciplined process.</span>
          </h2>
          <p className="mt-4 text-navy-600 text-base leading-relaxed">
            We sit at the intersection of small organizations that need real software and engineering students who
            need real experience. Both win, because the work is real.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          {/* Card A — Organizations */}
          <article className="group relative rounded-2xl bg-white border border-navy-100 p-7 lg:p-9 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(10,25,47,0.18)]">
            <div className="flex items-start justify-between">
              <div className="size-12 rounded-xl bg-navy-900 text-offwhite grid place-items-center group-hover:bg-indigo-600 transition-colors">
                <Building2 className="size-6" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-500">for organizations</span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-navy-900 leading-tight">
              Custom software your team will actually use.
            </h3>
            <p className="mt-3 text-navy-600 leading-relaxed">
              We help schools, restaurants, and local businesses digitize their workflows — from QR menus and
              inventory trackers to alumni portals and GST-ready CRMs. No bloat, no jargon, no abandoned dashboards.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy-700">
              {["Fixed-scope sprints", "Senior-reviewed code", "Handoff with documentation"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-indigo-500" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={SITE.clientFormUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="mission-cta-client"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-indigo-600 transition-colors"
            >
              Brief us on your problem
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </article>

          {/* Card B — Students */}
          <article className="group relative rounded-2xl bg-navy-900 text-offwhite p-7 lg:p-9 overflow-hidden border border-navy-800 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(10,25,47,0.6)]">
            <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="size-12 rounded-xl bg-indigo-500 text-white grid place-items-center group-hover:bg-indigo-400 transition-colors">
                  <GraduationCap className="size-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-300">for students</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight">
                Real projects. Real reviews. Real understanding of the SDLC.
              </h3>
              <p className="mt-3 text-navy-200 leading-relaxed">
                Get mentored by senior industry professionals shipping production software. No busywork, no fluff —
                just code, critique, and the kind of feedback that compounds your career.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-navy-100">
                {["1:1 senior code reviews", "Production-grade tooling", "Shareable project portfolio"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-indigo-400" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.internFormUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="mission-cta-intern"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-offwhite group-hover:text-indigo-300 transition-colors"
              >
                Apply to the simulation program
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}