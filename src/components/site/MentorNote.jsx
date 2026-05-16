import { Quote, UserCircle2 } from "lucide-react";

export default function MentorNote() {
  return (
    <section className="relative py-20 lg:py-24 border-t border-navy-100" data-testid="mentor-note">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600 text-center">
          // 06 · mentor's note
        </div>

        <div className="mt-10 relative rounded-2xl bg-white border border-navy-100 p-8 lg:p-12 shadow-[0_1px_0_0_#E2E8F0,0_24px_48px_-32px_rgba(10,25,47,0.16)]">
          <Quote className="absolute -top-4 -left-2 size-10 text-indigo-200" />

          <div className="flex flex-col sm:flex-row gap-7 items-start">
            <div className="shrink-0">
              <div className="size-20 rounded-full bg-navy-900 text-offwhite grid place-items-center border-4 border-indigo-100">
                <UserCircle2 className="size-12 text-indigo-300" />
              </div>
              <div className="mt-3 text-center">
                <div className="font-display font-bold text-navy-900 text-sm">Lab Mentor</div>
                <div className="font-mono text-[10px] text-navy-500 uppercase tracking-wider mt-0.5">
                  senior · top tech firm
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="font-display text-xl sm:text-2xl text-navy-900 leading-relaxed">
                "I've spent years shipping software at scale at a top tech firm. Kaviv Software Labs is where I bring that
                same discipline to organizations that have never had it — and to students who deserve more than
                another tutorial."
              </p>
              <p className="mt-5 text-navy-600 leading-relaxed">
                Every code review, every architecture call, every postmortem at the Lab is run the way it would be
                inside a senior engineering team. That's the only standard we know.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-navy-500">
                <span>// based in {`{India}`}</span>
                <span>// available globally · remote-first</span>
                <span>// reachable on weekdays · IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}