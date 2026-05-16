import { ArrowRight, Code2, ShieldCheck, Smartphone, GitBranch, Sparkles } from "lucide-react";
import { SITE } from "../../lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 size-[520px] rounded-full bg-indigo-100/60 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-mono text-navy-700">
            <span className="size-1.5 rounded-full bg-indigo-500 animate-pulse-soft" />
            <span>v1.0 · Now accepting client briefs & intern applications</span>
          </div>

          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600">// Kaviv Software Labs</div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900">
              Building digital foundations for local excellence.
            </h1>
            <p className="mt-6 text-navy-600 text-lg leading-relaxed">
              We ship practical, maintainable software for schools, restaurants, and local businesses — while training the next disciplined batch of engineers.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-indigo-600 transition-colors text-offwhite px-5 py-3 text-sm font-medium" href="#services">See services</a>
              <a className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white hover:border-navy-400 transition-colors text-navy-900 px-5 py-3 text-sm font-medium" href="#lab">Internship</a>
            </div>
          </div>

          {/* trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-navy-500 font-mono">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-indigo-500" /> Udyam-registered MSME</span>
            <span className="inline-flex items-center gap-1.5"><GitBranch className="size-3.5 text-indigo-500" /> Senior-led code reviews</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="size-3.5 text-indigo-500" /> Real projects, not busywork</span>
          </div>
        </div>

        {/* RIGHT — Bento Grid */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
          <BentoGrid />
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[520px]" data-testid="hero-bento">
      {/* Code snippet — large */}
      <div className="col-span-4 row-span-4 rounded-2xl bg-navy-900 text-offwhite p-5 relative overflow-hidden border border-navy-800 shadow-[0_24px_64px_-24px_rgba(10,25,47,0.45)]">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="flex items-center gap-1.5 mb-4">
          <span className="size-2.5 rounded-full bg-rose-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[11px] text-navy-300">~/Kaviv Software Labs/sdlc.ts</span>
        </div>
        <pre className="font-mono text-[12.5px] leading-relaxed text-navy-100 relative">
{`// Discipline > heroics
export const sdlc = {
  discover : "listen first",
  design   : "draw before code",
  develop  : "small commits, signed reviews",
  deploy   : "ship · monitor · iterate",
} as const;

const ship = (idea) => sdlc
  .discover(idea)
  .design()
  .develop({ pair: "senior+intern" })
  .deploy({ region: "ap-south-1" });`}
        </pre>
        <div className="absolute bottom-3 right-4 font-mono text-[10px] text-indigo-300/80">// kaviv@labs ~ ✓ build passing</div>
      </div>

      {/* MSME badge */}
      <div className="col-span-2 row-span-2 rounded-2xl bg-white border border-navy-100 p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <ShieldCheck className="size-6 text-indigo-600" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-navy-500">verified</span>
        </div>
        <div>
          <div className="font-display text-[15px] font-bold text-navy-900 leading-tight">Udyam · MSME</div>
          <div className="text-[11px] text-navy-500 mt-0.5">Govt. of India registered</div>
        </div>
      </div>

      {/* Mobile wireframe */}
      <div className="col-span-2 row-span-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 p-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <Smartphone className="size-5 text-indigo-600" />
          <span className="text-[10px] font-mono text-navy-500">app/v2</span>
        </div>
        <div className="rounded-xl bg-white border border-navy-100 p-2.5 shadow-sm">
          <div className="h-3 w-12 rounded bg-navy-900 mb-2.5" />
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-navy-100" />
            <div className="h-2 rounded bg-navy-100 w-4/5" />
            <div className="h-2 rounded bg-indigo-200 w-2/3" />
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-3">
            <div className="h-12 rounded-md bg-navy-50 border border-navy-100" />
            <div className="h-12 rounded-md bg-indigo-50 border border-indigo-100" />
            <div className="h-12 rounded-md bg-indigo-50 border border-indigo-100" />
            <div className="h-12 rounded-md bg-navy-50 border border-navy-100" />
          </div>
          <div className="mt-3 h-7 rounded-md bg-navy-900 grid place-items-center">
            <div className="h-1.5 w-12 rounded bg-offwhite/80" />
          </div>
        </div>
        <div className="mt-3 font-mono text-[10px] text-navy-500">QR-menu · v2.1.0</div>
      </div>

      {/* Stats / live */}
      <div className="col-span-4 row-span-2 rounded-2xl bg-white border border-navy-100 p-4 flex items-center gap-4">
        <div className="size-11 grid place-items-center rounded-xl bg-navy-900 text-offwhite">
          <Code2 className="size-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <div className="font-display font-bold text-2xl text-navy-900">12+</div>
            <div className="text-xs text-navy-500">tools shipped</div>
          </div>
          <div className="font-mono text-[11px] text-navy-500 mt-0.5">schools · restaurants · local biz</div>
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-2xl text-indigo-600">3wk</div>
          <div className="text-[10px] uppercase tracking-wider text-navy-500 font-mono">simulation</div>
        </div>
      </div>
    </div>
  );
}