import { ArrowDown, Camera, Images, Sparkles } from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";

const galleryImages = Object.entries(
  import.meta.glob(
    "../assets/school_gallery/*.{jpg,jpeg,png,webp,avif,gif}",
    { eager: true, import: "default" }
  )
)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true, sensitivity: "base" })
  )
  .map(([, src], index) => ({
    src,
    alt: `School gallery photo ${index + 1}`,
  }));

export default function GalleryPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F8FB]">
      <section className="relative isolate overflow-hidden bg-[#071A33] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-[100px]" />
          <div className="absolute -right-32 top-12 h-[30rem] w-[30rem] rounded-full bg-cyan-300/15 blur-[110px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071A33] to-transparent" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-[1280px] items-center gap-12 px-5 pb-20 pt-24 sm:px-8 md:pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-12 lg:pb-24">
          <Motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 shadow-lg shadow-black/10 backdrop-blur-md">
              <Sparkles size={14} className="text-cyan-200" />
              A window into our world
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Little moments.
              <span className="mt-2 block bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
                Lasting memories.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              From classroom discoveries to celebrations and everyday friendships, explore the
              moments that make our school special.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#gallery"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0A2342] shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                Explore the gallery
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-slate-300">
                <Images size={17} className="text-cyan-200" />
                {galleryImages.length} moments captured
              </span>
            </div>
          </Motion.div>

          <div className="relative mx-auto h-[360px] w-full max-w-[590px] sm:h-[440px] lg:h-[520px]">
            <Motion.div
              aria-hidden="true"
              className="absolute left-[13%] top-[12%] h-[78%] w-[68%] rotate-[-7deg] rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-sm"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, rotate: -13 }}
              animate={{ opacity: 1, scale: 1, rotate: -7 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.15 }}
            />

            {galleryImages[0] && (
              <Motion.div
                className="absolute left-[17%] top-[7%] h-[82%] w-[68%] overflow-hidden rounded-[2rem] border border-white/20 bg-slate-800 shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
                initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.25 }}
              >
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/75 via-transparent to-[#071A33]/10" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                      The VFS collection
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">Life, as we live it</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-md">
                    <Camera size={17} />
                  </span>
                </div>
              </Motion.div>
            )}

            {galleryImages[1] && (
              <Motion.div
                className="absolute right-[1%] top-[2%] h-[34%] w-[34%] overflow-hidden rounded-[1.4rem] border-4 border-[#071A33] shadow-2xl shadow-black/30"
                initial={reduceMotion ? false : { opacity: 0, x: 20, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.5 }}
                whileHover={reduceMotion ? undefined : { y: -7, rotate: 2 }}
              >
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Motion.div>
            )}

            {galleryImages[2] && (
              <Motion.div
                className="absolute bottom-[2%] right-[4%] h-[31%] w-[31%] overflow-hidden rounded-[1.4rem] border-4 border-[#071A33] shadow-2xl shadow-black/30"
                initial={reduceMotion ? false : { opacity: 0, x: 20, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.65 }}
                whileHover={reduceMotion ? undefined : { y: -7, rotate: -2 }}
              >
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Motion.div>
            )}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <Motion.div
            className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#137DC5]">
                The moments that make us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0A2342] sm:text-4xl">
                Our school, in pictures
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#5F718A] sm:text-base">
                A growing collection of the people, places, and moments we love.
              </p>
            </div>
            <span className="w-fit rounded-full border border-[#D7E2EE] bg-white px-4 py-2 text-sm font-medium text-[#425B76] shadow-sm">
              {galleryImages.length} photos
            </span>
          </Motion.div>

          <div className="grid auto-rows-[150px] grid-flow-dense grid-cols-1 gap-4 sm:auto-rows-[170px] sm:grid-cols-2 sm:gap-5 lg:auto-rows-[185px] lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={image.src}
                image={image}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function GalleryCard({ image, index, reduceMotion }) {
  const layout = index % 10;
  const sizeClass =
    layout === 0
      ? "row-span-2 sm:col-span-2"
      : layout === 1 || layout === 7
        ? "row-span-2"
        : layout === 4
          ? "sm:col-span-2"
          : "";

  return (
    <Motion.article
      className={`group relative min-h-0 overflow-hidden rounded-[1.6rem] bg-[#DCE7F1] shadow-[0_12px_35px_rgba(10,35,66,0.08)] ${sizeClass}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : (index % 8) * 0.045,
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
    >
      <Motion.img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`h-full w-full object-cover transition duration-700 ${
          reduceMotion ? "" : "group-hover:scale-105"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071A33]/65 via-[#071A33]/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
          VFS · MOMENT
        </span>
        <span className="text-xs font-medium tabular-nums text-white/75">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Motion.article>
  );
}
