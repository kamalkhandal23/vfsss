import { useId, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bus,
  Calendar,
  ChevronDown,
  CircleHelp,
  GraduationCap,
  Phone,
  PhoneCall,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ================= CATEGORY ICON ================= */

const CATEGORY_ICON = {
  Admissions: GraduationCap,
  Academics: BookOpen,
  Facilities: Users,
  Transport: Bus,
  Safety: Shield,
  Exams: Calendar,
  Contact: Phone,
};

/* ================= FAQ DATA ================= */

const FAQ_DATA = {
  Admissions: [
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply by visiting the school office or through the admissions page on our website.",
    },
    {
      question: "What classes are available?",
      answer:
        "We offer classes from Play Nursery to Class 12.",
    },
    {
      question: "Is there an entrance test?",
      answer:
        "Yes, admission may include a basic assessment depending on the class.",
    },
  ],

  Academics: [
    {
      question: "Is the school English medium?",
      answer:
        "Yes, Vrinda Foundation School is an English medium school.",
    },
    {
      question: "Do you prepare students for competitive exams?",
      answer:
        "Yes, we provide early preparation for NEET, JEE, CLAT, and NDA.",
    },
  ],

  Facilities: [
    {
      question: "What facilities are available?",
      answer:
        "We provide smart classrooms, labs, sports, library, and activity-based learning.",
    },
    {
      question: "Are classrooms digital?",
      answer:
        "Yes, classrooms are equipped with modern teaching tools and audio-visual aids.",
    },
  ],

  Transport: [
    {
      question: "Is transport facility available?",
      answer:
        "Yes, school transport is available in nearby areas.",
    },
  ],

  Safety: [
    {
      question: "Is the school safe for students?",
      answer:
        "Yes, we maintain a safe and disciplined environment with proper supervision.",
    },
  ],

  Exams: [
    {
      question: "How are exams conducted?",
      answer:
        "We follow regular unit tests, term exams, and performance evaluation.",
    },
  ],

  Contact: [
    {
      question: "How can I contact the school?",
      answer:
        "You can call us at +91 9001700414 or visit the contact page.",
    },
  ],
};

