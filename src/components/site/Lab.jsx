import { ArrowRight, FlaskConical, ShieldCheck, GitMerge, BookOpen, Trophy } from "lucide-react";
import { SITE } from "../../lib/site";

const weeks = [
	{
		w: "Week 01",
		title: "Foundations & Architecture",
		desc: "SDLC fundamentals, requirement gathering, system design, repo hygiene, and code-review etiquette.",
		icon: BookOpen,
	},
	{
		w: "Week 02",
		title: "Build Sprint",
		desc: "Pair-program with a senior on a real client module. Daily stand-ups, signed PRs, and CI checks.",
		icon: GitMerge,
	},
	{
		w: "Week 03",
		title: "Ship & Reflect",
		desc: "Deploy to production, document the handoff, and present a postmortem. Earn a verifiable certificate.",
		icon: Trophy,
	},
];

export default function Lab() {
	return (
		<section
			id="lab"
			className="relative py-20 lg:py-28 border-t border-navy-100 overflow-hidden"
			data-testid="lab-section"
		>
			<div className="absolute -top-40 -left-32 size-[480px] rounded-full bg-indigo-100/60 blur-3xl pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
				<div className="lg:col-span-5">
					<div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600">// 05 · the lab</div>
					<h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
						Start your journey at <span className="text-indigo-600">the Lab</span>.
					</h2>
					<p className="mt-4 text-navy-600 leading-relaxed">
						Our flagship{" "}
						<span className="font-semibold text-navy-900">3-Week Simulation Program</span> compresses the rhythm of
						a real engineering team into a structured, mentor-led sprint. You won't write a single "Hello World" —
						you'll ship code that real users touch.
					</p>

					<div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3">
						<div className="size-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center border border-indigo-100">
							<ShieldCheck className="size-5" />
						</div>
						<div>
							<div className="text-sm font-semibold text-navy-900">Udyam-registered MSME entity</div>
							<div
								className="font-mono text-[11px] text-navy-500 mt-0.5"
								data-testid="lab-udyam"
							>
								{SITE.udyam}
							</div>
						</div>
					</div>

					<div className="mt-8 flex flex-wrap gap-3">
						<a
							href={SITE.internFormUrl}
							target="_blank"
							rel="noreferrer"
							data-testid="lab-cta-apply"
							className="shine inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-indigo-600 transition-colors text-offwhite px-6 py-3.5 text-sm font-medium"
						>
							Apply to the Simulation Program
							<ArrowRight className="size-4" />
						</a>
						<a
							href="/verify"
							data-testid="lab-cta-verify"
							className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white hover:border-indigo-500 hover:text-indigo-600 transition-colors text-navy-900 px-6 py-3.5 text-sm font-medium"
						>
							Verify a Certificate
						</a>
					</div>
				</div>

				<div className="lg:col-span-7">
					<div className="relative rounded-2xl bg-navy-900 text-offwhite p-6 lg:p-8 border border-navy-800 overflow-hidden">
						<div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
						<div className="relative">
							<div className="flex items-center gap-3 mb-6">
								<div className="size-10 rounded-lg bg-indigo-500 grid place-items-center">
									<FlaskConical className="size-5 text-white" />
								</div>
								<div>
									<div className="font-display font-bold">3-Week Simulation Program</div>
									<div className="font-mono text-[11px] text-navy-300">cohort · paired · senior-led</div>
								</div>
							</div>

							<div className="space-y-3.5">
								{weeks.map((w, i) => {
									const Icon = w.icon;
									return (
										<div
											key={w.w}
											className="rounded-xl bg-navy-800/60 border border-navy-700 p-4 flex gap-4 items-start hover:border-indigo-500 transition-colors"
											data-testid={`lab-week-${i + 1}`}
										>
											<div className="size-10 rounded-lg bg-navy-900 border border-navy-700 grid place-items-center shrink-0">
												<Icon className="size-5 text-indigo-400" />
											</div>
											<div className="flex-1 min-w-0">
												<div className="flex items-center justify-between gap-3">
													<div className="font-display font-semibold text-base">{w.title}</div>
													<span className="font-mono text-[10px] uppercase tracking-wider text-indigo-300 shrink-0">
														{w.w}
													</span>
												</div>
												<p className="mt-1 text-sm text-navy-200 leading-relaxed">{w.desc}</p>
											</div>
										</div>
									);
								})}
							</div>

							<div className="mt-6 font-mono text-[11px] text-navy-300">
								{"// completion → verifiable certificate · portfolio piece · reference letter on merit"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}