import {
  FileText,
  Phone,
  ClipboardList,
  CheckCircle2,
  Clock3,
  IdCard,
  Languages,
  School,
  ShieldCheck,
  ClipboardCheck,
  Users,
  Laptop2,
  ArrowDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import AdmissionFormModal from "../components/ui/modal/AdmissionFormModal";
import { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import admissionVideo from "../assets/videos/admission-video.MP4";
import admissionFallback from "../assets/icons/admission.png";

const WHY_CHOOSE_ITEMS = [
  {
    icon: School,
    title: "Experienced Faculty",
    accent: "from-sky-500/20 via-cyan-500/15 to-teal-500/20",
    iconClass: "text-sky-600",
    description:
      "Dedicated teachers who guide students with subject depth, care, and consistency.",
  },
  {
    icon: Languages,
    title: "English Medium Education",
    accent: "from-violet-500/20 via-fuchsia-500/15 to-pink-500/20",
    iconClass: "text-violet-600",
    description:
      "A confident learning environment that strengthens communication and fluency.",
  },
  {
    icon: ClipboardList,
    title: "Competitive Exam Preparation",
    accent: "from-amber-500/20 via-orange-500/15 to-rose-500/20",
    iconClass: "text-amber-600",
    description:
      "Structured preparation for future academic goals and entrance examinations.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    accent: "from-emerald-500/20 via-lime-500/15 to-teal-500/20",
    iconClass: "text-emerald-600",
    description:
      "Balanced class support with focus on every child’s pace, progress, and needs.",
  },
  {
    icon: Laptop2,
    title: "Smart Classrooms",
    accent: "from-indigo-500/20 via-blue-500/15 to-sky-500/20",
    iconClass: "text-indigo-600",
    description:
      "Modern teaching tools that make lessons more interactive, visual, and effective.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Disciplined Environment",
    accent: "from-rose-500/20 via-red-500/15 to-orange-500/20",
    iconClass: "text-rose-600",
    description:
      "A secure campus culture that supports discipline, confidence, and growth.",
  },
];

const ADMISSION_STEPS = [
  {
    title: "Fill Application Form",
    description: "Complete the admission form with the student’s basic details.",
    icon: ClipboardList,
    accent: "from-sky-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Visit School / Interaction",
    description: "Meet the school team and understand the learning environment.",
    icon: Users,
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Submit Documents",
    description: "Share the required records for verification and processing.",
    icon: ClipboardCheck,
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    title: "Admission Confirmation",
    description: "Receive confirmation and complete the final admission formalities.",
    icon: CheckCircle2,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

const REQUIRED_DOCUMENTS = [
  {
    title: "Birth Certificate",
    note: "Student identity proof",
    icon: FileText,
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "Previous Report Card",
    note: "Academic history",
    icon: FileText,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Transfer Certificate (TC)",
    note: "If applicable",
    icon: FileText,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Passport Size Photographs",
    note: "Recent student photos",
    icon: FileText,
    accent: "from-rose-500 to-red-500",
  },
  {
    title: "Aadhar Card Copy",
    note: "Parent or student ID",
    icon: IdCard,
    accent: "from-emerald-500 to-teal-500",
  },
];

export default function Admissions() {
  const videoRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playPromise = video.play();

    if (playPromise?.catch) {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <div className="bg-[#F4F8FB] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#071A33] text-white md:min-h-[680px]">
        <img
          src={admissionFallback}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          src={admissionVideo}
          poster={admissionFallback}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33]/95 via-[#0A2342]/80 to-[#137DC5]/45" />
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-300/15 blur-3xl" />

        <div className="relative z-10 mx-auto grid min-h-[560px] max-w-[1180px] items-center gap-12 px-5 py-20 md:min-h-[680px] md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <Motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
              <Sparkles size={14} className="text-cyan-200" />
              Admissions open · 2026–27
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              A brighter future
              <span className="mt-1 block bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
                starts with the right beginning.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
              Begin your child’s journey towards academic excellence, confidence,
              and lifelong curiosity at Vrinda Foundation School.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpenForm(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0A2342] shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Start your application
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#admission-process"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:border-white hover:bg-white/10"
              >
                Explore the process
                <ArrowDown size={16} />
              </a>
            </div>
          </Motion.div>

          <Motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[440px] rounded-[30px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                  Your next chapter
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  A simple path to admission
                </h2>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 text-cyan-100">
                <School size={23} />
              </div>
            </div>
            <div className="mt-7 space-y-4">
              {ADMISSION_STEPS.map((step, index) => (
                <div key={step.title} className="flex items-center gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-cyan-100">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-white/15 pt-5 text-sm leading-6 text-white/70">
              Our team is here to guide your family at every step.
            </div>
          </Motion.aside>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="relative overflow-hidden py-20 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F4F8FB] to-[#EDF4FA]" />
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-[#00CFC8]/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#0A2342]/8 blur-3xl" />

        <div className="relative mx-auto max-w-[1180px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#00CFC8]/20 bg-white px-4 py-1 text-[12px] font-semibold tracking-[0.18em] text-[#00A9A3] uppercase shadow-sm">
              Why Families Choose Us
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-tight text-[#0A2342] md:text-[44px]">
              Why Choose Vrinda Foundation
            </h2>

            <p className="mt-4 text-[14px] leading-[1.75] text-slate-600 md:text-[16px]">
              A focused school experience with the right mix of strong academics,
              personal care, discipline, and future-ready learning spaces.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} className="h-full" delay={index * 0.07}>
                  <Motion.article
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    className="group h-full rounded-[28px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_10px_30px_rgba(10,35,66,0.08)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(10,35,66,0.12)]"
                  >
                    <div className="flex h-full flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105`}
                        >
                          <Icon
                            size={24}
                            strokeWidth={2.2}
                            className={item.iconClass}
                          />
                        </div>

                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-[18px] font-semibold leading-snug text-[#0A2342]">
                          {item.title}
                        </h3>
                        <p className="text-[14px] leading-[1.7] text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="admission-process" className="relative overflow-hidden bg-white py-20 px-4 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,207,200,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(19,125,197,0.08),_transparent_32%)]" />

        <div className="relative mx-auto max-w-[1180px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-[12px] font-semibold tracking-[0.18em] text-sky-700 uppercase">
              <Clock3 size={14} />
              Step by step
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-tight text-[#0A2342] md:text-[42px]">
              Admission Process
            </h2>

            <p className="mt-4 text-[14px] leading-[1.75] text-slate-600 md:text-[16px]">
              A simple admission flow that keeps the journey clear, personal, and
              easy to follow for parents.
            </p>
          </Reveal>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-x-6 top-1/2 hidden h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-slate-200/90 xl:block">
              <span className="absolute inset-y-0 left-0 w-1/4 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[processFlow_4s_linear_infinite] motion-reduce:animate-none" />
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {ADMISSION_STEPS.map((step, i) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} className="h-full" delay={i * 0.08}>
                    <Motion.article
                      whileHover={reduceMotion ? undefined : { y: -5 }}
                      className="group relative h-full overflow-visible rounded-[26px] border border-slate-200/80 bg-[#F8FBFD] px-6 pb-12 pt-6 shadow-[0_12px_28px_rgba(10,35,66,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(10,35,66,0.12)]"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-md`}
                        >
                          <Icon size={24} strokeWidth={2.2} />
                        </div>

                        <div className="min-w-0 pt-1">
                          <h3 className="text-[18px] font-semibold leading-snug text-[#0A2342]">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-[14px] leading-[1.7] text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2">
                        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-slate-500 shadow-[0_6px_18px_rgba(10,35,66,0.08)]">
                          STEP 0{i + 1}
                        </div>
                      </div>
                    </Motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes processFlow {
            0% {
              transform: translateX(-140%);
            }
            100% {
              transform: translateX(420%);
            }
          }
        `}</style>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="relative overflow-hidden py-20 px-4 md:px-6">
        <div className="absolute inset-0 bg-[#F4F8FB]" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1180px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-[12px] font-semibold tracking-[0.18em] text-[#0A2342] uppercase shadow-sm">
              <FileText size={14} />
              Checklist
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-tight text-[#0A2342] md:text-[42px]">
              Required Documents
            </h2>

            <p className="mt-4 text-[14px] leading-[1.75] text-slate-600 md:text-[16px]">
              Keep these documents ready to make the admission verification smooth
              and hassle-free.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {REQUIRED_DOCUMENTS.map((doc, index) => {
              const Icon = doc.icon;

              return (
                <Reveal key={doc.title} delay={index * 0.07}>
                  <Motion.article
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className="group flex h-full items-start gap-4 rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_28px_rgba(10,35,66,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(10,35,66,0.1)]"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.accent} text-white shadow-md`}
                    >
                      <Icon size={21} strokeWidth={2.2} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[16px] font-semibold leading-snug text-[#0A2342]">
                        {doc.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.6] text-slate-500">
                        {doc.note}
                      </p>
                    </div>
                  </Motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA (FIXED DESIGN) ================= */}
      <section className="py-20 px-4 md:px-6">
        <Reveal className="mx-auto max-w-[900px]">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#071A33] via-[#0A2342] to-[#137DC5] p-8 text-center text-white shadow-[0_24px_60px_rgba(10,35,66,0.2)] md:p-12">
            <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <Phone size={14} />
                Here to help
              </span>
              <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
                Need help with admission?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75 md:text-base">
                Speak with our team for guidance on the application and next steps.
              </p>
              <a
                href="tel:9001700414"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#0A2342] transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                +91 9001700414
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <AdmissionFormModal
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </Motion.div>
  );
}