/* ================= MAIN COMPONENT ================= */

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Admissions");
  const reduceMotion = useReducedMotion();
  const currentFaqs = FAQ_DATA[activeCategory] || [];
  const ActiveCategoryIcon = CATEGORY_ICON[activeCategory];

  const toggle = (index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section id="faq-content" className="relative scroll-mt-20 overflow-hidden bg-[#F4F8FB] px-4 py-14 sm:px-6 md:px-8 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Motion.div
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0A2342]/[0.07] blur-[90px]"
          animate={reduceMotion ? undefined : { x: [0, 20, 0], y: [0, 16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute -right-32 top-36 h-80 w-80 rounded-full bg-sky-300/20 blur-[100px]"
          animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-0 left-1/2 h-48 w-[34rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <Motion.div
          className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#137DC5]">
              Answers at your fingertips
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0A2342] sm:text-4xl">
              What would you like to know?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F718A] sm:text-base">
              Pick a topic to find clear answers. Still have questions? Our team is happy to help.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E2EE] bg-white px-4 py-2.5 text-sm font-medium text-[#425B76] shadow-sm">
            <CircleHelp size={17} className="text-[#137DC5]" />
            {Object.keys(FAQ_DATA).length} topics to explore
          </div>
        </Motion.div>

        <div className="grid gap-5 lg:grid-cols-[320px_1fr] lg:items-start lg:gap-7">
          <Motion.aside
            className="rounded-[28px] border border-white bg-white/90 p-4 shadow-[0_24px_70px_rgba(10,35,66,0.09)] backdrop-blur md:p-6 lg:sticky lg:top-6"
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0A2342] via-[#10365D] to-[#137DC5] px-4 py-4 text-white">
              <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-2 -top-4 h-16 w-16 rounded-full border border-white/10" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <Sparkles size={18} className="text-cyan-100" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    Quick help
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">Browse by topic</p>
                </div>
              </div>
            </div>

            <div className="mt-5 hidden md:block">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8292A7]">
                Categories
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {Object.keys(FAQ_DATA).map((cat) => {
                  const Icon = CATEGORY_ICON[cat];
                  return (
                    <CategoryBtn
                      key={cat}
                      icon={Icon}
                      active={activeCategory === cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setActiveIndex(null);
                      }}
                      full
                      count={FAQ_DATA[cat].length}
                      reduceMotion={reduceMotion}
                    >
                      {cat}
                    </CategoryBtn>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 md:hidden">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8292A7]">
                Categories
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {Object.keys(FAQ_DATA).map((cat) => {
                  const Icon = CATEGORY_ICON[cat];
                  return (
                    <FilterButton
                      key={cat}
                      icon={Icon}
                      active={activeCategory === cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setActiveIndex(null);
                      }}
                      reduceMotion={reduceMotion}
                    >
                      {cat}
                    </FilterButton>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 rounded-[22px] border border-[#D7E2EE] bg-gradient-to-br from-[#F8FBFF] to-[#EEF6FC] p-4 md:mt-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0A2342] text-white">
                  <PhoneCall size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#0A2342]">
                    Need direct help?
                  </p>
                  <p className="mt-1 text-sm text-[#5F718A]">
                    Call the school office or reach us through the contact page.
                  </p>
                  <a
                    href="tel:+919001700414"
                    className="mt-3 inline-block text-lg font-semibold text-[#0A2342] transition-colors hover:text-[#137DC5]"
                  >
                    +91 9001700414
                  </a>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2342] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(10,35,66,0.16)] transition hover:-translate-y-0.5 hover:bg-[#12335e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC5]"
            >
              Contact us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Motion.aside>

          <Motion.div
            className="min-w-0"
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center justify-between gap-4 rounded-[22px] border border-[#D7E2EE] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(10,35,66,0.04)] sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#EAF4FC] text-[#137DC5]">
                  <ActiveCategoryIcon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8292A7]">
                    Selected topic
                  </p>
                  <h3 className="mt-0.5 truncate text-lg font-semibold text-[#0A2342]">
                    {activeCategory}
                  </h3>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-[#F1F6FA] px-3 py-1.5 text-xs font-semibold text-[#5F718A]">
                {currentFaqs.length} {currentFaqs.length === 1 ? "answer" : "answers"}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={activeCategory}
                className="space-y-3 md:space-y-4"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              >
                {currentFaqs.map((item, index) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    open={activeIndex === index}
                    onToggle={() => toggle(index)}
                    reduceMotion={reduceMotion}
                    index={index}
                  />
                ))}
              </Motion.div>
            </AnimatePresence>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */

function FilterButton({ children, icon, active, onClick, reduceMotion }) {
  const CategoryIcon = icon;
  return (
    <Motion.button
      onClick={onClick}
      type="button"
      aria-pressed={active}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      className={`flex min-w-0 items-center justify-center gap-2 rounded-full px-3 py-2 text-[12px] font-semibold transition-colors duration-200 sm:px-4 sm:text-sm ${
        active
          ? "bg-[#0A2342] text-white shadow-[0_12px_30px_rgba(10,35,66,0.22)]"
          : "border border-[#D7E2EE] bg-white text-[#0A2342] hover:border-[#AFC1D8] hover:bg-[#F8FBFF]"
      }`}
    >
      <CategoryIcon size={14} />
      {children}
    </Motion.button>
  );
}

function FAQItem({ question, answer, open, onToggle, reduceMotion, index }) {
  const answerId = useId();

  return (
    <Motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.045 }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      className={`overflow-hidden rounded-[24px] border bg-white shadow-[0_14px_30px_rgba(10,35,66,0.06)] transition-colors duration-200 ${
        open ? "border-[#0A2342]/30 ring-1 ring-[#0A2342]/10" : "border-[#D7E2EE]"
      }`}
    >
      <button
        onClick={onToggle}
        type="button"
        aria-expanded={open}
        aria-controls={open ? answerId : undefined}
        className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#137DC5] md:items-center md:gap-4 md:px-6 md:py-5"
      >
        <span className="min-w-0 flex-1 break-words text-[13px] font-semibold leading-6 text-[#0A2342] md:text-[16px]">
          {question}
        </span>
        <Motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border ${
            open
              ? "border-[#0A2342] bg-[#0A2342] text-white"
              : "border-[#D7E2EE] bg-[#F8FBFF] text-[#0A2342]"
          }`}
        >
          <ChevronDown size={18} />
        </Motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <Motion.div
            id={answerId}
            key="answer"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E8EEF5] px-4 pb-5 pt-4 text-sm leading-7 text-[#5F718A] md:px-6">
              <p className="max-w-3xl break-words">{answer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2342] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#12335e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC5] sm:w-auto"
                >
                  Talk to us
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.article>
  );
}

function CategoryBtn({ children, icon, active, onClick, full, count, reduceMotion }) {
  const CategoryIcon = icon;
  return (
    <Motion.button
      onClick={onClick}
      type="button"
      aria-pressed={active}
      whileHover={reduceMotion ? undefined : { y: -2, x: 2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`flex items-center justify-between gap-3 rounded-full px-3 py-2.5 text-left transition-colors duration-200 ${
        active
          ? "bg-[#0A2342] text-white shadow-[0_12px_30px_rgba(10,35,66,0.22)]"
          : "border border-[#D7E2EE] bg-white text-[#0A2342] hover:border-[#AFC1D8] hover:bg-[#F8FBFF]"
      } ${full ? "w-full" : ""}`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
            active ? "bg-white/10" : "bg-[#F3F7FC]"
          }`}
        >
          <CategoryIcon size={16} />
        </span>
        <span className="font-medium">{children}</span>
      </span>
      <span
        className={`rounded-full px-2 py-1 text-xs font-semibold ${
          active ? "bg-white/10 text-white" : "bg-[#F3F7FC] text-[#5F718A]"
        }`}
      >
        {count}
      </span>
    </Motion.button>
  );
}
