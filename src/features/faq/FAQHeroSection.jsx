import { ArrowDown, ArrowRight, BookOpen, CircleHelp, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const HERO_STATS = [
  { icon: BookOpen, label: "Explore", value: "7 helpful topics" },
  { icon: ShieldCheck, label: "Our promise", value: "Student first" },
];

export default function FAQHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#071A33] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Motion.div
          className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-400/20 blur-[110px]"
          animate={reduceMotion ? undefined : { x: [0, 25, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute -right-36 top-8 h-[32rem] w-[32rem] rounded-full bg-cyan-300/15 blur-[120px]"
          animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081A33] to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-16 pt-20 sm:px-8 md:min-h-[590px] md:pb-20 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12">
        <Motion.div
          className="relative z-10 max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100 shadow-lg shadow-black/10 backdrop-blur-md">
            <Sparkles size={14} className="text-cyan-200" />
            Help, made simple
          </div>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Good questions
            <span className="mt-2 block bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
              deserve thoughtful answers.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            Find helpful answers about admissions, academics, safety, and everyday school life.
            We’re here to make the next step feel a little easier.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0A2342] shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Talk to our team
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#faq-content"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Browse answers
              <ArrowDown size={15} />
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-3">
            {HERO_STATS.map((stat, index) => (
              <Motion.div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : 0.25 + index * 0.12,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100">
                    <stat.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      {stat.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">
                      {stat.value}
                    </span>
                  </span>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        <div className="relative mx-auto h-[310px] w-full max-w-[500px] sm:h-[390px] lg:h-[460px]">
          <Motion.div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] shadow-2xl shadow-black/20 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.1 }}
          />

          <Motion.div
            className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-cyan-200/20 to-sky-400/5 shadow-[0_0_90px_rgba(34,211,238,0.12)] sm:h-56 sm:w-56"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: reduceMotion ? 0 : 0.2 }}
          >
            <CircleHelp className="h-24 w-24 text-cyan-100 sm:h-32 sm:w-32" strokeWidth={1.2} />
          </Motion.div>

          <Motion.div
            className="absolute left-0 top-[18%] rounded-2xl border border-white/15 bg-[#102C4B]/90 p-4 shadow-xl shadow-black/20 backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.45 }}
            whileHover={reduceMotion ? undefined : { y: -5, rotate: -2 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-300/10 text-sky-100">
                <GraduationCap size={19} />
              </span>
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  Admissions
                </span>
                <span className="mt-1 block text-sm font-semibold">Your next chapter</span>
              </span>
            </div>
          </Motion.div>

          <Motion.div
            className="absolute bottom-[13%] right-0 max-w-[230px] rounded-2xl border border-white/15 bg-white/[0.09] px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.6 }}
            whileHover={reduceMotion ? undefined : { y: -5, rotate: 2 }}
          >
            <p className="text-sm font-semibold text-white">Not sure where to start?</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Explore a topic and find the answer you need.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
