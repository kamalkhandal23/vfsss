import bgWave from "../../assets/styles/Vector-12.png";
import gaayanImage from "../../assets/images/top-results/gaayan.png";
import himanshiImage from "../../assets/images/top-results/himanshi.png";
import praveenImage from "../../assets/images/top-results/praveen.png";

export default function TopResultsSection() {
  const topResults = [
    {
      className: "Class 12th Science",
      year: "2026",
      name: "GAAYAN",
      score: "96.60%",
      image: gaayanImage,
    },
    {
      className: "Class 12th Science",
      year: "2026",
      name: "HIMANSHI",
      score: "96.60%",
      image: himanshiImage,
    },
    {
      className: "Class 12th Science",
      year: "2026",
      name: "PRAVEEN",
      score: "96.00%",
      image: praveenImage,
    },
  ];
  const scoredResults = topResults.map((result) => {
    const score = Number.parseFloat(result.score);
    const rank =
      1 +
      topResults.filter(
        (otherResult) => Number.parseFloat(otherResult.score) > score
      ).length;
    const tied = topResults.filter(
      (otherResult) => Number.parseFloat(otherResult.score) === score
    ).length > 1;

    return { ...result, rank, isJointTopper: rank === 1 && tied };
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F8FB] py-10 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-bottom bg-no-repeat opacity-70 md:block"
        style={{ backgroundImage: `url(${bgWave})` }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="mb-7 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5F718A]">
            Proud moments
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0A2342] md:text-3xl">
            Our Top Academic Results
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#64748B] md:text-base">
            Celebrating the outstanding performance of our Class 10 and Class 12 achievers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {scoredResults.map((result, index) => (
            <ResultCard
              key={`${result.name}-${index}`}
              result={result}
              rank={result.rank}
              isJointTopper={result.isJointTopper}
            />
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-relaxed text-[#475E75] md:mt-8 md:text-[15px]">
          At Vrinda Foundation School, we inspire every student to aim higher,
          work with dedication, and achieve excellence in academics and beyond.
        </p>
      </div>
    </section>
  );
}

function ResultCard({ result, rank, isJointTopper }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[24px] border p-5 shadow-[0_14px_36px_rgba(10,35,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(10,35,66,0.12)] md:p-6 ${
        isJointTopper
          ? "border-[#D6B45A] bg-gradient-to-br from-white via-white to-[#FFF9E8]"
          : "border-[#DEE7F0] bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-[#EAF3FA] px-3 py-1.5 text-xs font-semibold text-[#0A2342]">
          {result.className} - {result.year}
        </span>
        <span
          className={`rounded-full px-3 py-2 text-xs font-bold ${
            isJointTopper
              ? "border border-[#E8D28B] bg-[#FFF2C6] text-[#775A08]"
              : "bg-[#0A2342] text-white"
          }`}
        >
          {isJointTopper ? "Joint #1" : `#${rank}`}
        </span>
      </div>

      {isJointTopper && (
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A7410]">
          Tied for top score
        </p>
      )}

      <div className={`${isJointTopper ? "mt-3" : "mt-5"} flex items-center gap-4`}>
        <img
          src={result.image}
          alt={result.name}
          className="h-24 w-24 shrink-0 rounded-2xl border border-[#D9E4EF] bg-[#F7FAFC] object-cover object-top"
        />

        <div className="min-w-0">
          <p className="truncate text-lg font-bold text-[#0A2342] md:text-xl">
            {result.name}
          </p>
          <p className="mt-1 text-xs font-medium text-[#60748D] md:text-sm">
            Academic Achiever
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-[#EDF2F7] pt-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A8BA0]">
            Percentage
          </p>
          <p className="mt-1 text-2xl font-bold text-[#137DC5]">
            {result.score}
          </p>
        </div>
        <div className="h-1 w-16 rounded-full bg-[#DCE8F2]">
          <div className="h-full w-3/4 rounded-full bg-[#137DC5] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </article>
  );
}