import { Button } from "@/components/ui/button";
import Opp1 from "@/assets/Opp1.jpg";
import Opp2 from "@/assets/Opp2.jpg";
import Opp3 from "@/assets/Opp3.jpg";

const opportunityCards = [
  {
    title: "Residential Lots",
    eyebrow: "Build-ready guidance",
    description:
      "Explore homesite options with practical details on location fit, zoning basics, and next steps.",
    image: Opp1,
    bullets: [
      "Family-ready neighborhoods",
      "Zoning and utility basics",
      "Buyer guidance from inquiry to shortlist",
    ],
  },
  {
    title: "Investment Lots",
    eyebrow: "Long-term potential",
    description:
      "Compare land options that support portfolio goals with clear pricing context and timeline expectations.",
    image: Opp2,
    bullets: [
      "Investment-focused options",
      "Budget-aligned shortlists",
      "Next-step clarity before you commit",
    ],
  },
  {
    title: "Flexible Matches",
    eyebrow: "Not sure where to start?",
    description:
      "Share your priorities and we will match you with the Florida lot categories that fit best.",
    image: Opp3,
    bullets: [
      "Residential or investment fit",
      "Preferred region matching",
      "No-pressure recommendations",
    ],
  },
];

function Opportunities() {
  function scrollToInquiry() {
    const el = document.getElementById("inquiry");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="opportunities" className="relative overflow-hidden bg-[#d2b48c]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#d2b48c] to-transparent" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#2f5d50]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="rounded-full border border-[#2f5d50]/20 bg-white/30 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.25em] text-[#2f5d50]">
            Opportunity types
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Available land opportunities in Florida
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#3e2c1c] md:text-lg">
            Choose the path that fits your goals. Send us your preferences and
            we will match you with current lots, pricing context, and the next
            steps to review confidently.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {opportunityCards.map((card, index) => (
            <article
              key={card.title}
              className={`group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/20 bg-[#3e2c1c] shadow-[0_24px_70px_rgba(47,93,80,0.28)] ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d25]/95 via-[#1f2d25]/55 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-6 text-left md:p-7">
                <div className="mb-5 inline-flex w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#2f5d50]">
                  {card.eyebrow}
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {card.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-white/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200/40 bg-emerald-400/20 text-xs font-black text-emerald-100">
                        ✓
                      </span>
                      <span className="leading-6">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/20 bg-white/20 p-5 shadow-[0_20px_60px_rgba(47,93,80,0.18)] backdrop-blur md:p-7 lg:mt-20">
          <div className="flex flex-col gap-5 text-left md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#2f5d50]">
                Need a tailored shortlist?
              </div>
              <p className="mt-2 max-w-2xl text-[#3e2c1c]">
                Tell us your budget, preferred region, and timeline. We will
                send current Florida lot options that fit your request.
              </p>
            </div>
            <Button
              onClick={scrollToInquiry}
              className="h-12 shrink-0 rounded-full bg-[#2f5d50] px-6 font-extrabold text-white hover:bg-[#24483e]"
            >
              Request Current Options
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full">
        <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-t from-[#e8d5b7] via-[#d2b48c]/60 to-transparent" />
      </div>
    </section>
  );
}

export default Opportunities;
