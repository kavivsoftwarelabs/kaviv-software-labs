import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
	{
		n: "01",
		icon: Compass,
		title: "Discovery",
		desc: "Requirement gathering from the ground up — stakeholder interviews, workflow mapping, success metrics.",
	},
	{
		n: "02",
		icon: PenTool,
		title: "Design",
		desc: "Wireframing, system architecture, and a clear contract between frontend, backend, and data.",
	},
	{
		n: "03",
		icon: Code2,
		title: "Develop",
		desc: "Agile sprints with senior-led code reviews. Small commits, signed PRs, automated checks.",
	},
	{
		n: "04",
		icon: Rocket,
		title: "Deploy",
		desc: "Modern cloud deployment, monitoring, and a documented handoff so your team owns it.",
	},
];

export default function Process() {
	return (
		<section
			id="process"
			className="relative py-20 lg:py-28 bg-navy-900 text-offwhite overflow-hidden"
			data-testid="process-section"
		>
			<div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
			<div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[640px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-6 lg:px-10">
				<div className="max-w-2xl">
					<div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">
						// 03 · how we work
					</div>
					<h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
						The{" "}
						<span className="text-indigo-400">SDLC-first</span> approach.
					</h2>
					<p className="mt-4 text-navy-200 text-base leading-relaxed">
						We don't ship code. We ship outcomes — through a process every student
						learns and every client benefits from. No phase is skipped, no decision
						is unwritten.
					</p>
				</div>

				{/* Timeline */}
				<div className="mt-14 lg:mt-20 relative">
					{/* horizontal line (desktop) */}
					<div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

					<div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
						{steps.map((s, i) => {
							const Icon = s.icon;
							return (
								<div
									key={s.n}
									className="relative animate-fade-up"
									style={{ animationDelay: `${i * 90}ms` }}
									data-testid={`process-step-${s.n}`}
								>
									<div className="relative size-14 rounded-xl bg-navy-800 border border-navy-700 grid place-items-center">
										<Icon className="size-6 text-indigo-400" />
										<span className="absolute -top-2 -right-2 size-6 grid place-items-center rounded-md bg-indigo-500 text-white font-mono text-[10px] font-bold">
											{s.n}
										</span>
									</div>
									<div className="mt-5">
										<div className="font-display text-xl font-bold">
											{s.title}
										</div>
										<p className="mt-2 text-sm text-navy-200 leading-relaxed">
											{s.desc}
										</p>
									</div>
									{/* connector dot */}
									<span className="hidden lg:block absolute top-7 -right-2 size-2 rounded-full bg-indigo-500/60" />
								</div>
							);
						})}
					</div>
				</div>

				{/* footnote */}
				<div className="mt-16 inline-flex items-center gap-3 rounded-full border border-navy-700 bg-navy-800/60 px-4 py-2 font-mono text-xs text-navy-200">
					<span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
					Every project follows this exact sequence — no shortcuts.
				</div>
			</div>
		</section>
	);
}